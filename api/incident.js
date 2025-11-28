import crypto from 'crypto';

// In-memory storage for demonstration
let incidents = [];

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'POST') {
        try {
            const { typeOfIncident, description, platform, dateOccurred, evidenceFiles } = req.body;

            // Generate a secure user reference hash (simulating anonymity)
            const userReference = crypto.randomBytes(8).toString('hex');

            // In a real app, we would encrypt the description before storing
            // const encryptedDescription = encrypt(description); 

            const newIncident = {
                reportId: `INC-${Date.now()}`,
                userReference,
                typeOfIncident,
                description, // Storing plain text for demo, but marked as sensitive
                platform,
                dateOccurred,
                evidenceFiles: evidenceFiles || [],
                status: 'received',
                submittedAt: new Date().toISOString()
            };

            incidents.push(newIncident);

            // Simulate processing delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            return res.status(201).json({
                success: true,
                message: 'Incident reported successfully',
                reportId: newIncident.reportId,
                userReference: newIncident.userReference
            });
        } catch (error) {
            console.error('Incident reporting error:', error);
            return res.status(500).json({ error: 'Failed to process incident report' });
        }
    }

    // Admin-only endpoint (simplified for demo)
    if (req.method === 'GET') {
        // In production, check for admin authentication here
        const stats = {
            total: incidents.length,
            byType: incidents.reduce((acc, curr) => {
                acc[curr.typeOfIncident] = (acc[curr.typeOfIncident] || 0) + 1;
                return acc;
            }, {}),
            recent: incidents.slice(-5)
        };
        return res.status(200).json({ stats });
    }

    return res.status(405).json({ error: 'Method not allowed' });
}

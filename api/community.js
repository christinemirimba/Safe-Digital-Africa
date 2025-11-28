// In-memory storage for demonstration purposes
// In a production environment, this would be a database (PostgreSQL, MongoDB, etc.)
let threads = [
    {
        id: '1',
        title: 'How do I secure my WhatsApp?',
        category: 'Digital Privacy Q&A',
        sudoName: 'PrivacySeeker',
        createdAt: new Date().toISOString(),
        status: 'active',
        replyCount: 2,
        posts: [
            {
                id: 'p1',
                threadId: '1',
                content: 'I keep getting added to random groups. How do I stop this?',
                sudoName: 'PrivacySeeker',
                createdAt: new Date().toISOString()
            },
            {
                id: 'p2',
                threadId: '1',
                content: 'Go to Settings > Privacy > Groups and change it to "My Contacts".',
                sudoName: 'TechHelper',
                createdAt: new Date(Date.now() + 1000 * 60 * 60).toISOString()
            }
        ]
    },
    {
        id: '2',
        title: 'Sharing my story of overcoming cyberbullying',
        category: 'Empowerment Stories',
        sudoName: 'StrongerNow',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
        status: 'active',
        replyCount: 0,
        posts: []
    }
];

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'GET') {
        return res.status(200).json({ threads });
    }

    if (req.method === 'POST') {
        const { type, data } = req.body;

        if (type === 'create_thread') {
            const newThread = {
                id: Date.now().toString(),
                title: data.title,
                category: data.category,
                sudoName: data.sudoName,
                createdAt: new Date().toISOString(),
                status: 'active',
                replyCount: 0,
                posts: [
                    {
                        id: Date.now().toString() + '_p',
                        threadId: Date.now().toString(),
                        content: data.content,
                        sudoName: data.sudoName,
                        createdAt: new Date().toISOString()
                    }
                ]
            };
            threads.unshift(newThread);
            return res.status(201).json({ success: true, thread: newThread });
        }

        if (type === 'create_post') {
            const { threadId, content, sudoName } = data;
            const threadIndex = threads.findIndex(t => t.id === threadId);

            if (threadIndex === -1) {
                return res.status(404).json({ error: 'Thread not found' });
            }

            const newPost = {
                id: Date.now().toString(),
                threadId,
                content,
                sudoName,
                createdAt: new Date().toISOString()
            };

            threads[threadIndex].posts.push(newPost);
            threads[threadIndex].replyCount += 1;

            return res.status(201).json({ success: true, post: newPost });
        }

        return res.status(400).json({ error: 'Invalid operation type' });
    }

    return res.status(405).json({ error: 'Method not allowed' });
}

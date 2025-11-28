import { motion } from "framer-motion";
import { ThreadList } from "@/components/forum/ThreadList";
import { NewThreadForm } from "@/components/forum/NewThreadForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageCircle, ShieldCheck } from "lucide-react";

const Community = () => {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <div className="bg-primary text-primary-foreground py-16">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold font-display mb-6">
                            Community Forum
                        </h1>
                        <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                            A safe space to share stories, ask questions, and support each other.
                            Your privacy is our priority—connect anonymously and securely.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container px-4 md:px-6 py-12">
                <div className="grid gap-12 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <Tabs defaultValue="discussions" className="w-full">
                            <div className="flex justify-between items-center mb-6">
                                <TabsList>
                                    <TabsTrigger value="discussions">Recent Discussions</TabsTrigger>
                                    <TabsTrigger value="popular">Popular</TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="discussions" className="space-y-6">
                                <ThreadList />
                            </TabsContent>
                            <TabsContent value="popular">
                                <div className="text-center py-12 text-muted-foreground">
                                    Popular threads will appear here soon.
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <NewThreadForm />

                        <div className="bg-muted/30 p-6 rounded-xl border space-y-4">
                            <h3 className="font-semibold flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-primary" />
                                Community Guidelines
                            </h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                                    <span>Be respectful and supportive to all members.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                                    <span>Do not share personal identifiable information (PII).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                                    <span>Report any harassment or suspicious activity immediately.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-accent/10 p-6 rounded-xl border border-accent/20">
                            <div className="flex items-center gap-3 mb-2">
                                <Users className="h-5 w-5 text-accent" />
                                <h3 className="font-semibold text-accent-foreground">Community Stats</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <p className="text-2xl font-bold">1.2k+</p>
                                    <p className="text-xs text-muted-foreground">Members</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">500+</p>
                                    <p className="text-xs text-muted-foreground">Discussions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;

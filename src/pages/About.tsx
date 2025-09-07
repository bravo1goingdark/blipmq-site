import { motion } from 'motion/react';
import { Target, Users, Code, Zap } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-dark-background">
            {/* Hero Section */}
            <section className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 py-20">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-dark-foreground">
                            About BlipMQ
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-xl text-gray-600 dark:text-dark-muted mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        We're building the next generation of messaging infrastructure. 
                        Our mission is to make high-performance, reliable messaging accessible to every developer and organization.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold uppercase text-indigo-600 tracking-wide">
                        Our Mission
                    </span>
                    <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-dark-foreground">
                        Built by developers, for developers
                    </h2>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {[{
                        title: 'Performance First',
                        desc: 'Every line of code is optimized for speed and efficiency. We believe great software should be fast by default.',
                        icon: Zap,
                        color: 'text-yellow-600 dark:text-yellow-400'
                    }, {
                        title: 'Open Source',
                        desc: 'Transparency and community collaboration drive innovation. Our code is open, our process is transparent.',
                        icon: Code,
                        color: 'text-green-600 dark:text-green-400'
                    }, {
                        title: 'Developer Experience',
                        desc: 'Simple APIs, comprehensive documentation, and intuitive design. Technology should empower, not frustrate.',
                        icon: Users,
                        color: 'text-blue-600 dark:text-blue-400'
                    }, {
                        title: 'Production Ready',
                        desc: 'Built for real-world challenges. Every feature is battle-tested and designed for production workloads.',
                        icon: Target,
                        color: 'text-purple-600 dark:text-purple-400'
                    }].map((value, i) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5 }}
                                className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-8 shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-gray-100 dark:bg-dark-subtle rounded-full">
                                        <Icon className={`w-6 h-6 ${value.color}`} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground">{value.title}</h3>
                                </div>
                                <p className="text-gray-600 dark:text-dark-muted leading-relaxed">{value.desc}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            {/* Technology Stack */}
            <section className="bg-gray-50 dark:bg-dark-card py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold uppercase text-indigo-600 tracking-wide">
                            Technology
                        </span>
                        <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-dark-foreground">
                            Modern stack, proven results
                        </h2>
                        <p className="mt-3 text-gray-600 dark:text-dark-muted text-sm max-w-xl mx-auto">
                            We use cutting-edge technologies to deliver exceptional performance and reliability.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: 'Rust', desc: 'Memory safety & performance' },
                            { name: 'Tokio', desc: 'Async runtime' },
                            { name: 'WebSockets', desc: 'Real-time communication' },
                            { name: 'Docker', desc: 'Container deployment' }
                        ].map((tech, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                                        {tech.name.charAt(0)}
                                    </span>
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-1">{tech.name}</h4>
                                <p className="text-sm text-gray-600 dark:text-dark-muted">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact/Community */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center">
                    <span className="text-xs font-semibold uppercase text-indigo-600 tracking-wide">
                        Join Us
                    </span>
                    <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-dark-foreground mb-6">
                        Be part of the journey
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-dark-muted mb-8 max-w-2xl mx-auto">
                        Whether you're contributing code, reporting bugs, or just spreading the word – every contribution makes a difference.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="https://github.com/bravo1goingdark/blipmq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 dark:hover:bg-indigo-600 transition inline-block text-center"
                        >
                            View on GitHub
                        </a>
                        <a 
                            href="https://twitter.com/blipmq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold rounded-lg transition inline-block text-center"
                        >
                            Follow Updates
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

import { motion } from 'motion/react';
import { Terminal, Database, Zap, Filter, FileText, CalendarClock, Monitor } from 'lucide-react';
import { useState, lazy, Suspense } from 'react';

const ComingSoonModal = lazy(() => import('../components/ComingSoonModal.tsx'));

const MailGrid = () => {
    const [showUiModal, setShowUiModal] = useState(false);
    return (
        <>
            {/* Hero Section */}
            <section className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 py-20">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-6">
                            <span className="text-indigo-700 dark:text-indigo-300 text-sm font-semibold">✨ Email Orchestrator</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-dark-foreground">MailGrid</h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-lg text-gray-600 dark:text-dark-muted mb-8 max-w-2xl mx-auto"
                    >
                        MailGrid is a high-performance email orchestrator. Bring recipients from CSV or Google Sheets, personalize with Go-style templates, and deliver via any SMTP provider.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                    >
                        <a
                            href="https://github.com/bravo1goingdark/mailgrid/releases"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-indigo-600 dark:bg-indigo-500 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 dark:hover:bg-indigo-600 transition inline-block text-center"
                        >
                            Get MailGrid
                        </a>
                        <button
                            type="button"
                            onClick={() => setShowUiModal(true)}
                            className="px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold rounded-lg transition inline-block text-center"
                        >
                            MailGrid Desktop
                        </button>
                        <a
                            href="https://github.com/bravo1goingdark/mailgrid/blob/main/docs/docs.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold rounded-lg transition inline-block text-center"
                        >
                            Documentation
                        </a>
                    </motion.div>

                    {/* Key Capabilities (no code) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                        {[{
                            title: 'Fast & Reliable',
                            desc: 'Concurrent sending with intelligent retries and batching.'
                        }, {
                            title: 'Personalization',
                            desc: 'Go template syntax for dynamic, per-recipient content.'
                        }, {
                            title: 'Preview & Safety',
                            desc: 'Preview locally and dry-run before sending at scale.'
                        }].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-5 text-left shadow-sm">
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-dark-foreground mb-1">{item.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-dark-muted">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {showUiModal && (
                    <Suspense fallback={null}>
                        <ComingSoonModal
                            onClose={() => setShowUiModal(false)}
                            title="Under development"
                            message="MailGrid Desktop is under active development.<br/>Please check back soon or follow the repo for updates."
                        />
                    </Suspense>
                )}
            </section>

            {/* How it Works */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs font-semibold uppercase text-indigo-600 tracking-wide">
                            ⚡ Lightning Fast Setup
                        </span>
                        <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-dark-foreground mb-4">
                            From CSV to Delivered Emails
                        </h2>
                        <p className="mt-3 text-gray-600 dark:text-dark-muted text-sm max-w-xl mx-auto">
                            Three simple steps. Endless possibilities. No complex setup required.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
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
                        title: 'Import & Connect',
                        desc: 'Drop your CSV file or paste a Google Sheets URL. MailGrid automatically detects columns and validates email addresses.',
                        icon: '📊',
                        step: '1'
                    }, {
                        title: 'Personalize & Preview',
                        desc: 'Design beautiful templates with dynamic placeholders. Preview how each recipient sees their personalized message.',
                        icon: '🎨',
                        step: '2'
                    }, {
                        title: 'Send & Track',
                        desc: 'Configure delivery settings, apply smart filters, and watch real-time sending progress with detailed success metrics.',
                        icon: '🚀',
                        step: '3'
                    }].map((process, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5 }}
                            className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6 shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gray-100 dark:bg-dark-subtle rounded-full">
                                    <span className="text-2xl">{process.icon}</span>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-indigo-600 tracking-wide">STEP {process.step}</div>
                                    <h3 className="text-base font-semibold text-gray-900 dark:text-dark-foreground">{process.title}</h3>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-dark-muted">{process.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Smart Targeting */}
            <section className="max-w-6xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs font-semibold uppercase text-indigo-600 tracking-wide">
                            🎯 Precision Targeting
                        </span>
                        <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-dark-foreground">
                            Smart Filtering
                        </h2>
                        <p className="mt-3 text-gray-600 dark:text-dark-muted text-sm max-w-xl mx-auto">
                            Powerful filtering that feels simple. Create complex audience segments with an intuitive approach.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
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
                        title: 'Behavioral Targeting',
                        desc: 'Filter by engagement patterns, purchase history, and user activity to reach your most valuable segments.',
                        icon: '📈'
                    }, {
                        title: 'Smart Combinations',
                        desc: 'Mix and match conditions with AND/OR logic. Create complex rules that feel simple and intuitive.',
                        icon: '🧠'
                    }, {
                        title: 'Real-time Preview',
                        desc: 'See exactly how many recipients match your filters before sending. No surprises, just precision.',
                        icon: '👀'
                    }].map((feature, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5 }}
                            className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6 shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gray-100 dark:bg-dark-subtle rounded-full">
                                    <span className="text-2xl">{feature.icon}</span>
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 dark:text-dark-foreground">{feature.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-dark-muted">{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Core Features */}
            <section className="max-w-6xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold uppercase text-indigo-600 tracking-wide">
                        🔧 Core Features
                    </span>
                    <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-dark-foreground">
                        Built for Speed, Simplicity & Scale
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-dark-muted text-sm max-w-xl mx-auto">
                        Everything you need to orchestrate bulk email campaigns from CSV files or Google Sheets.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
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
                    {features.map((feat, i) => {
                        const Icon = feat.icon;
                        return (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5 }}
                                className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6 shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-gray-100 dark:bg-dark-subtle rounded-full">
                                        <Icon className={`w-6 h-6 ${feat.color}`} />
                                    </div>
                                    <h3 className="text-base font-semibold text-gray-900 dark:text-dark-foreground">{feat.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-dark-muted">{feat.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            {/* Choose Your Experience */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold uppercase text-indigo-600 tracking-wide">✨ Choose Your Experience</span>
                    <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-dark-foreground">CLI or Desktop</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* CLI Version */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6 shadow-sm hover:shadow-md transition"
                    >
                        <div className="flex items-center mb-6">
                            <div className="p-2 bg-gray-100 dark:bg-dark-subtle rounded-full">
                                <Terminal className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div className="ml-3">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground">
                                    MailGrid CLI
                                </h3>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-dark-muted mb-4">
                            Ultra-lightweight tool for developers who prefer streamlined, scriptable workflows.
                            Ideal for automation and CI/CD.
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="inline-flex items-center px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-full">
                                <span className="text-green-800 dark:text-green-200 font-medium text-xs">
                                    ✅ Available Now
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Desktop UI Version */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6 shadow-sm hover:shadow-md transition"
                    >
                        <div className="flex items-center mb-6">
                            <div className="p-2 bg-gray-100 dark:bg-dark-subtle rounded-full">
                                <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">UI</span>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground">
                                    MailGrid Desktop
                                </h3>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-dark-muted mb-4">
                            Native app for teams who prefer visual campaign management, drag-and-drop templates, and collaboration.
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="inline-flex items-center px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                                <span className="text-purple-800 dark:text-purple-200 font-medium text-xs">
                                    🔨 In Production
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-center mt-8"
                >
                    <p className="text-sm text-gray-600 dark:text-dark-muted max-w-2xl mx-auto">
                        Both versions share the same powerful core: CSV/Google Sheets integration, Go templating, and SMTP flexibility.
                    </p>
                </motion.div>
            </section>
        </>
    );
};

const features = [
    {
        icon: Database,
        title: "CSV & Google Sheets",
        description: "Read recipients from CSV files or public Google Sheets with automatic parsing",
        color: "text-green-600 dark:text-green-400"
    },
    {
        icon: FileText,
        title: "Go Template Engine",
        description: "Dynamic templating with Go's text/template syntax for personalized emails",
        color: "text-blue-600 dark:text-blue-400"
    },
    {
        icon: Zap,
        title: "Concurrency & Retries",
        description: "Parallel SMTP workers with exponential backoff and jitter for robust delivery",
        color: "text-yellow-600 dark:text-yellow-400"
    },
    {
        icon: Filter,
        title: "Logical Filtering",
        description: "Target recipients using expressions: contains, startswith, >, and/or, groups",
        color: "text-purple-600 dark:text-purple-400"
    },
    {
        icon: CalendarClock,
        title: "Scheduling & Jobs",
        description: "One-off or recurring via RFC3339, interval, or cron; persisted locally in BoltDB",
        color: "text-indigo-600 dark:text-indigo-400"
    },
    {
        icon: Monitor,
        title: "Preview & Dry-run",
        description: "Local preview server and safe dry-run rendering for debugging templates",
        color: "text-red-600 dark:text-red-400"
    }
];

export default MailGrid;

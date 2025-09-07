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

                    {/* Unique Selling Points */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {[{
                            title: 'Smart Scheduling',
                            desc: 'Set-and-forget campaign scheduling with timezone awareness. Schedule once, deliver perfectly timed across global audiences.',
                            icon: '📅',
                            highlight: 'Schedule campaigns weeks ahead'
                        }, {
                            title: '99.7% Delivery Rate',
                            desc: 'Industry-leading delivery success with intelligent retry logic and SMTP optimization that actually works.',
                            icon: '🎯',
                            highlight: 'Higher than most ESPs'
                        }, {
                            title: 'Zero Monthly Fees',
                            desc: 'Own your email infrastructure. No per-email costs, no monthly subscriptions. Pay once, send millions forever.',
                            icon: '💰',
                            highlight: 'Save thousands annually'
                        }].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full group-hover:scale-110 transition-transform">
                                        <span className="text-2xl">{item.icon}</span>
                                    </div>
                                    <h4 className="text-base font-semibold text-gray-900 dark:text-dark-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                                </div>
                                <div className="mb-3">
                                    <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded-full">
                                        {item.highlight}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-dark-muted leading-relaxed">{item.desc}</p>
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
                    <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-dark-foreground">Free CLI or Premium Desktop</h2>
                    <p className="mt-3 text-gray-600 dark:text-dark-muted text-sm max-w-xl mx-auto">
                        Start free with our powerful CLI, upgrade to Desktop for advanced team features.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* CLI Version */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-dark-card border-2 border-green-200 dark:border-green-800 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative"
                    >
                        <div className="absolute -top-3 left-6">
                            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                FREE FOREVER
                            </span>
                        </div>
                        <div className="flex items-center mb-6 mt-2">
                            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-full">
                                <Terminal className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-dark-foreground">
                                    MailGrid CLI
                                </h3>
                                <div className="text-2xl font-bold text-green-600 dark:text-green-400">$0</div>
                            </div>
                        </div>
                        <ul className="text-sm text-gray-600 dark:text-dark-muted space-y-2 mb-6">
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                All core features included
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                Unlimited emails & recipients
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                Perfect for developers & automation
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                Open source & community driven
                            </li>
                        </ul>
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
                        className="bg-white dark:bg-dark-card border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative"
                    >
                        <div className="absolute -top-3 left-6">
                            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                PREMIUM
                            </span>
                        </div>
                        <div className="flex items-center mb-6 mt-2">
                            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-full">
                                <span className="text-purple-600 dark:text-purple-400 text-lg font-bold">UI</span>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-dark-foreground">
                                    MailGrid Desktop
                                </h3>
                                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">₹100 <span className="text-sm font-normal text-gray-500">/month</span></div>
                            </div>
                        </div>
                        <ul className="text-sm text-gray-600 dark:text-dark-muted space-y-2 mb-6">
                            <li className="flex items-center">
                                <span className="text-purple-500 mr-2">✓</span>
                                Everything in CLI + visual interface
                            </li>
                            <li className="flex items-center">
                                <span className="text-purple-500 mr-2">✓</span>
                                Drag & drop template builder
                            </li>
                            <li className="flex items-center">
                                <span className="text-purple-500 mr-2">✓</span>
                                Team collaboration features
                            </li>
                            <li className="flex items-center">
                                <span className="text-purple-500 mr-2">✓</span>
                                Advanced analytics dashboard
                            </li>
                        </ul>
                        <div className="flex items-center justify-between">
                            <div className="inline-flex items-center px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                                <span className="text-purple-800 dark:text-purple-200 font-medium text-xs">
                                    🔨 Coming Soon
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

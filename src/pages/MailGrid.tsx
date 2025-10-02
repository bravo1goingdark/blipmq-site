import { motion } from 'motion/react';
import { Terminal, Database, Zap, Filter, FileText, CalendarClock, Monitor } from 'lucide-react';

const MailGrid = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-full mb-6">
                            <span className="text-green-700 dark:text-green-300 text-sm font-semibold">📧 Email Orchestrator</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-dark-foreground">
                            Send bulk emails <span className="text-green-600 dark:text-green-400">that actually reach</span> inboxes
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg text-gray-600 dark:text-dark-muted mb-8"
                    >
                        MailGrid transforms your CSV files and Google Sheets into personalized email campaigns. 
                        <strong className="text-gray-900 dark:text-dark-foreground"> Built for developers who need reliability, speed, and zero vendor lock-in.</strong>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-3 mb-8"
                    >
                        <a
                            href="https://github.com/bravo1goingdark/mailgrid/releases"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-green-600 dark:bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-700 dark:hover:bg-green-600 transition inline-block text-center"
                        >
                            Download MailGrid
                        </a>
                        <a
                            href="/mailgrid/docs"
                            className="px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold rounded-lg transition inline-block text-center"
                        >
                            View Documentation
                        </a>
                    </motion.div>

                    {/* Key Stats/Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-wrap gap-6 text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-dark-muted"><strong className="text-gray-900 dark:text-dark-foreground">99.7%</strong> delivery rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-dark-muted"><strong className="text-gray-900 dark:text-dark-foreground">Zero</strong> monthly fees</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-dark-muted"><strong className="text-gray-900 dark:text-dark-foreground">Open source</strong> forever</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Feature Highlights */}
                <div className="w-full flex flex-col gap-4">
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.4 }}
                        className="text-center text-sm md:text-2xl font-bold tracking-tight text-green-800 dark:text-green-400 mb-4"
                    >
                        Built-in Superpowers 🚀
                    </motion.h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-4 text-center"
                        >
                            <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">CSV & Sheets Ready</h4>
                            <p className="text-xs text-gray-600 dark:text-dark-muted">Import from files or Google Sheets instantly</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-4 text-center"
                        >
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">Lightning Fast</h4>
                            <p className="text-xs text-gray-600 dark:text-dark-muted">Concurrent delivery with smart retries</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 border border-purple-200 dark:border-purple-800/30 rounded-lg p-4 text-center"
                        >
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">Go Templates</h4>
                            <p className="text-xs text-gray-600 dark:text-dark-muted">Powerful personalization engine</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                            className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 border border-orange-200 dark:border-orange-800/30 rounded-lg p-4 text-center"
                        >
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                <CalendarClock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">Smart Scheduling</h4>
                            <p className="text-xs text-gray-600 dark:text-dark-muted">Cron jobs and timezone awareness</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="max-w-6xl mx-auto px-4 py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                    >
                        {[{
                            title: 'Enterprise Reliability',
                            desc: 'Production-ready with 99.7% delivery success rate. Built-in retry logic, SMTP optimization, and error recovery that works.',
                            icon: '🎯',
                            highlight: 'Battle-tested reliability',
                            gradient: 'from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10',
                            border: 'border-green-200 dark:border-green-800/30',
                            iconBg: 'bg-green-100 dark:bg-green-900/20',
                            textColor: 'text-green-600 dark:text-green-400'
                        }, {
                            title: 'Zero Vendor Lock-in',
                            desc: 'Own your email infrastructure forever. No per-email costs, no monthly subscriptions, no limits. Download once, use forever.',
                            icon: '🔓',
                            highlight: 'Own your data & infrastructure',
                            gradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10',
                            border: 'border-blue-200 dark:border-blue-800/30',
                            iconBg: 'bg-blue-100 dark:bg-blue-900/20',
                            textColor: 'text-blue-600 dark:text-blue-400'
                        }, {
                            title: 'Developer Experience',
                            desc: 'Powerful CLI with YAML config, Go templates, preview server, dry-run mode, and comprehensive docs. Made by devs, for devs.',
                            icon: '🚀',
                            highlight: 'CLI-first, automation-ready',
                            gradient: 'from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10',
                            border: 'border-purple-200 dark:border-purple-800/30',
                            iconBg: 'bg-purple-100 dark:bg-purple-900/20',
                            textColor: 'text-purple-600 dark:text-purple-400'
                        }].map((item, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className={`bg-gradient-to-br ${item.gradient} border ${item.border} rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 group`}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`p-2 ${item.iconBg} rounded-full group-hover:scale-110 transition-transform`}>
                                        <span className="text-2xl">{item.icon}</span>
                                    </div>
                                    <h4 className={`text-base font-semibold text-gray-900 dark:text-dark-foreground group-hover:${item.textColor} transition-colors`}>{item.title}</h4>
                                </div>
                                <div className="mb-3">
                                    <span className={`text-xs font-medium ${item.textColor} bg-white/50 dark:bg-gray-900/20 px-2 py-1 rounded-full`}>
                                        {item.highlight}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
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

            {/* Getting Started */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold uppercase text-green-600 tracking-wide">✨ Ready to Start</span>
                    <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-dark-foreground">Download & Get Started</h2>
                    <p className="mt-3 text-gray-600 dark:text-dark-muted text-sm max-w-xl mx-auto">
                        Everything you need to orchestrate email campaigns from CSV files and Google Sheets.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* CLI Version - Centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border-2 border-green-200 dark:border-green-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative"
                    >
                        <div className="absolute -top-3 left-8">
                            <span className="bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                                🎆 FREE & OPEN SOURCE
                            </span>
                        </div>
                        <div className="flex items-center justify-center mb-8 mt-4">
                            <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-full mr-6">
                                <Terminal className="w-8 h-8 text-green-600 dark:text-green-400" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-foreground mb-2">
                                    MailGrid CLI
                                </h3>
                                <div className="text-3xl font-bold text-green-600 dark:text-green-400">$0 Forever</div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-3">🚀 Core Features</h4>
                                <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                    <span className="text-green-500 mr-3 text-lg">✓</span>
                                    CSV & Google Sheets import
                                </div>
                                <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                    <span className="text-green-500 mr-3 text-lg">✓</span>
                                    Go template personalization
                                </div>
                                <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                    <span className="text-green-500 mr-3 text-lg">✓</span>
                                    Any SMTP provider support
                                </div>
                                <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                    <span className="text-green-500 mr-3 text-lg">✓</span>
                                    Advanced filtering & targeting
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-3">🔧 Developer Tools</h4>
                                <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                    <span className="text-green-500 mr-3 text-lg">✓</span>
                                    Preview server & dry-run mode
                                </div>
                                <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                    <span className="text-green-500 mr-3 text-lg">✓</span>
                                    Cron scheduling & automation
                                </div>
                                <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                    <span className="text-green-500 mr-3 text-lg">✓</span>
                                    Concurrent delivery & retries
                                </div>
                                <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                    <span className="text-green-500 mr-3 text-lg">✓</span>
                                    Comprehensive CLI & docs
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://github.com/bravo1goingdark/mailgrid/releases"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-green-600 dark:bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-700 dark:hover:bg-green-600 transition inline-flex items-center gap-2"
                            >
                                <span>📦</span>
                                Download Latest Release
                            </a>
                            <a
                                href="https://github.com/bravo1goingdark/mailgrid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-green-300 dark:border-green-600 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20 font-semibold rounded-lg transition inline-flex items-center gap-2"
                            >
                                <span>🐈</span>
                                View on GitHub
                            </a>
                        </div>
                    </motion.div>
                </div>
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

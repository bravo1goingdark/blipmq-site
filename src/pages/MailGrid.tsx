import { motion } from 'motion/react';
import { Terminal, Database, Zap, Filter, FileText, CalendarClock, Monitor, Shield, Globe } from 'lucide-react';

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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
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

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.4 }}
                            className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-200 dark:border-emerald-800/30 rounded-lg p-4 text-center"
                        >
                            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/20 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                <span className="text-emerald-600 dark:text-emerald-400 text-lg font-bold">🔑</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">BYOK Support</h4>
                            <p className="text-xs text-gray-600 dark:text-dark-muted">Bring Your Own SMTP Keys - any provider</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.4 }}
                            className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/10 dark:to-pink-900/10 border border-rose-200 dark:border-rose-800/30 rounded-lg p-4 text-center"
                        >
                            <div className="p-2 bg-rose-100 dark:bg-rose-900/20 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                <span className="text-rose-600 dark:text-rose-400 text-lg font-bold">🎨</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">High Delivery</h4>
                            <p className="text-xs text-gray-600 dark:text-dark-muted">99.7% delivery rate with smart retries</p>
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
                            desc: 'Powerful CLI with JSON config, Go templates, preview server, dry-run mode, and comprehensive docs. Made by devs, for devs.',
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

            {/* Getting Started - CLI */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold uppercase text-green-600 tracking-wide">✨ Ready to Start</span>
                    <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-dark-foreground">Download Free CLI & Get Started</h2>
                    <p className="mt-3 text-gray-600 dark:text-dark-muted text-sm max-w-xl mx-auto">
                        Start with the powerful <strong>free CLI version</strong> - everything you need to orchestrate email campaigns from CSV files and Google Sheets. 
                        The visual UI is a paid product currently under development.
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
                                🎆 FREE FOREVER - BSD-3 LICENSE
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

            {/* Comparison Table */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold uppercase text-blue-600 tracking-wide">📊 Comparison</span>
                    <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-dark-foreground">MailGrid vs Alternatives</h2>
                    <p className="mt-3 text-gray-600 dark:text-dark-muted text-sm max-w-2xl mx-auto">
                        See how MailGrid compares to popular email service providers and tools.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl shadow-sm"
                    >
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-dark-border">
                                    <th className="text-left p-4 font-semibold text-gray-900 dark:text-dark-foreground">Feature</th>
                                    <th className="text-center p-4 font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/10">MailGrid</th>
                                    <th className="text-center p-4 font-semibold text-gray-700 dark:text-gray-300">Mailgun</th>
                                    <th className="text-center p-4 font-semibold text-gray-700 dark:text-gray-300">SendGrid</th>
                                    <th className="text-center p-4 font-semibold text-gray-700 dark:text-gray-300">AWS SES</th>
                                    <th className="text-center p-4 font-semibold text-gray-700 dark:text-gray-300">Postmark</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="p-4 font-medium text-gray-900 dark:text-dark-foreground">Monthly Cost</td>
                                    <td className="text-center p-4 bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 font-semibold">$0 Forever</td>
                                    <td className="text-center p-4 text-gray-600 dark:text-gray-400">$35+/mo</td>
                                    <td className="text-center p-4 text-gray-600 dark:text-gray-400">$20+/mo</td>
                                    <td className="text-center p-4 text-gray-600 dark:text-gray-400">Pay per use</td>
                                    <td className="text-center p-4 text-gray-600 dark:text-gray-400">$15+/mo</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="p-4 font-medium text-gray-900 dark:text-dark-foreground">Email Limits</td>
                                    <td className="text-center p-4 bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 font-semibold">Unlimited</td>
                                    <td className="text-center p-4 text-gray-600 dark:text-gray-400">10K-50K/mo</td>
                                    <td className="text-center p-4 text-gray-600 dark:text-gray-400">40K-100K/mo</td>
                                    <td className="text-center p-4 text-gray-600 dark:text-gray-400">Unlimited*</td>
                                    <td className="text-center p-4 text-gray-600 dark:text-gray-400">10K-100K/mo</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="p-4 font-medium text-gray-900 dark:text-dark-foreground">Data Ownership</td>
                                    <td className="text-center p-4 bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 font-semibold">✓ Full Control</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Vendor Lock</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Vendor Lock</td>
                                    <td className="text-center p-4 text-yellow-600 dark:text-yellow-400">⚠ AWS Lock</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Vendor Lock</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="p-4 font-medium text-gray-900 dark:text-dark-foreground">CSV/Sheets Import</td>
                                    <td className="text-center p-4 bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 font-semibold">✓ Built-in</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Manual</td>
                                    <td className="text-center p-4 text-yellow-600 dark:text-yellow-400">⚠ Limited</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Manual</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Manual</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="p-4 font-medium text-gray-900 dark:text-dark-foreground">Template Engine</td>
                                    <td className="text-center p-4 bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 font-semibold">✓ Go Templates</td>
                                    <td className="text-center p-4 text-yellow-600 dark:text-yellow-400">⚠ Basic</td>
                                    <td className="text-center p-4 text-yellow-600 dark:text-yellow-400">⚠ Basic</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ None</td>
                                    <td className="text-center p-4 text-yellow-600 dark:text-yellow-400">⚠ Basic</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="p-4 font-medium text-gray-900 dark:text-dark-foreground">Preview & Testing</td>
                                    <td className="text-center p-4 bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 font-semibold">✓ Full Suite</td>
                                    <td className="text-center p-4 text-yellow-600 dark:text-yellow-400">⚠ Limited</td>
                                    <td className="text-center p-4 text-yellow-600 dark:text-yellow-400">⚠ Basic</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ None</td>
                                    <td className="text-center p-4 text-yellow-600 dark:text-yellow-400">⚠ Basic</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="p-4 font-medium text-gray-900 dark:text-dark-foreground">Self-Hosted</td>
                                    <td className="text-center p-4 bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 font-semibold">✓ Always</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Cloud Only</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Cloud Only</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Cloud Only</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Cloud Only</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="p-4 font-medium text-gray-900 dark:text-dark-foreground">BYOK (Bring Your Own Keys)</td>
                                    <td className="text-center p-4 bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 font-semibold">✓ Any SMTP Provider</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Vendor Lock</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Vendor Lock</td>
                                    <td className="text-center p-4 text-yellow-600 dark:text-yellow-400">⚠ AWS Only</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Vendor Lock</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-gray-900 dark:text-dark-foreground">Open Source</td>
                                    <td className="text-center p-4 bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 font-semibold">✓ BSD-3 License</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Proprietary</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Proprietary</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Proprietary</td>
                                    <td className="text-center p-4 text-red-600 dark:text-red-400">✗ Proprietary</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-b-xl">
                            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                * AWS SES requires technical setup and management. Pricing varies by usage.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* UI Coming Soon */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold uppercase text-purple-600 tracking-wide">🚀 What's Next</span>
                    <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-dark-foreground">MailGrid UI - Paid Version Under Development</h2>
                    <p className="mt-3 text-gray-600 dark:text-dark-muted text-sm max-w-2xl mx-auto">
                        Beautiful desktop UI built with Wails + React + TailwindCSS + Framer Motion. This will be a <strong>paid product</strong> that brings all of MailGrid's CLI power to a visual interface. Perfect for teams and non-technical users who prefer GUI over command line.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 border-2 border-purple-200 dark:border-purple-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 dark:bg-purple-900/20 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/20 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
                        
                        <div className="relative z-10">
                            <div className="absolute -top-3 left-8">
                                <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                                    💼 PAID DESKTOP APP - IN DEVELOPMENT
                                </span>
                            </div>
                            
                            <div className="flex items-center justify-center mb-8 mt-4">
                                <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-full mr-6">
                                    <span className="text-purple-600 dark:text-purple-400 text-2xl font-bold">💻</span>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-foreground mb-2">
                                        MailGrid Desktop UI
                                    </h3>
                                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">₹199 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">/month</span></div>
                                    <div className="text-sm font-medium text-purple-600 dark:text-purple-400">🔨 In Development</div>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-3">
                                    <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-3">🎨 Visual Interface</h4>
                                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                        <span className="text-purple-500 mr-3 text-lg">✓</span>
                                        Drag & drop template builder
                                    </div>
                                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                        <span className="text-purple-500 mr-3 text-lg">✓</span>
                                        Visual CSV import & preview
                                    </div>
                                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                        <span className="text-purple-500 mr-3 text-lg">✓</span>
                                        Interactive campaign builder
                                    </div>
                                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                        <span className="text-purple-500 mr-3 text-lg">✓</span>
                                        Real-time template preview
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-3">🚀 Enhanced Features</h4>
                                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                        <span className="text-purple-500 mr-3 text-lg">✓</span>
                                        Advanced analytics dashboard
                                    </div>
                                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                        <span className="text-purple-500 mr-3 text-lg">✓</span>
                                        Team collaboration tools
                                    </div>
                                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                        <span className="text-purple-500 mr-3 text-lg">✓</span>
                                        Campaign scheduling interface
                                    </div>
                                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                        <span className="text-purple-500 mr-3 text-lg">✓</span>
                                        All CLI features + more
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="https://github.com/bravo1goingdark/mailgrid-ui"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded-lg shadow hover:bg-purple-700 dark:hover:bg-purple-600 transition inline-flex items-center gap-2"
                                >
                                    <span>🐈</span>
                                    View UI Repository
                                </a>
                                <a
                                    href="https://github.com/bravo1goingdark/mailgrid-ui/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 border border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-semibold rounded-lg transition inline-flex items-center gap-2"
                                >
                                    <span>💬</span>
                                    Request Features
                                </a>
                            </div>
                            
                            <div className="text-center mt-6">
                                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                                    Want early access? 🚀 <a href="https://github.com/bravo1goingdark/mailgrid-ui" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Star the UI repo</a> to get notified!
                                </p>
                            </div>
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
    },
    {
        icon: Terminal,
        title: "BYOK (Bring Your Own Keys)",
        description: "Use your own SMTP credentials with any provider - AWS SES, SendGrid, Mailgun, or personal servers",
        color: "text-emerald-600 dark:text-emerald-400"
    },
    {
        icon: Shield,
        title: "Security & Privacy",
        description: "Local-first approach - your data never leaves your machine, encrypted storage, and secure credential handling",
        color: "text-orange-600 dark:text-orange-400"
    },
    {
        icon: Globe,
        title: "Cross-Platform Support",
        description: "Native binaries for Windows, macOS, Linux, FreeBSD - single executable with zero dependencies",
        color: "text-teal-600 dark:text-teal-400"
    }
];

export default MailGrid;

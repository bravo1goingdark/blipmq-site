import {features} from "../utils/feature.tsx";
import {motion} from "motion/react";
import {useEffect} from "react";
import {trackEvent} from "../utils/analytics.ts";

export default function EssentialFeatures() {
    useEffect(() => {
        trackEvent("view", "section", "essential_features");
    }, []);

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase text-indigo-600 tracking-wide">
                    🔧 Production Features
                </span>
                <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-dark-foreground">
                    Built for Speed, Simplicity & Scale
                </h2>
                <p className="mt-3 text-gray-600 dark:text-dark-muted text-sm max-w-xl mx-auto">
                    BlipMQ is a lightweight message broker engineered for <br/> high-throughput systems and
                    microservices.
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
                                hidden: {opacity: 0, y: 20},
                                visible: {opacity: 1, y: 0},
                            }}
                            transition={{duration: 0.5}}
                            className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6 shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gray-100 dark:bg-dark-subtle rounded-full">
                                    <Icon className={`w-6 h-6 ${feat.color}`}/>
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 dark:text-dark-foreground">{feat.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-dark-muted">{feat.description}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}

import { features } from "../utils/feature";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import DevAnimation from "../assets/animation/Error cone-jeYB8.json";
import type {LucideIcon} from "lucide-react";
import type {Feature} from "../@types/feature.ts";

export const InProgressCarousel = () => {
    const feature : Feature = features[0];
    if (!feature) return null;

    const Icon : LucideIcon = feature.icon;

    return (
        <motion.div
            className="w-full flex justify-center -ml-6 mt-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center gap-3">
                <div className="w-25 h-25 sm:w-30 sm:h-30 py-4">
                    <Lottie animationData={DevAnimation} loop autoplay />
                </div>


                <div className="flex flex-col items-center w-full max-w-sm">
                    <span className="text-sm font-medium text-indigo-600 mb-3 text-center">
                        Currently In Development 🛠️
                    </span>

                    <motion.div
                        className="bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow-md transition w-full flex items-center gap-4"
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="p-1.5 bg-gray-100 rounded-full">
                                    <Icon className={`w-5 h-5 ${feature.color}`} />
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

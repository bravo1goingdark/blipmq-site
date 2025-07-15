import { features } from "../utils/feature.tsx";
import { motion } from "motion/react";
import DevAnimation from "../assets/animation/Error cone-jeYB8.json";
import Lottie from "lottie-react";
export function InProgressCarousel() {
    const index = 0;
    const featureTitle : string = features[index]?.title || "Loading...";

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center gap-2 mt-2"
        >
            <div className="w-20 h-20 sm:w-24 sm:h-24">
                <Lottie animationData={DevAnimation} loop autoplay />
            </div>

            <div className="text-center">
                <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider block mb-1">
                    Currently In Development
                </span>
                <h4 className="text-base font-bold text-gray-900 underline">
                    {featureTitle}
                </h4>
            </div>
        </motion.div>
    );
}

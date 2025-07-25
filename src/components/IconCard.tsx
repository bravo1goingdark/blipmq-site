import {motion} from 'motion/react';
import type {IconCardProps} from "../@types/icons.ts";


export const IconCard = ({
                             icon,
                             title,
                             delay = 0,
                         }: IconCardProps) => {
    return (
        <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay, duration: 0.4, ease: 'easeOut'}}
            whileHover={{scale: 1.05}}
            className="flex flex-col items-center space-y-2 text-center"
        >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                {icon}
            </div>
            <p className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200">
                {title}
            </p>
        </motion.div>
    );
};
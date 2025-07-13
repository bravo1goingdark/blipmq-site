// src/components/IconCard.tsx
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface IconCardProps {
    icon: ReactNode;
    title: string;
    delay?: number;
}

export const IconCard = ({
                             icon,
                             title,
                             delay = 0,
                         }: IconCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center space-y-2 text-center"
        >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                {icon}
            </div>
            <p className="text-sm md:text-base font-semibold text-gray-800">
                {title}
            </p>
        </motion.div>
    );
};
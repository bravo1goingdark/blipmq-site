import type {ReactNode} from "react";

export interface IconCardProps {
    icon: ReactNode;
    title: string;
    className?: string;
    delay?: number;
}
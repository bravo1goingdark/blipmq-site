import type {ReactNode} from "react";

export interface IconCardProps {
    icon: ReactNode;
    title: string;
    delay?: number;
}

export interface Props {
    onClose: () => void;
    title?: string;
    message?: string;
}

export interface Features {
    title: string;
    items : string[];
}
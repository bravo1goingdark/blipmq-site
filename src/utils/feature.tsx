import {
    TerminalSquare,
    History,
    FileCog,
    Plug,
    Clock3,
    LayoutTemplate
} from "lucide-react";

import type {Feature} from "../@types/feature.ts";

export const features: Feature[] = [
    {
        title: 'Core : Topics & Queues',
        description: 'Supports topic-based pub/sub, per-subscriber queues, and QoS 0 & 1 delivery modes.',
        icon: <TerminalSquare className="w-6 h-6 text-blue-500"/>,
    },
    {
        title: 'Reliability Mechanisms',
        description: 'Includes message TTL, retry with backoff, and graceful shutdown with message drain.',
        icon: <History className="w-6 h-6 text-purple-500"/>,
    },
    {
        title: 'Persistence & Recovery',
        description: 'Crash-safe durability with Write-Ahead Log (WAL) and recovery of unacknowledged messages.',
        icon: <FileCog className="w-6 h-6 text-indigo-600"/>,
    },
    {
        title: 'High-Speed Transport',
        description: 'Custom binary protocol over TCP for ultra-fast delivery and efficient connection handling.',
        icon: <Plug className="w-6 h-6 text-green-500"/>,
    },
    {
        title: 'Minimalist Security',
        description: 'Static API key-based authentication to restrict client access securely.',
        icon: <Clock3 className="w-6 h-6 text-yellow-600"/>,
    },
    {
        title: 'Prod-Ready Deployment',
        description: 'Single binary, Dockerfile, config via env/files, and systemd unit for streamlined ops.',
        icon: <LayoutTemplate className="w-6 h-6 text-gray-800"/>,
    },
];

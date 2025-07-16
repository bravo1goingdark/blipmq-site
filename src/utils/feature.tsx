import {
    TerminalSquare,
    History,
    FileCog,
    Plug,
    Clock3,
    LayoutTemplate,
    ServerCog,
    ShieldCheck,
    Rocket,
} from "lucide-react";

import type { Feature } from "../@types/feature";

export const features: Feature[] = [
    {
        title: "Core : Topics & Queues",
        description: "Supports topic-based pub/sub, per-subscriber queues, and QoS 0 & 1 delivery modes.",
        icon: TerminalSquare,
        color: "text-blue-500",
    },
    {
        title: "Reliability Mechanisms",
        description: "Includes message TTL, retry with backoff, and graceful shutdown with message drain.",
        icon: History,
        color: "text-purple-500",
    },
    {
        title: "Persistence & Recovery",
        description: "Crash-safe durability with Write-Ahead Log (WAL) and recovery of unacknowledged messages.",
        icon: FileCog,
        color: "text-indigo-600",
    },
    {
        title: "High-Speed Transport",
        description: "Custom binary protocol over TCP for ultra-fast delivery and efficient connection handling.",
        icon: Plug,
        color: "text-green-500",
    },
    {
        title: "Minimalist Security",
        description: "Static API key-based authentication to restrict client access securely.",
        icon: Clock3,
        color: "text-yellow-600",
    },
    {
        title: "Observability",
        description: "Built-in metrics endpoints and structured logs for easy monitoring.",
        icon: ServerCog,
        color: "text-red-500",
    },
    {
        title: "Security Best Practices",
        description: "Isolated message spaces, per-client access restrictions, and no PII stored.",
        icon: ShieldCheck,
        color: "text-emerald-600",
    },
    {
        title: "Blazing Performance",
        description: "Optimized in Rust for low-latency, high-throughput messaging.",
        icon: Rocket,
        color: "text-orange-600",
    },
    {
        title: "Prod-Ready Deployment",
        description: "Single binary, Dockerfile, config via env/files, and systemd unit for streamlined ops.",
        icon: LayoutTemplate,
        color: "text-gray-800",
    },
];

import {motion} from 'motion/react';
import {IconCard} from './IconCard';
import {type ChangeEvent, useState, useEffect} from 'react';
import {Feather, Rocket, Plug, ShieldCheck, X} from 'lucide-react';
import * as React from "react";
import Lottie from "lottie-react";
import CheckBox from "../assets/animation/Checkbox Animation-bJszt.json";
import {InProgressCarousel} from "./InProgressCarousel.tsx";
import {fetchTotalJoined , animateCountUp} from "../utils/mount.ts";
import {URL} from "../utils/analytics.ts"

export default function Highlights() {
    const [email, setEmail] = useState<string>('');
    const [totalJoined, setTotalJoined] = useState<number | null>(null);
    const [displayCount, setDisplayCount] = useState(0);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [showModal, setShowModal] = useState(false);
    const [position, setPosition] = useState<number | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');


        try {
            const res: Response = await fetch(URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: new URLSearchParams({email}).toString(),
            });

            if (res.ok) {
                const data = await res.json();
                setPosition(data?.position ?? null);
                setStatus('success');
                setEmail('');
                setShowModal(true);
            } else {
                setStatus('error');
            }

        } catch (err) {
            setStatus('error');
        }
    };

    useEffect(() => {
        const cached : string | null = localStorage.getItem("blipmq_total");
        const fallback : number = cached ? parseInt(cached) : 100;

        setTotalJoined(fallback);
        animateCountUp(fallback, setDisplayCount);

        fetchTotalJoined(URL, setTotalJoined, setDisplayCount).then();
    }, []);




    return (
        <section
            className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {showModal && (
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0}}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                >
                    <div className="bg-white px-6 py-5 rounded-xl shadow-lg text-center max-w-sm w-full relative">
                        <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
                            onClick={() => setShowModal(false)}
                        >
                            <X className="w-4 h-4"/>
                        </button>
                        <Lottie
                            animationData={CheckBox}
                            loop
                            style={{height: '300px', width: '300px', margin: '0 auto'}}
                        />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">You're on the list!</h3>
                        {position !== null && (
                            <p className="text-4xl font-bold text-indigo-600 mb-1">#{position}</p>
                        )}
                        <p className="text-sm text-gray-500">Thanks for signing up for BlipMQ early access.</p>
                    </div>
                </motion.div>
            )}

            <div>
                <motion.h2
                    initial={{opacity: 0, y: -30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
                >
                    Think, send,<br/>
                    and stream messages <span className="text-indigo-600">lightning fast⚡<span
                    className="-ml-3">🦀</span></span>
                </motion.h2>

                <motion.p
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.2, duration: 0.6}}
                    className="text-lg text-gray-600 mb-4"
                >
                    BlipMQ combines raw speed, memory efficiency, and fault tolerance in a zero-bloat message broker for
                    microservices. Whether you're shipping logs, events, or state,<strong> BlipMQ delivers with minimal
                    overhead and maximal control.</strong>
                </motion.p>
                {totalJoined !== null && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-2 px-2 text-sm font-bold text-cyan-600"
                    >
                        #{displayCount.toLocaleString()} developers have already joined 🚀
                    </motion.div>
                )}

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.4, duration: 0.6}}
                    className="flex flex-col sm:flex-row items-center gap-3 mb-3"
                >
                    <input
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full sm:w-64 px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
                    >
                        {status === 'loading' ? 'Submitting...' : 'Join Waitlist'}
                    </button>
                </motion.form>

                {status === 'error' && (
                    <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
                )}


                {status !== 'success' && (
                    <p className="text-sm px-2 text-gray-500">
                        We respect your inbox. <strong>No spam, ever.</strong>
                    </p>
                )}

            </div>

            <div className="w-full flex flex-col gap-6 mt-6">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="text-center text-sm md:text-2xl font-bold tracking-tight text-cyan-800 mb-2"
                >
                    Unlock Built-in Superpowers  🧰
                </motion.h3>



                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <IconCard delay={0} title="Ultra-lightweight"
                              icon={<Feather className="w-12 h-12 text-indigo-500" />} />
                    <IconCard delay={0.2} title="Blazing-fast"
                              icon={<Rocket className="w-12 h-12 text-yellow-400" />} />
                    <IconCard delay={0.4} title="Plug & Play for Microservices"
                              icon={<Plug className="w-12 h-12 text-pink-500" />} />
                    <IconCard delay={0.6} title="Secure, Scalable, Reliable"
                              icon={<ShieldCheck className="w-12 h-12 text-green-500" />} />
                </div>

                <InProgressCarousel />
            </div>



        </section>
    );
}

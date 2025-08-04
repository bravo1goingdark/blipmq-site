import {X} from 'lucide-react';
import * as React from "react";
import Rocket from "../assets/animation/rocket.json";
import type {Props} from "../@types/icons.ts";
import Lottie from "lottie-react"


const ComingSoonModal: React.FC<Props> = ({onClose}: Props) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60">
            <div className="bg-white dark:bg-dark-card px-6 py-6 rounded-2xl shadow-xl text-center max-w-sm w-full relative">
                <button
                    className="absolute top-3 right-3 text-gray-400 dark:text-dark-muted hover:text-gray-700 dark:hover:text-dark-foreground"
                    onClick={onClose}
                >
                    <X className="w-5 h-5"/>
                </button>


                <div className="rounded-xl overflow-hidden" style={{height: '180px', width: '180px', margin: '0 auto'}}>
                    <div className="h-full w-full bg-white dark:bg-dark-card rounded-full flex items-center justify-center">
                        <Lottie
                            animationData={Rocket}
                            loop={true}
                            style={{height: '90%', width: '90%'}}
                            className="bg-white dark:bg-white"
                        />
                    </div>
                </div>

                <h3 className="text-xl font-semibold mt-2 mb-1 text-gray-800 dark:text-dark-foreground">Coming Soon</h3>
                <p className="text-sm text-gray-600 dark:text-dark-muted">We're cooking up something awesome. <br/> Stay tuned.</p>
            </div>
        </div>
    );
};

export default ComingSoonModal;

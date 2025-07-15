// src/utils/analytics.ts
import ReactGA from "react-ga4";

export const trackEvent = (
    action: string,
    category: string,
    label?: string
) => {
    ReactGA.event({
        action,
        category,
        label,
    });
};

export const URL = "https://script.google.com/macros/s/AKfycbxQKDu95_PkfMrs571Nh-XHPQczY3PSqBjoIIa7nSYP-O9bYtaMHz_HlXuNUPa7Q_rs/exec";

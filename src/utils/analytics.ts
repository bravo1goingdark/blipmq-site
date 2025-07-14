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

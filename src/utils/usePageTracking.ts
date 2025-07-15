import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import ReactGA from "react-ga4";

const usePageTracking: () => void = (): void => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname,
        });
    }, [location]);
};

export default usePageTracking;

export const fetchTotalJoined = async (
    url: string,
    setTotalJoined: (v: number) => void,
    setDisplayCount: (v: number) => void
) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        const realTotal = data.total ?? 0;

        setTotalJoined(realTotal);
        animateCountUp(realTotal, setDisplayCount);

        localStorage.setItem("blipmq_total", realTotal.toString());
    } catch (err) {
        console.error("Failed to fetch total joined:", err);
    }
};

export const animateCountUp = (target: number, setDisplayCount: (v: number) => void) => {
    const duration = 800;
    const startTime = performance.now();

    const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const count = Math.floor(progress * target);
        setDisplayCount(count);

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            setDisplayCount(target); // Snap to final
        }
    };

    requestAnimationFrame(step);
};

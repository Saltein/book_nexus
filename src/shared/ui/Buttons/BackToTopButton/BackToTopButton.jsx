import styles from "./BackToTopButton.module.css";
import { useEffect, useState } from "react";
import upIcon from './assets/up-arrow.svg'

export function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`${styles.button} ${isVisible ? styles.visible : styles.hidden}`}
            aria-label="Back to top"
        >
            <img src={upIcon} />
        </button>
    );
}

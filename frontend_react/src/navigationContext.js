import { createContext, useContext, useState, useEffect } from "react";

const context = createContext();

export const { Provider } = context;

export function useNavContext() {
    return useContext(context);
};

export default function CustomProvider({ children }) {
    const [isActive, setIsActive] = useState("");

    function useIsElementVisible(elementId) {
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIsActive(entry.target.id);
                    console.log(entry.target.id);
                }, { rootMargin: "-500px" }
            );
    
            elementId.current && observer.observe(elementId.current);
    
            return () => observer.unobserve(elementId.current);
        }, []);
    };

    const ctxValue = {
        useIsElementVisible,
        isActive
    };

    return (
        <Provider value={ctxValue}>
            {children}
        </Provider>
    );
};
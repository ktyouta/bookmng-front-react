import { useEffect, useState } from "react";

// トースト表示時間
const DISPLAY_TIME = 3000;

export function useToast() {

    // トースト表示フラグ
    const [isOpen, setIsOpen] = useState(true);

    // トースト非表示制御
    useEffect(() => {

        const timer = setTimeout(() => {
            setIsOpen(false);
        }, DISPLAY_TIME);

        return () => clearTimeout(timer);
    }, [isOpen]);

    return {
        isOpen,
    }
}
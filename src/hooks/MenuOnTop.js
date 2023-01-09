import React, {useEffect, useState} from "react";

const MenuOnTop = (ref) => {
    const [isMenuOnTop, setMenuOnTop] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.onscroll = () => {
                const menuEl = ref.current && ref.current.getBoundingClientRect();
                if (menuEl) {
                    console.log(menuEl.top + window.scrollY)
                }
                if (menuEl && menuEl.top + window.scrollY > 0) {
                    setMenuOnTop(true);
                } else {
                    setMenuOnTop(false);
                }
            }
        }

    }, []);

    return isMenuOnTop;
};

export default MenuOnTop

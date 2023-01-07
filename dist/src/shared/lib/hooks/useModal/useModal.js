import { useCallback, useEffect, useRef, useState, } from 'react';
export function useModal(_a) {
    var onClose = _a.onClose, isOpen = _a.isOpen, animationDelay = _a.animationDelay;
    var _b = useState(false), isClosing = _b[0], setIsClosing = _b[1];
    var _c = useState(false), isMounted = _c[0], setIsMounted = _c[1];
    var timerRef = useRef();
    var close = useCallback(function () {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(function () {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);
    var onKeyDown = useCallback(function (e) {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);
    var onContentClick = function (e) {
        e.stopPropagation();
    };
    useEffect(function () {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return function () {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    useEffect(function () {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);
    return {
        isClosing: isClosing,
        isMounted: isMounted,
        close: close,
    };
}

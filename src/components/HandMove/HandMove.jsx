import React, { useState, useEffect, useContext, useRef } from "react";
import { ReactComponent as HandSvg } from "../../assets/hand.svg";
import { observer } from "mobx-react-lite";
import { HandMoveWrapper } from "./HandMove.styles";
import { MultiContext } from "../../contexts";
import leavesSoundPath from "../../assets/leaves-sound.mp3";

export const HandMove = observer(() => {
    const globalContext = useContext(MultiContext);
    const [dragging, setDragging] = useState(false);
    const audioRef = useRef(null);

    const handleMouseDown = () => {
        setDragging(true);
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleMouseMove = () => {
        if (dragging) {
            console.log(1);
            playSound();
            globalContext.store.setShouldAnimateLeaves(true);
            globalContext.store.setVisiblePromo(true);
        }
    };

    const handleTouchStart = () => {
        setDragging(true);
    };

    const handleTouchEnd = () => {
        setDragging(false);
    };

    const handleTouchMove = (event) => {
        if (dragging) {
            playSound();
            globalContext.store.setShouldAnimateLeaves(true);
            globalContext.store.setVisiblePromo(true);
        }
    };

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.muted = false;
            audioRef.current.play().catch((error) => {
                console.error("Failed to play sound:", error);
            });
        }
    };

    useEffect(() => {
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchstart", handleMouseDown);
        window.addEventListener("touchend", handleMouseUp);

        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchstart", handleMouseDown);
            window.removeEventListener("touchend", handleMouseUp);
        };
    }, []);

    return (
        <HandMoveWrapper
            isvisible={globalContext.store.visiblePromoAndLink ? 0 : 1}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            <audio muted ref={audioRef} style={{ display: "none" }}>
                <source src={leavesSoundPath} type="audio/mp3" />
            </audio>
            <div className="hand-icon">
                <hr />
                <HandSvg />
            </div>
            <span>
                Пошуршите листьями,
                <br />
                заберите промокод
            </span>
        </HandMoveWrapper>
    );
});

import React, { useState, useRef, useEffect } from 'react';
import './dual-slider.css';

const DualSlider = () => {
    const [minVal, setMinVal] = useState(20);
    const [maxVal, setMaxVal] = useState(80);

    const minRef = useRef();
    const maxRef = useRef();
    const range = useRef();

    // Update the range fill style
    useEffect(() => {
        if (minRef.current && maxRef.current && range.current) {
            const minPercent = (minVal / 100) * 100;
            const maxPercent = (maxVal / 100) * 100;
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, maxVal]);

    return (
        <div className="slider-container">
            <span className="slider-labels2">0</span>

            <div className="slider">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={minVal}
                    ref={minRef}
                    onChange={(e) => {
                        const val = Math.min(+e.target.value, maxVal - 1);
                        setMinVal(val);
                    }}
                    className="thumb thumb-left"
                />
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={maxVal}
                    ref={maxRef}
                    onChange={(e) => {
                        const val = Math.max(+e.target.value, minVal + 1);
                        setMaxVal(val);
                    }}
                    className="thumb thumb-right"
                />

                <div className="slider-track" />
                <div ref={range} className="slider-range" />


            </div>
            <span className="slider-labels2">100</span>

        </div>
    );
};

export default DualSlider;

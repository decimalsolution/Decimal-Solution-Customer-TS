"use client";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ProgressProps {
    progress: number;
}

export default function CircularProgress({ progress }: ProgressProps) {
    const [value, setValue] = useState<number>(0);

    useEffect(() => {
        setValue(progress);
    }, [progress]);

    return (
        <div style={{ width: 170, height: 170 }}>
            <CircularProgressbar
                value={value}
                text={`${value}%`}
                strokeWidth={6}
                styles={buildStyles({
                    strokeLinecap: "butt", // Controls line ending style
                    textSize: "16px", // Size of the text inside the circle
                    pathTransitionDuration: 3, // Smooth transition
                    // pathTransitionTimingFunction: "ease", // Similar to CSS transition-timing-function
                    pathColor: "url(#gradient)", // Applying gradient via SVG
                    textColor: "black",
                    trailColor: "#d6d6d6", // Background circle color
                    // strokeWidth: 10, // Control stroke width
                })}
            />
            <svg style={{ height: 0 }}>
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#A4238C" />
                        <stop offset="100%" stopColor="#A4238C" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

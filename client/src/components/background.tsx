// import React from "react";

// interface GradientBackgroundProps {}

export default function GradientBackground() {
    return (
        <div className="fixed inset-0 -z-10">
            <div
                className="absolute inset-0 z-[-2] bg-neutral-950"
                style={{
                    backgroundImage:
                        "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))",
                }}
            ></div>
        </div>
    );
}

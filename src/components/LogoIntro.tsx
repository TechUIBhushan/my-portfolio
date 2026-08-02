import { useState, useEffect } from "react";
import logo3D from "../assets/tech_bhushan_3d_logo.png";

interface LogoIntroProps {
  onComplete?: () => void;
}

export default function LogoIntro({ onComplete }: LogoIntroProps) {
  const [phase, setPhase] = useState<"center" | "fly" | "done">("center");

  useEffect(() => {
    // Phase 1: 3D rotation & scale in screen center (1.8 seconds)
    const timer1 = setTimeout(() => {
      setPhase("fly");
    }, 1800);

    // Phase 2: Smooth transition towards top header logo position (0.8s)
    const timer2 = setTimeout(() => {
      setPhase("done");
      if (onComplete) onComplete();
    }, 2600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div className={`logo-intro-overlay ${phase}`}>
      <div className="logo-intro-glow-ring" />
      <div className="logo-intro-content">
        <div className="logo-3d-wrapper">
          <img
            src={logo3D}
            alt="Tech Bhushan 3D Logo"
            className="logo-3d-img-intro"
          />
        </div>
        <h1 className="logo-intro-text">Tech Bhushan</h1>
        <p className="logo-intro-subtitle">Technical & Product Architect</p>
      </div>
    </div>
  );
}

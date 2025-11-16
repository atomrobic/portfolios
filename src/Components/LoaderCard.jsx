import React, { useEffect } from "react";
import Snap from "snapsvg-cjs";
import { gsap, Quint, Back } from "gsap";

const Loader = () => {
  useEffect(() => {
    const s = Snap("#surface");

    const colors = ["#e9edef", "#efad42", "#e9435a", "#4aadad", "#83cead"];
    const circles = s.selectAll("circle");
    const circleGroups = [];

    circles.forEach((circle) => {
      const group = [];

      colors.forEach((color, j) => {
        const c = circle.clone();
        c.attr({
          stroke: color,
        });

        const length = c.getTotalLength();
        const delay = (colors.length - j) / 10;

        // Hide stroke initially
        c.attr({
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        // Animate stroke drawing
        gsap.to(c.node, {
          strokeDashoffset: 0,
          duration: 2.5,
          delay,
          ease: Quint.easeInOut,
          repeat: -1,
          yoyo: true,
        });

        // Rotate the circle slightly for movement
        gsap.to(c.node, {
          rotation: 360,
          transformOrigin: "50% 50%",
          ease: Back.easeInOut,
          delay,
          duration: 5,
          repeat: -1,
        });

        group.push(c);
      });

      circleGroups.push(group);
      circle.remove();
    });
  }, []);

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        id="surface"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 589.6 589.6"
      >
        <g>
          <circle
            fill="none"
            strokeWidth="25"
            strokeLinecap="round"
            strokeMiterlimit="10"
            cx="294.8"
            cy="294.8"
            r="282.3"
          />
          <circle
            fill="none"
            strokeWidth="25"
            strokeLinecap="round"
            strokeMiterlimit="10"
            cx="294.8"
            cy="294.8"
            r="238.6"
          />
          <circle
            fill="none"
            strokeWidth="25"
            strokeLinecap="round"
            strokeMiterlimit="10"
            cx="294.8"
            cy="294.8"
            r="194.9"
          />
          <circle
            fill="none"
            strokeWidth="25"
            strokeLinecap="round"
            strokeMiterlimit="10"
            cx="294.8"
            cy="294.8"
            r="154.4"
          />
          <circle
            fill="none"
            strokeWidth="25"
            strokeLinecap="round"
            strokeMiterlimit="10"
            cx="294.8"
            cy="294.8"
            r="117.9"
          />
        </g>
      </svg>
    </div>
  );
};

export default Loader;


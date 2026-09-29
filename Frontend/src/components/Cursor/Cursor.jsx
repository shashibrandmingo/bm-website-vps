import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    // Disable custom cursor on mobile / touch devices for maximum performance and battery savings
    const isTouchOrMobile =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 992;

    if (isTouchOrMobile) return;

    const outer = document.querySelector(".cursor-outer");
    const inner = document.querySelector(".cursor-inner");

    if (!outer || !inner) return;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    let animationFrameId;

    // MOVE CURSOR
    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      inner.style.left = mouseX + "px";
      inner.style.top = mouseY + "px";

      // make visible
      outer.style.visibility = "visible";
      inner.style.visibility = "visible";
    };

    document.addEventListener("mousemove", moveCursor);

    // SMOOTH OUTER CURSOR (LAG EFFECT)
    const animate = () => {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;

      outer.style.left = posX + "px";
      outer.style.top = posY + "px";

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // HOVER EFFECT
    const hoverItems = document.querySelectorAll("a, button");

    const handleMouseEnter = () => {
      outer.classList.add("cursor-hover");
      inner.classList.add("cursor-hover");
    };

    const handleMouseLeave = () => {
      outer.classList.remove("cursor-hover");
      inner.classList.remove("cursor-hover");
    };

    hoverItems.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      hoverItems.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"></div>
    </>
  );
};

export default Cursor;


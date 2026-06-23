import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Desktop1440Px from "../imports/Desktop1440Px/Desktop1440Px";
import Tablet768Px from "../imports/Tablet768Px/Tablet768Px";
import Mobile375Px from "../imports/Mobile375Px/Mobile375Px";

const TABLET_MIN_WIDTH = 375;
const TABLET_LAYOUT_WIDTH = 768;

function useViewportWidth() {
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);

    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);

    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  return viewportWidth;
}

function TabletViewport() {
  const viewportWidth = useViewportWidth();
  const contentRef = useRef<HTMLDivElement>(null);
  const [tabletHeight, setTabletHeight] = useState(0);

  const scale = Math.min(1, Math.max(TABLET_MIN_WIDTH / TABLET_LAYOUT_WIDTH, viewportWidth / TABLET_LAYOUT_WIDTH));

  useLayoutEffect(() => {
    const measureHeight = () => {
      if (!contentRef.current) {
        return;
      }

      setTabletHeight(contentRef.current.scrollHeight);
    };

    measureHeight();

    if (!contentRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(measureHeight);
    resizeObserver.observe(contentRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden" style={{ height: tabletHeight ? tabletHeight * scale : "auto" }}>
      <div
        className="absolute left-1/2 top-0"
        style={{
          width: `${TABLET_LAYOUT_WIDTH}px`,
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <div ref={contentRef}>
          <Tablet768Px />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const viewportWidth = useViewportWidth();
  const isMobile = viewportWidth < TABLET_MIN_WIDTH;
  const isTablet = viewportWidth >= TABLET_MIN_WIDTH && viewportWidth < TABLET_LAYOUT_WIDTH;
  const isDesktop = viewportWidth >= TABLET_LAYOUT_WIDTH;

  return (
    <div className="landing-app w-full min-h-screen bg-white font-['Roboto',sans-serif]">
      {isDesktop ? (
        <Desktop1440Px />
      ) : isTablet ? (
        <TabletViewport />
      ) : (
        <Mobile375Px />
      )}
    </div>
  );
}

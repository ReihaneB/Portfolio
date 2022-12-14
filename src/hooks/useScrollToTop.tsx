import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/work" && pathname !== "/lab") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

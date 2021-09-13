import { useEffect, useState } from "react";

import SideMenu from "../SideMenu";
import DesktopMenu from "../DesktopMenu";

export default function Header() {
  const [dimension, setDimension] = useState(0);

  useEffect(() => {
    function handleResize() {
      setDimension(() => window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return <>{dimension < 768 ? <SideMenu /> : <DesktopMenu />}</>;

}

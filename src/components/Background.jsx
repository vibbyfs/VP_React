import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

export const Background = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDark(theme === "dark");

    const handleThemeChange = () => {
      const updateTheme = localStorage.getItem("theme");
      setIsDark(updateTheme === "dark");
    };

    window.addEventListener("themeChange", handleThemeChange);

    return () => {
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  return (
    <div className=" flex justify-center">
      <div className="relative w-[400px] h-[400px] overflow-hidden">
        {isDark ? (
          <Spline
            scene="https://prod.spline.design/NjUgO1wi3xz5P7-o/scene.splinecode"
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <Spline
            scene="https://prod.spline.design/N-gL3Dk2-CZvOCWk/scene.splinecode"
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>
    </div>
  );
};

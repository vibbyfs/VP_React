import { AboutSection } from "../components/AboutSection";
import { Background } from "../components/Background";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Navbar */}
        <NavBar />
        {/* Main Content */}
        <main>
          <Background />
          <HeroSection />
          <AboutSection />
        </main>
        {/* Footer */}
      </div>
    </>
  );
};

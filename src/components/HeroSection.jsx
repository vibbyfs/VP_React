import Spline from "@splinetool/react-spline";
import { ArrowDown } from "lucide-react" 

export const HeroSection = () => {
  return (
    <section id="hero" className="h-full-screen">
      <div className="container mx-auto flex flex-col justify-center gap-5">
        <div className="space-y-8 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-45">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">Vibby</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl opacity-0 animate-fade-in-delay-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            harum quas incidunt illum aliquam adipisci inventore, accusamus eos
            qui quisquam, ad natus eaque modi provident ipsum sapiente, amet
            laudantium soluta!
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-1">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
      </div>
    </section>
  );
};

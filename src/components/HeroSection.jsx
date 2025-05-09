import Spline from "@splinetool/react-spline";

export const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col justify-center gap-5">
        <div className="space-y-8 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-45">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <span>Hi,</span>
            <span> I'm Vibby</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            harum quas incidunt illum aliquam adipisci inventore, accusamus eos
            qui quisquam, ad natus eaque modi provident ipsum sapiente, amet
            laudantium soluta!
          </p>
        </div>
      </div>
    </section>
  );
};

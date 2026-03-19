import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of the time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lighting-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            {/* About Me Details */}
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur sequi atque impedit quae asperiores. Ipsa nulla velit
                dolorem aperiam dolorum!
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur sequi atque impedit quae asperiores. Ipsa nulla velit
                dolorem aperiam dolorum!
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur sequi atque impedit quae asperiores. Ipsa nulla velit
                dolorem aperiam dolorum!
              </p>
            </div>

            {/* Mission */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore aliquid consectetur debitis, iusto eius veritatis
                dolores assumenda iste veniam eveniet."
              </p>
            </div>
          </div>
          {/* Left Column - END */}

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
          {/* Right Column - END */}
        </div>
      </div>
    </section>
  );
};
export default About;

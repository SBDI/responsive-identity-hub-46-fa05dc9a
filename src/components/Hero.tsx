import { useEffect, useState } from "react";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Flutter Developer", "Software Engineer", "Tech Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-secondary/30 pt-16"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Hi, I'm{" "}
            <span className="text-primary">Muhammad Nouman Khan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/80 h-8">
            {roles[roleIndex]}
          </h2>
          <p className="text-lg text-foreground/60 max-w-lg">
            Passionate about creating beautiful and functional mobile applications
            that make a difference.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse" />
            <img
              src="/images/profile.jpg"
              alt="Muhammad Nouman Khan"
              className="absolute inset-1 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
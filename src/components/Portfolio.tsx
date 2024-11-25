const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce App",
      description: "A full-featured shopping app built with Flutter and Firebase",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500",
      tags: ["Flutter", "Firebase", "Stripe"],
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time analytics dashboard for social media management",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
      tags: ["Flutter", "REST API", "Charts"],
    },
    {
      title: "Fitness Tracker",
      description: "Health and fitness tracking app with workout plans",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500",
      tags: ["Flutter", "SQLite", "BLoC"],
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary rounded-full text-sm text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
import { Code, Database, GitBranch, ChartBar, Server, Cloud, TrendingUp, Beaker } from "lucide-react";

const About = () => {
const skills = [
  {
    icon: <Code className="h-6 w-6" />,
    name: "Python Programming",
    description: "Building machine learning models, data analysis pipelines, and scalable solutions.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    name: "Data Management & SQL",
    description: "Expert in database querying, data cleaning, and ETL workflows for large datasets.",
  },
  {
    icon: <ChartBar className="h-6 w-6" />,
    name: "Data Visualization",
    description: "Creating impactful dashboards and reports using Power BI, Tableau, and Matplotlib.",
  },
  {
    icon: <Server className="h-6 w-6" />,
    name: "Machine Learning & AI",
    description: "Developing predictive models, deploying AI solutions, and optimizing algorithms for business use cases.",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    name: "Cloud Computing",
    description: "Deploying machine learning solutions on Azure and leveraging cloud services for scalability.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    name: "Predictive Analytics",
    description: "Driving actionable insights through advanced predictive modeling and statistical analysis.",
  },
  {
    icon: <Beaker className="h-6 w-6" />,
    name: "Computer Vision",
    description: "Implementing vision-based solutions using TensorFlow, Keras, and OpenCV for industry applications.",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    name: "Version Control",
    description: "Proficient in Git workflow and collaborative development using GitHub.",
  },
];


  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-foreground/80">
           I am a seasoned data scientist with a proven track record of unraveling complex and challenging topics through the lens of data. 
            With 3+ years of hands-on experience in the field, I thrive on leveraging the power of data to drive informed decision-making.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-foreground/60">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

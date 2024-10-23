"use client";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col justify-center items-center p-5 w-96 rounded-lg border-[1px] border-solid hover:shadow-lg ">
      <h3 className="text-2xl font-bold tracking-tighter">{title}</h3>
      <p className="text-medium mt-2 text-center">{description}</p>

      {link && (
        <a
          href={link}
          className="text-greenish font-bold tracking-tighter mt-5"
        >
          View on GitHub
        </a>
      )}
    </div>
  );
};

const About = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <a className="absolute top-5 left-5 font-black tracking-tighter" href="/">
        Back
      </a>

      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold">About Me</h1>
        <p className="text-medium w-1/2 text-center px-10 mt-5">
          I'm a 17 year old full-stack developer from Israel, with experience in
          React, Next.js, Node.js, and more. I'm currently working on a few
          projects, and I'm always looking for new opportunities.
        </p>

        <div className="flex flex-col items-center mt-10">
          <h2 className="text-4xl font-bold">Projects</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            <ProjectCard
              title="cartuner"
              description="A full-stack, e-commerce website that connects car owners with tuners around the globe."
              link="https://github.com/idocalm/cartuner"
            />
            <ProjectCard title="Project 2" description="Description 2" />
            <ProjectCard title="Project 3" description="Description 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

interface ProjectProps {
  project: Project;
}

export default function Project({ project }: ProjectProps) {
  return (
    <div>
      <div>
        <h4>Title</h4>
        <h3>{project.name}</h3>
      </div>
      <div>
        <h3>Technologies</h3>
        <h5>{project.technologies}</h5>
      </div>
      <div>
        <h3>Description</h3>
        <p>{project.description}</p>
      </div>
      <div>
        <h3>Github Repo</h3>
        <p>{project.githubUrl}</p>
      </div>
      <div>
        <h3>Live Deployment</h3>
        <p>{project.liveUrl}</p>
      </div>
    </div>
  );
}

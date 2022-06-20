type Project = {
	id: number;
	title: string;
	description: string;
	image: string;
	viewLink: string;
	codeLink: string;
};

interface ProjectProps {
	project: Project;
}

const Project = ({ project }: ProjectProps) => {
	return (
		<article>
			<img src={project.image} />
			<h3>{project.title}</h3>
			<p>{project.description}</p>
			<a href={project.viewLink}>View</a>
			<a href={project.codeLink}>Code</a>
		</article>
	);
};

export default Project;

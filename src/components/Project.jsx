const Project = ({title, desc, image, link}) => {
    return (
        <a className="project" href={link} target="_blank" rel="noreferrer">
            <div className="title">{title}</div>
            <img src={"https://kamiri-projects-api.azurewebsites.net" + image} alt="project_image" />
            <div className="desc">{desc}</div>
        </a>
    )
}

export default Project;

const Project = ({title, description, image, link, icons}) => {

    const imagePath = require(`../${image}`);

    return (
        <a href={link} className="project" target="_blank" rel="noreferrer">
            <div className="img-wrapper">
                <img src={imagePath} alt="project-img" />
            </div>

            <div className="meta">
                <div className="name">{title}</div>
                <div className="description">{description}</div>

                <div className="icons">
                    {icons.split(' ').map(icon => <i key={icon} className={`bx bxl-${icon}`}></i>)}
                </div>
            </div>
        </a>
    )
}

export default Project;
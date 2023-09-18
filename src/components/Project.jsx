const Project = ({name, description, image, url, icons}) => {

    const imagePath = require(`../${image}`);

    return (
        <div className="project">
            <div className="img-wrapper">
                <img src={imagePath} alt="project-img" />
            </div>

            <div className="meta">
                <div className="name">{name}</div>
                <div className="description">{description}</div>

                <div className="icons">
                    {icons.split(' ').map(icon => <i key={icon} className={`bx bxl-${icon}`}></i>)}
                </div>
            </div>
        </div>
    )
}

export default Project;
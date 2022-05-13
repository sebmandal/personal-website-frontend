const project = (props: any) => {
        return (
                <div className="project">
                        <img src={props.image} alt={props.title + ' image'} />
                        <h2 className="project-title">{props.title}</h2>
                        <p className="project-description">
                                {props.description}
                        </p>
                </div>
        )
}

export default project

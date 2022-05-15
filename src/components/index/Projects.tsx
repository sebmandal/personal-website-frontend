import Project from './Project'
import { tebone, salvus, mcapi, waveTop, waveBottom } from '../../Images'

const Projects = () => {
        return (
                <>
                        <img src={waveTop} alt="wave effect" className="wave" />

                        <section className="index-projects">
                                <h1 className="title">My favorite projects</h1>
                                <div className="projects-container">
                                        <Project
                                                title="Tebone"
                                                image={tebone}
                                                description="Tebone is a web framework made to make web development accessible and reliable for anyone."
                                        />

                                        <Project
                                                title="Salvus"
                                                image={salvus}
                                                description="Salvus is a website containing everything from end-to-end encryption, to multifactor authentication, and more!"
                                        />

                                        <Project
                                                title="MCAPI"
                                                image={mcapi}
                                                description="MCAPI is a Minecraft API that delivers information on everything from blocks and entities, to mobs."
                                        />
                                </div>
                        </section>

                        <img
                                src={waveBottom}
                                alt="wave effect"
                                className="wave"
                        />
                </>
        )
}

export default Projects

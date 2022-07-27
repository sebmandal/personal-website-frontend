import Project from './Project'
import WaveTop from '../svgs/WaveTop'
import WaveBottom from '../svgs/WaveBottom'
import { tebone, salvus, mcapi } from '../../Images'

const Projects = () => {
        return (
                <>
                        <WaveTop />

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

                        <WaveBottom />
                </>
        )
}

export default Projects

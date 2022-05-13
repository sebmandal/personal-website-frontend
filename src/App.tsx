import './scss/App.sass'
import {
        //portrait,
        portraitTransparent,
        tebone,
        salvus,
        mcapi,
        waveTop,
        waveBottom,
        burger,
} from './Images'
import Navbar from './components/Navbar'
import Project from './components/Project'

const Home = () => {
        return (
                <div className="app">
                        <Navbar />
                        <img
                                src={waveBottom}
                                alt="wave effect"
                                className="wave"
                        />

                        <section className="intro">
                                <div className="portrait">
                                        <img
                                                src={portraitTransparent}
                                                alt="portrait of me"
                                        />
                                </div>
                                <h1 className="title">
                                        <span>Welcome! {"I'm "}</span>
                                        <span className="accent">
                                                Sebastian
                                        </span>
                                        <span>.</span>
                                </h1>
                                <p className="description">
                                        I love statistics, logistics,
                                        mathematics, and media. I also play golf
                                        on my free time!
                                </p>
                        </section>

                        <img src={waveTop} alt="wave effect" className="wave" />

                        <section className="projects">
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
                </div>
        )
}

export default Home

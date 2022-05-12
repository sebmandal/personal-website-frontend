import './scss/App.sass'
import {
        portrait,
        portraitTransparent,
        tebone,
        salvus,
        mcapi,
        waveTop,
        waveBottom,
} from './Images'

const Home = () => {
        return (
                <div className="app">
                        <nav className="nav">
                                <h1 className="title">sebmandal.</h1>
                                <div className="links">
                                        <a className="nav-link active" href="#">
                                                Home
                                        </a>
                                        <a className="nav-link" href="#">
                                                Services
                                        </a>
                                        <a className="nav-link" href="#">
                                                CV
                                        </a>
                                </div>
                        </nav>

                        <img
                                src={waveBottom}
                                alt="wave effect"
                                className="wave"
                        />

                        <section className="intro">
                                <div className="portrait">
                                        <img
                                                src={portrait}
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
                                        mathematics, and media.
                                        <br />I also play golf on my free time!
                                </p>
                        </section>

                        <img src={waveTop} alt="wave effect" className="wave" />

                        <section className="projects">
                                <h1 className="title">My favorite projects</h1>
                                <div className="projects-container">
                                        <div className="project">
                                                <img
                                                        src={tebone}
                                                        alt="tebone logo"
                                                />
                                                <h2 className="project-title">
                                                        Tebone
                                                </h2>
                                                <p className="project-description">
                                                        Tebone is a web
                                                        framework made to make
                                                        web development
                                                        accessible and reliable
                                                        for anyone.
                                                </p>
                                        </div>
                                        <div className="project">
                                                <img
                                                        src={salvus}
                                                        alt="salvus logo"
                                                />
                                                <h2 className="project-title">
                                                        Salvus
                                                </h2>
                                                <p className="project-description">
                                                        Salvus is a website
                                                        containing everything
                                                        from end-to-end
                                                        encryption, to
                                                        multifactor
                                                        authentication, and
                                                        more!
                                                </p>
                                        </div>
                                        <div className="project">
                                                <img
                                                        src={mcapi}
                                                        alt="mcapi logo"
                                                />
                                                <h2 className="project-title">
                                                        MCAPI
                                                </h2>
                                                <p className="project-description">
                                                        MCAPI is a Minecraft API
                                                        that delivers
                                                        information on
                                                        everything from blocks
                                                        and entities, to mobs.
                                                </p>
                                        </div>
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

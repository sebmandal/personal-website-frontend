import { portraitTransparent } from '../Images'

const Intro = () => {
        return (
                <>
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
                </>
        )
}

export default Intro

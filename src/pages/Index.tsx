import '../scss/Index.sass'
import Navbar from '../components/Navbar'
import Intro from '../components/index/Intro'
import Projects from '../components/index/Projects'

const Index = () => {
        return (
                <>
                        <Navbar pageTitle="home" />
                        <Intro />
                        <Projects />
                </>
        )
}

export default Index

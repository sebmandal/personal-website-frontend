import './scss/App.sass'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Projects from './components/Projects'

const Home = () => {
        return (
                <div className="app">
                        <Navbar />
                        <Intro />
                        <Projects />
                </div>
        )
}

export default Home

import { useState } from 'react'

const Nav = () => {
        const [mobileExpanded, setMobileExpanded] = useState(false)
        const handleClick = () => {
                setMobileExpanded(!mobileExpanded)
        }
        const linkStyle = {
                display: mobileExpanded ? 'flex' : 'none',
                transition: 'all 1s ease-in-out',
        }

        return (
                <nav className="nav">
                        <h1 className="title">sebmandal.</h1>
                        <div className="nav-toggle">
                                <svg
                                        fill="#000000"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24px"
                                        height="24px"
                                        onClick={handleClick}
                                >
                                        <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
                                </svg>
                        </div>

                        {mobileExpanded ? <div className="break"></div> : ''}

                        <div className="links" style={linkStyle}>
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
        )
}

export default Nav

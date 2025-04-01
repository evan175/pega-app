import { Link } from "react-router-dom"
import './styles.css' 
import { useState } from "react";

export default function NavBar() {
    const [isHovering, setIsHovering] = useState(false);
    const [createClicked, setCreateClicked] = useState(false);

    return(
        <div className={`container${isHovering ? ' sb-expanded' : ''}`}  >
            <aside className="primary" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                <nav>
                    <div className="header">
                        <Link to={''}>
                            <span style={{ color:"white" }}><b>PEGA</b></span>
                        </Link>
                        <Link className="hide">
                            <span>Demo</span>
                        </Link>
                    </div>
                    <div className="searchbar">
                        <span className="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
                        <input className="search-input" type="text" placeholder="Search"></input>
                    </div>
                    <hr></hr>
                    <div className={`dropdown${isHovering && createClicked ? ' dd-expanded' : ''}`}>
                        <div onClick={() => setCreateClicked(!createClicked)} className="create">
                            {createClicked ? <i class="fa-solid fa-x"></i> : <i class="fa-solid fa-plus"></i>}
                            <button >Create</button>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <ul className="dropdown-items">
                            <li>
                                <Link to={'/bug'}>
                                    <span>Bug</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/epic'}>
                                    <span>Epic</span>
                                </Link>
                            </li>
                        </ul> 
                    </div>
                    <ul className="middle">
                        <li>
                            <Link to={''}>
                                <i className="fa fa-home"></i>
                                <span>Home</span>
                            </Link>

                        </li>
                        <li>
                            <Link to={'/bug'}>
                                <i class="fa-regular fa-user"></i>
                                <span>Bugs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/epic'}>
                                <i class="fa-solid fa-square"></i>
                                <span>Epics</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="bottom">
                        <li>
                            <Link>
                                <i class="fa-solid fa-bell"></i>
                                <span>Notifications</span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <i class="fa-solid fa-clock-rotate-left"></i>   
                                <span>Recents</span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <i class="fa-solid fa-clipboard-check"></i>   
                                <span>Applications</span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <i class="fa-solid fa-user"></i>  
                                <span>Log In</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
        
    )
}

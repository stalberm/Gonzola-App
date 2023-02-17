import './Navbar.css'

import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <div className="nav-bar">
            <ul className='list'>
                <li className='item'><NavLink to="/" className="link">Home</NavLink></li>
                <li className='item'><NavLink to="/learn-more" className="link">Learn More</NavLink></li>
                <li className='item'><NavLink to="/join" className="link">Join Us</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
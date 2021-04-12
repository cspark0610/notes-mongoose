import react from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';



function Navbar(){
    return (
        <nav className="navbar navbar-dark bg-dark">
            <h4><Link className='link' to='/'>HOME</Link></h4>
            <h4><Link className='link' to ='/notes'>NOTES</Link> </h4>
            <h4><Link className='link' to ='/create'>CREATE NOTE</Link></h4>
        </nav>
    )


}
export default Navbar

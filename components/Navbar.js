import {Link} from 'react-scroll'
import { NavContainer, NavLink } from './Navbar.styles';

const Navbar = () => {
    return <>
    <NavContainer>
        <NavLink>
            <Link to="work" spy={true} smooth={true}>
                    Work
            </Link>
        </NavLink>
        {/* <NavLink>
            <Link prefetch href="/info">
                    Info
            </Link>
        </NavLink> */}
        <NavLink>
            <Link to="contact" spy={true} smooth={true}>
                    Contact
            </Link>
        </NavLink>
    </NavContainer>

    </>
};
export default Navbar
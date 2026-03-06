import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <nav>
            <Link to = {`/`}>
                Dashboard
            </Link>
            <Link to = {`/content`}>
                Content Manager 
            </Link>
            <Link to = {`/distribution`}>
                Distribution
            </Link>
            <Link to = {`/admin`}>
                Admin Control
            </Link>
            <Link to = {`/signin`}>
                Sign in
            </Link>
        </nav>
    )
}

export default NavBar

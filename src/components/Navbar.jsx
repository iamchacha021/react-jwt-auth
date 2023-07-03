import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthContext";


const Navbar = () => {
    const [me, setMe] = useState('')
    
    const {logout} = useContext(AuthContext)
    const isLoggedIn = sessionStorage.getItem("jwtToken")
    const handleLogout = ()=>{
        logout()
    }


    useEffect(()=>{
        fetch('http://localhost:3000/me')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setMe(data)
        })
    }, [isLoggedIn])

    return ( 
        
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">JWT Auth</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {isLoggedIn? (
                <div>
                    <button className="btn btn-warning" onClick={handleLogout}>Log Out</button>
                </div>
                ):(
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavLink className="nav-link active btn btn-primary mx-3 p-2" aria-current="page" to='/login'>Login</NavLink>
                    <NavLink className="nav-link active btn btn-primary mx-2 p-2" aria-current="page" to="/signup">Sign Up</NavLink>
                </div>

                )}
            </div>
        </nav>
     );
}
 
export default Navbar;
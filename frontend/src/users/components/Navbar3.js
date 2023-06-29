import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
export default function Navbar3() {
    // const [ data, setData ] = useState()
    // useEffect(async() => {
    //     try{const response= await fetch("https://jsonplaceholder.typicode.com/todos/1")
    //     const responseData = await response.json()

    //     console.log(responseData)
    //     }
    //     catch(err){console.log(err)}
    //     }, [])

  return (
    <div>
      <nav className='main-nav'>
        {/*                         1st part logo                                         */}
        <div className='logo'>
            <h2>
                <span>N</span>IGHT
                <span>C</span>ANTEEN
            </h2>
        </div>
        {/*                          2nd menu part                                         */}
        <div className='menu-link'>
            <ul>
                <li className='without-bullet'>
                    <Link className='navbar-link' to='/'><button className='link-button'>Home</button></Link>
                </li>
                <li className='without-bullet'>
                    <Link className='navbar-link' to='/'><button className='link-button'>Menu</button></Link>
                </li>
                <li className='without-bullet'>
                    <Link className='navbar-link' to='/'><button className='link-button'>About</button></Link>
                </li>
                <li className='without-bullet'>
                    <Link className='navbar-link' to='/'><button className='link-button'>Services</button></Link>
                </li>
            </ul>

        </div>
        {/*                         3rd part log in                                         */}
        <div className='login'>
            <ul>
                <li className='without-bullet'><Link to='/Login'><button className='user-button'>Log In</button></Link></li>
                <li className='without-bullet'><Link to='/Login'><button className='user-button'>Sign In</button></Link></li>
            </ul>
            {/*                         ham berger menu start                               */}
            
        </div>
        
        <nav className="navbar ofc fixed-top media">
            <div className="container-fluid">
                    <a className="navbar-brand" href="/"><b>Night Canteen</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Night Canteen</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/Login">Log In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Sign In</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </nav>
      </nav>
    </div>
  )
}

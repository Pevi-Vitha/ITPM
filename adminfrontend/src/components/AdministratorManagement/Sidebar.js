import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div> 
             <section id="sidebar" style={{height: "100vh", backgroundImage: `url(${require('../components/AdministratorManagement/img/img3.jpg')})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                <span className="brand">FashionHub</span>
                <ul className="side-menu top">
                    <li>
                        <a href={"/Dashboard"}>
                            <i className='bx bxs-dashboard' ></i>
                            <span className="text">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/ManageUseres">
                            <i className='bx bx-user'></i>
                            <span className="text">User Management</span>
                        </a>
                    </li>
                    <li>
                        <a href="/Report">
                            <i className='bx bxs-analyse'></i>
                            <span className="text">Generate User List</span>
                        </a>
                    </li>
                    <li>
                        <a href="/Backup">
                            <i className='bx bx-cloud bx-flip-horizontal' ></i>
                            <span className="text">Backup & Restore</span>
                        </a>
                    </li>
                    <li>
                        <Link to="/LandingPage" className="logout">
                            <i className='bx bx-exit'></i>
                            <span className="text">Logout</span>
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Sidebar;

/*import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {

    const [users, setUsers] = useState([]);

    //Fetch data
    useEffect(() => {
        function getUsers() {
            axios.get("http://localhost:8070/admin/")
                .then((res) => {
                    setUsers(res.data);
                }).catch((err) => {
                    alert(err.message);
                })
        }
        getUsers();
    }, [])

    const length = users.length;

    return (
        <body style={{ margin: "0", padding: "0", backgroundImage: `url(${require('../AdministratorManagement/img/img1.jpg')})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "100vh" }}>
            <div>
                <section id="sidebar">
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
                            <a className="logout" href="/login">
                                <i className='bx bx-exit'></i>
                                <span className="text">Logout</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
            <section id="content">

                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>Dashboard</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="#" className='active'>User Dashboard</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <ul className="box-info">
                        <li>
                            <i className='bx bxs-user' undefined ></i>
                            <span className="text">
                                <h3>{length}</h3>
                                <p>Total Users</p>
                            </span>
                        </li>
                        <li>
                            <i className='bx bxs-group' ></i>
                            <span className="text">
                                <h3>0</h3>
                                <p>Other Visitors</p>
                            </span>
                        </li>
                        <li>
                            <i className='bx bxs-cloud-upload'></i>
                            <span className="text">
                                <h3>0</h3>
                                <p>Total Backups</p>
                            </span>
                        </li>
                    </ul>
                </main>
            </section>
        </body>
    )
}

export default Dashboard;*/


import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalBackups, setTotalBackups] = useState(0);

    // Fetch data
    useEffect(() => {
        // Fetch total Users
        axios.get("http://localhost:8070/admin/")
            .then((res) => {
                setTotalUsers(res.data.length);
            }).catch((err) => {
                console.log(err);
            });

        // Fetch total backups
        axios.get("http://localhost:8070/admin/backups")
            .then((res) => {
                setTotalBackups(res.data.length);
            }).catch((err) => {
                console.log(err);
            });

            }, []);

    return (
        
        <body style={{ margin: "0", padding: "0", backgroundImage: `url(${require('../AdministratorManagement/img/img11.jpg')})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "100vh" }}>
            <div>
                <section id="sidebar">
                    <span className="brand">FashionHub</span>
                    <ul className="side-menu top">
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
                            <a className="logout" href="/login">
                                <i className='bx bx-exit'></i>
                                <span className="text">Logout</span>
                            </a>
                        </li>
                    </ul>
                    </ul>
                </section>
            </div>
            <section id="content">
                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>Dashboard</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="#" className='active'>User Dashboard</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="box-info">
                        <li>
                            <i className='bx bxs-user' undefined ></i>
                            <span className="text">
                                <h3>{totalUsers}</h3>
                                <p>Total Users</p>
                            </span>
                        </li>
                        
                        <li>
                            <i className='bx bxs-cloud-upload'></i>
                            <span className="text">
                                <h3>{totalBackups}</h3>
                                <p>Total Backups</p>
                            </span>
                        </li>
                    </ul>
                </main>
            </section>
        </body>
    )
}

export default Dashboard;


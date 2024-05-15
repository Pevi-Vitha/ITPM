import React,{useState} from "react"
import axios from "axios"
import {useNavigate, Link} from 'react-router-dom';

export default function AddUser(){

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newUser = {
            name,
            role,
            email,
            userName,
            password
        }

        axios.post("http://localhost:8070/admin/add",newUser).then(()=>{
            
            alert("User Created");
            navigate('/ManageUseres');

        }).catch((err)=>{
            alert(err)
        })

    }

    return(
                <body>
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
                                    <h1>User Management</h1>
                                    <ul className="breadcrumb">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#">User Management</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#" className='active'>Add User</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Add User</h3>
                                    </div>
                                    
                                    <form onSubmit={sendData} >
                                        
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="name"  className="col-sm-2 col-form-label">Name</label>
                                            <input type="text" className="form-control form-control-user"  id="name" placeholder="Enter Name"
                                            onChange={(e)=>{
                                                setName(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="inputState" className="col-sm-2 col-form-label">Role</label>
                                            <select id="inputState" className="form-control form-control-user" 
                                            onChange={(e)=>{
                                                setRole(e.target.value);
                                            }}>
                                                <option defaultValue>Choose...</option>
                                                <option>Administrator </option>
                                                    <option>Supplier Manager</option>
                                                    <option>Financial Manager</option>
                                                    <option>HumanResource Manager</option>
                                                    <option>Client Manager</option>
                                                    <option>Reservoir Manager</option>
                                                    <option>Inventory Manager</option>
                                                    <option>Sales Manager</option>
                                            </select>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                                            <input type="email"  className="form-control form-control-user" id="email" placeholder="Enter email"
                                            onChange={(e)=>{
                                                setEmail(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="userName" className="col-sm-2 col-form-label">Username</label>
                                            <input type="text"  className="form-control form-control-user" id="userName" placeholder="Enter Username"
                                            onChange={(e)=>{
                                                setUserName(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                                            <input type="password" className="form-control form-control-user" id="password" placeholder="Password"
                                            onChange={(e)=>{
                                                setPassword(e.target.value);
                                            }}/>
                                        </div>
                                        <br/>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                                                <Link to={'/ManageUseres'}><button type="reset" className="btn btn-danger btn-sm">Cancel</button></Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </main>
                    </section>
                </body>
    )
}
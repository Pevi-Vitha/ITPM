import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditUser(){

            const navigate = useNavigate();
            const {id} = useParams();
            const [users, setUsers] = useState({
                name: '',
                role: '',
                email: '',
                userName: '',
                password: ''
            });

            //Fetch data
            useEffect(()=>{
                function getUsers (){
                    axios.get("http://localhost:8070/admin/get/"+id)
                    .then((res)=>{
                        setUsers(res.data.admin);
                    }).catch((err)=>{
                        alert(err.message);
                    })
                }
                getUsers();
            },[id])

            const handleChange = (e) => {
                setUsers({
                  ...users,
                  [e.target.name]: e.target.value
                });
              };
            
              const handleSubmit = (e) => {
                e.preventDefault();
                console.log(users); // or save the data to your backend
                axios
                .put('http://localhost:8070/admin/update/' +id, users)
                .then((response) => {
                    console.log(response.data);
                    alert("User Updated");
                    navigate('/ManageUseres');
                })
                .catch((error) => {
                    console.log(error);
                });
              };
            

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
                                            <a className="active" href="#">Edit User</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Edit User</h3>
                                    </div>
                                    <form onSubmit={handleSubmit} >
                                        
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="name"  className="col-sm-2 col-form-label">Name</label>
                                            <input type="text" className="form-control form-control-user" name="name" id="name" value={users.name}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="inputState" className="col-sm-2 col-form-label">JobRole</label>
                                            <select id="inputState" className="form-control form-control-user"  name="role" value={users.role}
                                            onChange={handleChange}>
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
                                            <input type="text"  className="form-control form-control-user" id="email"  name="email" value={users.email}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="userName" className="col-sm-2 col-form-label">Username</label>
                                            <input type="text"  className="form-control form-control-user" id="userName" name="userName" value={users.userName}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                                            <input type="text" className="form-control form-control-user" id="password" name="password" value={users.password}
                                            onChange={handleChange}/>
                                        </div>
                                        <br/>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <button type="submit" className="btn btn-primary btn-sm">Save</button>
                                                <Link to={'/ManageUseres'}><button type="reset" className="btn btn-secondary btn-sm">Cancel</button></Link>
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
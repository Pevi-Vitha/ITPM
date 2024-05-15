import React, { useState } from "react";
import { Link } from "react-router-dom";
//import './css/paths.css';

function UsersPaths() {
  return (
    <body>
         <section class="vh-100">
                <div class="container py-5 h-100">

        <div class="container mt-5">
                    <div class="row d-flex justify-content-center align-items-center h-100"></div>
            
                <div class="row">
                <div class="col-md-4">
                <Link to={'/Dashboard'}><div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="https://img.freepik.com/free-vector/system-administrator-technical-work-with-server-software-installation-troubleshooting-online-security-configuration-computer-systems-networks-flat-vector-illustration_613284-1012.jpg?w=360" width="70"/>
                                <div class="d-flex flex-column ml-2"><span class="text-black-50">User Management</span><span class="ratings"></span></div>
                            </div>
                        </div></Link>
                    </div>
                </div>
            </div>
            </div>
            </section>
        </body>
)}
export default UsersPaths;
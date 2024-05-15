import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import { Link } from "react-router-dom";
import backgroundImage from '../AdministratorManagement/img/img11.jpg'; // Import the background image

import 'jspdf-autotable';

export default function Report() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function getUsers() {
    axios
      .get("http://localhost:8070/admin/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    setSearchInput("");
  }

  useEffect(() => {
    getUsers();
  }, []);

  function handlePdfGeneration() {
    const doc = new jsPDF();
    
    // Set table header
    const header = [["No", "Name", "Role", "Email", "User Name",]];

    // Add data rows
    const data = users.map((u, index)=> [index+1, u.name, u.role, u.email, u.userName]);

    // Add table to document
    doc.autoTable({ head: header, body: data });

    // Download the PDF document
    doc.save('Users.pdf');
  }

  return (
    <body style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
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
          <br />
          <br />
            <main>
                <div className="head-title">
                    <div className="left">
                        <h1>Existing User's Report</h1>
                        <br />
                                
                    </div>
                </div>
                <div className="container">
                <div className="table">
                    <table className="table-striped">
                        <thead>
                          <tr>
                                  <th>No</th>
                                  <th>Name</th>
                                  <th>Role</th>
                                  <th>Email</th>
                                  <th>User Name</th>
                          </tr>
                        </thead>
                        
                        <tbody>
                        {users.map((i, index) => {
                            return (
                                <tr key={index}>
                                <td>{index+1}</td>
                                <td>{i.name}</td>
                                <td>{i.role}</td>
                                <td>{i.email}</td>
                                <td>{i.userName}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <br/>
                    <button  className='btn btn-primary' onClick={handlePdfGeneration}>
                    Generate PDF
                </button>
                    </div>
                </div>
                
            </main>
        </section>
        
     </body>
  );
}

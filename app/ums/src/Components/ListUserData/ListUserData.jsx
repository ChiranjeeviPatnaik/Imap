import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listAllUsers, deleteUser } from "../../Services/ApiService";
import "./ListUserData.css";
import { GrUpdate } from "react-icons/gr";
import { IoMdPersonAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

const ListUserData = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers();
    }, []);

    // Fetch users
    function getAllUsers() {
        listAllUsers()
            .then((response) => setUsers(response.data))
            .catch((error) => console.error(error));
    }

    // Navigate to Add User Page
    const addNewUser = () => navigate("/add-user");

    // Navigate to Edit User Page
    const updateUser = (id) => navigate(`/edit-user/${id}`);

    // Delete User
    const removeUser = (id) => {
        deleteUser(id)
            .then(() => getAllUsers())
            .catch((error) =>
                console.error("There was an error deleting the user!", error)
            );
    };

    return (
        <div className="ListUserData_container">
            {/* Close Button */}
            <button
                className="closeButton"
                aria-label="Close"
                onClick={() => navigate("/home")}
            >
                <IoIosClose />
            </button>

            {/* Title */}
            <h2>List of Users</h2>

            {/* Add User Button */}
            <button className="AddIcon" onClick={addNewUser}>
                <IoMdPersonAdd className="icon" />
                <span className="AddUserButton">Add User</span>
            </button>

            {/* Users Table */}
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                        <th>Role</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.emailId}</td>
                                <td>{user.role}</td>
                                <td>{user.phoneNumber}</td>
                                <td>
                                    <button
                                        className="ActionIcon"
                                        aria-label="Update User"
                                        onClick={() => updateUser(user.id)}
                                    >
                                        <GrUpdate />
                                    </button>
                                    <button
                                        className="ActionIcon"
                                        aria-label="Delete User"
                                        onClick={() => removeUser(user.id)}
                                    >
                                        <MdDeleteForever />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="emptyRow">
                                No users found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListUserData;

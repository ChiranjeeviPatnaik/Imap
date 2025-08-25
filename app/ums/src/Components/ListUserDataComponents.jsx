import { React, useState, useEffect } from "react"
import { listAllUsers, deleteUser } from "../Services/ApiService";
import { useNavigate } from "react-router-dom";

const ListUserDataComponents = () => {

    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers();
    }, [])
    function getAllUsers() {
        listAllUsers().then((response) => {
            setUsers(response.data)
        }).catch(error => {
            console.error(error);
        });
    }

    // Function to navigate to add user page
    function addNewUser() {
        navigate('/add-user');
    }

    // Function to navigate to edit user page
    function updateUser(id) {
        navigate(`/edit-user/${id}`);
    }

    // Function to delete user
    function removeUser(id) {
        deleteUser(id).then((response) => {
            getAllUsers();
        }).catch(error => {
            console.error("There was an error deleting the user! ", error);
        });
    }


    return (
        <div className="container">
            <h2 className="text-center">List of Users</h2>
            <button className="btn btn-dark mb-2" onClick={addNewUser}>Add User</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                        <th>Role</th>
                        <th>Phone Number</th>
                        <th className="text-center">Actions</th>
                        {/* <th>Delete</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.emailId}</td>
                                <td>{user.role}</td>
                                <td>{user.phoneNumber}</td>
                                <td>
                                    <button className="btn btn-dark" onClick={() => updateUser(user.id)}>Update</button>
                                    <button className="btn btn-dark" onClick={() => removeUser(user.id)}
                                        style={{ marginLeft: '10px' }}>Delete</button>
                                </td>
                                {/* <td>
                            <button className="btn btn-dark">Delete</button>
                        </td> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListUserDataComponents

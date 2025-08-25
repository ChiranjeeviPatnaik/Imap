import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createUser, getUserById, updateUser } from "../../Services/ApiService";
import "./AddUserByAdmin.css";

const AddUserByAdmin = () => {
    // State for Form Inputs 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [role, setRole] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    // React Router hooks
    const navigate = useNavigate();
    const { id } = useParams();

    // State for Validation Errors 
    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        emailId: "",
        role: "",
        phoneNumber: "",
    });

    // Load Data if Editing 
    useEffect(() => {
        if (id) {
            getUserById(id)
                .then((response) => {
                    const user = response.data;
                    setFirstName(user.firstName);
                    setLastName(user.lastName);
                    setEmailId(user.emailId);
                    setRole(user.role);
                    setPhoneNumber(user.phoneNumber);
                })
                .catch((error) =>
                    console.error("There was an error fetching the user! ", error)
                );
        }
    }, [id]);

    // Save or Update User 
    function saveOrUpdateUser(e) {
        e.preventDefault();
        if (validateForm()) {
            const userInfo = { firstName, lastName, emailId, role, phoneNumber };
            if (id) {
                updateUser(id, userInfo)
                    .then(() => navigate("/users"))
                    .catch((error) =>
                        console.error("There was an error updating the user! ", error));
            } else {
                createUser(userInfo)
                    .then(() => navigate("/users"))
                    .catch((error) =>
                        console.error("There was an error creating the user! ", error));
            }
        }
    }

    // Go Back to List 
    function backToList(e) {
        e.preventDefault();
        navigate("/users");
    }

    // Validation 
    function validateForm() {
        let isValid = true;
        const errorCopy = { ...error };

        errorCopy.firstName = firstName.trim() ? "" : "First Name is required";
        errorCopy.lastName = lastName.trim() ? "" : "Last Name is required";
        errorCopy.emailId = emailId.trim() ? "" : "Email ID is required";
        errorCopy.role = role.trim() ? "" : "Role is required";
        errorCopy.phoneNumber = phoneNumber.trim()
            ? ""
            : "Phone Number is required";

        setError(errorCopy);
        return Object.values(errorCopy).every((msg) => msg === "");
    }

    // Dynamic Header 
    function pageTitle() {
        return (
            <h2 className="form-header">
                {id ? "Update User" : "Create User"}
            </h2>
        );
    }

    return (
        <div className="add-user-page">
            <div className="user-form-card">
                {pageTitle()}
                <form>
                    {/* First Name */}
                    <div className="form-field">
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            value={firstName}
                            className={error.firstName ? "input-field invalid" : "input-field"}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {error.firstName && (
                            <div className="error-text">{error.firstName}</div>
                        )}
                    </div>

                    {/* Last Name */}
                    <div className="form-field">
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            value={lastName}
                            className={error.lastName ? "input-field invalid" : "input-field"}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {error.lastName && (
                            <div className="error-text">{error.lastName}</div>
                        )}
                    </div>

                    {/* Email */}
                    <div className="form-field">
                        <label>Email ID</label>
                        <input
                            type="email"
                            placeholder="Enter your email Id"
                            value={emailId}
                            className={error.emailId ? "input-field invalid" : "input-field"}
                            onChange={(e) => setEmailId(e.target.value)}
                        />
                        {error.emailId && (
                            <div className="error-text">{error.emailId}</div>
                        )}
                    </div>

                    {/* Role */}
                    <div className='form-groupDropdown'>
                        <label className='form-label'>Role:</label>
                        <select
                            name='role'
                            className={`form-control custom-dropdown ${error.role ? 'is-invalid' : ''}`}
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="">-- Select Role --</option>
                            <option value="Admin">Admin</option>
                            <option value="Guest">Guest</option>
                        </select>
                        {error.role && <div className="invalid-feedback">{error.role}</div>}
                    </div>

                    {/* Phone Number */}
                    <div className="form-field">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            value={phoneNumber}
                            className={error.phoneNumber ? "input-field invalid" : "input-field"}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        {error.phoneNumber && (
                            <div className="error-text">{error.phoneNumber}</div>
                        )}
                    </div>
                    <div className="form-actions">
                        <button className="btn btn-primary" onClick={saveOrUpdateUser}>
                            Save
                        </button>
                        <button className="btn btn-secondary" onClick={backToList}>
                            Back
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUserByAdmin;

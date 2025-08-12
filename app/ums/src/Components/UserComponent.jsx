import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { createUser, getUserById, updateUser } from '../Services/ApiService';

const UserComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [role, setRole] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const navigate = useNavigate();
    const { id } = useParams(); // Get the user ID from the URL parameters if editing

    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        role: '',
        phoneNumber: ''
    })

    function saveOrUpdateUser(e) {
        e.preventDefault();
        // Validate form before sending data
        if (validateForm()) {
            const userInfo = { firstName, lastName, emailId, role, phoneNumber };

            if (id) {
                // If editing or updating the user
                updateUser(id, userInfo).then(() => {
                    navigate('/users');
                }).catch(error => {
                    console.error("There was an error updating the user! ", error);
                });
            } else {
                createUser(userInfo).then(() => {
                    navigate('/');
                }).catch(error => {
                    console.error("There was an error creating the user! ", error);
                });
            }
        }
    }
    function backToList() {
        navigate('/users');
    }
    function validateForm() {
        let isValid = true;

        const errorCopy = { ...error }

        if (firstName.trim()) {
            errorCopy.firstName = '';
        } else {
            errorCopy.firstName = 'First Name is required';
            isValid = false;
        }

        if (lastName.trim()) {
            errorCopy.lastName = '';
        } else {
            errorCopy.lastName = 'Last Name is required';
            isValid = false;
        }
        if (emailId.trim()) {
            errorCopy.emailId = '';
        } else {
            errorCopy.emailId = 'Email ID is required';
            isValid = false;
        }
        if (role.trim()) {
            errorCopy.role = '';
        } else {
            errorCopy.role = 'Role is required';
            isValid = false;
        }
        if (phoneNumber.trim()) {
            errorCopy.phoneNumber = '';
        } else {
            errorCopy.phoneNumber = 'Phone Number is required';
            isValid = false;
        }
        setError(errorCopy);
        return isValid;
    }

    function pageTitle() {
        if (id) {
            <h3 className='text-center'>Update</h3>
        } else {
            return <h3 className='text-center'>Create</h3>
        }
    }

    useEffect(() => {
        if (id) {
            // Fetch user data by ID for editing
            getUserById(id).then(response => {
                const user = response.data;
                setFirstName(user.firstName);
                setLastName(user.lastName);
                setEmailId(user.emailId);
                setRole(user.role);
                setPhoneNumber(user.phoneNumber);
            }).catch(error => {
                console.error("There was an error fetching the user! ", error);
            });
        }

    }, [id])



    return (
        <div className='container'>
            <br></br>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <br></br>
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter your first name'
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${error.firstName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                {error.firstName && <div className="invalid-feedback">{error.firstName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter your last name'
                                    name='lastName'
                                    value={lastName}
                                    className={`form-control ${error.lastName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {error.lastName && <div className="invalid-feedback">{error.lastName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email ID:</label>
                                <input
                                    type='email'
                                    name='emailId'
                                    placeholder='Enter your email Id'
                                    className={`form-control ${error.emailId ? 'is-invalid' : ''}`}
                                    value={emailId}
                                    onChange={(e) => setEmailId(e.target.value)}
                                />
                                {error.emailId && <div className="invalid-feedback">{error.emailId}</div>}
                            </div>
                            <div className='form-group'>
                                <label>Role</label>
                                <input
                                    type='text'
                                    name='role'
                                    placeholder='Enter your role'
                                    className={`form-control ${error.role ? 'is-invalid' : ''}`}
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)} />
                                {error.role && <div className="invalid-feedback">{error.role}</div>}
                            </div>
                            <div className='form-group'>
                                <label>Phone Number:</label>
                                <input
                                    type='text'
                                    name='phoneNumber'
                                    placeholder='Enter your phone number'
                                    className={`form-control ${error.phoneNumber ? 'is-invalid' : ''}`}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)} />
                                {error.phoneNumber && <div className="invalid-feedback">{error.phoneNumber}</div>}
                            </div>
                            <br></br>
                            <button className='btn btn-dark' onClick={saveOrUpdateUser}>Save</button>
                            <button className='btn btn-dark' onClick={backToList}>back</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserComponent

import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const API_URL =     process.env.REACT_APP_API_URL
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        age: '',
        gender: 'male',
        immunizations: [],
    });
    const [selectedGender, setSelectedGender] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDropdownChange = (e) => {
        const selectedGender = e.target.value;
        setSelectedGender(selectedGender);
        setFormData({
          ...formData,
          gender: selectedGender,
        });
      };

    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            immunizations: formData.immunizations ? `${formData.immunizations},${value}` : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation logic
        if (formData.firstname && formData.lastname && formData.age && formData.gender && formData.immunizations.length > 0) {
            console.log(formData)
            axios.post(`http://localhost:5000/children`, formData)
                .then((response) => {
                    console.log('Child registered', response)
                    alert('Child registered succesfully');
                    navigate("/list")
                })
                .catch((error) => {
                    console.log("Error registering child", error)
                })
        } else {
            // Handle invalid input/error
            alert('Please fill in all fields.');
        }
    };

    return (
        <div>
            <div className='flex justify-center mt-12'>
                <h3 className="mb-6 text-3xl">Register Child</h3>
            </div>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
                <input type="text" name="firstname" onChange={handleInputChange} placeholder="First Name" className="border border-gray-300 rounded-md p-2 mb-2 w-full" />
                <input type="text" name="lastname" onChange={handleInputChange} placeholder="Last Name" className="border border-gray-300 rounded-md p-2 mb-2 w-full" />
                <input type="text" name="age" onChange={handleInputChange} placeholder="Age" className="border border-gray-300 rounded-md p-2 mb-2 w-full" />
                <select
                    name="gender"
                    value={selectedGender}
                    onChange={handleDropdownChange}
                    className="border border-gray-300 rounded-md p-2 mb-2 w-full"
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label className="block mb-2">Immunizations:</label>
                <div className="mb-4">
                    <input type="checkbox" name="immunizations" value="BCG" onChange={handleCheckboxChange} className="mr-2" />
                    <label className="mr-4">BCG</label>
                    <input type="checkbox" name="immunizations" value="MMR" onChange={handleCheckboxChange} className="mr-2" />
                    <label className="mr-4">MMR</label>
                    <input type="checkbox" name="immunizations" value="RV" onChange={handleCheckboxChange} className="mr-2" />
                    <label className="mr-4">RV</label>
                    <input type="checkbox" name="immunizations" value="DTap" onChange={handleCheckboxChange} className="mr-2" />
                    <label className="mr-4">DTap</label>
                </div>
                <button type="submit" className=" bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 w-full">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;

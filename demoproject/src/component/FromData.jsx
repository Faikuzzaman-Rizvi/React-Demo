import React, { useState } from 'react';

const FormData = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    gender: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={(e) => handleInputChange('firstName', e.target.value)}
        />
        <br />

        {/* Last Name */}
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={(e) => handleInputChange('lastName', e.target.value)}
        />
        <br />

        {/* City Dropdown */}
        <label htmlFor="city">City:</label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={(e) => handleInputChange('city', e.target.value)}
        >
          <option value="">Select City</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <br />

        {/* Gender Radio */}
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === 'Male'}
          onChange={() => handleInputChange('gender', 'Male')}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === 'Female'}
          onChange={() => handleInputChange('gender', 'Female')}
        />
        Female
        <br />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormData;

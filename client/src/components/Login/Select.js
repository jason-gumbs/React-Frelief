import React from "react";

export const Select = props => (
  <div className="form-group">
     <select {...props}  id="category-input">
          <option>Select Category</option>
          <option disabled="disabled">----------</option>
          <option value="FirstName">First Name</option>
          <option value="LastName">Last Name</option>
          <option value="PhoneNum">Phone Number</option>
          <option value="Email">Email</option>
        </select>
  </div>
);
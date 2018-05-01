import React from "react";

export const Select = props => (

<div className="form-group">
     <select {...props}  id="category-input">
          <option>Select Category</option>
          <option disabled="disabled">----------</option>
          <option value="Email">Email</option>
          <option value="Password">Password</option>
      </select>
</div>
);


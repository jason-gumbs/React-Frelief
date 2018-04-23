import React from "react";

export const Select = props => (
  <div className="form-group">
     <select {...props}  id="category-input">
          <option>Select Category</option>
          <option disabled="disabled">----------</option>
          <option value="Food & Water">Food & Water</option>
          <option value="Clothing">Clothing</option>
          <option value="Shelter">Shelter</option>
          <option value="Medical">Medical</option>
          <option value="Childrens Health">Children's Health</option>
          <option value="Survival">Survival</option>
          <option value="Tech">Tech</option>
        </select>
  </div>
);
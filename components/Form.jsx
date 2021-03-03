import React, { useState, useEffect } from "react";
import countries from "../pages/api/countries";

function Form({ onChange, onSubmit }) {

  return (
    <form onSubmit={onSubmit}>
      <label>
        Full Name:
        <input type="text" name="name" onChange={onChange}/>
      </label>
      <label>
        Description:
        <textarea
          placeholder="Please describe yourself in the 1st person..."
          name="description"
          onChange={onChange}
        />
      </label>
      <label>
        Country:
        <select name="country" onChange={onChange} >
          {countries.map((country) => (
            <option key={country.name}>{country.name}</option>
          ))}
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

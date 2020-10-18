import React, { Component } from 'react'
import './form-input.styles.scss'


export default  ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      onChange={handleChange}
      
      className="form-input"
      {...otherProps}
    />
    {label && (
      <label
        className={`${otherProps.value.length && "shrink"} form-input-label `}
      >{label} </label>
    )}
  </div>
);


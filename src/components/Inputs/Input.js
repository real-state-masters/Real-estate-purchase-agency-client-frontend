import React from 'react'
import './Input.scss'

const Input = ({ label, className, type, name, value, onChange, onBlur, ...otherProps }) => {
    return (
        <div className={`${type === 'checkbox' ? 'checkbox-display' : 'input-default-display'}`}>
          <label htmlFor={name} className="">
            {label}
          </label>
          <input
            id={name}
            name={name}
            className={className}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            {...otherProps}
          />       
      </div>
    )
}

export default Input

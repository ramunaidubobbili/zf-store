import React from 'react'

const Input = ({type, for_name_id, label, value, error, handleChange}) => {
    return (
        <div className="mb-3 mr-sm-2 form-group">
            <label htmlFor={for_name_id} className="visually-hidden">{label}</label>
            <input type={type} value={value} name={for_name_id} id={for_name_id} placeholder={label}  onChange={handleChange} className={"py-2 px-3 form-control " + (error !== "" ? "is-invalid" : "")} />
            {error !== "" && <div className='invalid-feedback text-start'>{error}</div>}
        </div>
    )
}

export default Input
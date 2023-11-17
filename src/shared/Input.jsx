

import React from 'react'
function Input({id, title, type, name, handelData,customClasses ,errors}) {

    return (
    <div className="mb-3">
        <label htmlFor={id} className="form-label"> {title}</label>
        <input type={type} name={name}   className={`form-control ${customClasses}`}
         id={id} onChange={handelData} />
         {errors[name] && <p className='text-danger'>{errors[name]}</p>}
    </div>
     )
}

export default Input
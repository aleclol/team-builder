import React from 'react'
import './Form.css'

function Form (props) {
const {member, onChange, handleSubmit, buttonDisabled, errors} = props


return (

    <form onSubmit={event => handleSubmit(event)} value={member}>
        <label>
          Name:&nbsp;
          <input 
          placeholder='enter full name here'
          type="text"
          name="name"
          onChange={onChange}
          value={member.name}
          />
        </label>
        { errors.name.length > 0 && <p className="error">{errors.name}</p> }
        <br />
        <label>
          Email:&nbsp;
          <input 
          placeholder='enter email here'
          type="email"
          name="email"
          onChange={onChange}
          value={member.email}
          />
        </label>
        { errors.email.length > 0 && <p className="error">{errors.email}</p> }
        <br />
        <label>
          Role:&nbsp;
          <select 
          name="role"
          onChange={onChange}
          value={member.role}>
            <option value="">--- Select a Role ---</option>
            <option value="The Code Breakerr">The Code Breaker</option>
            <option value="The Muscle">The Muscle</option>
            <option value="The Getaway Driver">The Getaway Driver</option>
            <option value="The Foil">The Foil</option>
            <option value="The Mastermind">The Mastermind</option>
          </select>
        </label>
        { errors.role.length > 0 && <p className="error">{errors.role}</p> }
        <br />
        <button disabled={buttonDisabled}>Submit</button>
      </form>

)

}

export default Form
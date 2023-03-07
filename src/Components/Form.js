import React from 'react'

function Form (props) {
const {member, onChange, handleSubmit} = props


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
        <br />
        <label>
          Role:&nbsp;
          <select 
          name="role"
          onChange={onChange}
          value={member.role}>
            <option value="">--- Select a Role ---</option>
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
            <option value="Alumni">Alumni</option>
          </select>
        </label>
        <br />
        <button>Submit</button>
      </form>

)

}

export default Form
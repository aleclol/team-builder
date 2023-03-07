import React, {useState} from 'react';
import './App.css'


export default function App () {
  const [teamList, setTeamList] = useState([])
  const [member, setMember] = useState({
    name: "Rick Sanchez",
    email: "pickle@rick.com",
    role: 67
  })

const onChange = (evt) => {
  const { name, value } = evt.target
  setMember({...member, [name]: value})
}

const handleSubmit = (evt) => {
  evt.preventDefault()
  setTeamList([member, ...teamList])
  setMember({name: "", email: "", role: 0 })
}

return (
  <div className="kingClass">
    <div className="container">
      <h2>New Team Member</h2>
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
    </div>
    <div className="container">
      <h2>Team Members</h2>
      {teamList.map((value, index) => {
        return <div key={index}>{value.name} {value.email}, {value.role}</div>
      })}
    </div>
  </div>
)

}
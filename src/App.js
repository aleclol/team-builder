import React, {useState} from 'react';
import './App.css'


export default function App () {
  const [teamList, setTeamList] = useState([])
  const [member, setMember] = useState({
    firstName: "Rick",
    lastName: "Sanchez",
    age: 67
  })

const onChange = (evt) => {
  const { name, value } = evt.target
  setMember({...member, [name]: value})
}

const handleSubmit = (evt) => {
  evt.preventDefault()
  setTeamList([member, ...teamList])
  setMember({firstName: "", lastName: "", age: 0 })
}

return (
  <div className="kingClass">
    <div className="container">
      <h2>New Team Member</h2>
      <form onSubmit={event => handleSubmit(event)} value={member}>
        <label>
          First Name:&nbsp;
          <input 
          placeholder='First Name'
          type="text"
          name="firstName"
          onChange={onChange}
          value={member.firstName}
          />
        </label>
        <br />
        <label>
          Last Name:&nbsp;
          <input 
          placeholder='Last Name'
          type="text"
          name="lastName"
          onChange={onChange}
          value={member.lastName}
          />
        </label>
        <br />
        <label>
          Age:&nbsp;
          <input 
          placeholder='Age'
          type="number"
          name="age"
          onChange={onChange}
          value={member.age}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
    <div className="container">
      <h2>Team Members</h2>
      {teamList.map((value, index) => {
        return <div key={index}>{value.firstName} {value.lastName}, {value.age}</div>
      })}
    </div>
  </div>
)

}
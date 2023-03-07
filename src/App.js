import React, {useState} from 'react';
import './App.css'
import Form from './Components/Form'


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
      <Form member={member} onChange={onChange} handleSubmit={handleSubmit} />
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
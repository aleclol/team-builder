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
  const [memberToEdit, setMemberToEdit] = useState([])

const onChange = (evt) => {
  const { name, value } = evt.target
  setMember({...member, [name]: value})
}

const handleSubmit = (evt) => {
  evt.preventDefault()
  setTeamList([member, ...teamList])
  setMember({name: "", email: "", role: 0 })
}

const onEdit = (evt) => {
  setMemberToEdit(evt.target.value)
  console.log(evt)
}

return (
  <div>
    <h1>Heist Crew Assembler!</h1>
    <div className="kingClass">
      <div className="container">
        <h2>Add Crew Member</h2>
        <Form member={member} onChange={onChange} handleSubmit={handleSubmit} />
      </div>
      <div className="container">
        <h2>Crew Members</h2>
        {teamList.map((value, index) => {
          return (
            <div key={index}>
              <span>{value.name} {`(${value.email})`}, {value.role}, you son of a bitch 🤝 😜</span>
              {/* <button onClick={onEdit}>edit</button> */}
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

}
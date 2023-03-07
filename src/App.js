import React, { useState, useEffect } from 'react';
import './App.css'
import Form from './Components/Form'
import * as Yup from 'yup'

export default function App () {
  // Slices of State:
  const [teamList, setTeamList] = useState([])
  const [member, setMember] = useState({ name: "Rick Sanchez", email: "pickle@rick.com", role: 67 })
  const [errors, setErrors] = useState({ name: "", email: "", role: "" })
  const [ buttonDisabled, setButtonDisabled ] = useState(true)
  const [memberToEdit, setMemberToEdit] = useState([])
  
  // Form Validation:
  const formSchema = Yup.object().shape({
    name: Yup
      .string()
      .required("You must include a name."),
    email: Yup
      .string()
      .email("Please provide a valid email address.")
      .required("You must include an email address."),
    role: Yup
      .string()
      .required('You must choose a role.')
  });
  
  useEffect( () => {
    formSchema.isValid(member).then( valid => {
      setButtonDisabled(!valid)
    })
  }, [member])

// Change Handler:
const onChange = (evt) => {
  const { name, value } = evt.target
  
  Yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setErrors({
          ...errors, [name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors, [name]: err.errors[0]
        });
      });

  setMember({...member, [name]: value})
}

// Submit Handler
const handleSubmit = (evt) => {
  evt.preventDefault()
  setTeamList([member, ...teamList])
  setMember({name: "", email: "", role: 0 })
}

// Future edit functionality:
const onEdit = (evt) => {
  setMemberToEdit(evt.target.value)
  console.log(evt)
}

// --- Form Creation ---
return (
  <div>
    <h1>Heist Crew Assembler!</h1>
    <div className="kingClass">
      <div className="container">
        <h2>Add Crew Member</h2>
        <Form member={member} onChange={onChange} handleSubmit={handleSubmit} buttonDisabled={buttonDisabled} errors={errors} />
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
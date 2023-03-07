import React, {useState} from 'react';
import './App.css'


export default function App () {
  const [data, setData] = useState({
    firstName: "Rick",
    lastName: "Sanchez",
    age: 67
  })

const onChange = (evt) => {
  setData({...data, [evt.target.name]: 'value'})
}


return (
  <div className="kingClass">
    <div className="container">
      <h2>New Team Member</h2>
      <form>
        <label>
          First Name:&nbsp;
          <input type="text" />
        </label>
        <br />
        <label>
          Last Name:&nbsp;
          <input type="text" />
        </label>
        <br />
        <label>
          Age:&nbsp;
          <input type="number" />
        </label>
      </form>
    </div>
    <div className="container">
      <h2>Team Members</h2>
    </div>
  </div>
)

}
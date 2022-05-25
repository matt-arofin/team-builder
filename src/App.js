import './App.css';
import React, { useState, /* useEffect */ } from 'react';
import Form from './Components/Form';
import axios from 'axios'


const initialValues = {
  // Text inputs
  name: '',
  email: '',
  // drop-down selector
  role: ''
}


function App() {
  // State that stores list entries
  const [teamList, setTeamList] = useState([]);
  // State for the values on the form
  const [formValues, setFormValues] = useState(initialValues);

  const updateForm = (inputName, inputValue) => {
    setTeamList({...teamList, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    
    axios.post()
      .then()
      .catch()
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <Link path="/" /> */}
      </header>
      <h1>Team Builder App</h1>
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm} />
    </div>
  );
}

export default App;

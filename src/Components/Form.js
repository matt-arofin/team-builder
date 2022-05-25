import React from 'react';

// Form Component
/* Needs to have inputs for:
* Name type="input" name="name" 
* Email
* Role
*/
 


export default function Form(props) {
    const { values, update, submit } = props;
    // console.log(props)

    const onChange = (evt => {
        const name = evt.target.name;
        const { value } = evt.target;
        update(name, value)
    })

    const onSubmit = (evt => {
        evt.preventDefault();
        submit();
    })
    

    return (
        // Text inputs
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label>Name
                    <input 
                        type="text"
                        name="Name"
                        value={values.name}
                        onChange={onChange}
                        placeholder="Enter Name"
                        maxLength="30"
                    />
                </label>

                <label>Email
                    <input 
                        type="email"
                        name="Email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="Enter Email Address"
                    />
                </label>

                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">--Select Role--</option>
                        <option value="Backend Engineer">Backend Engineer</option>
                        <option value="Frontend Engineer">Frontend Engineer</option>
                        <option value="QA Analyst">QA Analyst</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                    </select>
                </label>
            </div>
        </form>
        
    );
}
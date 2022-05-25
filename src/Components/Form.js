import React from 'react';
import { useState } from 'react';

// Form Component
/* Needs to have inputs for:
* Name type="input" name="name" 
* Email
* Role
*/
 
// const {initialValues} = props;

export default function Form(props) {
    const { values, update/* , submit */ } = props;
    console.log(props)
    const onChange = (evt => {
        const name = evt.target.name;
        const { value } = evt.target;
        update(name, value)
    })
    

    return (
        // Text inputs
        <form>
            <div>
                <label>Username
                    <input 
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        placeholder="Enter Name"
                        maxLength="30"
                    />
                </label>
            </div>
        </form>
        
    );
}
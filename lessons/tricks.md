# Tricks:



# 1) Forms:



<b>


```js
import React, {useState} from 'react';
import jQuery from 'jquery'
import fetchers from '../../../helpers/fetchers';
const axios = require('axios');

const LoginForm = () => {
  
  const [form,setForm] = useState(
    {
      data:   {username:"", password:""},
      errors: {username:"", password:""}
    });

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    setForm(
      {
        ...form,
        errors: {username:"",password:""}
      }
    );

  fetchers.auth.login({"username":form.data.username,"password":form.data.password})
  .then(function (response) {
    window.location.replace("/");
  })
  .catch(function (error) {
    let data = error.response.data;
    setForm({
      ...form,
      errors:{
        ...form.errors,
        ...data
      }
    });
  });
  }

  const handleChange=(e)=>{
    setForm(
      {
        data:{
          ...form.data,
          [e.target.name]:e.target.value
        },
        errors:{
          ...form.errors,
          [e.target.name]:""
        }
      }
      );
  };

  return ( <form onSubmit={handleSubmit}>

<div>
    <label>Username: </label>
    <input type="text" name="username" value={form.data.username} onChange={handleChange}/>
    <span className="form-error" name="username"> {form.errors.username}</span>
    </div>
    <div>
    <label>Password: </label>
    <input type="text" name="password" value={form.data.password} onChange={handleChange}/>
    <span className="form-error" name="password"> {form.errors.password}</span>
    </div>
    <input type="submit" value="Login"/>

  </form> );
}
 
export default LoginForm;

```



</b>


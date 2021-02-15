import {Component} from 'react';

const Contact = (props) =>{
  console.log(props);
  setTimeout(()=>{
    props.history.push("/about")
  }, 2000)
  return(<div> Contact </div>)
}

export default Contact

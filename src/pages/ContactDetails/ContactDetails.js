import axios from "axios";
import React, { useRef } from "react";
import classes from "./ContactDetails.module.css";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const ContactDetails = () => {
  const userNameRef = useRef();
  const userProfileUrlRef = useRef();
  const history=useHistory()
  const detailSubmithandler = async (event) => {
    event.preventDefault();
    try {
      const userName = userNameRef.current.value;
      const userProfile = userProfileUrlRef.current.value;

      const contactObj = {
        idToken: localStorage.getItem("ExpenseToken"),
        displayName: userName,
        photoUrl: userProfile,
        returnSecureToken: true,
      };

      if(userName.trim().length>0 && userProfile.trim().length>0)
      {
        const res = await axios.post(
            "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDADt-jvOGYxraqe3BThGHnaQjwouzxhR0",
            contactObj,
            {
              headers: { "Content-Type": "application/json" },
            }
          );
          try {
            console.log(res);
            userNameRef.current.value='';
            userProfileUrlRef.current.value='';
          } catch (err) {
            console.log(err);
          }
      }
      else{
        alert('Fill all the fields')
      }

     
    } catch (err) {
      console.log(err);
    }
  };

  const cancelHandler=(event)=>
  {
      event.preventDefault();
      history.push('/welcome')
  }

  return (
    <React.Fragment>
        <div className={classes.mail}>
      <div className={classes.mail__tools}>
        <div className={classes.mail__toolsLeft}>
   
      <form className={classes.add_form}>
    
     
        <h4>Contact Details</h4>
        <label htmlFor="name">Full Name</label>
        <input  ref={userNameRef} type="text" id="name"></input>
        <label htmlFor="url_">Profile Photo URL</label>
        <input  ref={userProfileUrlRef} type="url" id="url_"></input>
        <div>
          <Button style={{margin:"10px"}} variant="warning" onClick={detailSubmithandler}>update</Button>
          <Button style={{margin:"10px"}} onClick={cancelHandler}>cancel</Button>
        </div>
      </form>
      </div>
      </div>
      </div>
    </React.Fragment>
  );
};
export default ContactDetails;

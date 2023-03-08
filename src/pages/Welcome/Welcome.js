import React from "react";
import classes from './Welcome.module.css';
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
const Welcome=()=>
{
    return(<React.Fragment>
        <main className={classes.main}>
        <h1 className={classes.heading} >Welcome to expense tracker!!</h1>
        <div>
            <span>Your profile is incomplete. </span>
            <NavLink className={classes.link} to='/contact'><Button>Complete Now</Button></NavLink>
        </div>
        <div>
            <span>Have you verified your Email ? if not click </span>
            <NavLink className={classes.link} to='/verifymail'><Button variant="warning">here</Button></NavLink>
        </div>
        </main>
    </React.Fragment>)
}
export default Welcome;
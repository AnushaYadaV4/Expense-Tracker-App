import React from "react";
import classes from "./Expenses.module.css";
import Button from 'react-bootstrap/Button';

const Expenses = (prop) => {

  console.log('inside expense')
  return (
    <React.Fragment>
      <main  className={classes.card}>
        <span>
          <h3 className={classes.heading}>Amount :</h3>
          <h2 className={classes.items}>$ {prop.items.amount}</h2>
        </span>
        <span>
        <h3 className={classes.heading}>Category :</h3>
          <h2 className={classes.items}>{prop.items.category}</h2>
        </span>
        <span>
        <h3 className={classes.heading}>Description :</h3>
          <h2 className={classes.items}>{prop.items.description}</h2>
          
        </span>
        <Button
        variant="success"
          onClick={() => prop.editButtonClicked(prop.items)}
         
        >
          EDIT
        </Button>
        <Button
         variant="warning"
          onClick={() => prop.deleteButtonClicked(prop.items.Id)}
         
        >
          DELETE
        </Button>
      </main>
    </React.Fragment>
  );
};
export default Expenses;

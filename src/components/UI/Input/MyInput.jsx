import React from 'react';
import classes from './MyInput.module.css';

<<<<<<< HEAD
const MyInput = (props) => {
	return (
		<input {...props} className={classes.myInput}></input>
=======
const MyInput = ({children, ...props}) => {
	return (
		<input {...props} className={classes.myInput}>{children}</input>
>>>>>>> master
	);
};

export default MyInput;

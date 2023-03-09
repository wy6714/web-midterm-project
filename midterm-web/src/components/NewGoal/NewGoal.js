import React, {useState} from 'react';
import './NewGoal.css';

const NewGoal = props => {

    //This code is specifically for the course goal input form
    const [enteredText, setEnteredText] = useState('');

    const addGoalHandler = event =>{
        event.preventDefault();
        

        const newproduct = {
        //id: Math.random().toString(),
        text: enteredText
        }

        setEnteredText('');

        props.onAddGoal(newproduct);

        // //setCourseGoals(courseGoals.concat(newGoal));
        // setCourseGoals(prevCoursegoals => prevCoursegoals.concat(newGoal));
        
    };

    const textChangeHandler = event => {
        setEnteredText(event.target.value);
    };

    return (
        <form className='new-goal' onSubmit={addGoalHandler}>
            <input type="text" value={enteredText} onChange={textChangeHandler} />
            <button type="submit">Add Issue</button>
      </form>
    );

};

export default NewGoal;
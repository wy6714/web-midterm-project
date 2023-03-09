import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './GoalList.css';

const GoalList = props => {
    return(
        
        // <ul className='goal-list'> 
        //     { props.goals.map( goal => {
        //         return <li key={goal.id}>{goal.text}</li>;
        //     })}
        // </ul>
        <DragDropContext>
            <Droppable droppableId='characters'>
                {(provided) => (
                    <ul className='characters' {...provided.droppableProps} ref={provided.innerRef}>
                        { props.goals.map( ({goal}, index) => {
                            return(
                                <Draggable key={goal.id} draggableId={goal.id} index={index}>
                                    {(provided) => (
                                        <li 
                                            {...provided.draggableProps} 
                                            {...provided.dragHandleProps} 
                                            ref={provided.innerRef}
                                        >{goal.text}</li>
                                    )}
                                

                                </Draggable>
                            );      
                        })}
                    </ul>  
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default GoalList;

//{/* <ul className='goal-list'> 
//            { props.goals.map( goal => {
//                return <li key={goal.id}>{goal.text}</li>;
//            })}
//</ul> */}
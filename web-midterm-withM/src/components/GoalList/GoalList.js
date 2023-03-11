import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './GoalList.css';

const GoalList = props => {
    const[goals, setGoals] = useState(props.goals)

    //reorder goal's index after drag and drop
    function handleOnDragEnd(result) {
        const items = Array.from(goals);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setGoals(items);
    }
    return(
        
        // <ul className='goal-list'> 
        //     { props.goals.map( goal => {
        //         return <li key={goal.id}>{goal.text}</li>;
        //     })}
        // </ul>
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='characters'>
                {(provided) => (
                    <ul className='characters' {...provided.droppableProps} ref={provided.innerRef}>
                        { goals.map((goal, index) => {
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
                            )
                                  
                        })}
                        {provided.placeholder}
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
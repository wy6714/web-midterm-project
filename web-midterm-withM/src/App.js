import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import NewGoal from './components/NewGoal/NewGoal';
import GoalList from './components/GoalList/GoalList';
import'./App.css';

const App =() =>{
  const [courseGoals, setCourseGoals] = useState( [
    // { id:'cg1', text:'Finish the course'},
    // { id:'cg2', text:'Learn all about the main couse topic'},
    // { id:'cg3', text:'Help other students with the course Q&A in Canvas'}

  ]);
  //const [loadedProducts, setLoadedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/products');

      const responseData = await response.json();

      setCourseGoals(responseData.products);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  

  // const addNewGoalHandler = newGoal => {
  //   setCourseGoals(courseGoals.concat(newGoal));
    
  // }

  //const[enteredText, setEnteredText] = useState('');
  const addProductHandler = async (goalText) => {
    try {
      const newProduct = {
        text: goalText,// "+" to convert string to number
        
      };
      let hasError = false;
      const response = await fetch('http://localhost:5000/product', {
        method: 'POST',
        //body: JSON.stringify(newProduct),
        body: JSON.stringify(goalText),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        hasError = true;
      }

      const responseData = await response.json();

      if (hasError) {
        throw new Error(responseData.message);
      }

      setCourseGoals(prevCoursegoals => {
        return prevCoursegoals.concat({
          ...goalText,
          id: responseData.product.id
        })
      })

      // setLoadedProducts(prevProducts => {
      //   return prevProducts.concat({
      //     ...newProduct,
      //     id: responseData.product.id
      //   });
      // });
    } catch (error) {
      alert(error.message || 'Something went wrong!');
    }

  };

  

  // End of course goal input form
  return(
    <React.Fragment>
    <div className="course-goals">
      <Header />
      
      {/* <h2>Issues I Concern</h2> */}
      {/* Add course goals input form  */}
      <NewGoal onAddGoal={addProductHandler}/>
      {/* Display the list of the goal */}
      {isLoading && <p className="loader">Loading...</p>}
      <main>
      {!isLoading && <GoalList goals={courseGoals}/>}
      {/* <GoalList goals={courseGoals} /> */}
      </main>
    </div>
    </React.Fragment> 
  )
}

export default App;

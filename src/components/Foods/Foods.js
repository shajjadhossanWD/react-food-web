import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Meal from './Meal';

const Foods = () => {
 const [meals, setMeals] = useState([]);
 const [srctxt, setSrctxt] = useState('');

 useEffect(()=>{
     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${srctxt}`)
     .then(res => res.json())
     .then(data => {
         setMeals(data.meals)
        //  console.log(data.meals)
        })
 },[srctxt])

 const handelMeals =(meal)=>{
    const srcItem = meal.target.value;
    setSrctxt(srcItem);
 }

    return (
        <div>
          <input onChange={handelMeals} type="text" className="w-75 m-5 p-2 " placeholder="write your food items what you want....." />
          <Row xs={1} md={3} lg= {4} className="g-4">
              {
                 meals.map(meal => <Meal  key = {meal.idMeal} meal = {meal}/>)
              }
          </Row>
        </div>
    );
};

export default Foods;
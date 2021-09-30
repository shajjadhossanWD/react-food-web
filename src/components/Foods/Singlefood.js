import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';



const Singlefood = () => {
    const {mealId} = useParams();
    const [food, setFood] = useState([])
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals)
            setFood(data.meals[0])
        })
    },[mealId])
    return (
        <Card style={{ width: '75%', backgroundColor: 'rgb(42, 40, 40)', color: 'white' }} className="mx-auto mt-5">
        <div className="row g-0">
        <div className="col-md-4">
        <Card.Img variant="top" src={food.strMealThumb} className="img-fluid rounded-start"/>
        </div>
        <div className="col-md-8">
        <Card.Body>
          <Card.Title><h2>{food.strMeal}</h2></Card.Title>
          <Card.Text>
           <p>Food-Details:{food.strInstructions}</p>
          </Card.Text>
          
          <Button variant="primary" className="btn btn-primary">Order Now</Button>
        </Card.Body>
        </div>
        </div>
      </Card>
    );
};

export default Singlefood;
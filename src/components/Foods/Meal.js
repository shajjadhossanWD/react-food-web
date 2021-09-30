import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const {idMeal, strMeal, strMealThumb, strArea} = props.meal;
    return (
        <Col>
        <Card>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <Card.Text>
              <p>country: {strArea}</p>
              <Link to = {`/meal/${idMeal}`} >
              <button className="btn btn-primary"> Details & Order </button>
              </Link>
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Meal;
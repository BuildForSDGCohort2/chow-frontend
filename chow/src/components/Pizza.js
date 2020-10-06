import React from "react";
import { CardGroup, CardImg, Card } from "react-bootstrap";
import AddToCart from "./AddToCart";


import pizzaOne from "../images/pizzas/hotChilliMeat-removebg-preview.png";
import pizzaTwo from "../images/pizzas/supersupreme-removebg-preview.png";
import pizzaThree from "../images/pizzas/bbqChicken-removebg-preview.png";
import pizzaFour from "../images/pizzas/pepperoni-removebg-preview.png";
import pizzaFive from "../images/pizzas/bbqMeat-removebg-preview.png";
import pizzaSix from "../images/pizzas/chickenSuupreme-removebg-preview.png";

const Pizza = () => {
    return (
        <div className="row">
            <CardGroup>
                <Card>
                    <CardImg
                      src={ pizzaOne }
                      alt=""
                      className="prdt"
                    />
                    <Card.Body>
                        <Card.Title>
                            Hot Chilli
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <span className="from mx-1">₦</span>1500
                      <AddToCart />
                    </Card.Footer>
                </Card>
                <Card>
                    <CardImg
                      src={ pizzaTwo }
                      alt=""
                      className="prdt"
                    />
                    <Card.Body>
                        <Card.Title>
                            Super Supreme
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <span className="from mx-1">₦</span>2500
                      <AddToCart />
                    </Card.Footer>
                </Card>
                <Card>
                    <CardImg
                      src={ pizzaThree }
                      alt=""
                      className="prdt"
                    />
                    <Card.Body>
                        <Card.Title>
                            BBQ Chicken
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <span className="from mx-1">₦</span>2000
                      <AddToCart />
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <CardImg
                      src={ pizzaFour }
                      alt=""
                      className="prdt"
                    />
                    <Card.Body>
                        <Card.Title>
                            Hot Pepperoni
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <span className="from mx-1">₦</span>2500
                      <AddToCart />
                    </Card.Footer>
                </Card>
                <Card>
                    <CardImg
                      src={ pizzaSix }
                      alt=""
                      className="prdt"
                    />
                    <Card.Body>
                        <Card.Title>
                            Hot Chicken Supreme
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <span className="from mx-1">₦</span>2000
                      <AddToCart />
                    </Card.Footer>
                </Card>
                <Card>
                    <CardImg
                      src={ pizzaFive }
                      alt=""
                      className="prdt"
                    />
                    <Card.Body>
                        <Card.Title>
                            Hot BBQ Meat
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <span className="from mx-1">₦</span>1800
                      <AddToCart />
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Pizza;
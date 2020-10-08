import React from "react";
import { CardGroup, CardImg, Card } from "react-bootstrap";
import AddToCart from "./AddToCart";

import CinnamonImg from "../images/snacks/cinnamon-rolls-fp.jpg";
import PopCornImg from "../images/snacks/popCorn.jpg";
import MeatPieImg from "../images/snacks/meatPie.jpeg";
import DonutsImg from "../images/snacks/donuts.jpg";
import ChickenImg from "../images/snacks/chickenPie.jpeg";
import CupCakesImg from "../images/snacks/cupcakes.jpg";


const Snacks = () => {
    return (
        <div className="row">
             <CardGroup>
                 <Card>
                     <CardImg
                       src={ CinnamonImg }
                       alt=""
                       className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Cinnamon Rolls</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                     src={ PopCornImg }
                     alt=""
                     className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Pop Corn</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>200
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                     src={ MeatPieImg }
                     alt=""
                     className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Meat Pie</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>300
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
             </CardGroup>
             <CardGroup>
                 <Card>
                     <CardImg
                     src={ DonutsImg }
                     alt=""
                     className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Donuts</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>200
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                        src={ ChickenImg }
                        alt=""
                        className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Chicken pie</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>300
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                        src={ CupCakesImg }
                        alt=""
                        className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Cup Cakes</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
             </CardGroup>
        </div>
    );
};

export default Snacks;
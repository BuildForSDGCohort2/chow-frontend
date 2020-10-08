import React from "react";
import { CardGroup, CardImg, Card } from "react-bootstrap";
import AddToCart from "./AddToCart";

import Mango from "../images/smoothies/mango-madness-smoothie-1564585615.jpg";
import Banana from "../images/smoothies/banana-mango-avocado-green-smoothie-emilie-eats.jpg";
import Orange from "../images/smoothies/freshly-blended-yellow-and-orange-fruit-smoothie-in-royalty-free-image-530209184-1564585945.jpg";
import Berry from "../images/smoothies/raspberry-smoothie-with-pomegranate-and-blueberry-royalty-free-image-811377316-1564585987.jpg";
import BlueBerry from "../images/smoothies/blueberry-muffin-smoothie-happiness-is-homemade.jpg";
import Strawberry from "../images/smoothies/strawberry-and-banana-smoothie-royalty-free-image-953160716-1564585870.jpg";


const Smoothies = () => {
    return (
        <div className="row">
             <CardGroup>
                 <Card>
                     <CardImg
                     src={ Mango }
                     alt=""
                     className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>
                             Mango
                         </Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                     src={ BlueBerry }
                     alt=""
                     className="prdt"/>
                     <Card.Body>
                         <Card.Title>
                             Blueberry
                         </Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                     src={ Orange }
                     alt=""
                     className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>
                             Orange
                         </Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
             </CardGroup>
             <CardGroup>
                 <Card>
                     <CardImg
                     src={ Banana }
                     alt=""
                     className="prdt"/>
                     <Card.Body>
                         <Card.Title>
                             Green
                         </Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                     src={ Strawberry }
                     alt=""
                     className="prdt"/>
                     <Card.Body>
                         <Card.Title>
                             Strawberry
                         </Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                     src={ Berry }
                     alt=""
                     className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>
                           Pomegranate
                         </Card.Title>
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

export default Smoothies;
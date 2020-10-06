import React from "react";
import { CardGroup, CardImg, Card } from "react-bootstrap";
import AddToCart from "./AddToCart";


const Snacks = () => {
    return (
        <div className="row">
             <CardGroup>
                 <Card>
                     <CardImg/>
                     <Card.Body>
                         <Card.Title></Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg/>
                     <Card.Body>
                         <Card.Title></Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg/>
                     <Card.Body>
                         <Card.Title></Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
             </CardGroup>
             <CardGroup>
                 <Card>
                     <CardImg/>
                     <Card.Body>
                         <Card.Title></Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg/>
                     <Card.Body>
                         <Card.Title></Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg/>
                     <Card.Body>
                         <Card.Title></Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
             </CardGroup>
        </div>
    );
};

export default Snacks;
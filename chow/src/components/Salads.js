import React from "react";
import { CardGroup, CardImg, Card } from "react-bootstrap";
import AddToCart from "./AddToCart";

import CaesarImg from "../images/salads/caesar-salad-88749-1.jpeg";
import ChickenCaesarImg from "../images/salads/chicken-caesar-salad-83105-1.jpeg";
import GreekImg from "../images/salads/super-easy-greek-salad-81664-1.jpeg";
import PotatoImg from "../images/salads/potato-salad-606-1.jpeg";
import LettuceImg from "../images/salads/lettuce-avocado-and-mango-salad-59642-1.jpeg";
import PastaImg from "../images/salads/pasta-salad-714-1.jpeg";


const Salads = () => {
    return (
        <div className="row">
             <CardGroup>
                 <Card>
                     <CardImg
                        src={ CaesarImg }
                        alt=""
                        className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Caesar salad</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                      src={ ChickenCaesarImg }
                      alt=""
                      className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Chicken Caesar salad</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                     src={ GreekImg }
                     alt=""
                     className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Greek salad</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
             </CardGroup>
             <CardGroup>
                 <Card>
                     <CardImg
                     src={ PotatoImg }
                     alt=""
                     className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Potato salad</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                     src={ PastaImg }
                     alt=""
                     className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Pasta salad</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                     src={ LettuceImg }
                     alt=""
                     className="prdt"/>
                     <Card.Body>
                         <Card.Title>Lettuce-Avocado salad</Card.Title>
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

export default Salads;
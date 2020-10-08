import React from "react";
import { CardGroup, CardImg, Card } from "react-bootstrap";
import AddToCart from "./AddToCart";

import JollofImg from "../images/food/Jollof-Rice-15.jpg";
import FriedRiceImg from "../images/food/fried-rice-8-1200.jpg";
import TurkeyImg from "../images/food/turkey.jpg";
import CocunutImg from "../images/food/coconut-rice-easy-side-dish-4.jpg";
import PorkImg from "../images/food/porkChops.jpeg";
import ChickenImg from "../images/food/buttermilk-fried-chicken-11-1200.jpg";
import PlantainImg from "../images/food/fried-plantain.jpg";
import MoimoiImg from "../images/food/moimoi.webp";
import EfoImg from "../images/food/efo.webp";
import FriesImg from "../images/food/fries.jpg";
import FishImg from "../images/food/Pan-Fried-Fish-Grandma-Style44-735x735.jpg";
import OfadaImg from "../images/food/ofada-rice-sauce-per-portion.jpg";

const Food = () => {
    return (
        <div className="row">
             <CardGroup>
                 <Card>
                     <CardImg
                       src={ JollofImg }
                       alt=""
                       className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Jollof Rice</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                         <span>from</span>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                       src={ EfoImg }
                       alt=""
                       className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Efo Riro</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                       src={ CocunutImg }
                       alt=""
                       className="prdt"/>
                     <Card.Body>
                         <Card.Title>Cocu-nut Rice</Card.Title>
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
                       src={ OfadaImg }
                       alt=""
                       className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Ofada Rice</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                       src={ FriedRiceImg }
                       alt=""
                       className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Fried Rice</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>500
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
                         <Card.Title>Chicken</Card.Title>
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
                       src={ FishImg }
                       alt=""
                       className="prdt"/>
                     <Card.Body>
                         <Card.Title>Fish</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                       src={ PorkImg }
                       alt=""
                       className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Pork Chops</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                       src={ MoimoiImg }
                       alt=""
                       className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Moi Moi</Card.Title>
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
                       src={ TurkeyImg }
                       alt=""
                       className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Turkey</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                       src={ FriesImg }
                       alt=""
                       className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Fries</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                        <span>from</span>
                        <span className="from mx-1">₦</span>500
                        <AddToCart/>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <CardImg
                       src={ PlantainImg }
                       alt=""
                       className="prdt"
                     />
                     <Card.Body>
                         <Card.Title>Fried Plantain</Card.Title>
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

export default Food;
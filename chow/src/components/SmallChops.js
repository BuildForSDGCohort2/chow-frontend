import React from "react";
import { CardGroup, CardImg, Card } from "react-bootstrap";
import AddToCart from "./AddToCart";

import SamosaImg from "../images/smallChops/samosa.jpg";
import SpringRollImg from "../images/smallChops/springRolls.jpg";
import PuffPuffImg from "../images/smallChops/puffpuff.jpeg";
import gizzardImg from "../images/smallChops/gizzards.jpg";
import CornDogs from "../images/smallChops/cornDogs.jpg";
import Chicken from "../images/smallChops/chicken.jpeg";

const SmallChops = () => {
    return (
        <div className="row">
            <CardGroup>
                <Card>
                    <CardImg
                      src={ SamosaImg }
                      alt=""
                      className="prdt"
                    />
                    <Card.Body>
                      <Card.Title className="mt-5">
                          Samosa
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <span className="from mx-1">₦</span>1500
                      <AddToCart />
                    </Card.Footer>
                </Card>
                <Card>
                    <CardImg
                      src={ SpringRollImg }
                      alt=""
                      className="prdt"
                    />
                    <Card.Body>
                      <Card.Title>
                          Spring Rolls
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <span className="from mx-1">₦</span>1500
                      <AddToCart />
                    </Card.Footer>
                </Card>
                <Card>
                    <CardImg
                      src={ PuffPuffImg }
                      alt=""
                      className="prdt"
                    />
                    <Card.Body>
                      <Card.Title>
                          Puff-Puffs
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <span className="from mx-1">₦</span>1500
                      <AddToCart />
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <CardImg
                      src={ gizzardImg }
                      alt=""
                      className="prdt"
                    />
                    <Card.Body>
                      <Card.Title>
                          Gizzard
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <span className="from mx-1">₦</span>1500
                      <AddToCart />
                    </Card.Footer>
                </Card>
                <Card>
                    <CardImg
                      src={ CornDogs }
                      alt=""
                      className="prdt"
                    />
                    <Card.Body>
                      <Card.Title>
                          Corn Dogs
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <span className="from mx-1">₦</span>1500
                      <AddToCart />
                    </Card.Footer>
                </Card>
                <Card>
                    <CardImg
                      src={ Chicken }
                      alt=""
                      className="prdt"
                    />
                    <Card.Body>
                      <Card.Title>
                          Chicken Cuts
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <span className="from mx-1">₦</span>1500
                      <AddToCart />
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};


export default SmallChops;
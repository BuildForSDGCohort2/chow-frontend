import React from "react";
import { CardGroup, CardImg, Card } from "react-bootstrap";

import cokePet from "../images/drinks/cokepet.jpg";
import pepsiPet from "../images/drinks/pepsi.png";
import fantaPet from "../images/drinks/fantaPet.png";
import spritePet from "../images/drinks/spritepet.jpg";
import sevenUpPet from "../images/drinks/7uppet.jpeg";
import teemPet from "../images/drinks/teemsodapet.webp";
import cokeCan from "../images/drinks/cokecan.jpg";
import pepsiCan from "../images/drinks/pepsican.jpg";
import sevenupCan from "../images/drinks/7upcan.jpg";
import teemCan from "../images/drinks/teemcan.jpg";
import teemCan2 from "../images/drinks/teemtonic.jpg";
import fantaCan from "../images/drinks/fantacan.jpg";
import spriteCan from "../images/drinks/spritecan.jpg"
import aquafinaWater from "../images/drinks/aquafinawater.jpg";
import evaWater from "../images/drinks/evawater.jpg";
import teemlemon from "../images/drinks/teembitterpet.jpeg";
import cokeZero from "../images/drinks/cokepetzero.jpg";

const Drinks = () => {
    return (
        <div className="row">
             <CardGroup>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={cokePet}
                              alt=""
                              className="prdt"
                            />
                            <Card.Body>
                              <Card.Title>Coca-Cola</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={pepsiPet}
                              alt=""
                              className="prdt"
                            />
                             <Card.Body>
                              <Card.Title>Pepsi</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={fantaPet}
                              alt=""
                              className="prdt"
                            />
                             <Card.Body>
                              <Card.Title>Fanta</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                        </CardGroup>
                        <CardGroup>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={spritePet}
                              alt=""
                              className="prdt"
                            />
                            <Card.Body>
                              <Card.Title>Sprite</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={teemPet}
                              alt=""
                              className="prdt"
                            />
                             <Card.Body>
                              <Card.Title>Teem Soda</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={sevenUpPet}
                              alt=""
                              className="prdt"
                            />
                             <Card.Body>
                              <Card.Title>7 Up</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                        </CardGroup>
                        <CardGroup>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={cokeCan}
                              alt=""
                              className="prdt"
                            />
                            <Card.Body>
                              <Card.Title>Coca-Cola</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={pepsiCan}
                              alt=""
                              className="prdt"
                            />
                             <Card.Body>
                              <Card.Title>Pepsi</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={sevenupCan}
                              alt=""
                              className="prdt"
                            />
                             <Card.Body>
                              <Card.Title>7 Up</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                        </CardGroup>
                        <CardGroup>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={teemCan}
                              alt=""
                              className="prdt"
                            />
                            <Card.Body>
                              <Card.Title>Teem Bitter Lemon</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={aquafinaWater}
                              alt=""
                              className="prdt"
                            />
                             <Card.Body>
                              <Card.Title>Aquafina Water</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={evaWater}
                              alt=""
                              className="prdt"
                            />
                             <Card.Body>
                              <Card.Title>Eva Water</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                        </CardGroup>
                        <CardGroup>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={spriteCan}
                              alt=""
                              className="prdt"
                            />
                            <Card.Body>
                              <Card.Title>Sprite Can</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={cokeZero}
                              alt=""
                              className="prdt"
                            />
                             <Card.Body>
                              <Card.Title>Coke Zero</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={teemlemon}
                              alt=""
                              className="prdt"
                            />
                             <Card.Body>
                              <Card.Title>Teem Bitter Lemon</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                        </CardGroup>
                        <CardGroup>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={teemCan}
                              alt=""
                              className="prdt"
                            />
                            <Card.Body>
                              <Card.Title>Teem Bitter Lemon</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={fantaCan}
                              alt=""
                              className="prdt"
                            />
                             <Card.Body>
                              <Card.Title>Fanta Can</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                          <Card>
                            <CardImg 
                              variant="top"
                              src={teemCan2}
                              alt=""
                              className="prdt"
                            />
                             <Card.Body>
                              <Card.Title>Teem Tonic</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                        </CardGroup>
        </div>
    );
};

export default Drinks;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, CardGroup, CardImg, Card } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

import cokePet from "../images/drinks/cokepet.jpg";
import pepsiPet from "../images/drinks/pepsi.png";
import fantaPet from "../images/drinks/fantaPet.png";
import spritePet from "../images/drinks/spritepet.jpg";
import sevenUpPet from "../images/drinks/7uppet.jpeg";
import teemPet from "../images/drinks/teemsoda.jpg";
import cokeCan from "../images/drinks/cokecan.jpg";
import pepsiCan from "../images/drinks/pepsican.jpg";
import sevenupCan from "../images/drinks/7upcan.jpg";

const Order = () => {
  const [key, setKey] = useState("food", "snacks", "salads", "smoothie", "drinks", "small chops", "pizza");

    return (
        <div className="container-fluid">
          <Header />
          <div className="row">
            <div className="col-sm-12 col-lg-3 myOrder text-center">
              <div className="my m-5 p-3">
                <h3>Order Page</h3>
                <p>Sorry dear,we are still working on this page.</p>
                <Link to="/dashboard" className="go">Go Back</Link>
              </div>  
            </div>
            <div className="col-sm-12 col-lg-9 text-center">
              <h3 className="mb-2">Hungry?</h3>
              <p>We got your Back</p>
              <div className="row">
                <div className="col-sm-12">
                  <Tabs
                  id="orders"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  transition={false}
                  >
                    <Tab eventKey="food" title="Food" className="mx-3">
                      <h5 className="text-justify">Food Menu</h5>
                    </Tab>
                    <Tab eventKey="snacks" title="Snacks" className="mx-3">
                      <h5 className="text-justify">Snack Menu</h5>
                    </Tab>
                    <Tab eventKey="salads" title="Salads" className="mx-3">
                      <h5 className="text-justify">Salad Menu</h5>
                    </Tab>
                    <Tab eventKey="smoothie" title="Smoothies" className="mx-3">
                      <h5 className="text-justify">Smoothie Menu</h5>
                    </Tab>
                    <Tab eventKey="small chops" title="Small Chops" className="mx-3">
                      <h5 className="text-justify">Small Chops Menu</h5>
                    </Tab>
                    <Tab eventKey="pizza" title="Pizza" className="mx-3">
                      <h5 className="text-justify">Pizza Menu</h5>
                    </Tab>
                    <Tab eventKey="drinks" title="Drinks" className="mx-3">
                      <h5 className="text-justify">Drink Menu</h5>
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
                              <Card.Title>Pepsi</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <span className="from">N 150</span>
                            </Card.Footer>
                          </Card>
                        </CardGroup>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    );
};

export default Order;
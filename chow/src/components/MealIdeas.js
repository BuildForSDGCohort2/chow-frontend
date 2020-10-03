import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactToolTip from "react-tooltip";
import { Tabs, Tab } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";


const MealIdeas = () => {
  const [key, setKey] = useState("recipes", "recommendations")

    return (
        <div className="container-fluid">
          <Header />
          <div className="row">
            <div className="col-sm-12 col-lg-6 myOrder"></div>
            <div className="col-sm-12 col-lg-6 meal-plan text-justify mt-5">
                <h2 className="text-center">Create Your Plan</h2>
                <p>Ready to choose your meals! Use the + icon to add recipes to your plan.For exciting new meals personalized to your taste preferences,<br/>Check our recommendations.
                  or your saved recipes.
                </p>
                <div className="my-3">
                  <Link
                    to="/meal-planning"
                    className="home view"
                    data-tip="Go Back"
                    >Go Back</Link>
                    <ReactToolTip
                      place="right"
                      type="dark"
                      effect="solid"
                    />
                </div>
                <div className="row">
                 <div className="col-sm-12">
                   <Tabs
                     id="ideas"
                     activeKey={key}
                     onSelect={(k) => setKey(k)}
                     transition={false}
                   >
                     <Tab eventKey="recipes" title="Recipes" className="mx-3">
                       <h5>Recipes Choices</h5>
                       <div className="row">
                         <div className="col-sm-12 col-lg-4 content content_1 m-2">
                           <button className="items">Chicken</button>
                         </div>
                         <div className="col-sm-12 col-lg-4 content content_3 m-2">
                           <button className="items">Pasta</button>
                         </div>
                         <div className="col-sm-12 col-lg-4 content content_2 m-2">
                           <button className="items">Fish</button>
                         </div>
                         <div className="col-sm-12 col-lg-4 content content_4 m-2">
                           <button className="items">Lamb</button>
                         </div>
                       </div>
                     </Tab>
                     <Tab eventKey="recommendations" title="Recommendations" className="mx-3">
                       <h5>Easy Starter Menu</h5>
                       <div className="row">
                         <div className="col-sm-12 col-lg-4 content content1 m-2">
                           <button className="items">Breakfast</button>
                         </div>
                         <div className="col-sm-12 col-lg-4 content content2 m-2">
                           <button className="items">Lunch</button>
                         </div>
                         <div className="col-sm-12 col-lg-4 content content3 m-2">
                           <button className="items">Dinner</button>
                         </div>
                         <div className="col-sm-12 col-lg-4 content content4 m-2">
                           <button className="items">Salad</button>
                         </div>
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

export default MealIdeas;
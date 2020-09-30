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
            <div className="col-sm-6 myOrder"></div>
            <div className="col-sm-6 meal-plan text-justify mt-5">
                <h2 className="text-center">Create Your Plan</h2>
                <p>Ready to choose your meals! Use the + icon to add recipes to your plan.For exciting new meals personalized to your taste preferences,check Your Recommendations.
                  Or check your saved recipes.
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
                   >
                     <Tab eventKey="recipes" title="Recipes" className="mx-3">
                       <h4>Recipe Content</h4>
                       <div className="row">
                         <div className="col-sm-12 col-lg-4 content content1 m-2">
                           <p>Chicken</p>
                         </div>
                         <div className="col-sm-12 col-lg-4 content content2 m-2">
                           <p>Fish</p>
                         </div>
                         <div className="col-sm-12 col-lg-4 content content3 m-2">
                           <p>Pasta</p>
                         </div>
                         <div className="col-sm-12 col-lg-4 content content4 m-2">
                           <p>Lamb</p>
                         </div>
                       </div>
                     </Tab>
                     <Tab eventKey="recommendations" title="Recommendations" className="mx-3">
                       <h4>Easy Starter Menu</h4>
                       <div className="row">
                         <div className="col-sm-12 col-lg-4 content content1 m-2">
                           <p>BreakFast</p>
                         </div>
                         <div className="col-sm-12 col-lg-4 content content2 m-2">
                           <p>Lunch</p>
                         </div>
                         <div className="col-sm-12 col-lg-4 content content3 m-2">
                           <p>Dinner</p>
                         </div>
                         <div className="col-sm-12 col-lg-4 content content4 m-2">
                           <p>Fruits</p>
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
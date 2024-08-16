import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { AboutContent } from "../constants";
import "../Styles/AboutUs.css";

function AboutUs() {
  return (
    <>
      <Header />
      <main className="Main">
        <Nav />
        <div className="Division Centered" style={{ margin: 0 }}>
          <div className="Group-Photo Centered">
            <img
              src={require("../assets/images/vosco_group_photo_edited.png")}
              alt="Group Pic of Vosco Genesis"
              width={"100%"}
            />
          </div>
        </div>

        {AboutContent.map((data) => {
          return (
            <div key={data.id} className="Division About-Us-Div Centered">
              <div className="Card">
                <h1 className="About-Us-Title">{data.title}</h1>
                <p className="About-Us-Text">
                  <br />
                  {data.paragraph}
                </p>
              </div>
            </div>
          );
        })}
      </main>
      <Footer />
    </>
  );
}

// function OurFinalReport() {
//   return <div className="Division Centered">Our Final Report</div>;
// }

export default AboutUs;

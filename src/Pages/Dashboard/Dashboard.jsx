import React from "react";
import CollegeNavbar from "../../Components/CollegeNavbar/CollegeNavbar.jsx";
import "./Dashboard.css";

import princi from "../../assets/img/princi.png";

import clgimg from "../../assets/college.jpg";
import CollegeFooter from "../../Components/CollegeFooter/CollegeFooter.jsx";

export default function Dashboard() {
  return (
    <div>
      <CollegeNavbar />
      <img src={clgimg} className="clgimg" />

      <div className="blueRow d-flex">
        <div className="box" style={{ backgroundColor: "#152844" }}>
          56 <br /> <h3>Years of Excellence</h3>
        </div>
        <div className="box" style={{ backgroundColor: "#163866" }}>
          26 <br /> <h3>Professional Institutions</h3>
        </div>
        <div className="box" style={{ backgroundColor: "#204a84" }}>
          25K <br /> <h3>Brilliant Minds</h3>
        </div>
      </div>

      <div className="running p-2 mt-3" style={{overflow: "hidden"}}>
        <p>
          <a
            target="_blank"
            href="https://vesit.ves.ac.in/storage\Vivekanand Education Socitey.pdf"
          >
            UGC conferred Autonomy status to VESIT for 10 year w.e.f.
            13/12/2023. Click here
          </a>
        </p>
      </div>

      <div className="p-3">
        <div className="princi d-flex p-3">
          <img src={princi} alt="principal" />
          <p
            className="p-4 ms-3"
            style={{ fontSize: "18px", textAlign: "justify" }}
          >
            The long held idiom “reaching for the moon” was a dream realized as
            India's Chandrayan 3 landed on the south pole of the lunar surface
            at 6.03 pm on August 23, 2023. Year 2023 will always be remembered
            for the remarkable achievement of India completing this space
            odyssey. Early 2024, ISRO could also successfully insert Aditya L1
            solar observatory into Halo orbit around the sun-earth point L1.In
            fact, ISRO's missions taught all of us how to aim for the stars
            believing in our own abilities and learning from failures. We are
            also proud of our DRDO scientists for Mission Divyastra, the first
            flight test of indigenously developed Agni-5 missile with Multiple
            Independently Targetable Re-entry Vehicle (MIRV) technology....
            <a href="/principalsDesk">Read More</a>
          </p>
        </div>
      </div>

      <CollegeFooter />
    </div>
  );
}

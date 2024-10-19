import React from "react";
import "./Departments.css";
import CollegeNavbar from "../../Components/CollegeNavbar/CollegeNavbar";
import CollegeFooter from "../../Components/CollegeFooter/CollegeFooter";

export default function Departments() {
    const departments = [
        "Electronics",
        "Computer",
        "Instrumentation",
        "Electronics and Telecommunication",
        "AI & Data Science",
        "Humanities & Applied Science", // Fixed typo
        "Master of Computer Applications"
    ];

    return (
        <div>
            <CollegeNavbar />

            <div className="p-2 mt-3 px-4">
                {departments.map(dep => (
                    <div className="bar my-4 p-3" key={dep}>
                        <h5>{dep}</h5>
                    </div>
                ))}
            </div>

            <CollegeFooter />
        </div>
    );
}

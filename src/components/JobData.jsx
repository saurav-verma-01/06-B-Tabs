import React from "react";
import listIcon from "../assets/list-icon.svg";

const JobData = ({ activeJob }) => {
  console.log(activeJob);

  const { title, dates, duties, company } = activeJob;
  return (
    <div className="job-data">
      <h1 className="job-title">{title}</h1>
      <p className="company">{company}</p>
      <p className="duration">{dates}</p>
      <ul className="job-duties">
        <li className="duty">
          {duties[0]}
          <span className="duty-style">
            <img src={listIcon} alt="list icon" />
          </span>
        </li>
        <li className="duty">{duties[1]}</li>
        <li className="duty">{duties[2]}</li>
      </ul>
    </div>
  );
};

export default JobData;

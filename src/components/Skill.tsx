import React, { FC } from "react";
import ISkill from "../interfaces/ISkill";

const Skill: FC<ISkill> = function({ skill, site, proficiency, color }) {
  const styleForProgBar = {
    height: "1.5rem",
    width: proficiency.toString() + "%",
    backgroundColor: color
  }
  const styleForSkill = {
    padding: "0.25em 1em"
  }
  return (
    <div className="row mb-1">      
      <div className="col-md-4 text-end code">
        <a href={site} style={styleForSkill}>{skill}</a>
      </div>
      <div className="col-md-6">
        <div className="bg-light w-100">
          <div className="text-start proficiency" style={styleForProgBar}>
            <div className="ms-1 text-white">{proficiency}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;

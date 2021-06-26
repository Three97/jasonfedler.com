import React, { FC } from "react";
import ISkill from "../interfaces/ISkill";

const Card: FC<ISkill> = function({ skill, proficiency, color }) {
  // const percentage = `${proficiency}`;
  const styleForProgBar = {
    height: "24px",
    width: proficiency.toString() + "%",
    backgroundColor: color
  }
  return (
    <div className="row mb-1">      
      <div className="col-md-4 text-end code">
        {skill}
      </div>
      <div className="col-md-6">
        <div className="bg-light w-100">
          <div className="text-start" style={styleForProgBar}>
            <div className="ms-1 text-white">{proficiency}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

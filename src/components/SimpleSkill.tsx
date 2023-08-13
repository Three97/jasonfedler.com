import { FC } from "react";
import ISkill from "../interfaces/ISkill";
import GetProficiencyLevel from '../functions/GetProficiencyLevel';

const SimpleSkill: FC<any> = function({ site, skill, discipline, proficiency, isFullWidth }) {
  const styleForSkill = {
    padding: "0.25em 1em"
  }
  const firstColumnStyleClass = function(isFullWidth: Boolean): string {
    return isFullWidth 
    ? "col-offset-1 col-md-4 col text-end code"
    : "col-offset-1 col-md-6 col text-end code";
  }
  const secondColumnStyleClass = function(isFullWidth: Boolean): string {
    return isFullWidth
      ? "col-md-7 col"
      : "col-md-5 col";
  }
  const profLevel = GetProficiencyLevel(proficiency);
  //const classNameForProficiency = "text-start " + profLevel.toLowerCase() + "-" + discipline;
  const classNameForProficiency = `text-start ${profLevel.toLowerCase()}-${discipline}`;
  return (
    <div className="row mb-1">      
      <div className={firstColumnStyleClass(isFullWidth)}>
        <a href={site} style={styleForSkill} title={(site !== "") ? "Click to find out more" : ""}>{skill}</a>
      </div>
      <div className={secondColumnStyleClass(isFullWidth)}>
        <div className="bg-light w-100">
          <div className={classNameForProficiency} title={profLevel + " knowledge of " + skill + " with a rating of " + proficiency}>
            <div className="ms-1 text-white">{profLevel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleSkill;

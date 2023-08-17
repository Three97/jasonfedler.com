import { FC } from "react";
import GetProficiencyLevel from '../functions/GetProficiencyLevel';
import Link from "./Link";
import ISkill from "../interfaces/ISkill";

const SimpleSkill: FC<ISkill> = function({ site, skill, discipline, proficiency }) {
  const profLevel = GetProficiencyLevel(proficiency);
  //const classNameForProficiency = "text-start " + profLevel.toLowerCase() + "-" + discipline;
  const classNameForProficiency = `text-start ${profLevel.toLowerCase()}-${discipline}`;
  return (
    <div className="row mb-1">      
      <div className="col-offset-1 col-md-4 col text-end code">
        <Link name={skill} url={site} tooltip={(site !== "") ? "Click to find out more" : ""} />
      </div>
      <div className="col-md-7 col">
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

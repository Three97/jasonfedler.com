import React, { FC } from "react";
import ISkill from "../interfaces/ISkill";
import GetProficiencyLevel from '../functions/GetProficiencyLevel';
import GetDisciplineByDisciplineType from '../functions/GetDisciplineByDisciplineType';

const Skill: FC<ISkill> = function({ discipline, skill, site, proficiency }) {
  const styleForSkill = {
    padding: "0.25em 1em"
  }
  const profLevel = GetProficiencyLevel(proficiency);
  const classNameForProficiency = "text-start " + profLevel.toLowerCase() + "-" + discipline;
  const disciplineName = GetDisciplineByDisciplineType(discipline);
  const disciplineClass = "col-lg-1 text-white text-center d-none d-lg-block discipline-" + discipline;
  return (
    <div className="row mb-1">      
      <div className="col-lg-3 col-md-4 col text-end code">
        <a href={site} style={styleForSkill}>{skill}</a>
      </div>
      <div className={disciplineClass} title={skill}>
        {disciplineName}
      </div>
      <div className="col-md-8 col">
        <div className="bg-light w-100">
          <div className={classNameForProficiency} title={profLevel + " knowledge of " + skill + " with a rating of " + proficiency}>
            <div className="ms-1 text-white">{profLevel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;

import { FC } from "react";
import ISkill from "../interfaces/ISkill";
import Skill from "./Skill";

const Proficiency: FC<any> = function({ discipline, items }) {
  const sortedSkills = items.sort((a: ISkill, b: ISkill) => a.discipline - b.discipline || a.skill.localeCompare(b.skill));
  return (
    <div className="container mb-5">
      <div className="row mb-1">
        <div className="discipline">{discipline}</div>
        <div className="row">
          
        </div>
        <div className="col-lg-3 col-md-4 col text-end fw-bold pe-4">Skill</div>
        <div className="col-md-8 col text-start fw-bold">Proficiency 
          <small className="fw-normal"> (as defined
            &nbsp;<a href="https://hr.uiowa.edu/careers/competencies/proficiency-levels" target="_blank" rel="noreferrer">here</a>)
          </small>
          </div>
      </div>
      {sortedSkills.map((item: ISkill, i: number) => {
        return (
          <Skill key={++i} site={item.site} skill={item.skill} proficiency={item.proficiency} discipline={item.discipline} />
        );
      })}
    </div>
  );
}

export default Proficiency;

import { FC } from "react";
import ISkill from "../interfaces/ISkill";
import Skill from "./Skill";

const Skills: FC<any> = function({ items }) {
  const sortedSkills = items.sort((a: ISkill, b: ISkill) => a.discipline - b.discipline);
  return (
    <div className="container mb-5">
      <div className="row mb-1">
        <div className="col-lg-3 col-md-4 col text-end fw-bold pe-4">Skill</div>
        <div className="col-lg-1 d-none d-lg-block text-center fw-bold">Discipline</div>
        <div className="col-md-8 col text-start fw-bold">Proficiency <small className="fw-normal">(as defined <a href="https://hr.uiowa.edu/careers/competencies/proficiency-levels">here</a>)</small></div>
      </div>
      {sortedSkills.map((item: ISkill, i: number) => {
        return (
          <Skill key={++i} site={item.site} skill={item.skill} proficiency={item.proficiency} color={item.color} discipline={item.discipline} />
        );
      })}
    </div>
  );
}

export default Skills;
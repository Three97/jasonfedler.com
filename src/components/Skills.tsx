import { FC } from "react";
import ISkill from "../interfaces/ISkill";
import Skill from "./Skill";

const Skills: FC<any> = function({ props: items }) {
  return (
    <div className="container mb-5">
      <div className="row mb-1">
        <div className="col-md-4 text-end fw-bold">Skill</div>
        <div className="col-md-6 text-start fw-bold">Proficiency</div>
      </div>
      {items.map((item: ISkill, i: number) => {
        return (
          <Skill key={++i} site={item.site} skill={item.skill} proficiency={item.proficiency} color={item.color} />
        );
      })}
    </div>
  );
}

export default Skills;

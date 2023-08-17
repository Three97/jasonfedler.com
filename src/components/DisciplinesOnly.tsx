import { FC } from "react";
import DisciplineType from "../enums/DisciplineType";
import ISkill from "../interfaces/ISkill";
import SimpleSkill from "./SimpleSkill";
import GetDisciplineByDisciplineType from "../functions/GetDisciplineByDisciplineType";
import Link from "./Link";

const DisciplinesOnly: FC<{ skills: ISkill[] }> = function ({ skills }) {
  const distinctDisciplines = Array.from(new Set(skills.map((a) => a.discipline)));
  let d = 0;
  return (
    <div className="mt-4" key={d++}>
      <h1>Skills</h1>
      <p>
        Software development is a vast and never-ending landscape of learning
        and is one of the main reasons I gravitated to this career. It seems
        like the more we know, the more we know we don't know. The proficiency 
        values below align to the knowledge scale defined&nbsp;
        <Link name="here" url="https://hr.uiowa.edu/careers/competencies/proficiency-levels" tooltip="" />.
        I have a personal Pluralsight license that I use to keep up with any
        new technology I am exposed to. I'm my worst critic and tend to 
        underestimate my abilities while overdelivering results.
      </p>
      {distinctDisciplines.map((disc: DisciplineType, i: number) => {
        const skillsPerDiscipline = skills.filter((s) => { return String(s.discipline) === String(disc); });
        const disciplineName = GetDisciplineByDisciplineType(disc);
        return (
          <div className="discipline-container mt-3" key={++i}>
            <div className="vertical">{disciplineName}</div>
            {skillsPerDiscipline.map((item: ISkill, j: number) => {
              return (
                <SimpleSkill key={`${i}${++j}`} site={item.site} skill={item.skill} 
                  discipline={item.discipline} proficiency={item.proficiency} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DisciplinesOnly;

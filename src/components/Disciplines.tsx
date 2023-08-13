import { FC } from 'react';
import DisciplineType from '../enums/DisciplineType';
import ISkill from '../interfaces/ISkill';
import SimpleSkill from './SimpleSkill';
import GetDisciplineByDisciplineType from '../functions/GetDisciplineByDisciplineType';

const Disciplines: FC<{ skills: ISkill[], isFullWidth: Boolean }> = function({ skills, isFullWidth }) {
  const distinctDisciplines = Array.from(new Set(skills.map((a) => a.discipline)));
  let d = 0;
  return (
    <div className="mt-4" key={d++}>
      <h1>Skills</h1>
      {distinctDisciplines.map((disc: DisciplineType, i: number) => {
        const skillsPerDiscipline = skills.filter((s) => { return String(s.discipline) === String(disc) });
        const disciplineName = GetDisciplineByDisciplineType(disc);
        return (
          <div className="discipline-container" key={++i}>
            <div className="vertical">{disciplineName}</div>
            {skillsPerDiscipline.map((item: ISkill, j: number) => {
              return (
                <div>
                  <SimpleSkill key={`${i}${++j}`} site={item.site} skill={item.skill} discipline={item.discipline} proficiency={item.proficiency} isFullWidth={isFullWidth} />
                </div>
              );
            })}
          </div>
        );
      })}    
    </div>
  );
}

export default Disciplines;
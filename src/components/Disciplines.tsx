import { FC } from "react";
import DisciplineType from "../enums/DisciplineType";
import ISkill from "../interfaces/ISkill";
import SimpleSkill from "./SimpleSkill";
import GetDisciplineByDisciplineType from "../functions/GetDisciplineByDisciplineType";
import Courses from "./Courses";
import ICourse from "../interfaces/ICourse";
import Link from "./Link";
import GetTotalDuration from "../functions/GetTotalDuration";

const Disciplines: FC<{ skills: ISkill[]; courses: ICourse[];}> = function ({ skills, courses }) {
  const distinctDisciplines = 
    Array.from(new Set(skills.map((a) => a.discipline)))
    .sort(((d1, d2) => (d1 > d2) ? 1 : -1));
  const totalTime = GetTotalDuration(courses.map(i => i.duration));
  const earliestCourse = courses.sort((a:ICourse, b: ICourse) => (new Date(a.completionDate).getTime() - new Date(b.completionDate).getTime()));
  const earliestYear = new Date(earliestCourse[0].completionDate).getFullYear();
  let d = 0;
  return (
    <>
      <div className="text-center" key={d++}>
        <h1><i className="bi bi-tools"></i> Skills</h1>
        <p className="ps-5 pe-5">
          Software development is a vast and never-ending landscape of learning and is one of the main 
          reasons I gravitated to this career. It seems like the more we know, the more we know we do 
          not know. I have a personal Pluralsight license that I use to educate myself when exposed
          to new technologies. Since {earliestYear} I have spent {totalTime} on the courses itemized 
          below. Given I am my own worst critic and tend to underestimate my abilities, I have attempted
          to assign proficiency values to align with the levels defined&nbsp;
          <Link name="here" url="https://hr.uiowa.edu/careers/competencies/proficiency-levels" tooltip="" />.
        </p>
      </div>
      {distinctDisciplines.map((disc: DisciplineType, i: number) => {
        const skillsPerDiscipline = skills
          .filter((s) => { return String(s.discipline) === String(disc); })
          .sort((s1, s2) => (s1.name > s2.name) ? 1 : -1);
        const classNameForDiscipline = `vertical vertical-tab-${disc} text-white`;
        return (
          <div className="discipline-container mt-3" key={++i}>
            <div className={classNameForDiscipline}>&nbsp;{GetDisciplineByDisciplineType(disc)}</div>
            <div className="discipline-inner-container section-container">
              <div className="container-fluid">
                <div className="skills-container">
                  {skillsPerDiscipline.map((item: ISkill, j: number) => {
                    return (
                      <SimpleSkill key={`${i}${++j}`} helpUrl={item.helpUrl} name={item.name} 
                        discipline={item.discipline} proficiency={item.proficiency} />
                    );
                  })}
                </div>
              </div>
              {courses.filter((c) => c.discipline === disc).length > 0 &&
                <details>
                  <summary>Courses</summary>
                  <div className="courses-container text-center mt-4">
                    <Courses items={courses.filter((c) => c.discipline === disc)} />
                  </div>
                </details>
              }
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Disciplines;

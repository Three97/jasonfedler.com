import { FC } from 'react';
import ICourse from '../interfaces/ICourse';
import GetDisciplineByDisciplineType from '../functions/GetDisciplineByDisciplineType';

const Courses: FC<{ items: ICourse[] }> = function({ items }) {
  const disciplineType = GetDisciplineByDisciplineType(items[0].discipline);
  let cIdx = 0;
  return (
    <div className="container mt-3">
      <div className="row">
        <h5>{disciplineType}-Focused Completed Courses</h5>
        {items.sort((a: ICourse, b: ICourse) => a.discipline - b.discipline || (new Date(a.completionDate).getTime() - new Date(b.completionDate).getTime()))
          .map((c: ICourse) => {
            const tooltipForCourse = `${c.provider} course completed on ${new Date(c.completionDate).toDateString()}`;
            return (
              <div className="text-bold mt-1" key={++cIdx}>
                <a href={c.completionUrl} target="_blank" rel="noreferrer" title={tooltipForCourse}>
                  {c.name}
                </a>
              </div>
          );
        })}
      </div>
    </div>
  )
}

export default Courses;

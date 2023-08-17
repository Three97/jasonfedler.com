import { FC } from 'react';
import ICourse from '../interfaces/ICourse';
import GetDisciplineByDisciplineType from '../functions/GetDisciplineByDisciplineType';
import Link from './Link';

const CoursesOnly: FC<{ items: ICourse[] }> = function({ items }) {
  const distinctDisciplines = Array.from(new Set(items.map((i) => i.discipline)))
    .map((d) => GetDisciplineByDisciplineType(d));
  let cIdx = 0;
  return (
    <div className="container mt-3">
      {distinctDisciplines.map((dd: string) => {
        return (
          <>
            <h5 className="mt-3">{dd}-Focused Completed Courses</h5>
            {items.sort((a: ICourse, b: ICourse) => a.discipline - b.discipline || (new Date(a.completionDate).getTime() - new Date(b.completionDate).getTime()))
              .map((c: ICourse) => {
                const tooltipForCourse = `${c.provider} course completed on ${new Date(c.completionDate).toDateString()}`;
                return (
                  <div className="text-bold mt-1 ms-2" key={++cIdx}>
                    {/* <img src={`./assets/${c.provider.toLowerCase()}.png`} alt="" height="24px" title={c.provider} />&nbsp; */}
                    <Link name={c.name} url={c.completionUrl} tooltip={tooltipForCourse} />
                  </div>
              );
            })}
          </>
        );
      })}
      <div className="row">
      </div>
    </div>
  )
}

export default CoursesOnly;

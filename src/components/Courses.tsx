import { FC } from 'react';
import ICourse from '../interfaces/ICourse';
import GetDisciplineByDisciplineType from '../functions/GetDisciplineByDisciplineType';
import Link from './Link';

const Courses: FC<{ items: ICourse[] }> = function({ items }) {
  if (items && items.length > 0) {
    const disciplineType = GetDisciplineByDisciplineType(items[0].discipline);
    let cIdx = 0;
    return (
      <div className="container mt-3">
        <div className="row">
          <h5>{disciplineType}-Focused Completed Courses</h5>
          {/* filter, then sort then map */}
          {items.sort((a: ICourse, b: ICourse) => (new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime()))
            .map((c: ICourse) => {
              const tooltipForCourse = `${c.provider} course completed on ${new Date(c.completionDate).toDateString()}`;
              return (
                <div className="text-bold mt-1" key={++cIdx}>
                  {/* <img src={`./assets/${c.provider.toLowerCase()}.png`} alt="" height="24px" title={c.provider} />&nbsp; */}
                  <Link name={c.name} url={c.completionUrl} tooltip={tooltipForCourse} />
                </div>
            );
          })}
        </div>
      </div>
  )} else {
    return (<></>);
  }  
}

export default Courses;

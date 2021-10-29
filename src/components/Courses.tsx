import { FC } from "react";
import ICourse from "../interfaces/ICourse";
import Course from "./Course";

interface CourseProps {
  items: ICourse[]
}

const Courses: FC<CourseProps> = function({ items }: CourseProps) {
  const distinctHosts = items.map(course => course.host)
    .filter((course, i, item) => item.findIndex(t => t === course) === i);
  console.log(`distinct hosts: ${distinctHosts}`);
  return (
    // <>
    //   {distinctHosts.map((item: ICourse, j: number) => {
    //     return (
    //       <h2 key={++j}>{item.host}</h2>
          <div className="row">
            {items.map((item: ICourse, i: number) => {
              return (
                <Course key={++i}
                {...item}
                course={item} />
                );
            })}
          </div>
  //     )})}
    );
  // </>
}

export default Courses;

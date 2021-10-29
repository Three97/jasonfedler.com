import React, { FC } from "react";
import ICourse from "../interfaces/ICourse";
import CourseCalculations from "../functions/CourseCalculations";

interface CourseComponentProps extends ICourse {
  course: ICourse
}

const Course: FC<CourseComponentProps> = function(
  { author, comments, endDate, githubRepoUrl, 
    lecturesTotal, host, lecturesCompleted, 
    rating, startDate, subtitle, title, course }) {

  //console.log(course);
  
  const calc = new CourseCalculations(course);

  const classForCardBasedOnCompletionRate = function() {
    const commonClass = "card card-equal-height p-3 ";
    return calc.IsComplete()
      ? commonClass + 'bg-highlight1-muted' 
      : commonClass + 'bg-highlight3-muted';
  }
  return (    
    <div className="col">
      <div className={classForCardBasedOnCompletionRate()}>
        <h5>{title}</h5>
        <div>
          <em>{subtitle}</em>
        </div>
        <div>
          Presented by {author}
        </div>
        <div>Percent Complete: {calc.PercentageComplete()}</div>
        <div>Days To Complete: </div>
        <div>Comments {comments}</div>
      </div>
    </div>
  );
}

export default Course;

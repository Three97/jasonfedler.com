import ICourse from '../interfaces/ICourse';

class CourseCalculations {
  constructor(course: ICourse) {
    if (!course) {
      console.log("what you be thinkin");
    }
    this.course = course;
  }

  course: ICourse;

  PercentageComplete = () => {
    return Math.round((this.course.lecturesCompleted / this.course.lecturesTotal) * 100);
  }
  
  IsComplete = () => {
    return this.PercentageComplete() === 100;
  }
  
  StartedDaysAgo = () => {
    const today = new Date();    
    const startDate = new Date(this.course.startDate);
    return today.getDate() - startDate.getDate();
  }
  
  WorkingDays = () => {
    const startDate = new Date(this.course.startDate);
    const endDate = this.course.endDate === undefined
      ? new Date() 
      : new Date(this.course.endDate)
    ;
    return endDate.getDate() - startDate.getDate();
  }

}

export default CourseCalculations;
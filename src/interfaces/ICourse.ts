import DisciplineType from "../enums/DisciplineType";

export default interface ICourse {
  name: string,
  discipline: DisciplineType,
  provider: string,
  completionUrl: string,
  completionDate: string,
}
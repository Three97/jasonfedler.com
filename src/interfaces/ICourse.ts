import DisciplineType from "../enums/DisciplineType";
import IDuration from "./IDuration";

export default interface ICourse {
  name: string;
  discipline: DisciplineType;
  provider: string;
  completionUrl: string;
  completionDate: string;
  duration: IDuration;
}
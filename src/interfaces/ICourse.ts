import DisciplineType from "../enums/DisciplineType";
import IDuration from "./IDuration";
import { IGitHubRepo } from "./IGitHubRepo";

export default interface ICourse {
  name: string;
  discipline: DisciplineType;
  provider: string;
  completionUrl: string;
  completionDate: string;
  duration: IDuration;
  repo?: IGitHubRepo;
}
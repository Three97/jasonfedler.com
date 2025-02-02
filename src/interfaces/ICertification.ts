import ILink from "./ILink";

interface ICertification {
  name: string,
  service: string,
  sourceLink: ILink,
  completionLink: ILink,
  completionDate: string
}

export default ICertification;
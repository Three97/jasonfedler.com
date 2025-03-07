import ILink from "../interfaces/ILink";

interface IBookProps {
  title: string;
  author: string,
  synopsis: string;
  link: ILink;
  isCurrentlyReading: boolean
}

export default IBookProps;
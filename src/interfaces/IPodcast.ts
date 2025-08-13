import ILink from "./ILink";

interface IPodcast {
  isActive: boolean,
  name: string,
  podcastLink: ILink,
  comments: string
}

export default IPodcast;
export default interface ICourse {
  title: string,
  subtitle: string,
  githubRepoUrl: string,
  host: string,
  author: string,
  lecturesCompleted: number,
  lecturesTotal: number,
  rating: number,
  startDate: string,
  endDate?: string,
  comments?: string,
  certificateOfCompletionUrl: string
};

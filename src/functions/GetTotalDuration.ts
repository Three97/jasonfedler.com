import IDuration from "../interfaces/IDuration"

const GetTotalDuration = (durations: IDuration[]): string => {
  // add all minutes
  // divide by 60, keeping whole number
  // keep remainder
  // add all hours
  // add hours to whole number above
  // return "{hours}h:{minutes}m"
  const hours = durations.map(h => h.hours).reduce((partialSum, a) => partialSum + a, 0);
  const minutes = durations.map(m => m.minutes).reduce((partialSum, a) => partialSum + a, 0);
  const hoursFromMinutes = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours + hoursFromMinutes} hours and ${remainingMinutes} minutes`;
}

export default GetTotalDuration;
import IDuration from "../interfaces/IDuration"

const GetTotalDuration = (durations: IDuration[]): string => {
  // add all minutes
  // divide by 60, keeping whole number
  // keep remainder
  // add all hours
  // add hours to whole number above
  // get total hours
  // round to nearest multiple of 10
  // find next multiple of 10 if we add 5 hours
  // if it rounds up, return "nearly", otherwise, "over"
  const hours = durations.map(h => h.hours).reduce((partialSum, a) => partialSum + a, 0);
  const minutes = durations.map(m => m.minutes).reduce((partialSum, a) => partialSum + a, 0);
  const hoursFromMinutes = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  // write to console so I can get a more specific number
  console.log("total course duration", `${hours + hoursFromMinutes} hours and ${remainingMinutes} minutes`);

  const totalHours = hours + hoursFromMinutes + (remainingMinutes / 60);
  const nextMultipleOfTen = Math.floor((totalHours + 5) / 10) * 10;
  const totalHoursRounded = Math.floor(totalHours / 10) * 10;
  
  return (totalHoursRounded === nextMultipleOfTen) 
    ? `over ${totalHoursRounded} hours`
    : `nearly ${nextMultipleOfTen} hours`;
}

export default GetTotalDuration;
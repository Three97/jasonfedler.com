const GetProficiencyLevel = (percentage: number): string => {
  if (percentage <= 25) {
    return "Basic";
  }
  if (percentage <= 50) {
    return "Working";
  }
  if (percentage <= 75) {
    return "Extensive";
  }
  return "Expert";
}

export default GetProficiencyLevel;
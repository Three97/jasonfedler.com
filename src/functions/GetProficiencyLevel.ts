const GetProficiencyLevel = (percentage: number): string => {
  if (percentage <= 33) {
    return "Basic";
  }
  if (percentage <= 66) {
    return "Working";
  }
  return "Extensive";
}

export default GetProficiencyLevel;
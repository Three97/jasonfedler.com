import IColor from '../interfaces/IColor';

const GetColorIntensity = (discipline: string, intensity: number) => {
  // start with black, I guess?
  let color: IColor = {
    red: 0,
    blue: 0,
    green: 0
  };

  switch (discipline) {
    case "Backend":
      if (intensity <= 25) {
        color = { red: 201, green: 50, blue: 194 };
        break;
      }
      if (intensity <= 50) {
        color = { red: 138, green: 34, blue: 133 };
        break;
      }
      if (intensity <= 75) {
        color = { red: 74, green: 18, blue: 71 };
        break;
      }
      color = { red: 61, green: 15, blue: 59 };
      break;
    case "Frontend": {
      if (intensity <= 25) {
        color = { red: 0, green: 222, blue: 0 };
        break;
      }
      if (intensity <= 50) {
        color = { red: 0, green: 0, blue: 0 };
        break;
      }
      if (intensity <= 75) {
        color = { red: 0, green: 0, blue: 0 };
        break;
      }
      color = { red: 0, green: 0, blue: 0 };
      break;
    }
    case "Process": {
      if (intensity <= 25) {
        color = { red: 0, green: 0, blue: 0 };
        break;
      }
      if (intensity <= 50) {
        color = { red: 0, green: 0, blue: 0 };
        break;
      }
      if (intensity <= 75) {
        color = { red: 0, green: 0, blue: 0 };
        break;
      }
      color = { red: 0, green: 0, blue: 0 };
      break;
    }
  }

  return color;
}

export default GetColorIntensity;
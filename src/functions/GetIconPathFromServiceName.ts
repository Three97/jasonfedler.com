const GetIconPathFromServiceName = (service: string) : string => {
  const lowerService = service.toLocaleLowerCase();
  let path = "";
  if (lowerService === "azure") {
    path = "azure.svg";
  } else if (lowerService === "aws") {
    path = "aws.png";
  } else if (lowerService === "ms") {
    path = "ms.png";
  }
  return `./assets/${path}`;
}

export default GetIconPathFromServiceName;
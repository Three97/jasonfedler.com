import GetIconPathFromServiceName from "../functions/GetIconPathFromServiceName";

const Logo = (props: { service: string; }) => {  
  var iconPath = GetIconPathFromServiceName(props.service);
  return (
    <div>
      <img src={iconPath} alt="an icon representing the certificate issuer"></img>
      <div>icon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a></div>
    </div>
  );  
}

export default Logo;
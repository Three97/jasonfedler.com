import { FC } from "react";
import ICertification from "../interfaces/ICertification";
import GetIconPathFromServiceName from "../functions/GetIconPathFromServiceName";

const Certifications: FC<{ certs: ICertification[] }> = function({ certs }) {
  return (
    <div className="mt-4 text-center">
      <h1>Certifications</h1>
      {certs.map((cert: ICertification, c: number) => {
        const iconPath = GetIconPathFromServiceName(cert.service);
        return (
          <div className="certification-container my-4" key={++c}>
            <div className="d-inline-flex py-4 px-5">
              <div className="mt-3 text-end">
                <img src={iconPath} alt="an icon representing the certificate issuer" height="48px"></img>
              </div>
              <div className="ms-3 text-start">
                <a href={cert.sourceUrl}>
                  <span className="certification-name">{cert.name}</span>
                </a>
                <div>
                  <a href={cert.completionUrl} target="_blank" rel="noreferrer">Actual certificate</a>
                </div>
                <div className="ms-1">
                  Completed on {new Date(cert.completionDate).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"})}
                </div>
              </div>
            </div>
          </div>
        );
      })}
  </div>
  );
}

export default Certifications;
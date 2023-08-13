import { FC } from "react";
import ICertification from "../interfaces/ICertification";
import GetIconPathFromServiceName from "../functions/GetIconPathFromServiceName";

const Certifications: FC<{ certs: ICertification[] }> = function({ certs }) {
  return (
    <div className="mt-4">
      <h1>Certifications</h1>
      {certs.map((cert: ICertification, c: number) => {
        const iconPath = GetIconPathFromServiceName(cert.service);
        return (
          <div className="certification-container mb-4" key={++c}>
            <div className="container">
              <div className="row">
                <div className="col-2 justify-content-end mt-3 align-middle">
                  <img src={iconPath} alt="an icon representing the certificate issuer" height="48px"></img>
                </div>
                <div className="col ms-3">
                  <a href={cert.helpUrl}>
                    <span className="certification-name">{cert.name}</span>
                  </a>
                  <div><a href={cert.url}>Actual certificate</a></div>
                  <div>Completed on {new Date(cert.completedOn).toLocaleDateString()}</div>
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
import { FC } from "react";
import ICertification from "../interfaces/ICertification";
import GetIconPathFromServiceName from "../functions/GetIconPathFromServiceName";

const Certifications: FC<{ certs: ICertification[] }> = function({ certs }) {
  return (
    <div className="mt-4 text-center">
      <h1><i className="bi bi-trophy"></i> Certifications</h1>
      {certs.map((cert: ICertification, c: number) => {
        const iconPath = GetIconPathFromServiceName(cert.service);
        return (
          <div className="certification-container block-segment my-4" key={++c}>
            <div className="d-inline-flex py-4 px-5">
              <div className="mt-3 text-end">
                <img src={iconPath} alt="an icon representing the certificate issuer" height="48px"></img>
              </div>
              <div className="ms-3 text-start">
                <a href={cert.sourceLink.url} target="_blank" rel="noreferrer" title={cert.sourceLink.tooltip}>
                  <span className="certification-name">{cert.sourceLink.name}</span>
                </a>
                <div>
                  <a href={cert.completionLink.url} target="_blank" rel="noreferrer" title={cert.completionLink.tooltip}>
                    {cert.completionLink.name}
                  </a>
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
import { FC } from 'react';

const SocialLinks: FC<any> = function() {
  const anchorStyle = Object.assign({}, { padding: "0"}, { backgroundColor: "transparent" });
  const imgSize = "48px";
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center">
        <div className="me-4" title="All my sh*t is online">
          <a target="_blank" href="https://github.com/Three97" rel="noreferrer" style={anchorStyle}>
            <img src="./assets/github.png" alt="GitHub logo" width={imgSize} />
          </a>
        </div>
        <div className="mx-2" title="21st century resume that keep up with less often than I should">
          <a target="_blank" href="https://www.linkedin.com/in/jason-fedler-35b33a8/" rel="noreferrer" style={anchorStyle}>
            <img src="./assets/linkedin.png" alt="LinkedIn logo" width={imgSize} />
          </a>
        </div>
        <div className="ms-4" title="Actual resume as of August 2023">
          <a target="_blank" href="./assets/JasonPFedler_ResumeAug2023.pdf" rel="noreferrer" style={anchorStyle}>
            <img src="./assets/resume.png" alt="Resume logo" width={imgSize} />
          </a>
        </div>
      </div>
    </div>
  )
};

export default SocialLinks;
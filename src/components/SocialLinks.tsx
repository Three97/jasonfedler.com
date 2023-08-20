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
        <div className="ms-4" title="21st century resume that I don't keep up with near as much as I should">
          <a target="_blank" href="https://www.linkedin.com/in/jason-fedler-35b33a8/" rel="noreferrer" style={anchorStyle}>
            <img src="./assets/linkedin.png" alt="LinkedIn logo" width={imgSize} />
          </a>
        </div>
      </div>
    </div>
  )
};

export default SocialLinks;
import { FC } from 'react';

const SocialLinks: FC<any> = function() {
  const anchorStyle = Object.assign({}, { padding: "0"}, { backgroundColor: "transparent" });
  const imgSize = "48px";
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 text-end" title="All my sh*t is online">
          <a target="_blank" href="https://github.com/Three97" rel="noreferrer" style={anchorStyle}>
            <img src="./assets/github.png" alt="GitHub logo" width={imgSize} />
          </a>
        </div>
        <div className="col-6 text-start" title="21st century resume that I don't keep up with near as much as I should">
          <a target="_blank" href="https://www.linkedin.com/in/jason-fedler-35b33a8/" rel="noreferrer" style={anchorStyle}>
            <img src="./assets/linkedin.png" alt="LinkedIn logo" width={imgSize} />
          </a>
        </div>
      </div>
    </div>
  )
};

export default SocialLinks;
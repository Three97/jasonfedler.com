import { FC } from 'react';

const Banner: FC<any> = function({ title, subtitle, tagline }) {
  // want to handle links of the sort in this component differently than the rest of the page
  const anchorStyle = Object.assign({}, { padding: "0"}, { backgroundColor: "transparent" });
  const imgSize = "48px";
  return (
    <header role="banner">
      <div className="jumbotron">
        <h1 className="text-center fs-1 text-monospace">{title}</h1>
        <h2 className="text-center fs-5 text-monospace">{subtitle}</h2>
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
          <div className="text-center text-muted mt-4">
            <small><em>{tagline}</em></small>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;

import { FC } from 'react';

const Banner: FC<any> = function({ title, subtitle, tagline }) {
  return (
    <header role="banner">
      <div className="jumbotron">
        <h1 className="text-center fs-1 text-monospace">{title}</h1>
        <h2 className="text-center fs-5 text-monospace">{subtitle}</h2>
        <div className="text-center text-muted">
          <small><em>{tagline}</em></small>
        </div>
      </div>
    </header>
  );
}

export default Banner;

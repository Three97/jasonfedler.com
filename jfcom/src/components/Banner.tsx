import { FC } from 'react';

const Banner: FC<any> = function({ title, subtitle }) {
  return (
    <header role="banner">
      <div className="jumbotron">
        <h1 className="text-center fs-1 text-monospace">{title}</h1>
        <h2 className="text-center fs-5 text-monospace">{subtitle}</h2>
      </div>
    </header>
  );
}

export default Banner;

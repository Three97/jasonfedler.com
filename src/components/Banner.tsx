import { FC } from 'react';
import SocialLinks from './SocialLinks';

const Banner: FC<{ title: string, subtitle: string, tagline: string}> = function({ title, subtitle, tagline }) {
  // want to handle links of the sort in this component differently than the rest of the page
  return (
    <header role="banner">
      <div className="jumbotron">
        <h1 className="text-center fs-1 text-monospace">{title}</h1>
        <h2 className="text-center fs-5 text-monospace">{subtitle}</h2>
        <SocialLinks />
        <div className="container">
          <div className="text-center mt-4">
            <small><em>{tagline}</em></small>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;

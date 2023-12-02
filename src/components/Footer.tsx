import React, { FC } from 'react';

const Footer: FC = function() {
  const currentYear:number = new Date().getFullYear();
  const yearRange = currentYear === 2021
    ? "2021"
    : `2021 - ${currentYear}`;

  return (
    <footer className="mt-4 p-5 text-center fg-highlight3" role="contentinfo">
      <div className="mt-3">
        <em>(c) {yearRange} Copyright JasonFedler.com</em>
      </div>
      <div>
        icons by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
      </div>
      <div className="mt-5 text-small text-center">
        Code for this website can be found
          <a href="https://github.com/Three97/jasonfedler.com" title="website code" target="_blank" rel="noreferrer">
            here <img src="./assets/github.png" alt="Code repository for website" width="24px" />
          </a>.
      </div>
    </footer>
  );
}

export default Footer;

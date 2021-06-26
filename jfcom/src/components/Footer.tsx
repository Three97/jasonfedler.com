import React, { FC } from 'react';

const Footer: FC = function() {
  const currentYear:number = new Date().getFullYear();
  const yearRange = currentYear === 2021
    ? "2021"
    : `2021 - ${currentYear}`;

  return (
    <footer className="mt-5 p-3 text-center fg-highlight3" role="contentinfo">
      <div className="mt-3">
        <em>(c) {yearRange} Copyright JasonFedler.com</em>
      </div>
    </footer>
  );
}

export default Footer;

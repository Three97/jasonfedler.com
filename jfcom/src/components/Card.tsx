import { FC } from 'react';
import ICardProps from "../interfaces/ICardProps";
import ILink from '../interfaces/ILink';
import Link from "./Link";

const Card: FC<ICardProps> = function({ title, subtitle, links }) {
  return (
    <div className="card card-equal-height p-5 bg-highlight-muted">
      <h2>{title}</h2>
      <div className="mb-3">
        <em>{subtitle}</em>
      </div>
      {links.map((item: ILink, i: number) => {
        return (
          <Link key={++i} name={item.name} url={item.url} tooltip={item.tooltip} />
        );
      })}
    </div>
  );
}

export default Card;

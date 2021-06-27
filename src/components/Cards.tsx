import { FC } from 'react';
import Card from "./Card";
import ICardProps from '../interfaces/ICardProps';

const Cards: FC<any> = function({ props }) {
  let cardClass = "";
  if (props.length === 1) {
    cardClass = "col-sm-12 mb-2 text-center";
  } else if (props.length === 2) {
    cardClass = "col-lg-6 col-sm-12 mb-2 text-center";
  } else if (props.length === 3) {
    cardClass = "col-lg-4 col-md-6 col-sm-12 mb-2 text-center";
  }
  return (
    <div className="container">
      <div className="row">
        {props.map((item: ICardProps, i: number) => {
          return (
            <div key={++i} className={cardClass}>
              <Card key={++i} title={item.title} subtitle={item.subtitle} links={item.links} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Cards;

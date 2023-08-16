import { FC } from 'react';
import IPodcast from '../interfaces/IPodcast';

const Podcasts: FC<{ items: IPodcast[] }> = function({ items }) {
  let pIdx = 0;
  return (
    <div className="container">
      <h1>Podcasts</h1>
      <p>
        I regularly listen to several podcasts to stay up to date 
        with the latest technologies and approaches to software engineering.
      </p>
      {items.map((p: IPodcast) => {
        return (
          <div className="mt-1 ms-3" key={pIdx++}>
            <a href={p.url} target="_blank" rel="noreferrer">
              {p.name}
            </a> - <i>{p.comments}</i>
          </div>
        )
      })}
    </div>
  )
};

export default Podcasts;
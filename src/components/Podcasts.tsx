import { FC } from 'react';
import IPodcast from '../interfaces/IPodcast';
import Link from './Link';

const Podcasts: FC<{ items: IPodcast[] }> = function({ items }) {
  let pIdx = 0;
  // (a:ICourse, b: ICourse) => (new Date(a.completionDate).getTime() - new Date(b.completionDate).getTime())
  const sortedItems = items.sort((a:IPodcast, b:IPodcast) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
  return (
    <div className="container mt-4 section-container bordered-container p-3">
      <div className="text-center">
        <h1><i className="bi bi-headphones"></i> Podcasts</h1>
        <hr />
        <p>
          I regularly listen to the following podcasts to stay up to date 
          with the latest technologies and approaches to software engineering.
          There are also a few I listen to just for fun.
        </p>
        <hr />
      </div>
      <ul>
        {sortedItems.map((p: IPodcast) => {
          return (
            <li>
              <div className="mt-1 " key={pIdx++}>
                <Link name={p.podcastLink.name} url={p.podcastLink.url} tooltip={p.podcastLink.tooltip} /> - <i>{p.comments}</i>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default Podcasts;
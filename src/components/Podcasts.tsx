import { FC } from 'react';
import IPodcast from '../interfaces/IPodcast';
import Link from './Link';

const Podcasts: FC<{ items: IPodcast[] }> = function({ items }) {
  let pIdx = 0;
  // (a:ICourse, b: ICourse) => (new Date(a.completionDate).getTime() - new Date(b.completionDate).getTime())
  let sortedItems = items.sort((a:IPodcast, b:IPodcast) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
  return (
    <div className="container text-center mt-4">
      <h1>
      <i className="bi bi-headphones"></i> Podcasts</h1>
      <p>
        I regularly listen to the following podcasts to stay up to date 
        with the latest technologies and approaches to software engineering.
        There are also a few I listen to just for fun.
      </p>
      {sortedItems.map((p: IPodcast) => {
        return (
          <div className="mt-1 " key={pIdx++}>
            <Link name={p.podcastLink.name} url={p.podcastLink.url} tooltip={p.podcastLink.tooltip} /> - <i>{p.comments}</i>
          </div>
        )
      })}
    </div>
  )
};

export default Podcasts;
import { FC } from 'react';
import Book from './Book';
import IBookProps from '../interfaces/IBookProps';

const Books: FC<{ props: IBookProps[] }> = function({ props }) {
  const sortedItems = props.sort((a:IBookProps, b:IBookProps) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
  const readBooks = sortedItems.filter(x => !x.isCurrentlyReading);
  const currentlyReading = sortedItems.filter(x => x.isCurrentlyReading);
  return (
      <div className="container mt-4 books-container block-segment p-3">
        <div>
          <h1 className="text-center"><i className="bi bi-book"></i> Technical Books</h1>
          <hr />
          <p>
            I read a variety of books, often several at a time, but I like to always be working through at least one technology book. Here are a few that I have finished.
          </p>
          <hr />
        </div>
        {currentlyReading.length > 0 &&
          <div>
            <h4>Currently Reading</h4>
            <ul>
            {currentlyReading.map((item: IBookProps, i: number) => {
              return (
                <li>
                  <Book key={++i} title={item.title} author={item.author} synopsis={item.synopsis} link={item.link} isCurrentlyReading />
                </li>
              )
            })}
            </ul>
          </div>
        }
        {readBooks.length > 0 &&
          <div>
            <h4>Completed</h4>
            <ul>
              {readBooks.map((item: IBookProps, i: number) => {
                return (
                  <li>
                    <Book key={++i} title={item.title} author={item.author} synopsis={item.synopsis} link={item.link} isCurrentlyReading />
                  </li>
                )
              })}
            </ul>
          </div>
        }
      </div>
  );
}

export default Books;
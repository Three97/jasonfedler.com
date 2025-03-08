import { FC } from 'react';
import IBookProps from "../interfaces/IBookProps";
import Link from "./Link";

const Book: FC<IBookProps> = function({ title, author, synopsis, link }) {
  return (
    <div>
      <div>
        <Link key={1} name={title} url={link.url} tooltip={link.tooltip} />
        , {author}
        , <em>{synopsis}</em>
      </div>
    </div>
  );
}

export default Book;

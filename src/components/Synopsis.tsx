import { FC } from 'react';

const Synopsis: FC<{ synopsis: string }> = function({ synopsis }) {
  return (
    <div className="synopsis-statement py-5 mb-3">
      <div className="container text-center ps-5 pe-5">
        {synopsis}
      </div>
    </div>
  );
}

export default Synopsis;
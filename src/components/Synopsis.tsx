import { FC } from 'react';

const Synopsis: FC<{ synopsis: string }> = function({ synopsis }) {
  return (
    <div className="synopsis-statement py-4 mb-3">
      <div className="container text-center">
        {synopsis}
      </div>
    </div>
  );
}

export default Synopsis;
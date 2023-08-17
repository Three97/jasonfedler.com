import { FC } from 'react';

const Synopsis: FC<{ synopsis: string }> = function({ synopsis }) {
  return (
    <div className="synopsis-statement py-4 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            {synopsis}
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Synopsis;
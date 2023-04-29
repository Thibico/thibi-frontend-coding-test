import React from 'react';

const alphabetsArray = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const AlphabeticalList = () => {
  return (
    <ul className="flex overflow-scroll gap-4">
      {alphabetsArray.map((alphabet) => {
        return (
          <li key={alphabet}>
            <button>{alphabet}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default AlphabeticalList;

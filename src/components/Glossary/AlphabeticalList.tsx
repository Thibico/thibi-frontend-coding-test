import React from 'react';

interface IAlphabeticalList {
  changeSelectedAlphabet: (param: string) => void;
  selectedAlphabet: string;
}

const alphabetsArray = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const AlphabeticalList = ({ changeSelectedAlphabet, selectedAlphabet }: IAlphabeticalList) => {
  return (
    <ul className="w-full whitespace-nowrap overflow-x-auto pb-5 mx-auto text-center lg:pb-24">
      {alphabetsArray.map((alphabet) => {
        return (
          <li
            key={alphabet}
            className={`w-[36px] lg:w-[43px] h-[26px] text-lg lg:text-[28px] lg:leading-[45px] text-[#727272] inline-block text-center`}
          >
            <button
              onClick={() => changeSelectedAlphabet(alphabet)}
              className={`${
                selectedAlphabet === alphabet ? 'text-primary font-semibold underline' : ''
              }`}
            >
              {alphabet}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default AlphabeticalList;

import { ISingleGlossary } from '@/pages';
import { useRouter } from 'next/router';
import React from 'react';

interface IGlossaries {
  selectedGlossaries: ISingleGlossary[];
  selectedAlphabet: string;
}

const Glossaries = ({ selectedGlossaries, selectedAlphabet }: IGlossaries) => {
  const { locale } = useRouter();

  return (
    <div className="shadow-[2px_2px_2px_0px_rgba(0,0,0,0.05)] w-full rounded-tl-[5px] rounded-tr-[5px] overflow-hidden">
      <div className="bg-primary text-white px-[30px] lg:px-[118px] py-4 lg:py-8 font-semibold text-lg lg:text-[40px] lg:leading-[47px]">
        {selectedAlphabet}
      </div>
      <div className="flex flex-col gap-[26px] px-[30px] lg:px-[118px] pb-7 pt-3 lg:pb-14 lg:pt-20 min-h-[200px]">
        {selectedGlossaries.map((glossary) => {
          return (
            <div key={glossary.id}>
              <div className="font-semibold text-base leading-[26px] pb-2 lg:text-[30px]">
                {glossary.attributes.en_term}
              </div>
              <div className="font-padauk text-accent align-top lg:text-[30px] first-letter:uppercase">
                {locale === 'en' ? glossary.attributes.description : glossary.attributes.mm_term}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Glossaries;

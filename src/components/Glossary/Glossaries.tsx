import { ISingleGlossary } from '@/pages';
import { useRouter } from 'next/router';
import React from 'react';

interface IGlossaries {
  selectedGlossaries: ISingleGlossary[];
}

const Glossaries = ({ selectedGlossaries }: IGlossaries) => {
  const { locale } = useRouter();

  return (
    <div>
      <div className="bg-primary rounded-lg text-white px-3">A</div>
      <div className="flex flex-col gap-3 p-3">
        {selectedGlossaries.map((glossary) => {
          return (
            <div key={glossary.id}>
              <div className="font-bold">{glossary.attributes.en_term}</div>
              <div>
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

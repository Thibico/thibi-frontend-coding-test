import useTranslation from 'next-translate/useTranslation';
import Layout from '@/components/Layout';
import GlossaryDefination from '@/components/Glossary/GlossaryDefination';
import AlphabeticalList from '@/components/Glossary/AlphabeticalList';
import Glossaries from '@/components/Glossary/Glossaries';
import ScrollTopBtn from '@/components/Glossary/ScrollTopBtn';
import { useMemo, useState } from 'react';

export interface ISingleGlossary {
  id: number;
  attributes: {
    en_term: string;
    mm_term: string;
    description: string;
    reference: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    subterm: string | null;
  };
}

interface IHomeProps {
  data: ISingleGlossary[];
}

export default function Home({ data }: IHomeProps) {
  const { t } = useTranslation('common');
  const [alphabet, setAlphabet] = useState('B');

  /**I assumed that "#" sign is for glossaries which start with non-alphabet letter*/
  const { alphabeticalGlossaries, nonAlphabeticalGlossaries } = useMemo(() => {
    const glossaries = data.reduce(
      (accumulator, currentValue) => {
        if (/^[a-zA-Z]$/.test(currentValue.attributes.en_term[0])) {
          accumulator.alphabeticalGlossaries.push(currentValue);
        } else {
          accumulator.nonAlphabeticalGlossaries.push(currentValue);
        }
        return accumulator;
      },
      {
        alphabeticalGlossaries: [] as ISingleGlossary[],
        nonAlphabeticalGlossaries: [] as ISingleGlossary[],
      }
    );

    //Non-Alphabetical Glossaries will be sorted only once
    glossaries.nonAlphabeticalGlossaries.sort((a, b) =>
      a.attributes.en_term.localeCompare(b.attributes.en_term)
    );

    return glossaries;
  }, [data]);

  const selectedGlossaries = useMemo(() => {
    return alphabet === '#'
      ? nonAlphabeticalGlossaries
      : alphabeticalGlossaries
          .filter((glossary) => glossary.attributes.en_term[0].toUpperCase() === alphabet)
          .sort((a, b) => a.attributes.en_term.localeCompare(b.attributes.en_term));
  }, [alphabet, nonAlphabeticalGlossaries, alphabeticalGlossaries]);

  return (
    <>
      <Layout>
        <div className="h-full bg-slate-300 p-10">
          <div className="container px-4 mx-auto">
            <GlossaryDefination />
            <AlphabeticalList />
            <Glossaries selectedGlossaries={selectedGlossaries} />
            <ScrollTopBtn />
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://cms.businessintegritymyanmar.thibi.co/api/glossaries');
  const { data } = await res.json();

  return {
    props: {
      data,
    },
  };
}

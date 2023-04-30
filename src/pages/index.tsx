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
  const [selectedAlphabet, setSelectedAlphabet] = useState('B');

  /**I assumed that "#" sign is for glossaries which start with non-alphabet letter*/
  const selectedGlossaries = useMemo(() => {
    return selectedAlphabet === '#'
      ? data
          .filter((glossary) => !/^[a-zA-Z]$/.test(glossary.attributes.en_term[0]))
          .sort((a, b) =>
            a.attributes.en_term.localeCompare(b.attributes.en_term, 'en', { sensitivity: 'base' })
          )
      : data
          .filter((glossary) => glossary.attributes.en_term[0].toUpperCase() === selectedAlphabet)
          .sort((a, b) =>
            a.attributes.en_term.localeCompare(b.attributes.en_term, 'en', { sensitivity: 'base' })
          );
  }, [selectedAlphabet, data]);

  const changeSelectedAlphabet = (param: string) => {
    setSelectedAlphabet(param);
  };

  return (
    <>
      <Layout>
        <div className="h-full bg-white px-5 lg:px-8">
          <GlossaryDefination />
          <AlphabeticalList
            changeSelectedAlphabet={changeSelectedAlphabet}
            selectedAlphabet={selectedAlphabet}
          />
          <Glossaries selectedAlphabet={selectedAlphabet} selectedGlossaries={selectedGlossaries} />
          <ScrollTopBtn />
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

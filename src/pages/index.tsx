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
  const [alphabet, setAlphabet] = useState('A');

  const selectedGlossaries = useMemo(
    () =>
      data.filter(
        (glossary) => glossary.attributes.en_term[0].toLowerCase() === alphabet.toLowerCase()
      ),
    [alphabet, data]
  );

  console.log(data);

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

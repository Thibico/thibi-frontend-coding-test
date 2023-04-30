import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const GlossaryDefination = () => {
  const { t } = useTranslation('common');
  return (
    <div className="text-center font-padauk">
      <h2 className="text-[32px] leading-[42px] font-bold pt-[37px] pb-6 lg:text-[50px] lg:leading-[66px] capitalize lg:pt-[106px] lg:pb-[90px]">
        {t('glossary')}
      </h2>
      <div
        className="text-lg text-[#727272] text-center align-top break-normal px-8 pb-14 lg:text-[28px] lg:leading-[45px] lg:pb-[68px] max-w-4xl mx-auto"
        style={{ lineBreak: 'strict' }}
      >
        {t('glossary-definition')}
      </div>
    </div>
  );
};

export default GlossaryDefination;

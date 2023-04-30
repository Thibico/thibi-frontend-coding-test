import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const ScrollTopBtn = () => {
  const { t } = useTranslation('common');

  return (
    <div className="mt-[34px] mb-[22px] font-padauk text-xs leading-[18px] text-[rgba(114,114,114,1)] font-bold text-center lg:text-[20px] lg:leading-[29px] lg:mt-[71px]">
      <button className="underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        {t('scroll-to-top')}
      </button>
    </div>
  );
};

export default ScrollTopBtn;

//import { locales } from '../../../i18n.json';
import setLanguage from 'next-translate/setLanguage';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import layoutConfig from '@/config/layoutConfig';

interface ILanguageToggle {
  textColor?: string;
}

const LanguageToggle = ({ textColor = 'white' }: ILanguageToggle) => {
  const router = useRouter();
  const locale = typeof router.locale === 'string' ? router.locale : '';
  const { t } = useTranslation('common');

  return (
    <div className={`text-${textColor} font-padauk`}>
      <div className="flex gap-2">
        {layoutConfig.locales.map((lng, index) => {
          return (
            <div
              key={index}
              className="flex gap-2 text-white text-[18px] lg:text-[28px] lg:leading-[44px] leading-7 "
            >
              <div
                className={`text-${textColor} hover:font-bold capitalize cursor-pointer ${
                  locale === lng ? 'font-bold' : ''
                }`}
                onClick={() => setLanguage(lng)}
              >
                {lng === 'en' ? 'en' : t(lng)}
              </div>
              {index + 1 < layoutConfig.locales.length && <div>|</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageToggle;

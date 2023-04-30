import Image from 'next/image';
import { ILogo } from '../NavBar/NavBar';

interface IFooter {
  logo: ILogo;
  bgColor: string;
  textColor?: string;
}

const Footer = ({ logo, bgColor, textColor = 'white' }: IFooter) => {
  return (
    <div
      className={`pt-9 pb-2 px-6 lg:px-14 lg:pt-16 text-${textColor} bg-${bgColor} flex flex-col items-center`}
    >
      <div className="w-full flex justify-between items-center mb-[18px] lg:mb-[26px]">
        <div>
          <img
            className="block w-[127px] lg:hidden"
            src={logo.mobile}
            alt={logo.alt}
            loading="lazy"
          />
          <img
            className="hidden w-auto lg:block"
            src={logo.desktop}
            alt={logo.alt}
            loading="lazy"
          />
        </div>
        <div className="text-sm font-light text-white underline leading-[16px] text-left flex items-center lg:text-[30px] lg:leading-[35px] w-fit">
          Contact Us
        </div>
      </div>
      <div className="text-sm text-center leading-[17px] text-white px-5 py-3 lg:text-[28px] lg:leading-[33px] lg:py-5 font-[500]">
        &copy; 2023, All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;

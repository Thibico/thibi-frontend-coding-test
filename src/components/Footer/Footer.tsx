import Image from 'next/image';
import { ILogo } from '../NavBar/NavBar';

interface IFooter {
  logo: ILogo;
  bgColor: string;
  textColor?: string;
}

const Footer = ({ logo, bgColor, textColor = 'white' }: IFooter) => {
  return (
    <div className={`py-6 px-3 text-${textColor} bg-${bgColor} flex flex-col items-center`}>
      <div className="w-full flex justify-between">
        <img
          className="block w-auto h-8 lg:hidden"
          src={logo.mobile}
          alt={logo.alt}
          loading="lazy"
        />
        <div>Contact Us</div>
      </div>
      <div>&copy; 2023, All Right Reserved.</div>
    </div>
  );
};

export default Footer;

import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
//Internal Components
import LanguageToggle from '@/components/LanguageToggle';

interface IMenu {
  id: string;
  displayName: string;
  link: string;
}

export interface ILogo {
  desktop: string;
  mobile: string;
  alt: string;
}

export interface INavBar {
  logo: ILogo;
  menuItems: IMenu[];
  bgColor: string;
  textColor?: string;
}

const NavBar = ({ logo, menuItems, bgColor, textColor = 'white' }: INavBar) => {
  return (
    <nav className={`bg-${bgColor} w-full block`}>
      <div className="mx-auto w-full px-5 py-[30px] lg:py-14 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="block w-[137px] lg:hidden"
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
          </div>
          <div className="">
            {/* Right Menuj */}
            <LanguageToggle textColor={textColor} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

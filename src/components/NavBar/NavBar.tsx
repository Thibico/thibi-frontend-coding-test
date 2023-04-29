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
    <nav className={`bg-${bgColor}`}>
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="block w-auto h-8 lg:hidden"
                src={logo.mobile}
                alt={logo.alt}
                loading="lazy"
              />
              <img
                className="hidden w-auto h-8 lg:block"
                src={logo.desktop}
                alt={logo.alt}
                loading="lazy"
              />
            </div>
          </div>
          <div className="sm:ml-6 sm:block">
            {/* Right Menuj */}
            <LanguageToggle textColor={textColor} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

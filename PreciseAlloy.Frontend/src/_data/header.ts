
import { HeaderModel } from '@_types/types';

const headerData: HeaderModel = {
  topBar: {
    text: 'Admission is Open, Grab your seat now',
    url: '#',
    trailingIcon: {
      iconPath: '#zzz-arrow-right',
      viewBoxHeight: 20,
      viewBoxWidth: 20,
    }
  },
  hamburgerIcon: {
    iconPath: '#zzz-hamburger',
    viewBoxWidth: 28,
    viewBoxHeight: 28,
    attrs: {
      'aria-label': 'mobile-menu-trigger'
    }
  },
  logo: {
    width: '180',
    height: '40',
    src: '/assets/images/logo.svg'
  },
  links: [
    {
      text: "Home",
      url: '#',
      active: true,
    },
    {
      text: "About Us",
      url: '#'
    },
    {
      text: "Academics",
      url: '#'
    },
    {
      text: "Admissions",
      url: '#'
    },
    {
      text: "Student Life",
      url: '#'
    },
    {
      text: "Contact",
      url: '#'
    },
  ]
};

export { headerData };

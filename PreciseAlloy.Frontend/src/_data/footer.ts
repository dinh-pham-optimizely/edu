import { FooterModel } from '@_types/types';

const footerData: FooterModel = {
  logo: {
    width: '182',
    height: '40',
    src: '/assets/images/logo.svg',
  },
  description: 'We believe in the power of play to foster creativity, problem-solving skills, and imagination.',
  contacts: [
    {
      text: 'hello@littlelearners.com',
      url: '#',
      leadingIcon: {
        iconPath: '#zzz-envelop',
        viewBoxWidth: 20,
        viewBoxHeight: 20,
      },
    },
    {
      text: '+91 91813 23 2309',
      url: '#',
      leadingIcon: {
        iconPath: '#zzz-phone',
        viewBoxWidth: 20,
        viewBoxHeight: 20,
      },
    },
    {
      text: 'Somewhere in the World',
      url: '#',
      leadingIcon: {
        iconPath: '#zzz-pin',
        viewBoxWidth: 20,
        viewBoxHeight: 20,
      },
    },
  ],
  pages: [
    {
      title: 'Home',
      links: [
        {
          text: 'Features',
          url: '#',
        },
        {
          text: 'Our Testimonials',
          url: '#',
        },
        {
          text: 'FAQ',
          url: '#',
        },
      ],
    },
    {
      title: 'About us',
      links: [
        {
          text: 'Our Mission',
          url: '#',
        },
        {
          text: 'Our Vision',
          url: '#',
        },
        {
          text: 'Awards and Recognitions',
          url: '#',
        },
        {
          text: 'History',
          url: '#',
        },
        {
          text: 'Teachers',
          url: '#',
        },
      ],
    },
    {
      title: 'Academics',
      links: [
        {
          text: 'Special Features',
          url: '#',
        },
        {
          text: 'Gallery',
          url: '#',
        },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        {
          text: 'Information',
          url: '#',
        },
        {
          text: 'Map & Direction',
          url: '#',
        },
      ],
    },
  ],
  copyRight: 'Copyright © [2023] Little Learners Academy. All rights reserved.',
  privacyLinks: [
    {
      text: 'Terms of Service',
      url: '#',
    },
    {
      text: 'Privacy Policy',
      url: '#',
    },
    {
      text: 'Cookie Policy',
      url: '#',
    },
  ],
  socialNetworks: [
    {
      url: '#',
      leadingIcon: {
        iconPath: '#zzz-facebook',
        viewBoxWidth: 20,
        viewBoxHeight: 20,
      },
    },
    {
      url: '#',
      leadingIcon: {
        iconPath: '#zzz-twitter',
        viewBoxWidth: 20,
        viewBoxHeight: 20,
      },
    },
    {
      url: '#',
      leadingIcon: {
        iconPath: '#zzz-linkedin',
        viewBoxWidth: 20,
        viewBoxHeight: 20,
      },
    },
  ],
};

export { footerData };

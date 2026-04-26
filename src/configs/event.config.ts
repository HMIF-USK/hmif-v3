export interface eventCardTypes {
  Card: {
    card1: {
      title: string;
      subTitle: string;
      image: string;
    };
    card2: {
      about: string;
    };
    card3: {
      ket: string;
    };
    tanggal: string;
  }[];
}

export const eventCardData: eventCardTypes[] = [
  {
    Card: [
      {
        card1: {
          title: 'Detik',
          image: '2',
          subTitle: 'Dedikasi Informatika',
        },
        card2: {
          about: 'Lorem',
        },
        card3: {
          ket: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,',
        },
        tanggal: 'Rabu, 12 September 2024',
      },
      {
        card1: {
          title: 'Detuk',
          image: '2',
          subTitle: 'Dedikasi Informatika',
        },
        card2: {
          about: 'Lorem',
        },
        card3: {
          ket: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,',
        },
        tanggal: 'Senin, 12 September 2024',
      },
      {
        card1: {
          title: 'Detok',
          image: '2',
          subTitle: 'Dedikasi Informatika',
        },
        card2: {
          about: 'Lorem',
        },
        card3: {
          ket: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,',
        },
        tanggal: 'Jumat, 12 September 2024',
      },
    ],
  },
];

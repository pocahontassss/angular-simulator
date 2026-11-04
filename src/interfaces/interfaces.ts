export interface IAboutBlockImage {
  src: string;
  alt: string;
}

export interface IBestProgramsItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  backgroundColor: string;
  description: string;
}

export interface IBestProgramsImage {
  id: number;
  src: string;
  alt: string;
}

export interface IPopularTourisms {
  id: number;
  title: string;
  text: string;
  price: number;
  rating: number;
  image: string;
  alt: string;
}

export interface IBlog {
  id: number;
  title: string;
  text: string;
  date: string;
  image: string;
  alt: string;
}

export interface IMessage {
  id: number;
  status: string;
  text: string;
  isClosing?: boolean;
}

export interface IShareImpressions extends IBestProgramsImage {}

export interface ISocialMedias extends IBestProgramsImage {}

export interface IHeaderLinks {
  id: number;
  linkName: string;
  href: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;

  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;

    geo: {
      lat: string;
      lng: string;
    };
  };

  phone: string;
  website: string;

  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

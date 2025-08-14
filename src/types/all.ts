export interface AboutData {
    title: string;
    description: string;
    image: string;
  }

  export interface Advantage {
    id: number;
    title: string;
    description: string;
  }

export interface ApplicationForm {
  year: string;
  title: string;
  description: string
  image: string
}

export interface Application {
  name: string;
  phone: string
}

export interface ContactForm {
  address: string;
  phone: string;
  telegram: string;
  instagram: string;
  map1: string;
  map2: string;
  map3: string;
  map4: string;
}

export interface Directors_all {
  full_name: string;
  field: string;
  photo: string; //url bo'lishi kerak
}

export interface News_ofus {
  title: string;
  image: string; //url bo'lishi kerak
  content: string;
  date: string; //data bo'lishi kerak
}
export interface News {
  title: string;
  image: string; //url bo'lishi kerak
  content: string;
  date: string; //data bo'lishi kerak
}
export interface Request {
  name: string;
  number: string;
  question: string;
}

export interface Results_ofus {
  full_name: string;
  image: string; //url bo'lishi kerak
  sat_score: string; 
  ielts_score: string;
}

export interface SchoolPhoto {
  image: string; //url bo'lishi kerak
}

export interface Teachers_ofus {
  full_name: string;
  field: string;
  photo: string; //url bo'lishi kerak 
}
// types/index.ts
export interface Company {
  id: number;
  name: string;
  slug: string;
  oneliner: string;
  logo: string;
  website: string;
  description: string;
  rating: number;
  reviews: {
    id: number;
    author: string;
    content: string;
  }[];
  pros: string[];
  cons: string[];
  features: string[];
  overview: string;
  pricing: {
    name: string;
    price: number;
    features: string[];
  }[];
  faqs: {
    id: number;
    question: string;
    answer: string;
  }[];
  alternatives: number[];
}

export interface Reviews {
  id: number;
  fullname: string;
  rating: number;
  date: string;
  subject: string;
  body: string;
  reviewSource: string;
  avatar: string;
}

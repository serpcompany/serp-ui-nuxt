// types/index.ts
export interface Company {
  name: string;
  oneliner: string;
  overview: string[];
  pricing: {
    name: string;
    price: number;
    features: string[];
  }[];
  features: string[];
  reviews: {
    author: string;
    content: string;
  }[];
  faqs: {
    id: number;
    question: string;
    answer: string;
  }[];
  alternatives: string[];
}

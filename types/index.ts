// types/index.ts
export interface Company {
  id: number;
  name: string;
  slug: string;
  oneliner: string;
  image: string;
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

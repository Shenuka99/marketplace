export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string; 
  }

  export interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  }

  export interface UserProfile {
    email: string;
    family_name: string;
    given_name: string;
    id: string;
    picture: string;
  }

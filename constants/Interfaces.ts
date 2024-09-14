export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string; // Adjusted to match the array structure
  }

  export interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  }

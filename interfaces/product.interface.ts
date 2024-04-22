export interface Product {
  product_id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  availability: boolean;
  stock_quantity: number;
  manufacturer: string;
  ratings: {
    average: number;
    total_reviews: number;
    five_stars: number;
    four_stars: number;
    three_stars: number;
    two_stars: number;
    one_star: number;
  };
  features: string[];
  dimensions: {
    case_diameter: number;
    case_thickness: number;
    strap_width: number;
  };
  weight: {
    value: number;
    unit: string;
  };
  shipping_details: {
    shipping_weight: {
      value: number;
      unit: string;
    };
    shipping_dimensions: {
      length: number;
      width: number;
      height: number;
    };
    shipping_from: string;
    shipping_to: string;
    shipping_methods: string[];
    estimated_delivery: string;
  };
  images: string[];
  related_products: {
    product_id: string;
    name: string;
  }[];
  manufacturer_image: string;
}


export type SampleMenu = {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
};

export type RecommendedRestaurant = {
  id: number;
  name: string;
  star: number;
  place: string;
  lat: number;
  long: number;
  logo: string;
  images: string[];
  category: string;
  reviewCount: number;
  sampleMenus: SampleMenu[];
  isFrequentlyOrdered: boolean;
  distance: number;
};

export type RecommendedRestaurantResponse = {
  success: boolean;
  data: {
    recommendations: RecommendedRestaurant[];
    message: string;
  };
};

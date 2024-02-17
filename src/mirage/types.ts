// Author: Siddhant Prateek Mahanayak: github.com/siddhantprateek

export interface ILocation {
  address: string;
  latitude: number;
  longitude: number;
}

export interface IChef {
  name: string;
  bio: string;
  signature_dish: string;
}

export interface IAward {
  year: number;
  organization: string;
  award: string;
}

export interface IAmbiance {
  description: string;
}

export interface IInitiative {
  name: string;
  description: string;
}

export interface ISustainability {
  initiatives: IInitiative[];
}

export interface IUpcomingEvents {
  name: string;
  date: string;
  description: string;
}

export interface IEvents {
  upcoming_events: IUpcomingEvents[];
}

export interface INutritionalInfo {
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  ingredients: string[];
  nutritional_info: INutritionalInfo;
  seasonal_availability: string[];
}

export interface Restaurant {
  name: string;
  location: ILocation;
  chef: IChef;
  awards: IAward[];
  ambiance: IAmbiance;
  sustainability: ISustainability;
  events: IEvents;
  online_presence: {
    website: string;
    social_media: {
      facebook: string;
      instagram: string;
      twitter: string;
    };
  };
  menu: {
    categories: {
      name: string;
      items: {
        name: string;
        description: string;
        price: number;
        ingredients: string[];
        nutritional_info: {
          calories: number;
          protein: number;
          carbohydrates: number;
          fat: number;
        };
        seasonal_availability: string[];
        customizable_options?: string[];
      }[];
    }[];
    seasonal_menu: {
      name: string;
      items: {
        name: string;
        description: string;
        price: number;
        ingredients: string[];
        nutritional_info: {
          calories: number;
          protein: number;
          carbohydrates: number;
          fat: number;
        };
        seasonal_availability: string[];
      }[];
    };
  };
  reviews: IReviews[];
}

export interface IReviews {
  customer_name: string;
  rating: number;
  comment: string;
}

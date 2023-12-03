import { createServer, Model, Request, } from "miragejs";

// Internals
import data from '../data/restaurantData.json';
import { Restaurant } from "./types";

export const createMockServer = () => {
  createServer({
    models: {
      restaurant: Model.extend<Partial<Restaurant>>({}),
    },

    seeds(server) {
      server.db.loadData({
        restaurant: data,
        initiatives: data.restaurant.sustainability.initiatives,
        categories: data.restaurant.menu.categories,
        items: [...data.restaurant.menu.categories[0].items,
        ...data.restaurant.menu.categories[1].items,
        ...data.restaurant.menu.categories[2].items,
        ...data.restaurant.menu.seasonal_menu.items
      ],
        seasonal: data.restaurant.menu.seasonal_menu.items,
        awards: data.restaurant.awards,
        reviews: data.restaurant.reviews,
        socials: data.restaurant.online_presence.social_media,
        website: data.restaurant.online_presence.website
      }
    )},

    routes() {
      this.urlPrefix= "https://restaurant.service/api";
      this.get("/all", () => data.restaurant);
      this.get("/chef", () => {
        return { chef: data.restaurant.chef }
      })
      
      this.get("/ambience", () => {
       return { ambience: data.restaurant.ambiance }
      });
      
      this.get("/awards", () => data.restaurant.awards);
      
      this.get("/food/menu", (schema) => {
        let items = schema.db.items
        return { items: items }
      });

      this.get("/awards", (schema) => {
        let awards = schema.db.awards
        return { awards: awards }
      });

      this.get("/initiatives", (schema) => {
        let initiatives = schema.db.initiatives
        return { initiatives: initiatives }
      });

      this.get("/reviews", (schema) => {
        let reviews = schema.db.reviews
        return { reviews: reviews }
      });

      this.get("/website", (schema) => {
        let website = schema.db.website
        return { website: website }
      });

      this.get("/socials", (schema) => {
        let socials = schema.db.socials
        return { socials: socials }
      });

      this.get("/events", () => {
        return { events: data.restaurant.events.upcoming_events }
      });

      
      this.get("/menu", (schema, request: Request) => {
        const { season } = request.queryParams as { season: string };
        console.log(season)
        let allItems = schema.db.seasonal
        console.log("All Seasonal: ", allItems)
        const items = schema.db.seasonal.findBy({ seasonal_availability: season });
        const items2 = schema.db.seasonal.where((item: any) => { item.seasonal_availability.includes(season)})
        console.log(items2)
        return { items: items || null };
      });
    }
  })
}
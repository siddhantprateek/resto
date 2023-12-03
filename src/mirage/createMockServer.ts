import { createServer } from "miragejs";
import data from '../data/restaurantData.json';




export const createMockServer = () => {
  createServer({
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
      this.get("/food/menu", () => {
        return { menu: data.restaurant.menu }
      });
      this.get("/events", () => {
        return { events: data.restaurant.events.upcoming_events }
      });
      // this.get("/food/menu", (schema, request: Request) => {
      //   const { tags } = request.queryParams
      // })
    },
  })
}
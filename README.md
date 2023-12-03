## Resto

> Restaurant App - It's not just food , It's an experience. 😇

![](./assets/thumb2.png)

## Tech Stack

- `React`
- `Typescript`
- `Mirage Js` - Mock Server 


## Setting up project for development using `Docker`

- To run the application locally, you have two options: either create the Docker image using `Dockerfile` or utilize `docker-compose`. Ensure that Docker is installed on your local machine.  Or Visit [Install Docker](https://docs.docker.com/engine/install/)

```bash
docker build -t resto-web . 
# or
docker-compose up -d
```
> _If prefer cloning the repository and run locally then follow bellow steps_

```bash
git clone https://github.com/siddhantprateek/resto
cd resto
npm install | bun install # install dependenies(npm or bun)
npm run start # run the react application on port 3000
```


## API Documentation

- The base URL for api is `https://restaurant.service/api`

 
| Endpoint | API Description | 
| -------- | -------- | 
| `GET /all`     | Fetch entire restaurant data     | 
| `GET /chef`    | Fetch chef details containing `name`, `bio` and `signature_dist`    | 
| `GET /awards`     | Retrieves Array of Awards(`award`, `origanization`, `year`)     | 
| `GET /ambinence`     | Retrieves about restaurant ambinence description    | 
| `GET /food/menu`     | Fetch all the food Items     | 
| `GET /initiatives`     | Retrieves all Initiative taken by restaurant     | 
| `GET /reviews`     | Fetch customer reviews(`customer_name`, `comment`, `rating`)   | 
| `GET /events`     | Fetch Upcoming Events(`name`,`date`, `description`)    | 


## Application Folder structure

- Inside Source folder `src`
```bash
.
├── App.css
├── App.test.tsx
├── App.tsx # application Entry point
├── assets # assets used in components and pages
├── components # All Components
│   ├── common # All repeated Components
│   ├── footer
│   ├── header
│   ├── hero
│   ├── index.ts # components default export
│   └── reservations
├── context # !Not Used, contains Global Context
├── data 
│   └── restaurantData.json # dummy data
├── index.css
├── index.tsx
├── mirage # mock server
├── pages # contains all routing pages

```

## Custom-made Assets Samples

![](./assets/custom-assets.png)

![](./assets/custom-img.png)

## Author 

![Siddhant Prateek Mahanayak](https://github.com/siddhantprateek)
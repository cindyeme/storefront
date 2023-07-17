# Vue.js Dog API Project

This is a Vue.js project that consumes the Dog API provided by [dog.ceo](https://dog.ceo/dog-api/). The project allows users to browse through different dog breeds, view random dog images, search for specific breeds, and apply transformation filters to the images.

### Live Demo
You can check out the live demo of this project [here](https://github.com/cindyeme/dog-api).

### Solution Repository
The source code for this project is available on [GitHub](https://cynthia-dog-api.netlify.app/). You can clone or fork the repository to explore the code and run the project locally.

## Features
- **List of Dog Images:** Users can see a list of at least 100 dog images by default when they load the application.

- **Dog Details Page:** Users can click on a dog image and be routed to a page where there's more information about the dog.

- **Transformation Filters:** On the individual dog image page, users can click a button to apply three transformation filters to the dog image: Cartoonify, Grayscale, and Sepia. The transformation filters are applied using Cloudinary.

- **Breed Search:** Users can search for a dog via their breeds.


## Technologies Used
This project is built using the following technologies:

- Vue.js - JavaScript framework for building user interfaces.
- Axios - Promise-based HTTP client for making API requests.
- Vue Router - Official router for Vue.js to enable client-side routing.
- Vuex - State management pattern and library for Vue.js applications.
- Tailwind CSS - A utility-first CSS framework for rapid UI development.
- dog.ceo API - Provides access to a wide variety of dog images and information.
- Cloudinary - A cloud-based media management platform used for image transformation filters.

## Project Setup
1. Clone the repository from GitHub:

```sh
git clone https://github.com/cindyeme/dog-api.git
```

2. Navigate to the project directory:

```sh
cd dog-api
```

3. Install the project dependencies:
```sh
npm install
```

4. Start the development server:

```sh
npm run dev
```

5. Open your web browser and visit `http://localhost:5173/` to see the project in action.

import { Profiler } from "react";
import { images } from "./constants/index";

export const projects = [
    {
        id: 1,
        title: "Frisco Clothing Dept.",
        img: images.frisco,
        link: "https://github.com/losandies/frisco-ecommerce",
        description:
            "This is an online store with a fully built checkout system, user authentication, and a database for storing items and user information. Users can choose to check out without an account or create an account which will allow them to view past orders, save shipping addresses, etc. Each page has the option to filter items by price, high to low or low to high. Users can also edit the cart from multiple places throughout the application.",
        techUsed: "React, Redux, Tailwind, Node.js, PostgreSQL, Prisma",
    },
    {
        id: 2,
        title: "Strombo Ticketing System",
        img: images.stromboImg,
        link: "https://strombo.herokuapp.com/",
        description:
            "A ticketing system built with the MERN stack. Users can create projects where tickets can be assigned and sorted by importance. Anyone can then claim tickets, complete tickets, or even reopen tickets. Tickets claimed by a user will be shown on a separate page where the user can update the status.",
        techUsed: "MERN Stack, Tailwind, Redux Toolkit, JWT",
    },
    {
        id: 3,
        title: "Movies A'hoy",
        img: images.moviesImg,
        link: "https://movies-ahoy.herokuapp.com",
        description:
            "This is a movie library application that lays out things like what movies or shows are trending this week, what's new in theatres, popular movies of the year, and even recommends movies based off the user's favorite genre.",
        techUsed:
            "React, Tailwind, Styled Components, Node js, Postgres, The MovieDB API",
    },
];

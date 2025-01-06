// import React from "react";
import site1 from "../assets/images/site1.png";
import site2 from "../assets/images/site2.png";
import site3 from "../assets/images/site3.png";
import site4 from "../assets/images/site4.png";
import site5 from "../assets/images/site5.png";
import site6 from "../assets/images/site6.png";
import site7 from "../assets/images/site7.png";
import site8 from "../assets/images/site8.png";
import site10 from "../assets/images/site10.png";

import foods from "../assets/images/foods.png";
import notes from "../assets/images/notes-app.png";
import notesApp from "../assets/images/notes-fulllstack.png";
import store from "../assets/images/store.png";

const callouts = [
  {
    name: "FullStack App",
    description: "nodejs expresjs react tailwindcss fullstack app",
    imageSrc: store,
    hrefDemo: "https://firdavs-web-shopping.onrender.com/",
    hrefCode: "https://github.com/Firdavs-Normurodov/online-store",
  },
  {
    name: "Notes FullStack App",
    description: "nodejs expresjs react tailwindcss fullstack app",
    imageSrc: notesApp,
    hrefCode: "https://github.com/Firdavs-Normurodov/notes-site",
  },
  {
    name: "Notes App",
    description: "nodejs expresjs backend-application",
    imageSrc: notes,
    hrefCode: "https://github.com/Firdavs-Normurodov/notes-app",
  },
  {
    name: "Foods",
    description: "React TailwindCss json-db",
    imageSrc: foods,
    hrefDemo: "https://foods-chi.vercel.app/",
    hrefCode: "https://github.com/Firdavs-Normurodov/foods",
  },

  {
    name: "web site",
    description: "ReactJS TailwindCss",
    imageSrc: site1,

    hrefDemo: "https://react-tailwind-silk.vercel.app/",
    hrefCode: "https://github.com/Firdavs-Normurodov/react-tailwind",
  },
  {
    name: "fullstack site",
    description: "nodejs handlebars",
    imageSrc: site2,
    hrefCode: "https://github.com/Firdavs-Normurodov/nodejs-boom-shop",
  },
  {
    name: "vuejs portfolio",
    description: "Vue VueX Bootstrap Js Css",
    imageSrc: site3,
    hrefDemo: "https://firdavsdev-nu.vercel.app/",
    hrefCode: "https://github.com/Firdavs-Normurodov/Portfolio-vue",
  },
  {
    name: "Knowledge with eStudy",
    description: "ReactJs TailwindCss Vite",
    imageSrc: site5,
    hrefDemo: "https://react-vite-tailwind-css.vercel.app/",
    hrefCode: "https://github.com/Firdavs-Normurodov/react-vite-tailwind-css",
  },
  {
    name: "eurolink-cg.com",
    description: "Js Bootsrap Css Hml",
    imageSrc: site6,
    hrefDemo: "https://eurolink-cg.com/",
  },
  {
    name: "eurolink-cg.com update",
    description: "react vite tailwindcss json-database",
    imageSrc: site10,
    hrefDemo: "https://eurolink-cg-my.vercel.app/",
    hrefCode: "https://github.com/Firdavs-Normurodov/eurolink-cg-my",
  },
  {
    name: "Miracle Shop",
    description: "Js Bootstrap Css Html",
    imageSrc: site4,
    hrefDemo: "https://online-shop-web-site.netlify.app/",
    hrefCode: "https://github.com/Firdavs-Normurodov/online-shop",
  },
  {
    name: "programming lessons",
    description: "Js jQuery Bootstrap Css Htmll",
    imageSrc: site7,
    hrefDemo: "https://training-courses.netlify.app/",
    hrefCode: "https://github.com/Firdavs-Normurodov/training-courses",
  },
  {
    name: "Web Developer",
    description: "Js jQuery Bootstrap Css Html",
    imageSrc: site8,
    hrefDemo: "https://firdavs-web-dev.netlify.app/",
  },
];

export default function Example() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl text-center mb-12 font-bold text-colorT">
            My portfolio
          </h2>
          <div className="mt-12 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full mt-10 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 mb-5 flex text-sm text-gray-500">
                  {callout.hrefDemo && (
                    <a
                      href={callout.hrefDemo}
                      target="blank"
                      className="mr-5 text-green-500 cursor-pointer"
                    >
                      demo
                    </a>
                  )}
                  {callout.hrefCode && (
                    <a
                      href={callout.hrefCode}
                      target="blank"
                      className="text-white cursor-pointer"
                    >
                      code
                    </a>
                  )}
                </h3>
                <p className="text-base font-semibold text-gray-500">
                  <h2>{callout.name}</h2>
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
import site1 from "../assets/images/site1.png";
import site2 from "../assets/images/site2.png";
import site3 from "../assets/images/site3.png";
import site4 from "../assets/images/site4.png";
import site5 from "../assets/images/site5.png";
import site6 from "../assets/images/site6.png";
import site7 from "../assets/images/site7.png";
import site8 from "../assets/images/site8.png";
import site9 from "../assets/images/site9.png";
import site10 from "../assets/images/site10.png";
import laravel from "../assets/images/laravel.png";

const callouts = [
  {
    name: "My blog site",
    description: "Laravel TailwindCss",
    imageSrc: laravel,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "https://github.com/Firdavs-Normurodov/my-blog",
  },  {
    name: "web site",
    description: "ReactJS TailwindCss",
    imageSrc: site1,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "https://react-tailwind-silk.vercel.app/",
  },
  {
    name: "fullstack site",
    description: "nodejs handlebars",
    imageSrc: site2,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "https://github.com/Firdavs-Normurodov/nodejs-boom-shop",
  },
  {
    name: "vuejs portfolio",
    description: "Vue VueX Bootstrap Js Css",
    imageSrc: site3,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://firdavsdev-nu.vercel.app/",
  },
  {
    name: "Knowledge with eStudy",
    description: "ReactJs TailwindCss Vite",
    imageSrc: site5,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://react-vite-tailwind-css.vercel.app/",
  },
  {
    name: "eurolink-cg.com",
    description: "Js Bootsrap Css Hml",
    imageSrc: site6,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://eurolink-cg.com/",
  },
  {
    name: "eurolink-cg.com update",
    description: "react vite tailwindcss json-database",
    imageSrc: site10,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://eurolink-cg.com/",
  },
  {
    name: "Miracle Shop",
    description: "Js Bootstrap Css Html",
    imageSrc: site4,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://online-shop-web-site.netlify.app/",
  },
  {
    name: "programming lessons",
    description: "Js jQuery Bootstrap Css Htmll",
    imageSrc: site7,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://training-courses.netlify.app//",
  },
  {
    name: "Web Developer",
    description: "Js jQuery Bootstrap Css Html",
    imageSrc: site8,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://training-courses.netlify.app//",
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
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href} target="blank">
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-500">
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

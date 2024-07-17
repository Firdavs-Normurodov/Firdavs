const posts = [
  {
    id: 1,
    author: {
      name: "html",
      role: "Text Markup Language",
      iconsUrl: "fa-brands fa-html5 text-5xl text-gray-600",
    },
  },
  {
    id: 2,
    author: {
      name: "css",
      role: "Cascading Style Sheets",
      iconsUrl: "fa-brands fa-css3-alt text-5xl text-gray-600",
    },
  },
  {
    id: 3,
    author: {
      name: "sass",
      role: "Syntactically Awesome Stylesheet",
      iconsUrl: "fa-brands fa-sass text-5xl text-gray-600",
    },
  },
  {
    id: 4,
    author: {
      name: "bootstrap",
      role: "CSS Framework",
      iconsUrl: "fa-brands fa-bootstrap text-5xl text-gray-600",
    },
  },
  {
    id: 5,
    author: {
      name: "js",
      role: "Programming Language",
      iconsUrl: "fa-brands fa-js text-5xl text-gray-600",
    },
  },
  {
    id: 6,
    author: {
      name: "php",
      role: "Hypertext Preprocessor",
      iconsUrl: "fa-brands fa-php text-5xl text-gray-600",
    },
  },
  {
    id: 7,
    author: {
      name: "vue",
      role: "Js Framework",
      iconsUrl: "fa-brands fa-vuejs text-5xl text-gray-600",
    },
  },
  {
    id: 8,
    author: {
      name: "react",
      role: "Js Framework",
      iconsUrl: "fa-brands fa-react  text-5xl text-gray-600",
    },
  },
  {
    id: 9,
    author: {
      name: "node",
      role: "open-source and cross-platform",
      iconsUrl: "fa-brands fa-node text-5xl text-gray-600",
    },
  },
  {
    id: 10,
    author: {
      name: "express",
      role: "back end web application framework",
      iconsUrl: "fa-brands fa-node-js text-5xl text-gray-600",
    },
  },
  {
    id: 11,
    author: {
      name: "git bash",
      role: "Interactive command line",
      iconsUrl: "fa-brands fa-git-alt text-5xl text-gray-600",
    },
  },
  {
    id: 12,
    author: {
      name: "npm",
      role: "Js Framework",
      iconsUrl: "fa-brands fa-npm text-5xl text-gray-600",
    },
  },
  {
    id: 13,
    author: {
      name: "docker",
      role: "open platform to ship and launch",
      iconsUrl: "fa-brands fa-docker text-5xl text-gray-600",
    },
  },
  {
    id: 14,
    author: {
      name: "github",
      role: "Website and cloud based service",
      iconsUrl: "fa-brands fa-github text-5xl text-gray-600",
    },
  },
  {
    id: 15,
    author: {
      name: "vscode",
      role: "Integrated development environment",
      iconsUrl: "fa-solid fa-code text-5xl text-gray-600",
    },
  },
  {
    id: 16,
    author: {
      name: "ubuntu",
      role: "linux sistem",
      iconsUrl: "fa-brands fa-ubuntu text-5xl text-gray-600",
    },
  },
  {
    id: 17,
    author: {
      name: "kali linux",
      role: "linux sistem",
      iconsUrl: "fa-brands fa-linux text-5xl text-gray-600",
    },
  },
  // More posts...
];

export default function Example() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto  lg:mx-0 text-center">
        <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl text-colorT">
          My skill
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          What are my programming skills ?
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="relative mt-8 flex items-center gap-x-4">
                <i alt="" className={post.author.iconsUrl} />

                <div className="text-sm leading-6">
                  <p className="font-semibold text-colorT">
                    <a>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

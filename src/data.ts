import type { IProject } from "@/interfaces";

let projects: IProject[] = [
  {
    header: "Parallax Windows",
    description: "Learn how to effortlessly create a captivating parallax effect for your website! Developers of any level can try this out themselves!",
    youtubeUrl: "https://www.youtube.com/embed/QB0VbW65uZM?si=vzoGpEk1TYjV8eef",
    githubUrl: "https://github.com/thedarkmode/parallaxwindows",
    websiteUrl: "https://thedarkmode.github.io/parallaxwindows",
    createdWith: [
      {
        name: "Vue.js",
        icon: ""
      }
    ]
  },
  {
    header: "Website Depths",
    description: "Journey with me down to the deepest depths of the web. To do this, I developed a website capable of showing measurements of various large objects, to test if they would fit inside the website, as well as markers at every foot. The end goal was to get to the same depth as the bottom of the deepest part of the ocean, the Mariana Trench.",
    youtubeUrl: "https://www.youtube.com/embed/kPxkH1_Rgnw",
    githubUrl: "https://github.com/thedarkmode/WebsiteDepths",
    websiteUrl: "https://thedarkmode.github.io/WebsiteDepths",
    createdWith: [
      {
        name: "Vue.js",
        icon: ""
      }
    ]
  },
]

export {
  projects
}
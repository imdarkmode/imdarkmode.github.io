import type { IProject } from "@/interfaces";

let projects: IProject[] = [
  {
    header: "I Built a Jackbox Party Game App!",
    description: "This guide will show you how to make a Jackbox-like connection that your friends can join on their phones! I'll explain both the client & server side of this web development project.",
    youtubeUrl: "https://www.youtube.com/embed/dXj8Ve9gHSA",
    githubUrl: "https://github.com/thedarkmode/jackbox",
    websiteUrl: "https://thedarkmode.github.io/jackbox/",
    createdWith: [
      {
        name: "VueJS",
        icon: ""
      },
      {
        name: "NodeJS",
        icon: ""
      },
      {
        name: "Socket.io",
        icon: ""
      }
    ]
  },
  {
    header: "I Made a Puzzle Where Each Piece is a Website",
    description: "Each piece is its own website instance! Using some abnormal browser tricks, they are able to communicate with each other to know when the puzzle is complete! I'll walk you through the entire process, introduce you to my bearded dragon Levi, and show some funny clips from development!",
    youtubeUrl: "https://www.youtube.com/embed/-PTR628Zr3Q",
    githubUrl: "https://github.com/thedarkmode/windowpuzzle",
    websiteUrl: "https://thedarkmode.github.io/windowpuzzle/",
    createdWith: [
      {
        name: "VueJS",
        icon: ""
      }
    ]
  },
  {
    header: "Parallax Windows",
    description: "Learn how to effortlessly create a captivating parallax effect for your website! Developers of any level can try this out themselves!",
    youtubeUrl: "https://www.youtube.com/embed/QB0VbW65uZM?si=vzoGpEk1TYjV8eef",
    githubUrl: "https://github.com/thedarkmode/parallaxwindows",
    websiteUrl: "https://thedarkmode.github.io/parallaxwindows",
    createdWith: [
      {
        name: "VueJS",
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
        name: "VueJS",
        icon: ""
      }
    ]
  },
]

export {
  projects
}
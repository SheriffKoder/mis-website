
/*

Hierarchy
H1 hero
h2 section header
h3 card header/name






*/

let nav_links = [
    { text: "Services", href: "#services", aria: "know more about the services we offer"},
    // { text: "Measures", href: "#measures", aria: "our achievements"},
    { text: "How it works", href: "#actionPlan", aria: "our action plan"},
    { text: "Testimonials", href: "#testimonials", aria: "what our clients says about us"},
]

const allText = {
  
  hero: {
    header: ``,
    paragraph: ``,
    button1: ``,
    button2: ``
  },
  sectionTwo: {
    header: `What Value we offer`,
    paragraph: `We specialize in saving people time through innovative automation and tailored services. 
Our expertise spans web development, automation, video editing, and social media management, 
enabling our clients to streamline their operations and reach new heights.`
  },
  sectionThree: {
    header: `It's all about numbers`,
    paragraph: `Enabling our clients to streamline their operations and reach new heights`
  }

}

let sectionTwo_cardsContent = [
  {
    name: "Automation",
    content: "We specialize in saving people time through innovative automation, our clients to streamline their operations and reach new heights",
  },
  {
    name: "Automation",
    content: "We specialize in saving people time through innovative automation, our clients to streamline their operations and reach new heights",
  },
  {
    name: "Automation",
    content: "We specialize in saving people time through innovative automation, our clients to streamline their operations and reach new heights",
  }
]

let sectionThree_cardsContent = [
  {
    name: "Projects",
    content: "all our projects",
    number: 1000
  },
  {
    name: "Clients",
    content: "all our projects",
    number: 300
  },
  {
    name: "Experience",
    content: "all our projects",
    number: 10,
  }
]

let backgrounds = {

}


let colors = {


}

const goals = [
     //
     {
        title: "Preparation",
        progress: "In progress",
        steps: [
          {title: "Prepare file structure", progress: "In Progress"},
  
        ]
      },
      {
        title: "Front-end",
        progress: "Done",
        steps: [
          {title: "Prepare file structure", progress: "Done"},
  
        ]
      }
]

// to be required/imported into tailwind.config.js
module.exports = {
    ...colors,
    nav_links,
    backgrounds,
    goals,
    sectionTwo_cardsContent,
    allText,
    sectionThree_cardsContent

}

// export {};



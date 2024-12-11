
/*

Hierarchy
H1 hero
h2 section header
h3 card header/name






*/

let nav_links = [
    { text: "Services", href: "#section2", aria: "know more about the services we offer"},
    // { text: "Measures", href: "#measures", aria: "our achievements"},
    { text: "How it works", href: "#section4", aria: "our action plan"},
    { text: "Testimonials", href: "#section5", aria: "what our clients says about us"},
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
  },
  sectionFour: {
    header: `With you step by step`,
    paragraph: `We specialize in saving people time through innovative automation and tailored services. 
Our expertise spans web development, automation, video editing, and social media management, 
enabling our clients to streamline their operations and reach new heights.`
  },
  sectionSix: {
    header: `We would like to hear from you`,
    paragraph: `Contact us using the method you prefer`
  },

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
  },
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

let sectionFour_cardsContent = [
  {
    name: "Step one",
    content: "The first step which contains many steps. The third step which contains many steps. The third step which contains many steps. The third step which contains many steps",
    number: 1
  },
  {
    name: "Step two",
    content: "The second step which contains many steps, The third step which contains many steps",
    number: 2
  },
  {
    name: "Step three",
    content: "The third step which contains many steps. The third step which contains many steps, The third step which contains many steps",
    number: 3
  },
  {
    name: "Step four",
    content: "The fourth step which contains many steps, The fourth step which contains many steps, The fourth step which contains many steps",
    number: 4
  }
]


const sectionFive_cardsContent = [
  {
    name: "John Smith 1",
    company: "Company Co.",
    comment: "Very professional team. The fourth step which contains many steps, The fourth step which contains many steps",
    services: ["Service1 SSV", "Service2"]
  },
  {
    name: "John Smith 2",
    company: "Company Co.",
    comment: "Very professional team. The fourth step which contains many steps, The fourth step which contains many steps",
    services: ["Service1 opc.", "Service2", "Service1", "Service2 Develop"]

  },
  {
    name: "John Smith 3",
    company: "Company Co.",
    comment: "Very professional team. The fourth step which contains many steps, The fourth step which contains many steps",
    services: ["Service1", "Service2 Develop"]
  },
  {
    name: "John Smith 4",
    company: "Company Co.",
    comment: "Very professional team. The fourth step which contains many steps, The fourth step which contains many steps",
    services: ["Service1", "Service2"]
  },
  {
    name: "John Smith 5",
    company: "Company Co.",
    comment: "Very professional team. The fourth step which contains many steps, The fourth step which contains many steps",
    services: ["Service1", "Service2"]
  },
  {
    name: "John Smith 6",
    company: "Company Co.",
    comment: "Very professional team. The fourth step which contains many steps, The fourth step which contains many steps",
    services: ["Service1", "Service2"]
  },
  {
    name: "John Smith 7",
    company: "Company Co.",
    comment: "Very professional team. The fourth step which contains many steps, The fourth step which contains many steps",
    services: ["Service1", "Service2"]
  },
  {
    name: "John Smith 8",
    company: "Company Co.",
    comment: "Very professional team. The fourth step which contains many steps, The fourth step which contains many steps",
    services: ["Service1", "Service2"]
  },
]


const sectionSix_socials = [
  {
    name: "facebook",
  },
  {
    name: "facebook",
  },
  {
    name: "facebook",
  },
  {
    name: "facebook",
  },
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
    sectionThree_cardsContent,
    sectionFour_cardsContent,
    sectionFive_cardsContent,
    sectionSix_socials,
}

// export {};



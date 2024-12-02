
let nav_links = [
    { text: "Services", href: "#services", aria: "know more about the services we offer"},
    // { text: "Measures", href: "#measures", aria: "our achievements"},
    { text: "How it works", href: "#actionPlan", aria: "our action plan"},
    { text: "Testimonials", href: "#testimonials", aria: "what our clients says about us"},
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
    goals

}

// export {};



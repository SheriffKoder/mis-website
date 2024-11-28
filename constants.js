
let nav_links = [
    { text: "Properties", href: "/properties/all", aria: "check our properties"},

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



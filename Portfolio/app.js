var developer = {
    gender: "male",
    name: "Gary Gritsch",
    age: 21,
    languages: ["javascript", "html", "css", "node", "react"],
    address: {
        city: "Bozeman",
        state: "Montana",
        country: "united states"    
    }
}

const cons = document.querySelectorAll(".con")
const containers = document.querySelector(".containers")
const shrink = (e) => {
    const el = e.target
  
        // Remove cloned element from DOM after animation is over
        el.addEventListener("animationend", (e) => e.target.remove())

  // Trigger browser reflow to start animation
        el.style.animation = 'none';
        el.offsetHeight
        el.style.animation = ''
        el.classList.add("shrink-down")
    }

    const toggleFullScreen = (e) => {
  // Get position values for element
    const {
        top,
        left
    } = e.target.getBoundingClientRect()

    // Clone the element and its children
    let fullScreen = e.target.cloneNode(true)

    // Set top and left with custom property
    fullScreen.style.setProperty("--inset", `${top}px auto auto ${left}px`)

    // Add class with animation and position
    fullScreen.classList.add("full-screen")

    // Listen for click to close full screen
    fullScreen.addEventListener("click", shrink)

    // Place in container over element to expand
    containers.appendChild(fullScreen)
    }

// Add click listeners on all boxes
    cons.forEach(con => {
        con.addEventListener("click", toggleFullScreen)
    })
    cons.forEach(con => {
        con.addEventListener("click", (e) =>{
            window.location.assign(URL = "https://www.reddit.com/r/css/comments/2v70is/can_anyone_help_trying_to_add_a_delay_between/");
        },300);  
    })
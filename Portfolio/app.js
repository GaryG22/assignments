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
            window.location.assign(URL = "https://www.notion.so/vschooldesign/Level-1-HTML-CSS-JavaScript-fe85cb184bf04e16a918be3d69491a67");
        },5000);  
    })

const modelViewer = document.querySelector("#envlight-demo");
  
  let lastX;
  let panning = false;
  let skyboxAngle = 0;
  let radiansPerPixel;
      
  const startPan = () => {
    const orbit = modelViewer.getCameraOrbit();
    const { radius } = orbit;
    radiansPerPixel = -1 * radius / modelViewer.getBoundingClientRect().height;
    modelViewer.interactionPrompt = 'none';
  };
  
  const updatePan = (thisX) => {      
    const delta = (thisX - lastX) * radiansPerPixel;
    lastX = thisX;
    skyboxAngle += delta;
    const orbit = modelViewer.getCameraOrbit();
    orbit.theta += delta;
    modelViewer.cameraOrbit = orbit.toString();
    modelViewer.resetTurntableRotation(skyboxAngle);
    modelViewer.jumpCameraToGoal();
  }
  
  modelViewer.addEventListener('mousedown', (event) => {
    panning = event.button === 2 || event.ctrlKey || event.metaKey || event.shiftKey;
    if (!panning)
      return;

    lastX = event.clientX;
    startPan();
    event.stopPropagation();
  }, true);

  modelViewer.addEventListener('touchstart', (event) => {
    const {targetTouches, touches} = event;
    panning = targetTouches.length === 2 && targetTouches.length === touches.length;
    if (!panning)
      return;

    lastX = 0.5 * (targetTouches[0].clientX + targetTouches[1].clientX);
    startPan();
  }, true);

  self.addEventListener('mousemove', (event) => {
    if (!panning)
      return;

    updatePan(event.clientX);
    event.stopPropagation();
  }, true);

  modelViewer.addEventListener('touchmove', (event) => {
    if (!panning || event.targetTouches.length !== 2)
      return;

    const {targetTouches} = event;
    const thisX = 0.5 * (targetTouches[0].clientX + targetTouches[1].clientX);
    updatePan(thisX);
  }, true);

  self.addEventListener('mouseup', (event) => {
    panning = false;
  }, true);
  
  modelViewer.addEventListener('touchend', (event) => {
    panning = false;
  }, true);

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 655,
        "density": {
          "enable": true,
          "value_area": 1289.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.8,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 2.5,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 300,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

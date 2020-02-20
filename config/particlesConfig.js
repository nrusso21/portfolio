const particlesConfig = {
    "fps_limit": 30,
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "size": {
            "value": 2,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "opacity": .3
        },
        "move": {
            "speed": 3,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            }
        },
        "modes": {
            "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 2,
                "opacity": .4,
                "speed": 3
            }
        }
    }
}

export default particlesConfig;
// Scroll-scrubbing background for the projects section
const portfolioSection = document.querySelector(".portfolio");
const portfolioBackground = document.querySelector(".portfolio-background");
const totalFrames = 250; // Total number of frame images available

let distance_to_scroll = 0; // Will be set dynamically based on element position
let imagesPath = "video2frames/frame-"; // Will be set dynamically based on scroll position

const frameImages = []; // Array to hold preloaded frame images
let loadedFrames = 0; // Counter for loaded frames

function formatFrameIndex(frameIndex) {
    const paddedIndex = frameIndex.toString().padStart(3, "0");
    return `${imagesPath}${paddedIndex}.jpg`;
}

function preloadImages() {
    for (let i = 1; i <= totalFrames; i++) {
        const imageURL = formatFrameIndex(i);
        const img = new Image();

        img.onload = () => {
            loadedFrames++;
            if (loadedFrames === totalFrames) {
                // All images have been loaded
                updateBackgroundImage(1);
            }
        };

        img.src = imageURL;
        frameImages.push(img);
    }
}

function updateBackgroundImage(frameIndex) {
    const imageURL = formatFrameIndex(frameIndex);
    portfolioBackground.style.backgroundImage = `url(${imageURL})`;
}

// Callback function for Intersection Observer
function handleIntersection(entries) {
    if (entries[0].isIntersecting) {
        distance_to_portfolio = Math.round(window.scrollY) // pixels
        distance_to_scroll = portfolioSection.getBoundingClientRect().height + window.innerHeight; //for ratio of images
        observer.unobserve(portfolioSection);
        window.addEventListener("scroll", updateFrameIndex);
        updateFrameIndex(); // Update frame index immediately when the section comes into view
    }
}

const observer = new IntersectionObserver(handleIntersection);
observer.observe(portfolioSection);

preloadImages(); // Preload frame images

let currentFrameIndex = 1;
let lastKnownScrollPosition = 0;

function updateFrameIndex() {
    const currentScrollPosition = window.pageYOffset;
    const scrollDelta = currentScrollPosition - lastKnownScrollPosition;

    if (scrollDelta !== 0) {
        const scrollPercentage = Math.min((currentScrollPosition - distance_to_portfolio) / distance_to_scroll, 1);
        const frameIndex = Math.floor(scrollPercentage * totalFrames) + 1;
        if (frameIndex !== currentFrameIndex) {
            currentFrameIndex = frameIndex;
            if (frameIndex > 0) {
                updateBackgroundImage(frameIndex);
            }
        }
    }

    lastKnownScrollPosition = currentScrollPosition;
}

// Initial background image update will happen when all images are loaded




// // Scroll-scrubbing background for the projects section
// const portfolioSection = document.querySelector(".portfolio");
// const portfolioBackground = document.querySelector(".portfolio-background");
// const totalFrames = 250; // Total number of frame images available

// let distance_to_scroll = 0; // Will be set dynamically based on element position
// let imagesPath = "video2frames/frame-"; // Will be set dynamically based on scroll position

// const frameImages = []; // Array to hold preloaded frame images

// function formatFrameIndex(frameIndex) {
//     const paddedIndex = frameIndex.toString().padStart(3, "0");
//     return `${imagesPath}${paddedIndex}.jpg`;
// }

// function preloadImages() {
//     for (let i = 1; i <= totalFrames; i++) {
//         const imageURL = formatFrameIndex(i);
//         const img = new Image();
//         img.src = imageURL;
//         frameImages.push(img);
//     }
// }

// function updateBackgroundImage(frameIndex) {
//     const imageURL = formatFrameIndex(frameIndex);
//     portfolioBackground.style.backgroundImage = `url(${imageURL})`;
// }

// // Callback function for Intersection Observer
// function handleIntersection(entries) {
//     if (entries[0].isIntersecting) {
//         distance_to_portfolio = Math.round(window.scrollY) // pixels
//         distance_to_scroll = portfolioSection.getBoundingClientRect().height + window.innerHeight; //for ratio of images
//         observer.unobserve(portfolioSection);
//         window.addEventListener("scroll", updateFrameIndex);
//         updateFrameIndex(); // Update frame index immediately when the section comes into view
//     }
// }

// const observer = new IntersectionObserver(handleIntersection);
// observer.observe(portfolioSection);

// preloadImages(); // Preload frame images

// let currentFrameIndex = 1;
// let lastKnownScrollPosition = 0;

// function updateFrameIndex() {
//     const currentScrollPosition = window.pageYOffset;
//     const scrollDelta = currentScrollPosition - lastKnownScrollPosition;

//     if (scrollDelta !== 0) {
//         const scrollPercentage = Math.min((currentScrollPosition -  distance_to_portfolio )/ distance_to_scroll, 1);
//         const frameIndex = Math.floor(scrollPercentage * totalFrames) + 1;
//         if (frameIndex !== currentFrameIndex) {
//             currentFrameIndex = frameIndex;
//             if(frameIndex > 0) {
//                 updateBackgroundImage(frameIndex);
//             }
//         }
//     }

//     lastKnownScrollPosition = currentScrollPosition;
// }

// // Initial background image update
// updateBackgroundImage(1);

let screenWidth = document.documentElement.clientWidth;
document.addEventListener('DOMContentLoaded', function() {
    function updateGalleryLayout() {
        screenWidth = document.documentElement.clientWidth;
        console.log(screenWidth);

        const gallery = document.querySelector('.gallery');

        let cols = [];

        gallery.innerHTML = ''; // Clear existing content

        if (screenWidth < 500) {
            console.log('screen small');
            gallery.style.setProperty('grid-template-columns', 'repeat(1, minmax(0px, 1fr))');
            // Single column layout
            const galleryColumn = document.createElement('div');
            galleryColumn.classList.add('gallery-col');

            cols.push(galleryColumn);

            gallery.appendChild(galleryColumn);
        } else if (screenWidth <= 1000) {
            console.log('screen mid');
            gallery.style.setProperty('grid-template-columns', 'repeat(2, minmax(0px, 1fr))');
            
            // Two columns layout
            for (let i = 0; i < 2; i++) {
                const galleryColumn = document.createElement('div');
                galleryColumn.classList.add('gallery-col');
                cols.push(galleryColumn);
                gallery.appendChild(galleryColumn);
            }
        } else if (screenWidth <= 2500) {
            console.log('screen big');
            gallery.style.setProperty('grid-template-columns', 'repeat(3, minmax(0px, 1fr))');

            // Default layout (three columns)
            for (let i = 0; i < 3; i++) {
                const galleryColumn = document.createElement('div');
                galleryColumn.classList.add('gallery-col');
                cols.push(galleryColumn);
                gallery.appendChild(galleryColumn);
            }
        } else {
            console.log('screen extra big');
            gallery.style.setProperty('grid-template-columns', 'repeat(4, minmax(0px, 1fr))');

            // Default layout (three columns)
            for (let i = 0; i < 4; i++) {
                const galleryColumn = document.createElement('div');
                galleryColumn.classList.add('gallery-col');
                cols.push(galleryColumn);
                gallery.appendChild(galleryColumn);
            }
        }


        console.log(cols);

        let image_fps = [
            ["../assetsphotographywebp_photos/DSC05709.avif", "template_string, description"],
            ["../assetsphotographywebp_photos/DSC06661.avif", "template_string, description2"]
        ]
        
        // // in order insertion
        // let i = 0
        // n_cols = cols.length
        // for (const image_fp of image_fps) {
        //     const photo_div = document.createElement('div');
        //     photo_div.classList.add('gallery-photo');

        //     const photo = document.createElement('img');
        //     photo.src = image_fp;
        //     photo_div.appendChild(photo);

        //     cols[i % n_cols].appendChild(photo_div);

        //     i++;
        // }
        
        // // height order insertion (tries to keep height relatively constant)

        function getColHeight(div) {
            return div.offsetHeight;
        }

        function findShortestColumn(cols) {
            let shortestH = getColHeight(cols[0]);
            let shortestCol = cols[0];

            for (const col of cols) {
                if (getColHeight(col) < shortestH) {
                    shortestCol = col;
                    shortestH = getColHeight(col);
                }
            }

            return shortestCol;
        }


        for (const image_fp_desc of image_fps) {
            const image_fp = image_fp_desc[0]
            const image_desc = image_fp_desc[1]

            const photo_div = document.createElement('div');
            photo_div.classList.add('gallery-photo');

            const img_overlay = document.createElement('div');
            img_overlay.classList.add("gallery-photo-overlay");

            desc = document.createElement('p');
            desc.classList.add("overlay-text");
            desc.innerHTML = image_desc
            img_overlay.appendChild(desc)

            const photo = document.createElement('img');
            photo.classList.add("photo");
            
            // Attach event listener to the load event of each image
            photo.addEventListener('load', function() {
                // Append the loaded image to the photo_div
                photo_div.appendChild(photo);
                
                // Find the shortest column
                const shortestColumn = findShortestColumn(cols);
                
                // Append the photo_div to the shortest column
                shortestColumn.appendChild(photo_div);
                photo_div.appendChild(img_overlay);
            });
            
            photo_div.appendChild(photo);
            photo.src = image_fp;

        }


    }

    // Initial call to set up the gallery layout
    updateGalleryLayout();

    // // Update gallery layout whenever the window is resized
    window.addEventListener('resize', function() {
        console.log("this is the first call: " + screenWidth);
        if(screenWidth !== document.documentElement.clientWidth){ 
            updateGalleryLayout();
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const galleryPhotos = document.querySelectorAll('.gallery-photo');

    galleryPhotos.forEach(function(galleryPhoto) {
        // Attach a touchstart event listener to each gallery photo
        galleryPhoto.addEventListener('touchstart', function(event) {
            // Toggle the visibility of the overlay
            console.log('touch detected')
            const overlay = galleryPhoto.querySelector('.gallery-photo-overlay');
            overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
            event.preventDefault();
        }, {passive: false});
    });
});
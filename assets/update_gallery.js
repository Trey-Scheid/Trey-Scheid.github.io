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
            ["../assets/photography/webp_photos/DSC05709.avif", "\"Happy Humpty\"<br>📍Sectionals,<br>Irvine, CA"],
            ["../assets/photography/webp_photos/25_photographs_10DSC05622.avif", "#10"],
            ["../assets/photography/webp_photos/25_photographs_11DSC05414.avif", "template_string, description"],
            ["../assets/photography/webp_photos/25_photographs_14DSC05388.avif", "template_string, description"],
            ["../assets/photography/webp_photos/25_photographs_16DSC05318.avif", "template_string, description"],
            ["../assets/photography/webp_photos/25_photographs_17DSC05407.avif", "template_string, description"],
            ["../assets/photography/webp_photos/25_photographs_18DSC05236.avif", "template_string, description"],
            ["../assets/photography/webp_photos/25_photographs_19DSC05273.avif", "template_string, description"],
            ["../assets/photography/webp_photos/25_photographs_20IMG_0587.avif", "template_string, description"],
            ["../assets/photography/webp_photos/25_photographs_21DSC05267.avif", "template_string, description"],
            ["../assets/photography/webp_photos/25_photographs_5DSC05390.avif", "template_string, description"],
            ["../assets/photography/webp_photos/AEE_FILE0007.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/DSC05709.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/DSC06661.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/DSC07848.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_0094.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7541.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7562.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7571.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7582.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7697.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7732.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7738.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7742.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7747.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7758.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7887.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Graduation_DSC4868.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Graduation_DSC5066.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Graduation_DSC5078.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_045571F3-5D75-4FB1-909E-CC272FE4CFD3.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_0F6BC0E6-2583-42EA-A9BF-EE4994531086.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_BF2EDA14-818D-404C-8B0C-F57102769252.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00161.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00171.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00186.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00571.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00701.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00852.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00869.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00876.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC01006.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC01088.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC01144.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC01351.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC01615_2.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC02739.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC02748.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC03754.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC05336.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC05401.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC05466.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC05760.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC07467.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC07476.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC07890.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC08460.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC08507.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC08527.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC08929.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC08994.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC09019.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC09101.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC09160.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC09575.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC09726.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC09843.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC0E5744.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_IMG_9762.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_IMG_9771.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_IMG_9822.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Ship Scene.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Spanish thing_edited-1.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_DSC00121.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_DSC06684.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_IMG_1489.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_IMG_1495.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC05857.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC05859.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC05933.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC06034.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC06600.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC06638.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC07037.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC07295.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_practice_18NamoAg3.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_practice_DSC08476.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_practice_DSC08490.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_practice_DSC08504.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_practice_DSC08576.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00754.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00778.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00798.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00810.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00864.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00870.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00908.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00911.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00922.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_Final_DSC00055230531_Sid_7.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_Final_DSC00136230531_Sid_9.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_Final_DSC09988230531_Sid_2.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectII_26, 30 DSC01022.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectII_29 DSC00977.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectII_3 32 DSC00990.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectII_3 32 DSC01001.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectII_38 47 DSC01002.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectII_41 DSC00934.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectII_7 10 DSC00982.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectI_Regionals.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectI_mmmmmm.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectI_portrait.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectI_type2.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_protest_DSC00858.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS60_DSC05287 copy.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/ZY-Photo-2020-09-07-00000072.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/_DSC3924.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/_DSC4358.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/_DSC4560.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/_DSC5746.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/camping_DSC02850.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/camping_DSC02856.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/phone_IMG_0022.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/phone_IMG_0045.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/phone_IMG_0620.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/phone_IMG_1188_Original.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/phone_IMG_6237_Original.avif", "template_string, description"],
            // ["../assets/photography/webp_photos/phone_IMG_6238_Original.avif", "phone"]
            ["../assets/photography/webp_photos/r1_colorful_sunset.JPG", "📍Tierra del Sol,<br>San Diego, CA"]
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
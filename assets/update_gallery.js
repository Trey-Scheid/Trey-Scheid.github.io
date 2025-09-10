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

        const image_fps = [
            ["../assets/photography/webp_photos/r2_cat.JPG", "1"],
            ["../assets/photography/webp_photos/r2_cat.JPG", "2"]
            // ["../assets/photography/webp_photos/DSC05709.JPG", "Dumpty1"],
            // ["../assets/photography/webp_photos/DSC05709.JPG", "Dumpty2"],
            // ["../assets/photography/webp_photos/DSC05709.JPG", "Dumpty3"],
            // ["../assets/photography/webp_photos/DSC05709.JPG", "Dumpty4"],
            // ["../assets/photography/webp_photos/DSC05709.JPG", "Dumpty5"],
            // ["../assets/photography/webp_photos/phone_IMG_7589.HEIC","fish"],
            // ["../assets/photography/webp_photos/25_photographs_10DSC05622.webp", "#10"],
            // ["../assets/photography/webp_photos/25_photographs_11DSC05414.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/25_photographs_14DSC05388.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/25_photographs_16DSC05318.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/25_photographs_17DSC05407.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/25_photographs_18DSC05236.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/25_photographs_19DSC05273.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/25_photographs_20IMG_0587.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/25_photographs_21DSC05267.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/25_photographs_5DSC05390.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/AEE_FILE0007.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/DSC05709.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/DSC06661.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/DSC07848.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_0094.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7541.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7562.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7571.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7582.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7697.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7732.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7738.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7742.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7747.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7758.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/DSLR_IMG_7887.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Graduation_DSC4868.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Graduation_DSC5066.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Graduation_DSC5078.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_045571F3-5D75-4FB1-909E-CC272FE4CFD3.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_0F6BC0E6-2583-42EA-A9BF-EE4994531086.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_BF2EDA14-818D-404C-8B0C-F57102769252.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00161.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00171.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00186.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00571.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00701.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00852.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00869.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC00876.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC01006.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC01088.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC01144.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC01351.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC01615_2.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC02739.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC02748.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC03754.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC05336.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC05401.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC05466.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC05760.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC07467.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC07476.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC07890.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC08460.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC08507.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC08527.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC08929.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC08994.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC09019.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC09101.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC09160.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC09575.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC09726.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC09843.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_DSC0E5744.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_IMG_9762.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_IMG_9771.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/SONY_PRINTED_IMG_9822.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Ship Scene.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Spanish thing_edited-1.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_DSC00121.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_DSC06684.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_IMG_1489.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_IMG_1495.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC05857.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC05859.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC05933.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC06034.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC06600.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC06638.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC07037.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_Sectionals_DSC07295.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_practice_18NamoAg3.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_practice_DSC08476.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_practice_DSC08490.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_practice_DSC08504.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/Squids_practice_DSC08576.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00754.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00778.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00798.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00810.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00864.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00870.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00908.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00911.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_DSC00922.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_Final_DSC00055230531_Sid_7.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_Final_DSC00136230531_Sid_9.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_Final_DSC09988230531_Sid_2.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectII_26, 30 DSC01022.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectII_29 DSC00977.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectII_3 32 DSC00990.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectII_3 32 DSC01001.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectII_38 47 DSC01002.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectII_41 DSC00934.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectII_7 10 DSC00982.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectI_Regionals.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectI_mmmmmm.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectI_portrait.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_ProjectI_type2.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS164_protest_DSC00858.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/VIS60_DSC05287 copy.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/ZY-Photo-2020-09-07-00000072.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/_DSC3924.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/_DSC4358.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/_DSC4560.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/_DSC5746.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/camping_DSC02850.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/camping_DSC02856.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/phone_IMG_0022.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/phone_IMG_0045.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/phone_IMG_0620.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/phone_IMG_1188_Original.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/phone_IMG_6237_Original.webp", "template_string, description"],
            // ["../assets/photography/webp_photos/phone_IMG_6238_Original.webp", "phone"]
            // ["../assets/photography/webp_photos/DSC05709.JPG", "Dumpty6"]
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
            const image_fp = image_fp_desc[0];
            const image_desc = image_fp_desc[1];

            const photo_div = document.createElement('div');
            photo_div.classList.add('gallery-photo');

            const img_overlay = document.createElement('div');
            img_overlay.classList.add("gallery-photo-overlay");

            const desc = document.createElement('p');
            desc.classList.add("overlay-text");
            desc.innerHTML = image_desc;
            img_overlay.appendChild(desc);

            const photo = document.createElement('img');
            photo.classList.add("photo");
            // photo.loading = "lazy"; // good for perf

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
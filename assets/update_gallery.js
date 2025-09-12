let screenWidth = document.documentElement.clientWidth;

document.addEventListener('DOMContentLoaded', function() {
    let galleryItems = []; // [{thumb, full, desc}, ...]
    
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
            ["../assets/photography/webp_photos/DSC05709.avif", "\"Happy Humpty\"<br>📍 Irvine, CA"],
            ["../assets/photography/webp_photos/25_photographs_10DSC05622.avif", "\"Say Cheese\"<br>📍 Dumpty House"],
            ["../assets/photography/webp_photos/25_photographs_11DSC05414.avif", "\"Faculty Kitchenette\"<br>📍 CSE bldg, UCSD"],
            ["../assets/photography/webp_photos/25_photographs_14DSC05388.avif", "\"It <em>is</em> Rocket Science\"<br>📍 Rocket Propulsion Lab, UCSD"],
            ["../assets/photography/webp_photos/25_photographs_16DSC05318.avif", "\"Love Deefo\"<br>📍 Practice on Warren"],
            ["../assets/photography/webp_photos/25_photographs_17DSC05407.avif", "\"Hangry Eyes\"<br>📍 DataHacks 2024"],
            ["../assets/photography/webp_photos/25_photographs_18DSC05236.avif", "\"Color-Pattern-Line\"<br>📍 Epstein Family Amphitheater, UCSD"],
            ["../assets/photography/webp_photos/25_photographs_19DSC05273.avif", "\"Get Up!\"<br>📍 Practice on Warren"],
            ["../assets/photography/webp_photos/25_photographs_20IMG_0587.avif", "\"Happy Hacking\"<br>📍 DataHacks Workshop 2024 (Neil Sharma)"],
            ["../assets/photography/webp_photos/25_photographs_21DSC05267.avif", "\"Trolley or Train\"<br>📍 Warren Field, UCSD"],
            ["../assets/photography/webp_photos/25_photographs_5DSC05390.avif", "Far Away Hall, UCSD"],
            ["../assets/photography/webp_photos/AEE_FILE0007.avif", "\"Pre-Accident\"<br>📍 Shell Ridge Open Space"],
            ["../assets/photography/webp_photos/c-2doneabscol4.avif", "\"Addiction #7\""],
            ["../assets/photography/webp_photos/camping_DSC02850.avif", "\"Brighten Your Day\"<br>📍 Mountain Road, CA"],
            ["../assets/photography/webp_photos/camping_DSC02856.avif", "\"Ahhhhhhhh\"<br>📍 Mountain, CA"],
            ["../assets/photography/webp_photos/doneboth35.avif", "\"Addiction #8\""],
            ["../assets/photography/webp_photos/donerelcol+.58.avif", "\"Addiction #6\""],
            ["../assets/photography/webp_photos/donerelcol.avif", "\"Addiction #1\""],
            ["../assets/photography/webp_photos/donerelcol2.avif", "\"Addiction #2\""],
            ["../assets/photography/webp_photos/donerelcol6.avif", "\"Addiction #3\""],
            ["../assets/photography/webp_photos/donerelcol7+.33.avif", "\"Addiction #4\""],
            ["../assets/photography/webp_photos/donerelcol9.avif", "\"Addiction #5\""],
            ["../assets/photography/webp_photos/DSC06661.avif", "\"Backhands are Hard\"<br>📍 Irvine, CA"],
            ["../assets/photography/webp_photos/DSC07848.avif", "\"Universe Point\"<br>📍 Irvine, CA"],
            ["../assets/photography/webp_photos/DSLR_IMG_0094.avif", "\"Surprise!\"<br>📍 Chloe's Bed"],
            ["../assets/photography/webp_photos/DSLR_IMG_7541.avif", "\"Untitled\"<br>📍 Marin, CA"],
            ["../assets/photography/webp_photos/DSLR_IMG_7562.avif", "\"Untitled\"<br>📍 Marin, CA"],
            ["../assets/photography/webp_photos/DSLR_IMG_7571.avif", "\"Untitled\"<br>📍 Marin, CA"],
            ["../assets/photography/webp_photos/DSLR_IMG_7582.avif", "\"Untitled\"<br>📍 Marin, CA"],
            ["../assets/photography/webp_photos/DSLR_IMG_7697.avif", "\"First Moon Shot\"<br>📍 The Court"],
            ["../assets/photography/webp_photos/DSLR_IMG_7732.avif", "\"Pendulum\"<br>📍 Diablo Shadows Park"],
            ["../assets/photography/webp_photos/DSLR_IMG_7738.avif", "\"Fault\"<br>📍 Diablo Shadows Park"],
            ["../assets/photography/webp_photos/DSLR_IMG_7742.avif", "\"Fwango\"<br>📍 Diablo Shadows Park"],
            ["../assets/photography/webp_photos/DSLR_IMG_7747.avif", "\"Eye on the Prize\"<br>📍 Diablo Shadows Park"],
            ["../assets/photography/webp_photos/DSLR_IMG_7758.avif", "\"Porsche\"<br>📍 Late at Night"],
            ["../assets/photography/webp_photos/DSLR_IMG_7887.avif", "\"February 14th\"<br>📍 San Francisco, CA"],
            ["../assets/photography/webp_photos/Graduation_DSC4868.avif", "\"Gambit\"<br>📍 Scripps Pier"],
            ["../assets/photography/webp_photos/Graduation_DSC5066.avif", "\"Sissy 1.\"<br>📍 Scripps Pier"],
            ["../assets/photography/webp_photos/Graduation_DSC5078.avif", "\"Sissy 2.\"<br>📍 Scripps Pier"],
            // ###### I am here ######
            ["../assets/photography/webp_photos/SONY_PRINTED_045571F3-5D75-4FB1-909E-CC272FE4CFD3.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_0F6BC0E6-2583-42EA-A9BF-EE4994531086.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_BF2EDA14-818D-404C-8B0C-F57102769252.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC00161.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC00171.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC00186.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC00571.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC00701.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC00852.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC00869.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC00876.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC01006.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC01088.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC01144.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC01351.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC01615_2.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC02739.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC02748.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC03754.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC05336.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC05401.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC05466.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC05760.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC07467.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC07476.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC07890.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC08460.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC08507.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC08527.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC08929.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC08994.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC09019.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC09101.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC09160.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC09575.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC09726.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC09843.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_DSC0E5744.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_IMG_9762.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_IMG_9771.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/SONY_PRINTED_IMG_9822.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Ship Scene.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Spanish thing_edited-1.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_DSC00121.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_DSC06684.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_IMG_1489.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_IMG_1495.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_Sectionals_DSC05857.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_Sectionals_DSC05859.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_Sectionals_DSC05933.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_Sectionals_DSC06034.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_Sectionals_DSC06600.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_Sectionals_DSC06638.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_Sectionals_DSC07037.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_Sectionals_DSC07295.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_practice_18NamoAg3.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_practice_DSC08476.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_practice_DSC08490.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_practice_DSC08504.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/Squids_practice_DSC08576.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_DSC00754.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_DSC00778.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_DSC00798.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_DSC00810.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_DSC00864.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_DSC00870.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_DSC00908.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_DSC00911.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_DSC00922.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_Final_DSC00055230531_Sid_7.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_Final_DSC00136230531_Sid_9.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_Final_DSC09988230531_Sid_2.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_ProjectII_26, 30 DSC01022.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_ProjectII_29 DSC00977.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_ProjectII_3 32 DSC00990.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_ProjectII_3 32 DSC01001.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_ProjectII_38 47 DSC01002.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_ProjectII_41 DSC00934.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_ProjectII_7 10 DSC00982.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_ProjectI_Regionals.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_ProjectI_mmmmmm.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_ProjectI_portrait.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_ProjectI_type2.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS164_protest_DSC00858.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/VIS60_DSC05287 copy.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/ZY-Photo-2020-09-07-00000072.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/GRADUATION_DSC3924.avif", "\"Eshaan & Chloe\"<br>📍 Scripps Pier"],
            ["../assets/photography/webp_photos/GRADUATION_DSC4358.avif", "\"Kezha\"<br>📍 Scripps Pier"],
            ["../assets/photography/webp_photos/GRADUATION_DSC4560.avif", "\"Chloe and Josie\"<br>📍 Scripps Pier"],
            ["../assets/photography/webp_photos/GRADUATION_DSC5746.avif", "\"Chloe\"<br>📍 Scripps Pier"],
            ["../assets/photography/webp_photos/phone_IMG_0022.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/phone_IMG_0045.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/phone_IMG_0620.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/phone_IMG_1188_Original.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/phone_IMG_6237_Original.avif", "\"\"<br>📍 "],
            ["../assets/photography/webp_photos/phone_IMG_6238_Original.avif", "phone"]
        ]
        
        // const fullSrc = thumbSrc.replace('/webp_photos/', '/full_res/');

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

        for (let i = 0; i < image_fps.length; i++) {
            const [image_fp, image_desc] = image_fps[i]
            // const  = image_fp_desc[0]
            // const  = image_fp_desc[1]
            const image_full_fp = image_fp.replace('/webp_photos/', '/full_res/');

            galleryItems.push({ thumb: image_fp, full: image_full_fp, desc: image_desc });

            const photo_div = document.createElement('div');
            photo_div.classList.add('gallery-photo');
            photo_div.setAttribute('data-index', i)

            const img_overlay = document.createElement('div');
            img_overlay.classList.add("gallery-photo-overlay");

            // Create the hover element
            desc = document.createElement('p');
            desc.classList.add("overlay-text");
            desc.innerHTML = image_desc
            img_overlay.appendChild(desc)

            // Create the thumbnail image
            const photo = document.createElement('img');
            photo.classList.add("photo");
            // photo.loading = 'lazy';
            
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
            
            // photo_div.appendChild(photo);
            photo.src = image_fp;

        }


    }

    // Initial call to set up the gallery layout
    updateGalleryLayout();

    // Update gallery layout whenever the window is resized
    window.addEventListener('resize', function() {
        console.log("this is the first call: " + screenWidth);
        if(screenWidth !== document.documentElement.clientWidth){ 
            updateGalleryLayout();
        }
    });

    // const galleryPhotos = document.querySelectorAll('.gallery-photo');
    // galleryPhotos.forEach(function(galleryPhoto) {
    //     // Attach a touchstart event listener to each gallery photo
    //     galleryPhoto.addEventListener('touchstart', function(event) {
    //         // Toggle the visibility of the overlay
    //         console.log('touch detected')
    //         const overlay = galleryPhoto.querySelector('.gallery-photo-overlay');
    //         overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
    //         event.preventDefault();
    //     }, {passive: false});
    // });

    // Lightbox functionality
    const gallery = document.querySelector('.gallery');
    const dlg = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const btnPrev = dlg.querySelector('.lb-prev');
    const btnNext = dlg.querySelector('.lb-next');
    const btnClose = dlg.querySelector('.lb-close');

    let currentIndex = -1;
    let lastFocus = null;

    function openAt(index) {
        if (index < 0 || index >= galleryItems.length) return;
        currentIndex = index;

        // Set full-res src lazily
        const item = galleryItems[currentIndex];
        img.removeAttribute('src'); // clear previous to force fresh load
        img.alt = item.desc ? stripHTML(item.desc) : 'Photo';
        img.src = item.full; // load now

        // Open dialog and manage focus
        if (typeof dlg.showModal === 'function') {
            lastFocus = document.activeElement;
            dlg.showModal();
            btnClose.focus();
        } else {
            // Fallback if <dialog> not supported: emulate overlay
            dlg.setAttribute('open', '');
        }
    }

    function closeDlg() {
        if (dlg.open) dlg.close();
        if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
        currentIndex = -1;
    }

    function showPrev() {
        if (currentIndex < 0) return;
        const nextIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        openAt(nextIndex);
    }

    function showNext() {
        if (currentIndex < 0) return;
        const nextIndex = (currentIndex + 1) % galleryItems.length;
        openAt(nextIndex);
    }

    // Delegate click from gallery to items
    gallery.addEventListener('click', function (e) {
        const target = e.target.closest('.gallery-photo');
        if (!target) return;
        const index = parseInt(target.dataset.index, 10);
        if (Number.isFinite(index)) openAt(index);
    });

    // Controls
    btnClose.addEventListener('click', closeDlg);
    btnPrev.addEventListener('click', showPrev);
    btnNext.addEventListener('click', showNext);

    // Backdrop click to close (click outside image area closes)
    dlg.addEventListener('click', function (e) {
        const rect = img.getBoundingClientRect();
        const clickedOutside =
        e.clientX < rect.left || e.clientX > rect.right ||
        e.clientY < rect.top || e.clientY > rect.bottom;
        if (clickedOutside) closeDlg();
    });

    // Keyboard
    dlg.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { e.preventDefault(); closeDlg(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); showPrev(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); showNext(); }
    });

    function stripHTML(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }
});

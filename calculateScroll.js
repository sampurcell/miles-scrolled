function getTotalFromStorage(cb) {
    return chrome.storage.local.get('totalScrolled', function (result) {
        if (!result.totalScrolled) {
            return saveTotalToStorage(0, cb);
        }
        console.log("running init after get");
        cb(result.totalScrolled);
    });
}
let totalScrolled;
let lastScrollPosition;
console.log('hiiiii');
getTotalFromStorage(init);

function init(total) {
    totalScrolled = total;
    lastScrollPosition = window.pageYOffset;
// @todo Deal with finding scroll position when window resizes

    window.addEventListener('scroll', function(e) {
        let ticking = false;

        if (!ticking) {
            getTotalFromStorage(function(total) {
                totalScrolled = total;

                window.requestAnimationFrame(function () {
                    calculateScroll(window.pageYOffset);
                    ticking = false;
                });

                ticking = true;
            });
        }
    });
}

function saveTotalToStorage(totalScrolled, cb) {
    chrome.storage.local.set({ totalScrolled: totalScrolled }, function () {
        cb();
    });
}

function calculateScroll(newScrollPosition) {
    console.log(`new scroll position: ${newScrollPosition}`);
    let delta;
    if (newScrollPosition > lastScrollPosition) {
        delta = newScrollPosition - lastScrollPosition;
    } else {
        delta = lastScrollPosition - newScrollPosition;
    }
    
    console.log(`delta; ${delta}`);

    totalScrolled += delta;
    lastScrollPosition = newScrollPosition;

    console.log(`total scrolled: ${totalScrolled}`);
    saveTotalToStorage(totalScrolled, function () {});
}

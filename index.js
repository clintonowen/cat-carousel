'use strict';
/* global $ */

// listens for and handles thumbnail clicks
function handleThumbnailClicks() {
  $('.thumbnails').on('click', '.thumbnail', function(event) {
    event.preventDefault;

    // get `src` of thumbnail <img>
    const imgSrc = $(this).find('img').attr('src');
    // get `alt` of thumbnail <img>
    const imgAlt = $(this).find('img').attr('alt');

    // set `.hero` <img> `src` to match clicked thumbnail
    $('.hero').find('img').attr('src', imgSrc);
    // set `.hero` <img> `alt` to match clicked thumbnail
    $('.hero').find('img').attr('alt', imgAlt);
  });
}

$(handleThumbnailClicks);
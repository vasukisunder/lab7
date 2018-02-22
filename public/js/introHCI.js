'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(projectClick);

	// your code here
}



function projectClick(e) { 

 gtag('event', 'click', {'send_to': 'UA-114569744-1'});

    // prevent the page from reloading      
    e.preventDefault();


    console.log("hello");
}
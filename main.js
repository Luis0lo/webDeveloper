//does active the nav section where we are
$("body").scrollspy({ target: "#main-nav" });

//add smoth scrolling. slim cdn version doesnt work!
$("#main-nav a").on("click", function (e) {
  // check for a hash value
  if (this.hash !== "") {
    //prevent default behavior
    e.preventDefault();
    //store hash
    const hash = this.hash;
    //animate smooth scroll
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      900,
      function () {
        //hash to the URL after scroll
        window.location.hash = hash;
      }
    );
  }
});
// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

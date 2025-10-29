document.addEventListener("DOMContentLoaded",function(){
  const gobtn=document.getElementById("movie");
  if(gobtn){
    gobtn.addEventListener("click",function(){
      window.location.href="movies.html";
    })
    
  }
  const back=document.getElementById("back");
  if(back){
    back.addEventListener("click",function(){
      window.location.href="index.html";
    })
  }
})
document.addEventListener("DOMContentLoaded", function() {
  // Get all language checkboxes
  const checkboxes = document.querySelectorAll('.check input[type="checkbox"]');
  const movies = document.querySelectorAll('.container1 > div'); // all movie blocks

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", filterMovies);
  });

  function filterMovies() {
    // Get all selected languages
    const selectedLanguages = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    // If nothing selected, show all movies
    if (selectedLanguages.length === 0) {
      movies.forEach(movie => movie.style.display = "block");
      return;
    }

    // Otherwise, show only selected language movies
    movies.forEach(movie => {
      const movieLang = movie.getAttribute("data-language");
      if (selectedLanguages.includes(movieLang)) {
        movie.style.display = "block";
      } else {
        movie.style.display = "none";
      }
    });
  }
});

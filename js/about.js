document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
  
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(revealCallback, observerOptions);
  
    document.querySelectorAll(".slide-in-left, .slide-in-right").forEach(element => {
      observer.observe(element);
    });
  });

 // Hide all content sections initially
document.querySelectorAll('.collapsible').forEach(button => {
  const content = button.nextElementSibling;
  content.style.display = 'none'; // Hide the content initially

  // Add click event to toggle visibility
  button.addEventListener('click', () => {
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
  
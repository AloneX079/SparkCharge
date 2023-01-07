const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.title');

    if (entry.isIntersecting) {
      square.classList.add('blu');
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('blu');
  });
});

observer.observe(document.querySelector('.header'));

function visible(){
document.querySelector('.login-form').classList.toggle("visible")
document.querySelector('.content').classList.toggle("blur")
}
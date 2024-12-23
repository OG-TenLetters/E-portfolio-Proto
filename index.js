// Template Key: template_acfbkmf
// Service Key: service_dmf4e7a
// API key : qVGgK80-uMkkItvbU

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const sucess = document.querySelector(".modal__overlay--success");
//   loading.classList += " modal__overlay--visible";
  
  emailjs
    .sendform(
      "service_dmf4e7a",
      "template_acfbkmf",
      event.target,
      "qVGgK80-uMkkItvbU"
    ).then(() => {
        throw new Error('error');
      loading.classList.remove("modal__overlay--visible");
      sucess.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at 1tenletters0@gmail.com"
      );
    });

}

loading.classList += " modal__overlay--visible";
  setTimeout(() => {
   
    console.log('it worked 1')
  }, 1000)
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");


menuBtn.addEventListener("click", function() {
  if (navLinks.style.maxHeight) {
    navLinks.style.maxHeight = null;
  } else {
    navLinks.style.maxHeight = navLinks.scrollHeight + "px";
  }

  const isOpen = navLinks.style.maxHeight !== null;
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content .btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// hire me now button ( iwant to put my email( hamzatalha1213@gmail.com)
ScrollReveal().reveal(".hire__me__btn", {
  ...scrollRevealOption,
  delay: 2500,
  interval: 200,



  // about container
  ScrollReveal(// Prepare email content
const mailOptions = {
  from: 'your-valid-email@gmail.com', // Replace with a valid email address
  to: 'hamzatalha1213@gmail.com', // Your main email address
  subject: 'New Form Submission',
  text: `
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Description: ${description}
  `,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } else {
    console.log('Email sent: ' + info.response);
    res.status(200).send('OK');
  }
});
}).reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
  });

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btns", {
  ...scrollRevealOption,
  delay: 2000,
});

// service container
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

// blog container
ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Prepare email content
const mailOptions = {
  from: 'your-valid-email@gmail.com', // Replace with a valid email address
  to: 'hamzatalha1213@gmail.com', // Your main email address
  subject: 'New Form Submission',
  text: `
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Description: ${description}
  `,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } else {
    console.log('Email sent: ' + info.response);
    res.status(200).send('OK');
  }
});






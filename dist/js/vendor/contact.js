let fname = document.getElementById("from_name");
let femail = document.getElementById("from_email");
let mess = document.getElementById("message");
let frm = document.getElementById("contact-form");

(function () {
  emailjs.init("user_E1Uw6QGLoJLD1N6tztxYL");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_rdgan", "template_cr5qvre", this).then(
        function () {
          alert("message sent!");

          fname.value = " ";
          femail.value = " ";
          mess.value = " ";
        },
        function (error) {
          alert("FAILED...", error);
        }
      );
    });
};

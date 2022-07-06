import getEmployer from "./directory.js";

const urlParams = new URLSearchParams(window.location.search);
const idEmployer = urlParams.get("id");

console.log(idEmployer);

const employer = getEmployer(idEmployer);

const pageTitle = document.querySelector("#page-title");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const position = document.querySelector("#position");
const image = document.querySelector("#image-employer");

pageTitle.innerHTML = `| Contacto de ${employer.first_name} ${employer.last_name}`;

email.innerHTML = `<a href='mailto:${employer.email}'>${employer.email}</a>`;
phone.innerHTML = `<a href='tel:+52${employer.phone}'>${employer.phone}</a>`;
position.innerHTML = `${employer.position}`;

if (employer.image) {
	image.src = `./images/employers/${employer.image}`;
}

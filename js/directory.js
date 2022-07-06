const employers = [
	{
		id: "62c5bdf15519a02911288458",
		first_name: "Arturo",
		last_name: "Pérez",
		email: "aperez@toptenmedia.com.mx",
		phone: "55-55-55-55-55",
		position: "Director",
		image: "apg.jpg",
	},
	{
		id: "62c5bdf15519a02911288459",
		first_name: "Brenda",
		last_name: "Guillen",
		email: "bguillen@toptenmedia.com.mx",
		phone: "55-55-55-55-55",
		position: "Ejecutivo comercial",
		image: "bga.jpeg",
	},
];

function getEmployer(id) {
	return employers.find((employer) => employer.id === id);
}

export default getEmployer;

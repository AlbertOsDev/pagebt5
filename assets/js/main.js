const app = document.getElementById('typewriter');

const mitexto = new Typewriter(app, {
	loop: true, //que se repita
	delay: 75, //Mas bajo mas rapido en milisegundo
});

mitexto.typeString('La Capital del Sol').pauseFor(200).start();

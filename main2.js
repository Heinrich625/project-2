let button = document.getElementById('button');
let output = document.getElementById('output');
let quotes =
[
'"Dont let yesterday take up too much of today."-Will Rogers',
'"We may encounter many defeats but we must not be defeated."-Maya Angelo',
'"Failure will never overtake me if my determination to succed is strong enough."-Og Madino',
'"Failure builds character"-unknown',
];

button.addEventListener('click', function(){
	var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
	output.innerHTML = randomQuote;
}) 
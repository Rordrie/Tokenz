const menuBtn = document.getElementsByClassName('lines')[0];
	const nav = document.getElementsByClassName('nav')[0];

menuBtn.addEventListener('click',() => {
		nav.classList.toggle('hidden')
	});

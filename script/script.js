console.log('Test');

var burger = document.getElementById('burger');
console.log(burger);

var menu = document.getElementsByTagName('nav')[0];
console.log(menu);

burger.addEventListener('click', apparitionMenu);

function apparitionMenu() {

//menu visible: image burger apparait
	if (menu.style.display === 'block') {
		menu.style.display = 'none';
		burger.src = 'img/burger.png';
	} 

	//menu invisible: image close apparait
	else {
		burger.src = 'img/close.png';
		menu.style.display = 'block';
	}

}
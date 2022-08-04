

function expand_red() {
	document.querySelector('.backlay>.red').style.transform = "rotateZ(8deg) scale(5)";

	document.querySelector('.backlay>.red').style.zIndex = "99";
}


function expand_green() {
	document.querySelector('.backlay>.green').style.transform = "rotateZ(8deg) scale(5) translate(10vw)";

	document.querySelector('.backlay>.green').style.zIndex = "99";
}
function expand_blue() {
	document.querySelector('.backlay>.blue').style.transform = "rotateZ(8deg) scale(5)";

	document.querySelector('.backlay>.blue').style.zIndex = "99";
}

function close_red() {
	document.querySelector('.backlay>.red').style.transform = "rotateZ(8deg) scale(1) translate(-6%)";
	setTimeout(() => {
		document.querySelector('.backlay>.red').style.zIndex = "1";
	}, 500);

}
function close_green() {
	document.querySelector('.backlay>.green').style.transform = "rotateZ(8deg) scale(1) translate(-6%)";
	setTimeout(() => {
		document.querySelector('.backlay>.green').style.zIndex = "1";
	}, 500);

}
function close_blue() {
	document.querySelector('.backlay>.blue').style.transform = "rotateZ(8deg) scale(1) translate(-6%)";

	setTimeout(() => {
		document.querySelector('.backlay>.blue').style.zIndex = "1";
	}, 500);

}
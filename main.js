function resultado() {
	let p1, p2, p3, p4, p5, p6, nota

	if (document.getElementById("p12").checked == true) {
		p1 = 1
	}
	if (p1 == 1) {
		document.querySelectorAll(".pregunta1")[1].style.color = "#00FF00"
	} else {
		p1 = 0
	}

	if (document.getElementById("p21").checked == true) {
		p2 = 1
	}
	if (p2 == 1) {
		document.querySelectorAll(".pregunta2")[0].style.color = "#00FF00"
	} else {
		p2 = 0
	}

	if (document.getElementById("p33").checked == true) {
		p3 = 1
	}
	if (p3 == 1) {
		document.querySelectorAll(".pregunta3")[2].style.color = "#00FF00"
	} else {
		p3 = 0
	}

	if (document.getElementById("p41").checked == true) {
		p4 = 1
	}
	if (p4 == 1) {
		document.querySelectorAll(".pregunta4")[0].style.color = "#00FF00"
	} else {
		p4 = 0
	}

	if (document.getElementById("p52").checked == true) {
		p5 = 1
	}
	if (p5 == 1) {
		document.querySelectorAll(".pregunta5")[1].style.color = "#00FF00"
	} else {
		p5 = 0
	}

	if (document.getElementById("p64").checked == true) {
		p6 = 1
	}
	if (p6 == 1) {
		document.querySelectorAll(".pregunta6")[3].style.color = "#00FF00"
	} else {
		p6 = 0
	}

	nota = p1 + p2 + p3 + p4 + p5 + p6
	document.getElementById("resultado").innerHTML = "Aciertos: " + nota
	rs = confirm("Desea Continuar?")
	if (rs == false) {
		document.forms[0].reset()
		location.reload()
	}
}

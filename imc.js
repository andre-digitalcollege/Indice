btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    var peso = prompt('Seu Peso em quilos');
    if (peso) {
        let alto = parseInt(prompt("sua Altura em cm"));

        let altelev = alto / 100;
        let indice = peso / altelev ** 2;

        if (peso == 0)
        document.getElementById("indice").textContent = "Peso nao pode ser 0";
        if (alto == 0)
        document.getElementById("indice").textContent = "Altura nao pode ser 0";
        if ((peso<0) || (alto<0))
        document.getElementById("indice").textContent = "Valor Incorreto";
        if ((indice>=10) && (indice<18))
        document.getElementById("indice").textContent = "Abaixo do Peso";
        if ((indice>=18) && (indice<25))
        document.getElementById("indice").textContent = "Peso Normal";
        if ((indice>=25) && (indice<30))
        document.getElementById("indice").textContent = "Sobrepeso";
        if ((indice>=30) && (indice<35))
        document.getElementById("indice").textContent = "Obesidade Grau 1";
        if ((indice>=35) && (indice<40))
        document.getElementById("indice").textContent = "Obesidade Grau 2";
        if ((indice>=40) && (indice<80))
        document.getElementById("indice").textContent = "Obesidade Morbida";
        if ((indice>=80) && (indice<200))
        document.getElementById("indice").textContent = "Super-Pesado";

        // alert(indice)

        // if (indice > 0)
        // image.setAttribute(src="massa.webp", image);
    }
});

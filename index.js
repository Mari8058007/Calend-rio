var data = new Date();

var nomeMes = document.getElementById("nomeMes");
nomeMes.textContent = data.toLocaleDateString(navigator.language, {month:"long"});

var nomeDia = document.getElementById("nomeDia");
nomeDia.textContent = data.toLocaleDateString(navigator.language, {weekday:"long"});

var numeroDia = document.getElementById("numeroDia");
numeroDia.textContent = data.getDate();

var ano = document.getElementById("ano");
ano.textContent = data.getFullYear();


		

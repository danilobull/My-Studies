function somente_numero(campo){  
	var digits="0123456789."; 
	var campo_temp;
	for (var i=0;i<campo.value.length;i++){  
	    campo_temp=campo.value.substring(i,i+1); 
	    if (digits.indexOf(campo_temp)==-1){  
	        campo.value = campo.value.substring(0,i);  
	    }  
	}  
}
function calcula(){
	var c = parseFloat(document.getElementById("ci").value);
	var j = parseFloat(document.getElementById("ju").value);
	j = j/100; 
	var t = parseFloat(document.getElementById("temp").value);
	var m = c*(Math.pow((1+j),t));
	m = Math.round(m*Math.pow(10,2))/Math.pow(10,2);
	var botao_limp='<input type="button" value="Limpar" onclick="javascript:limpa();"/>';
	var rend = m - c;
	rend = Math.round(rend*100)/100;
	document.getElementById("result").innerHTML="<br><br>Total: "+m+"<br>"+"Rendimento: "+rend+"<br>";
	document.getElementById("result").innerHTML+=botao_limp;
	document.getElementById("result").style.display = "block";
}

function limpa(){
	document.getElementById("result").innerHTML="";
	document.getElementById("result").style.display = "none";
	document.getElementById("ci").value = "";
	document.getElementById("ju").value = "";
	document.getElementById("temp").value = "";
}

function calcula_sal(){
	var s = parseFloat(document.getElementById("sb").value);
	var inss=0;
	var ir=0;
	var cont = (s/100);
	cont = Math.round(cont*100)/100;
	var botao_limp='<br><input type="button" value="Limpar" onclick="javascript:limpa_sal();"/>';
	if(s<=1174.86){
		inss = (s/100)*8;
		inss = Math.round(inss*100)/100;
		s = (s - inss) - cont;
		s =  Math.round(s*100)/100;
		document.getElementById("result_sal").innerHTML = "Contribuição da classe: "+cont+"<br>"+"Desconto de inss: "+inss+"<br>Salario liquido: "+s;
		document.getElementById("result_sal").style.display = "block";
		document.getElementById("result_sal").innerHTML+=botao_limp;
	}
	else if((s>=1174.87)&&(s<=1313.69)){
		inss = (s/100)*9;
		inss = Math.round(inss*100)/100;
		s = (s - inss)-cont;
		s =  Math.round(s*100)/100;
		document.getElementById("result_sal").innerHTML = "Contribuição da classe: "+cont+"<br>"+"Desconto de inss: "+inss+"<br>Salario liquido: "+s;
		document.getElementById("result_sal").style.display = "block";
		document.getElementById("result_sal").innerHTML+=botao_limp;
	}
	else if((s>=1313.70)&&(s<=1958.10)){
		inss = (s/100)*9;
		inss = Math.round(inss*100)/100;
		ir = (s/100)*15 - 197.05;
		ir = Math.round(ir*100)/100;
		s = ((s - inss) - ir)-cont;
		s =  Math.round(s*100)/100;
		document.getElementById("result_sal").innerHTML = "Contribuição da classe: "+cont+"<br>"+"Desconto de inss: "+inss+"<br>Desconto de imposto de renda: "+ir+"<br>Salario liquido: "+s;
		document.getElementById("result_sal").style.display = "block";
		document.getElementById("result_sal").innerHTML+=botao_limp;
	}
	else if((s>=1958.11)&&(s<=2625.12)){
		inss = (s/100)*11;
		inss = Math.round(inss*100)/100;
		ir = (s/100)*15 - 197.05;
		ir = Math.round(ir*100)/100;
		s = ((s - inss) - ir)-cont;
		s =  Math.round(s*100)/100;
		document.getElementById("result_sal").innerHTML = "Contribuição da classe: "+cont+"<br>"+"Desconto de inss: "+inss+"<br>Desconto de imposto de renda: "+ir+"<br>Salario liquido: "+s;
		document.getElementById("result_sal").style.display = "block";
		document.getElementById("result_sal").innerHTML+=botao_limp;
	}
	else if((s>=2625.13)&&(s<=3916.20)){
		inss = (s/100)*11;
		inss = Math.round(inss*100)/100;
		ir = (s/100)*27.5 - 525.19;
		ir = Math.round(ir*100)/100;
		s = ((s - inss) - ir)-cont;
		s =  Math.round(s*100)/100;
		document.getElementById("result_sal").innerHTML = "Contribuição da classe: "+cont+"<br>"+"Desconto de inss: "+inss+"<br>Desconto de imposto de renda: "+ir+"<br>Salario liquido: "+s;
		document.getElementById("result_sal").style.display = "block";
		document.getElementById("result_sal").innerHTML+=botao_limp;
	}
	else{
		inss = (3916.20/100)*11;
		inss = Math.round(inss*100)/100;
		ir = (s/100)*27.5 - 525.19;
		ir = Math.round(ir*100)/100;
		s = ((s - inss) - ir)-cont;
		s =  Math.round(s*100)/100;
		document.getElementById("result_sal").innerHTML = "Contribuição da classe: "+cont+"<br>"+"Desconto de inss: "+inss+"<br>Desconto de imposto de renda: "+ir+"<br>Salario liquido: "+s;
		document.getElementById("result_sal").style.display = "block";
		document.getElementById("result_sal").innerHTML+=botao_limp;
	}

}

function limpa_sal(){
	document.getElementById("result_sal").innerHTML="";
	document.getElementById("result_sal").style.display = "none";
	document.getElementById("sb").value = "";
}
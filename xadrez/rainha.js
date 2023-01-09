function casas_rainha(casa){
	var sel = document.getElementById("selecionado").value;
	if(sel=="0"||sel==0){
		casas_torre(casa);
		document.getElementById("selecionado").value = "0";
		casas_bispo(casa);
		document.getElementById("peca").value = "rainha";
	}
}

function move_rainha(casa){
	var sel = document.getElementById("selecionado_mover").value;
	var peca;
	if(document.getElementById(sel).className.indexOf("peca_b")>-1){
		peca = 1;
	}
	else{
		peca = 2;
	}
	move_torre(casa);
	document.getElementById(casa.id).className += " acesso";
	document.getElementById("selecionado_mover").value = parseFloat(sel);
	document.getElementById("selecionado").value = "1";
	if(peca==1){
		document.getElementById(sel).className += " peca_b";
	}
	else{
		document.getElementById(sel).className += " peca_b";
	}
	move_bispo(casa);
	if(document.getElementById(casa.id).className.indexOf("preto")>-1){
		document.getElementById(casa.id).className = "";
		if(peca==1){
			document.getElementById(casa.id).className = "peca_b";
		}
		else{
			document.getElementById(casa.id).className = "peca_p";
		}
		document.getElementById(casa.id).className += " preto";
		if(peca==1){
			document.getElementById(casa.id).className += " rainha_b_2";
		}
		else{
			document.getElementById(casa.id).className += " rainha_p_2";
		}
	}
	else{
		document.getElementById(casa.id).className = "";
		if(peca==1){
			document.getElementById(casa.id).className = "peca_b";
		}
		else{
			document.getElementById(casa.id).className = "peca_p";
		}
		if(peca==1){
			document.getElementById(casa.id).className += " rainha_b_1";
		}
		else{
			document.getElementById(casa.id).className += " rainha_p_1";
		}
	}
	document.getElementById(casa.id).removeAttribute("onclick");
	document.getElementById(casa.id).setAttribute("onclick", "javascript:casas_rainha(this)");
}
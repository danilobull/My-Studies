function casas_cavalo(casa){
	var sel = document.getElementById("selecionado").value;
	if(sel==0||sel=="0"){
		var myId = parseFloat(casa.id);
		var controle  = myId-16;
		var peca;
		if(document.getElementById(casa.id).className.indexOf("peca_b")>-1){
			peca = 1;
		}
		else{
			peca = 2;
		}
		if(controle > 0){
			if((controle+1)%8!=1){
				mostra_casas_cavalo(myId,peca,controle+1);
			}
			if((controle-1)%8!=0){
				mostra_casas_cavalo(myId,peca,controle-1);
			}
		}
		controle = myId - 8;
		if(controle > 0){
			if(((controle+2)%8!=1)&&((controle+2)%8!=2)){
				mostra_casas_cavalo(myId,peca,controle+2);
			}
			if(((controle-2)%8!=0)&&((controle-2)%8!=7)){
				mostra_casas_cavalo(myId,peca,controle-2);
			}
		}
		controle = myId + 16;
		if(controle < 65){
			if((controle+1)%8!=1){
				mostra_casas_cavalo(myId,peca,controle+1);
			}
			if((controle-1)%8!=0){
				mostra_casas_cavalo(myId,peca,controle-1);
			}
		}
		controle = myId + 8;
		if(controle < 65){
			if(((controle+2)%8!=1)&&((controle+2)%8!=2)){
				mostra_casas_cavalo(myId,peca,controle+2);
			}
			if(((controle-2)%8!=0)&&((controle-2)%8!=7)){
				mostra_casas_cavalo(myId,peca,controle-2);
			}
		}
	}
}

function mostra_casas_cavalo(myId,peca,controle){
	var peca_2;
	var tipo_peca;
	if(document.getElementById(controle).className.indexOf("peca")>-1){
		if(document.getElementById(controle).className.indexOf("peca_b")>-1){
			peca_2 = 1;
		}
		else{
			peca_2 = 2;
		}
		if(peca!=peca_2){
			if(document.getElementById(controle).className.indexOf("peao")>-1){
				tipo_peca = "peao";
			}
			else if(document.getElementById(controle).className.indexOf("torre")>-1){
				tipo_peca = "torre";
			}
			else if(document.getElementById(controle).className.indexOf("cavalo")>-1){
				tipo_peca = "cavalo";
			}
			else if(document.getElementById(controle).className.indexOf("bispo")>-1){
				tipo_peca = "bispo";
			}
			else if(document.getElementById(controle).className.indexOf("rainha")>-1){
				tipo_peca = "rainha";
			}
			else if(document.getElementById(controle).className.indexOf("rei")>-1){
				tipo_peca = "rei";
			}
			if(document.getElementById(controle).className.indexOf("preto")>-1){
				document.getElementById(controle).className = "";
				if(peca_2==1){
					document.getElementById(controle).className = "peca_b";
				}
				else{
					document.getElementById(controle).className = "peca_p";
				}
				document.getElementById(controle).className += " preto";
				document.getElementById(controle).className += " acesso";
				if(peca_2==1){
					document.getElementById(controle).className += " "+tipo_peca+"_b_3";
				}
				else{
					document.getElementById(controle).className += " "+tipo_peca+"_p_3";
				}
			}
			else{
				document.getElementById(controle).className = "";
				if(peca_2==1){
					document.getElementById(controle).className = "peca_b";
				}
				else{
					document.getElementById(controle).className = "peca_p";
				}
				document.getElementById(controle).className += " acesso";
				if(peca_2==1){
					document.getElementById(controle).className += " "+tipo_peca+"_b_3";
				}
				else{
					document.getElementById(controle).className += " "+tipo_peca+"_p_3";
				}
			}
			document.getElementById("selecionado").value = "1";
			document.getElementById("selecionado_mover").value = myId;
			document.getElementById("peca").value = "cavalo";
			document.getElementById(controle).removeAttribute("onclick");
			document.getElementById(controle).setAttribute("onclick", "javascript:move(this)");
		}
	}
	else{
		if(document.getElementById(controle).className.indexOf("preto")>-1){
			document.getElementById(controle).className += " acesso";
		}
		else{
			document.getElementById(controle).className = "";
			document.getElementById(controle).className = "acesso";
		}
		document.getElementById("selecionado").value = "1";
		document.getElementById("selecionado_mover").value = myId;
		document.getElementById("peca").value = "cavalo";
	}
}

function move_cavalo(casa){
	if (document.getElementById(casa.id).className.indexOf('acesso') > -1){
		var sel = parseFloat(document.getElementById("selecionado_mover").value);
		var peca;
		var controle  = sel-16;
		if(document.getElementById(sel).className.indexOf("peca_b")>-1){
			peca = 1;
		}
		else{
			peca = 2;
		}
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
				document.getElementById(casa.id).className += " cavalo_b_2";
			}
			else{
				document.getElementById(casa.id).className += " cavalo_p_2";
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
				document.getElementById(casa.id).className += " cavalo_b_1";
			}
			else{
				document.getElementById(casa.id).className += " cavalo_p_1";
			}
		}
		if(document.getElementById(sel).className.indexOf("preto")>-1){
			document.getElementById(sel).className = "";
			document.getElementById(sel).className = "preto";
		}
		else{
			document.getElementById(sel).className = "";
		}
		document.getElementById(sel).removeAttribute("onclick");
		document.getElementById(sel).setAttribute("onclick", "javascript:move(this)");
		document.getElementById(casa.id).removeAttribute("onclick");
		document.getElementById(casa.id).setAttribute("onclick", "javascript:casas_cavalo(this)");
		if(controle > 0){
			if((controle+1)%8!=1){
				move_cavalos(controle+1);
			}
			if((controle-1)%8!=0){
				move_cavalos(controle-1);
			}
		}
		controle = sel - 8;
		if(controle > 0){
			if(((controle+2)%8!=1)&&((controle+2)%8!=2)){
				move_cavalos(controle+2);
			}
			if(((controle-2)%8!=0)&&((controle-2)%8!=7)){
				move_cavalos(controle-2);
			}
		}
		controle = sel + 16;
		if(controle < 65){
			if((controle+1)%8!=1){
				move_cavalos(controle+1);
			}
			if((controle-1)%8!=0){
				move_cavalos(controle-1);
			}
		}
		controle = sel + 8;
		if(controle < 65){
			if(((controle+2)%8!=1)&&((controle+2)%8!=2)){
				move_cavalos(controle+2);
			}
			if(((controle-2)%8!=0)&&((controle-2)%8!=7)){
				move_cavalos(controle-2);
			}
		}
		document.getElementById("selecionado").value = "0";
		document.getElementById("selecionado_mover").value = 0;
		document.getElementById("peca").value = "";
	}
}

function move_cavalos(controle){
	if(document.getElementById(controle).className.indexOf("peca")>-1){
		var tipo_peca;
		var peca_2;
		if(document.getElementById(controle).className.indexOf("peao")>-1){
			tipo_peca = "peao";
		}
		else if(document.getElementById(controle).className.indexOf("torre")>-1){
			tipo_peca = "torre";
		}
		else if(document.getElementById(controle).className.indexOf("rainha")>-1){
			tipo_peca = "rainha";
		}
		else if(document.getElementById(controle).className.indexOf("cavalo")>-1){
			tipo_peca = "cavalo";
		}
		else if(document.getElementById(controle).className.indexOf("bispo")>-1){
			tipo_peca = "bispo";
		}
		else if(document.getElementById(controle).className.indexOf("rei")>-1){
			tipo_peca = "rei";
		}
		if(document.getElementById(controle).className.indexOf("peca_b")>-1){
			peca_2 = 1;
		}
		else{
			peca_2 = 2;
		}
		if(document.getElementById(controle).className.indexOf("preto")>-1){
			document.getElementById(controle).className = "";
			if(peca_2 == 1){
				document.getElementById(controle).className = "peca_b";
			}
			else{
				document.getElementById(controle).className = "peca_p";
			}
			document.getElementById(controle).className += " preto";
			if(peca_2 == 1){
				document.getElementById(controle).className += " "+tipo_peca+"_b_2";
			}
			else{
				document.getElementById(controle).className += " "+tipo_peca+"_p_2";
			}
			document.getElementById(controle).removeAttribute("onclick");
			document.getElementById(controle).setAttribute("onclick", "javascript:casas_"+tipo_peca+"(this)");
		}
		else{
			document.getElementById(controle).className = "";
			if(peca_2 == 1){
				document.getElementById(controle).className = "peca_b";
			}
			else{
				document.getElementById(controle).className = "peca_p";
			}
			if(peca_2 == 1){
				document.getElementById(controle).className += " "+tipo_peca+"_b_1";
			}
			else{
				document.getElementById(controle).className += " "+tipo_peca+"_p_1";
			}
			document.getElementById(controle).removeAttribute("onclick");
			document.getElementById(controle).setAttribute("onclick", "javascript:casas_"+tipo_peca+"(this)");
		}
	}
	else{
		if(document.getElementById(controle).className.indexOf("preto")>-1){
			document.getElementById(controle).className = "";
			document.getElementById(controle).className = "preto";
		}
		else{
			document.getElementById(controle).className = "";
		}
	}
}
function casas_torre(casa){
	var sel = document.getElementById("selecionado").value;
	if(sel=="0"||sel==0){
		var myId = parseFloat(casa.id);
		var controle = myId-8;
		while(controle>0){
			if(document.getElementById(controle).className.indexOf("peca")>-1){
				mostra_casas_torre(myId,controle);
				controle = -1;
			}
			else{
				document.getElementById(controle).className += " acesso";
				controle = controle-8;
				document.getElementById("selecionado").value = "1";
				document.getElementById("selecionado_mover").value = myId;
				document.getElementById("peca").value = "torre";
			}
		}
		controle = myId+8;
		while(controle<65){
			if(document.getElementById(controle).className.indexOf("peca")>-1){
				mostra_casas_torre(myId,controle);
				controle = 65;
			}
			else{
				document.getElementById(controle).className += " acesso";
				controle = controle+8;
				document.getElementById("selecionado").value = "1";
				document.getElementById("selecionado_mover").value = myId;
				document.getElementById("peca").value = "torre";
			}
		}
		controle = myId+1;
		while((controle%8)!=1){
			if(document.getElementById(controle).className.indexOf("peca")>-1){
				mostra_casas_torre(myId,controle);
				controle = 9;
			}
			else{
				document.getElementById(controle).className += " acesso";
				controle = controle+1;
				document.getElementById("selecionado").value = "1";
				document.getElementById("selecionado_mover").value = myId;
				document.getElementById("peca").value = "torre";
			}
		}
		controle = myId-1;
		while((controle%8)!=0){
			if(document.getElementById(controle).className.indexOf("peca")>-1){
				mostra_casas_torre(myId,controle);
				controle = 8;
			}
			else{
				document.getElementById(controle).className += " acesso";
				controle = controle-1;
				document.getElementById("selecionado").value = "1";
				document.getElementById("selecionado_mover").value = myId;
				document.getElementById("peca").value = "torre";
			}
		}
	}
}

function mostra_casas_torre(myId,controle){
	var peca;
	var peca_1;
	if(document.getElementById(myId).className.indexOf("peca_b")>-1){
		peca_1 = 1;
	}
	else{
		peca_1 = 2;
	}
	var peca_2;
	if(document.getElementById(controle).className.indexOf("peca_b")>-1){
		peca_2 = 1;
	}
	else{
		peca_2 = 2;
	}
	if(peca_1 != peca_2){
		if(document.getElementById(controle).className.indexOf("peao")>-1){
			peca = "peao";
		}
		else if(document.getElementById(controle).className.indexOf("torre")>-1){
			peca = "torre";
		}
		else if(document.getElementById(controle).className.indexOf("rainha")>-1){
			peca = "rainha";
		}
		else if(document.getElementById(controle).className.indexOf("cavalo")>-1){
			peca = "cavalo";
		}
		else if(document.getElementById(controle).className.indexOf("bispo")>-1){
			peca = "bispo";
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
			document.getElementById(controle).className += " acesso";
			if(peca_2 == 1){
				document.getElementById(controle).className += " "+peca+"_b_3";
			}
			else{
				document.getElementById(controle).className += " "+peca+"_p_3";
			}
			document.getElementById(controle).removeAttribute("onclick");
			document.getElementById(controle).setAttribute("onclick", "javascript:move(this)");
		}
		else{
			document.getElementById(controle).className = "";
			if(peca_2 == 1){
				document.getElementById(controle).className = "peca_b";
			}
			else{
				document.getElementById(controle).className = "peca_p";
			}
			document.getElementById(controle).className += " acesso";
			if(peca_2 == 1){
				document.getElementById(controle).className += " "+peca+"_b_3";
			}
			else{
				document.getElementById(controle).className += " "+peca+"_p_3";
			}
			document.getElementById(controle).removeAttribute("onclick");
			document.getElementById(controle).setAttribute("onclick", "javascript:move(this)");
		}
		document.getElementById("selecionado").value = "1";
		document.getElementById("selecionado_mover").value = myId;
		document.getElementById("peca").value = "torre";
	}
}

function move_torres(peca,controle){
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

function move_torre(casa){
	if (document.getElementById(casa.id).className.indexOf('acesso') > -1){
		var myId = parseFloat(casa.id);
		var sel = parseFloat(document.getElementById("selecionado_mover").value);
		var peca;
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
				document.getElementById(casa.id).className += " torre_b_2";
			}
			else{
				document.getElementById(casa.id).className += " torre_p_2";
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
				document.getElementById(casa.id).className += " torre_b_1";
			}
			else{
				document.getElementById(casa.id).className += " torre_p_1";
			}
		}
		if(document.getElementById(sel).className.indexOf("preto")>-1){
			document.getElementById(sel).className = "";
			document.getElementById(sel).className = "preto";
		}
		else{
			document.getElementById(sel).className = "";
		}
		var controle = sel-8;
		while(controle>0){
			if(document.getElementById(controle).className.indexOf("acesso")>-1){
				if(document.getElementById(controle).className.indexOf("peca")>-1){
					move_torres(peca,controle);
					controle = -1;
				}
				else{
					if(document.getElementById(controle).className.indexOf("preto")>-1){
						document.getElementById(controle).className = "";
						document.getElementById(controle).className += " preto";
					}
					else{
						document.getElementById(controle).className = "";
					}
					controle= controle - 8;
				}
			}
			else{
				controle = controle - 8;
			}
		}
		controle = sel+8;
		while(controle<64){
			if(document.getElementById(controle).className.indexOf("acesso")>-1){
				if(document.getElementById(controle).className.indexOf("peca")>-1){
					move_torres(peca,controle);
					controle = 65;
				}
				else{
					if(document.getElementById(controle).className.indexOf("preto")>-1){
						document.getElementById(controle).className = "";
						document.getElementById(controle).className += " preto";
					}
					else{
						document.getElementById(controle).className = "";
					}
					controle = controle + 8;
				}
			}
			else{
				controle = controle + 8;
			}
		}
		controle = sel+1;
		while((controle%8)!=1){
			if(document.getElementById(controle).className.indexOf("acesso")>-1){
				if(document.getElementById(controle).className.indexOf("peca")>-1){
					move_torres(peca,controle);
					controle = 9;
				}
				else{
					if(document.getElementById(controle).className.indexOf("preto")>-1){
						document.getElementById(controle).className = "";
						document.getElementById(controle).className += " preto";
					}
					else{
						document.getElementById(controle).className = "";
					}
					controle = controle + 1;
				}
			}
			else{
				controle = controle + 1;
			}
		}
		controle = sel-1;
		while((controle%8)!=0){
			if(document.getElementById(controle).className.indexOf("acesso")>-1){
				if(document.getElementById(controle).className.indexOf("peca")>-1){
					move_torres(peca,controle);
					controle = 8;
				}
				else{
					if(document.getElementById(controle).className.indexOf("preto")>-1){
						document.getElementById(controle).className = "";
						document.getElementById(controle).className += " preto";
					}
					else{
						document.getElementById(controle).className = "";
					}
					controle= controle - 1;
				}
			}
			else{
				controle= controle - 1;
			}
		}
		document.getElementById("selecionado").value = "0";
		document.getElementById("selecionado_mover").value = 0;
		document.getElementById("peca").value = "";
		document.getElementById(casa.id).removeAttribute("onclick");
		document.getElementById(casa.id).setAttribute("onclick", "javascript:casas_torre(this)");
		document.getElementById(sel).removeAttribute("onclick");
		document.getElementById(sel).setAttribute("onclick", "javascript:move(this)");
	}
}
function casas_peao(casa){
	var sel = document.getElementById("selecionado").value;
	if(sel=="0"||sel==0){
		var myId = parseFloat(casa.id);
		if ((document.getElementById(myId).className.indexOf('peao_p_1') > -1)||(document.getElementById(myId).className.indexOf('peao_p_2') > -1))
		{
			if(myId>8&&myId<17){
				var casas = [myId + 8,myId + 16];
				if ((document.getElementById(casas[0]).className.indexOf('peca_b') > -1)
					||(document.getElementById(casas[0]).className.indexOf('peca_p') > -1))
				{
				}
				else
				{
					document.getElementById(casas[0]).className += " acesso";
					document.getElementById("selecionado").value = 1;
					document.getElementById("selecionado_mover").value = myId;
					document.getElementById("peca").value = "peao";
					if ((document.getElementById(casas[1]).className.indexOf('peca_b') > -1)
						||(document.getElementById(casas[1]).className.indexOf('peca_p') > -1))
					{
					}
					else
					{
						document.getElementById(casas[1]).className += " acesso";
						document.getElementById("selecionado").value = 1;
						document.getElementById("selecionado_mover").value = myId;
						document.getElementById("peca").value = "peao";
					}
				}
			}
			else{
				var casas = myId + 8;
				if ((document.getElementById(casas).className.indexOf('peca_b') > -1)
					||(document.getElementById(casas).className.indexOf('peca_p') > -1))
				{
				}
				else
				{
					document.getElementById(casas).className += " acesso";
					document.getElementById("selecionado").value = "1";
					document.getElementById("selecionado_mover").value = myId;
					document.getElementById("peca").value = "peao";
				}
			}
			if((myId%8)==1){
				casa_lado(myId,9,"b");
			}
			else if((myId%8)==0){
				casa_lado(myId,7,"b");
			}
			else{
				casa_lado(myId,9,"b");
				casa_lado(myId,7,"b");
			}
		}
		else{
			if(myId>48&&myId<57){
				var casas = [myId - 8,myId - 16];
				if ((document.getElementById(casas[0]).className.indexOf('peca_b') > -1)
					||(document.getElementById(casas[0]).className.indexOf('peca_p') > -1))
				{
				}
				else
				{
					document.getElementById(casas[0]).className += " acesso";
					document.getElementById("selecionado").value = 1;
					document.getElementById("selecionado_mover").value = myId;
					document.getElementById("peca").value = "peao";
					
					if ((document.getElementById(casas[1]).className.indexOf('peca_b') > -1)
						||(document.getElementById(casas[1]).className.indexOf('peca_p') > -1))
					{
					}
					else
					{
						document.getElementById(casas[1]).className += " acesso";
						document.getElementById("selecionado").value = 1;
						document.getElementById("selecionado_mover").value = myId;
						document.getElementById("peca").value = "peao";
					}
				}
			}
			else{
				var casas = myId - 8;
				if ((document.getElementById(casas).className.indexOf('peca_b') > -1)
					||(document.getElementById(casas).className.indexOf('peca_p') > -1))
				{
				}
				else
				{
					document.getElementById(casas).className += " acesso";
					document.getElementById("selecionado").value = "1";
					document.getElementById("selecionado_mover").value = myId;
					document.getElementById("peca").value = "peao";
				}
			}
			if((myId%8)==1){
				casa_lado(myId,-7,"p");
			}
			else if((myId%8)==0){
				casa_lado(myId,-9,"p");
			}
			else{
				casa_lado(myId,-9,"p");
				casa_lado(myId,-7,"p");
			}
		}
	}
}

function casa_lado(myId,quant,cor){
	if (document.getElementById(myId+quant).className.indexOf('peca_'+cor) > -1){
		var imagem; 	
		var b_ou_p=0;
		if (document.getElementById(myId+quant).className.indexOf('peao') > -1){
			imagem = " peao_"+cor+"_3";		
		}
		else if (document.getElementById(myId+quant).className.indexOf('cavalo') > -1){
			imagem = " cavalo_"+cor+"_3";
		}
		else if (document.getElementById(myId+quant).className.indexOf('torre') > -1){
			imagem = " torre_"+cor+"_3";
		}
		else if (document.getElementById(myId+quant).className.indexOf('bispo') > -1){
			imagem = " bispo_"+cor+"_3";		
		}
		else if (document.getElementById(myId+quant).className.indexOf('rainha') > -1){
			imagem = " rainha_"+cor+"_3";			
		}
		if (document.getElementById(myId+quant).className.indexOf('preto') > -1){
			b_ou_p = 1;
		}
		document.getElementById(myId+quant).className = "";
		document.getElementById(myId+quant).className = "peca_"+cor;
		if(b_ou_p==1){
			document.getElementById(myId+quant).className += " preto";
		}
		document.getElementById(myId+quant).className += " acesso";
		document.getElementById(myId+quant).className += imagem;
		document.getElementById(myId+quant).removeAttribute("onclick");
		document.getElementById(myId+quant).setAttribute("onclick", "javascript:move(this)");
		document.getElementById("selecionado").value = "1";
		document.getElementById("selecionado_mover").value = myId;
		document.getElementById("peca").value = "peao";
	}
}

function move(casa){
	if(document.getElementById("peca").value == "peao"){
		move_peao(casa);
	}
	else if(document.getElementById("peca").value == "torre"){
		move_torre(casa);
	}
	else if(document.getElementById("peca").value == "bispo"){
		move_bispo(casa);
	}
	else if(document.getElementById("peca").value == "rainha"){
		move_rainha(casa);
	}
	else if(document.getElementById("peca").value == "cavalo"){
		move_cavalo(casa);
	}
}

function move_peao(casa){
	/*somente vai mover para casas acesas, ou seja, para casas que sao opções para a casa selecionada*/
	if (document.getElementById(casa.id).className.indexOf('acesso') > -1){
		var peca;
		var casa_sel = parseFloat(document.getElementById("selecionado_mover").value);
		/*Verifica se a casa selecionada para mover eh uma peca*/
		if (document.getElementById(casa.id).className.indexOf('peca') > -1){
			if ((document.getElementById(casa_sel).className.indexOf('peao_p_1') > -1)||(document.getElementById(casa_sel).className.indexOf('peao_p_2') > -1)){
				if (document.getElementById(casa.id).className.indexOf('preto') > -1){
					document.getElementById(casa.id).className = "";
					document.getElementById(casa.id).className = "peca_p";
					document.getElementById(casa.id).className += " preto";
					document.getElementById(casa.id).className += " peao_p_2";
					document.getElementById(casa_sel).className = "";
					document.getElementById(casa_sel).className += " preto";
					if(document.getElementById(casa_sel+8).className.indexOf('acesso') > -1){
						document.getElementById(casa_sel+8).className = "";
					}
					if(casa_sel+8<57){
						if(document.getElementById(casa_sel+16).className.indexOf('acesso') > -1){
							document.getElementById(casa_sel+16).className = "";
							document.getElementById(casa_sel+16).className += " preto";
						}
					}
					if(document.getElementById(casa_sel+7).className.indexOf('acesso') > -1){
						if (document.getElementById(casa_sel+7).className.indexOf('peao') > -1){
							peca = "peao";
						}
						else if(document.getElementById(casa_sel+7).className.indexOf('torre') > -1){
							peca = "torre";
						}
						else if(document.getElementById(casa_sel+7).className.indexOf('cavalo') > -1){
							peca = "cavalo";
						}
						else if(document.getElementById(casa_sel+7).className.indexOf('bispo') > -1){
							peca = "bispo";
						}
						else if(document.getElementById(casa_sel+7).className.indexOf('rainha') > -1){
							peca = "rainha";
						}
						document.getElementById(casa_sel+7).className = "";
						document.getElementById(casa_sel+7).className = "peca_b";
						document.getElementById(casa_sel+7).className += " preto";
						document.getElementById(casa_sel+7).className += " "+peca+"_b_2";
						document.getElementById(casa_sel+7).removeAttribute("onclick");
						document.getElementById(casa_sel+7).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
					}
					if(document.getElementById(casa_sel+9).className.indexOf('acesso') > -1){
						if (document.getElementById(casa_sel+9).className.indexOf('peao') > -1){
							peca = "peao";
						}
						else if(document.getElementById(casa_sel+9).className.indexOf('torre') > -1){
							peca = "torre";
						}
						else if(document.getElementById(casa_sel+9).className.indexOf('cavalo') > -1){
							peca = "cavalo";
						}
						else if(document.getElementById(casa_sel+9).className.indexOf('bispo') > -1){
							peca = "bispo";
						}
						else if(document.getElementById(casa_sel+9).className.indexOf('rainha') > -1){
							peca = "rainha";
						}
						document.getElementById(casa_sel+9).className = "";
						document.getElementById(casa_sel+9).className = "peca_b";
						document.getElementById(casa_sel+9).className += " preto";
						document.getElementById(casa_sel+9).className += " "+peca+"_b_2";
						document.getElementById(casa_sel+9).removeAttribute("onclick");
						document.getElementById(casa_sel+9).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
					}
					
				}
				else{
					document.getElementById(casa.id).className = "";
					document.getElementById(casa.id).className = "peca_p";
					document.getElementById(casa.id).className += " peao_p_1";
					document.getElementById(casa_sel).className = "";
					if(document.getElementById(casa_sel+8).className.indexOf('acesso') > -1){
						document.getElementById(casa_sel+8).className = "";
						document.getElementById(casa_sel+8).className += " preto";
					}
					if(casa_sel+8<57){
						if(document.getElementById(casa_sel+16).className.indexOf('acesso') > -1){
							document.getElementById(casa_sel+16).className = "";
						}
					}
					if(document.getElementById(casa_sel+7).className.indexOf('acesso') > -1){
						if (document.getElementById(casa_sel+7).className.indexOf('peao') > -1){
							peca = "peao";
						}
						else if(document.getElementById(casa_sel+7).className.indexOf('torre') > -1){
							peca = "torre";
						}
						else if(document.getElementById(casa_sel+7).className.indexOf('cavalo') > -1){
							peca = "cavalo";
						}
						else if(document.getElementById(casa_sel+7).className.indexOf('bispo') > -1){
							peca = "bispo";
						}
						else if(document.getElementById(casa_sel+7).className.indexOf('rainha') > -1){
							peca = "rainha";
						}
						document.getElementById(casa_sel+7).className = "";
						document.getElementById(casa_sel+7).className = "peca_b";
						document.getElementById(casa_sel+7).className += " "+peca+"_b_1";
						document.getElementById(casa_sel+7).removeAttribute("onclick");
						document.getElementById(casa_sel+7).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
					}
					if(casa_sel+9<65){
						if(document.getElementById(casa_sel+9).className.indexOf('acesso') > -1){
							if (document.getElementById(casa_sel+9).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel+9).className = "";
							document.getElementById(casa_sel+9).className = "peca_b";
							document.getElementById(casa_sel+9).className += " "+peca+"_b_1";
							document.getElementById(casa_sel+9).removeAttribute("onclick");
							document.getElementById(casa_sel+9).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
					}
				}
			}
			else{
				if (document.getElementById(casa.id).className.indexOf('preto') > -1){
					document.getElementById(casa.id).className = "";
					document.getElementById(casa.id).className = "peca_b";
					document.getElementById(casa.id).className += " preto";
					document.getElementById(casa.id).className += " peao_b_2";
					document.getElementById(casa_sel).className = "";
					document.getElementById(casa_sel).className += " preto";
					if(document.getElementById(casa_sel-8).className.indexOf('acesso') > -1){
						document.getElementById(casa_sel-8).className = "";
					}
					if(casa_sel-8>8){
						if(document.getElementById(casa_sel-16).className.indexOf('acesso') > -1){
							document.getElementById(casa_sel-16).className = "";
							document.getElementById(casa_sel-16).className += " preto";
						}
					}
					if(document.getElementById(casa_sel-7).className.indexOf('acesso') > -1){
						if (document.getElementById(casa_sel-7).className.indexOf('peao') > -1){
							peca = "peao";
						}
						else if(document.getElementById(casa_sel-7).className.indexOf('torre') > -1){
							peca = "torre";
						}
						else if(document.getElementById(casa_sel-7).className.indexOf('cavalo') > -1){
							peca = "cavalo";
						}
						else if(document.getElementById(casa_sel-7).className.indexOf('bispo') > -1){
							peca = "bispo";
						}
						else if(document.getElementById(casa_sel-7).className.indexOf('rainha') > -1){
							peca = "rainha";
						}
						document.getElementById(casa_sel-7).className = "";
						document.getElementById(casa_sel-7).className = "peca_p";
						document.getElementById(casa_sel-7).className += " preto";
						document.getElementById(casa_sel-7).className += " "+peca+"_p_2";
						document.getElementById(casa_sel-7).removeAttribute("onclick");
						document.getElementById(casa_sel-7).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
					}
					if(document.getElementById(casa_sel-9).className.indexOf('acesso') > -1){
						if (document.getElementById(casa_sel-9).className.indexOf('peao') > -1){
							peca = "peao";
						}
						else if(document.getElementById(casa_sel-9).className.indexOf('torre') > -1){
							peca = "torre";
						}
						else if(document.getElementById(casa_sel-9).className.indexOf('cavalo') > -1){
							peca = "cavalo";
						}
						else if(document.getElementById(casa_sel-9).className.indexOf('bispo') > -1){
							peca = "bispo";
						}
						else if(document.getElementById(casa_sel-9).className.indexOf('rainha') > -1){
							peca = "rainha";
						}
						document.getElementById(casa_sel-9).className = "";
						document.getElementById(casa_sel-9).className = "peca_p";
						document.getElementById(casa_sel-9).className += " preto";
						document.getElementById(casa_sel-9).className += " "+peca+"_p_2";
						document.getElementById(casa_sel-9).removeAttribute("onclick");
						document.getElementById(casa_sel-9).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
					}
					
				}
				else{
					document.getElementById(casa.id).className = "";
					document.getElementById(casa.id).className = "peca_b";
					document.getElementById(casa.id).className += " peao_b_1";
					document.getElementById(casa_sel).className = "";
					if(document.getElementById(casa_sel-8).className.indexOf('acesso') > -1){
						document.getElementById(casa_sel-8).className = "";
						document.getElementById(casa_sel-8).className += " preto";
					}
					if(casa_sel-8>8){
						if(document.getElementById(casa_sel-16).className.indexOf('acesso') > -1){
							document.getElementById(casa_sel-16).className = "";
						}
					}
					if(document.getElementById(casa_sel-7).className.indexOf('acesso') > -1){
						if (document.getElementById(casa_sel-7).className.indexOf('peao') > -1){
							peca = "peao";
						}
						else if(document.getElementById(casa_sel-7).className.indexOf('torre') > -1){
							peca = "torre";
						}
						else if(document.getElementById(casa_sel-7).className.indexOf('cavalo') > -1){
							peca = "cavalo";
						}
						else if(document.getElementById(casa_sel-7).className.indexOf('bispo') > -1){
							peca = "bispo";
						}
						else if(document.getElementById(casa_sel-7).className.indexOf('rainha') > -1){
							peca = "rainha";
						}
						document.getElementById(casa_sel-7).className = "";
						document.getElementById(casa_sel-7).className = "peca_p";
						document.getElementById(casa_sel-7).className += " "+peca+"_p_1";
						document.getElementById(casa_sel-7).removeAttribute("onclick");
						document.getElementById(casa_sel-7).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
					}
					if(casa_sel-9>0){
						if(document.getElementById(casa_sel-9).className.indexOf('acesso') > -1){
							if (document.getElementById(casa_sel-9).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel-9).className = "";
							document.getElementById(casa_sel-9).className = "peca_p";
							document.getElementById(casa_sel-9).className += " "+peca+"_p_1";
							document.getElementById(casa_sel-9).removeAttribute("onclick");
							document.getElementById(casa_sel-9).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
					}
				}
			}
		}
		else{
			var casa_a_frente = parseInt(casa.id)+8;
			/*Verifica se a casa escolhida para movimento eh preta ou branca*/
			if ((document.getElementById(casa_sel).className.indexOf('peao_p_1') > -1)||(document.getElementById(casa_sel).className.indexOf('peao_p_2') > -1)){
				/*Verifica se a casa selecionada para mover eh uma casa preta ou branca*/
				if (document.getElementById(casa.id).className.indexOf('preto') > -1){
					document.getElementById(casa.id).className = "";
					document.getElementById(casa.id).className = "peca_p";
					document.getElementById(casa.id).className += " preto";
					document.getElementById(casa.id).className += " peao_p_2";
					/*Verifica se a casa selecionada é preta*/
					if (document.getElementById(casa_sel).className.indexOf('preto') > -1){
						document.getElementById(casa_sel).className = "";
						document.getElementById(casa_sel).className = "preto";
					}
					else{
						document.getElementById(casa_sel).className = "";
					}
					/*Verifica se a casa anterior a casa selecionada esta acesa para tirar a classe acesso*/
					if (document.getElementById(casa.id-8).className.indexOf('acesso') > -1){
						document.getElementById(casa.id-8).className = "";
					}
					/*Verifica se a casa a frente a casa selecionada esta acesa para tirar a classe acesso*/
					if(casa_a_frente<57){
						if (document.getElementById(casa_a_frente).className.indexOf('acesso') > -1){
							document.getElementById(casa_a_frente).className = "";
						}
					}
					/*Verificação de peças acesa, verifica se a casa da peca selecionada é preta*/
					if((document.getElementById(casa_sel).className.indexOf('preto') > -1)){
						/*Verifica se a casa a frente e a esquerda esta acesa*/
						if((document.getElementById(casa_sel+7).className.indexOf('acesso') > -1)){
							/*Verifica a peça da casa acesa*/
							if (document.getElementById(casa_sel+7).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel+7).className = "";
							document.getElementById(casa_sel+7).className = "peca_b";
							document.getElementById(casa_sel+7).className += " preto";
							document.getElementById(casa_sel+7).className += " "+peca+"_b_2";
							document.getElementById(casa_sel+7).removeAttribute("onclick");
							document.getElementById(casa_sel+7).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
						if((document.getElementById(casa_sel+9).className.indexOf('acesso') > -1)){
							if (document.getElementById(casa_sel+9).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel+9).className = "";
							document.getElementById(casa_sel+9).className = "peca_b";
							document.getElementById(casa_sel+9).className += " preto";
							document.getElementById(casa_sel+9).className += " "+peca+"_b_2";
							document.getElementById(casa_sel+9).removeAttribute("onclick");
							document.getElementById(casa_sel+9).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
					}
					else{
						if((document.getElementById(casa_sel+7).className.indexOf('acesso') > -1)){
							if (document.getElementById(casa_sel+7).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel+7).className = "";
							document.getElementById(casa_sel+7).className = "peca_b";
							document.getElementById(casa_sel+7).className += " "+peca+"_b_1";
							document.getElementById(casa_sel+7).removeAttribute("onclick");
							document.getElementById(casa_sel+7).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
						if((document.getElementById(casa_sel+9).className.indexOf('acesso') > -1)){
							if (document.getElementById(casa_sel+9).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel+9).className = "";
							document.getElementById(casa_sel+9).className = "peca_b";
							document.getElementById(casa_sel+9).className += " "+peca+"_b_1";
							document.getElementById(casa_sel+9).removeAttribute("onclick");
							document.getElementById(casa_sel+9).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
					}
				}
				else{
					document.getElementById(casa.id).className = "";
					document.getElementById(casa.id).className = "peca_p";
					document.getElementById(casa.id).className += " peao_p_1";
					if (document.getElementById(casa_sel).className.indexOf('preto') > -1){
						document.getElementById(casa_sel).className = "";
						document.getElementById(casa_sel).className = "preto";
					}
					else{
						document.getElementById(casa_sel).className = "";
					}
					if(casa.id>8){
						if (document.getElementById(casa.id-8).className.indexOf('acesso') > -1){
							document.getElementById(casa.id-8).className = "";
							document.getElementById(casa.id-8).className = "preto";
						}
					}
					if (document.getElementById(casa_a_frente).className.indexOf('acesso') > -1){
						document.getElementById(casa_a_frente).className = "";
						document.getElementById(casa_a_frente).className = "preto";
					}
					if((document.getElementById(casa_sel).className.indexOf('preto') > -1)){
						if((document.getElementById(casa_sel+7).className.indexOf('acesso') > -1)){
							if (document.getElementById(casa_sel+7).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel+7).className = "";
							document.getElementById(casa_sel+7).className = "peca_b";
							document.getElementById(casa_sel+7).className += " preto";
							document.getElementById(casa_sel+7).className += " "+peca+"_b_2";
							document.getElementById(casa_sel+7).removeAttribute("onclick");
							document.getElementById(casa_sel+7).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
						if((document.getElementById(casa_sel+9).className.indexOf('acesso') > -1)){
							if (document.getElementById(casa_sel+9).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel+9).className = "";
							document.getElementById(casa_sel+9).className = "peca_b";
							document.getElementById(casa_sel+9).className += " preto";
							document.getElementById(casa_sel+9).className += " "+peca+"_b_2";
							document.getElementById(casa_sel+9).removeAttribute("onclick");
							document.getElementById(casa_sel+9).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
					}
					else{
						if((document.getElementById(casa_sel+7).className.indexOf('acesso') > -1)){
							if (document.getElementById(casa_sel+7).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel+7).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel+7).className = "";
							document.getElementById(casa_sel+7).className = "peca_b";
							document.getElementById(casa_sel+7).className += " "+peca+"_b_1";
							document.getElementById(casa_sel+7).removeAttribute("onclick");
							document.getElementById(casa_sel+7).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
						if((document.getElementById(casa_sel+9).className.indexOf('acesso') > -1)){
							if (document.getElementById(casa_sel+9).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel+9).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel+9).className = "";
							document.getElementById(casa_sel+9).className = "peca_b";
							document.getElementById(casa_sel+9).className += " "+peca+"_b_1";
							document.getElementById(casa_sel+9).removeAttribute("onclick");
							document.getElementById(casa_sel+9).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
					}
				}
			}
			else{
				if (document.getElementById(casa.id).className.indexOf('preto') > -1){
					document.getElementById(casa.id).className = "";
					document.getElementById(casa.id).className = "peca_b";
					document.getElementById(casa.id).className += " preto";
					document.getElementById(casa.id).className += " peao_b_2";
					if (document.getElementById(casa_sel).className.indexOf('preto') > -1){
						document.getElementById(casa_sel).className = "";
						document.getElementById(casa_sel).className = "preto";
					}
					else{
						document.getElementById(casa_sel).className = "";
					}
					if (document.getElementById(casa.id-8).className.indexOf('acesso') > -1){
						document.getElementById(casa.id-8).className = "";
					}
					if (document.getElementById(casa_a_frente).className.indexOf('acesso') > -1){
						document.getElementById(casa_a_frente).className = "";
					}
					if((document.getElementById(casa_sel).className.indexOf('preto') > -1)){
						if((document.getElementById(casa_sel-7).className.indexOf('acesso') > -1)){
							if (document.getElementById(casa_sel-7).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel-7).className = "";
							document.getElementById(casa_sel-7).className = "peca_p";
							document.getElementById(casa_sel-7).className += " preto";
							document.getElementById(casa_sel-7).className += " "+peca+"_p_2";
							document.getElementById(casa_sel-7).removeAttribute("onclick");
							document.getElementById(casa_sel-7).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
						if((document.getElementById(casa_sel-9).className.indexOf('acesso') > -1)){
							if (document.getElementById(casa_sel-9).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel-9).className = "";
							document.getElementById(casa_sel-9).className = "peca_p";
							document.getElementById(casa_sel-9).className += " preto";
							document.getElementById(casa_sel-9).className += " "+peca+"_p_2";
							document.getElementById(casa_sel-9).removeAttribute("onclick");
							document.getElementById(casa_sel-9).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
					}
					else{
						if((document.getElementById(casa_sel-7).className.indexOf('acesso') > -1)){
							if (document.getElementById(casa_sel-7).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel-7).className = "";
							document.getElementById(casa_sel-7).className = "peca_p";
							document.getElementById(casa_sel-7).className += " "+peca+"_p_1";
							document.getElementById(casa_sel-7).removeAttribute("onclick");
							document.getElementById(casa_sel-7).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
						if((document.getElementById(casa_sel-9).className.indexOf('acesso') > -1)){
							if (document.getElementById(casa_sel-9).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel-9).className = "";
							document.getElementById(casa_sel-9).className = "peca_p";
							document.getElementById(casa_sel-9).className += " "+peca+"_p_1";
							document.getElementById(casa_sel-9).removeAttribute("onclick");
							document.getElementById(casa_sel-9).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
					}
				}
				else{
					document.getElementById(casa.id).className = "";
					document.getElementById(casa.id).className = "peca_b";
					document.getElementById(casa.id).className += " peao_b_1";
					if (document.getElementById(casa_sel).className.indexOf('preto') > -1){
						document.getElementById(casa_sel).className = "";
						document.getElementById(casa_sel).className = "preto";
					}
					else{
						document.getElementById(casa_sel).className = "";
					}
					if (document.getElementById(casa.id-8).className.indexOf('acesso') > -1){
						document.getElementById(casa.id-8).className = "";
						document.getElementById(casa.id-8).className = "preto";
					}
					if (document.getElementById(casa_a_frente).className.indexOf('acesso') > -1){
						document.getElementById(casa_a_frente).className = "";
						document.getElementById(casa_a_frente).className = "preto";
					}
					if((document.getElementById(casa_sel).className.indexOf('preto') > -1)){
						if((document.getElementById(casa_sel-7).className.indexOf('acesso') > -1)){
							if (document.getElementById(casa_sel-7).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel-7).className = "";
							document.getElementById(casa_sel-7).className = "peca_p";
							document.getElementById(casa_sel-7).className += " preto";
							document.getElementById(casa_sel-7).className += " "+peca+"_p_2";
							document.getElementById(casa_sel-7).removeAttribute("onclick");
							document.getElementById(casa_sel-7).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
						if((document.getElementById(casa_sel-9).className.indexOf('acesso') > -1)){
							if (document.getElementById(casa_sel-9).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel-9).className = "";
							document.getElementById(casa_sel-9).className = "peca_p";
							document.getElementById(casa_sel-9).className += " preto";
							document.getElementById(casa_sel-9).className += " "+peca+"_p_2";
							document.getElementById(casa_sel-9).removeAttribute("onclick");
							document.getElementById(casa_sel-9).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
					}
					else{
						if((document.getElementById(casa_sel-7).className.indexOf('acesso') > -1)){
							if (document.getElementById(casa_sel-7).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel-7).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel-7).className = "";
							document.getElementById(casa_sel-7).className = "peca_p";
							document.getElementById(casa_sel-7).className += " "+peca+"_p_1";
							document.getElementById(casa_sel-7).removeAttribute("onclick");
							document.getElementById(casa_sel-7).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
						if((document.getElementById(casa_sel-9).className.indexOf('acesso') > -1)){
							if (document.getElementById(casa_sel-9).className.indexOf('peao') > -1){
								peca = "peao";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('torre') > -1){
								peca = "torre";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('cavalo') > -1){
								peca = "cavalo";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('bispo') > -1){
								peca = "bispo";
							}
							else if(document.getElementById(casa_sel-9).className.indexOf('rainha') > -1){
								peca = "rainha";
							}
							document.getElementById(casa_sel-9).className = "";
							document.getElementById(casa_sel-9).className = "peca_p";
							document.getElementById(casa_sel-9).className += " "+peca+"_p_1";
							document.getElementById(casa_sel-9).removeAttribute("onclick");
							document.getElementById(casa_sel-9).setAttribute("onclick", "javascript:casas_"+peca+"(this)");
						}
					}
				}
			}
		}
		document.getElementById(casa.id).removeAttribute("onclick");
		document.getElementById(casa.id).setAttribute("onclick", "javascript:casas_peao(this)");
		document.getElementById(casa_sel).removeAttribute("onclick");
		document.getElementById(casa_sel).setAttribute("onclick", "javascript:move(this)");
		document.getElementById("selecionado").value = "0";
		document.getElementById("selecionado_mover").value = 0;
		document.getElementById("peca").value = "";
		if(document.getElementById(casa.id).className.indexOf('peca_p') > -1){
			if(casa.id>56){
				troca_peao(casa.id);
			}
		}
		else if(document.getElementById(casa.id).className.indexOf('peca_b') > -1){
			if(casa.id<9){
				troca_peao(casa.id);
			}
		}
	}
}

function troca_peao(casa){
	var peca;
	do{
		peca = prompt("Por qual peça você deseja trocar esse peão?\n1-Rainha\n2-Torre\n3-Cavalo\n4-Bispo");
	}while((peca!=1)&&(peca!=2)&&(peca!=3)&&(peca!=4));
	if(peca==1){
		if(document.getElementById(casa).className.indexOf('peca_b') > -1){
			if(document.getElementById(casa).className.indexOf('preto') > -1){
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_b";
				document.getElementById(casa).className += " preto";
				document.getElementById(casa).className += " rainha_b_2";
			}
			else{
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_b";
				document.getElementById(casa).className += " rainha_b_1";
			}
		}
		else{
			if(document.getElementById(casa).className.indexOf('preto') > -1){
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_p";
				document.getElementById(casa).className += " preto";
				document.getElementById(casa).className += " rainha_p_2";
			}
			else{
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_p";
				document.getElementById(casa).className += " rainha_p_1";
			}
		}
		document.getElementById(casa).removeAttribute("onclick");
		document.getElementById(casa).setAttribute("onclick", "javascript:casas_rainha(this)");
	}
	if(peca==2){
		if(document.getElementById(casa).className.indexOf('peca_b') > -1){
			if(document.getElementById(casa).className.indexOf('preto') > -1){
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_b";
				document.getElementById(casa).className += " preto";
				document.getElementById(casa).className += " torre_b_2";
			}
			else{
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_b";
				document.getElementById(casa).className += " torre_b_1";
			}
		}
		else{
			if(document.getElementById(casa).className.indexOf('preto') > -1){
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_p";
				document.getElementById(casa).className += " preto";
				document.getElementById(casa).className += " torre_p_2";
			}
			else{
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_p";
				document.getElementById(casa).className += " torre_p_1";
			}
		}
		document.getElementById(casa).removeAttribute("onclick");
		document.getElementById(casa).setAttribute("onclick", "javascript:casas_torre(this)");
	}
	if(peca==3){
		if(document.getElementById(casa).className.indexOf('peca_b') > -1){
			if(document.getElementById(casa).className.indexOf('preto') > -1){
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_b";
				document.getElementById(casa).className += " preto";
				document.getElementById(casa).className += " cavalo_b_2";
			}
			else{
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_b";
				document.getElementById(casa).className += " cavalo_b_1";
			}
		}
		else{
			if(document.getElementById(casa).className.indexOf('preto') > -1){
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_p";
				document.getElementById(casa).className += " preto";
				document.getElementById(casa).className += " cavalo_p_2";
			}
			else{
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_p";
				document.getElementById(casa).className += " cavalo_p_1";
			}
		}
		document.getElementById(casa).removeAttribute("onclick");
		document.getElementById(casa).setAttribute("onclick", "javascript:casas_cavalo(this)");
	}
	if(peca==4){
		if(document.getElementById(casa).className.indexOf('peca_b') > -1){
			if(document.getElementById(casa).className.indexOf('preto') > -1){
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_b";
				document.getElementById(casa).className += " preto";
				document.getElementById(casa).className += " bispo_b_2";
			}
			else{
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_b";
				document.getElementById(casa).className += " bispo_b_1";
			}
		}
		else{
			if(document.getElementById(casa).className.indexOf('preto') > -1){
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_p";
				document.getElementById(casa).className += " preto";
				document.getElementById(casa).className += " bispo_p_2";
			}
			else{
				document.getElementById(casa).className = "";
				document.getElementById(casa).className = "peca_p";
				document.getElementById(casa).className += " bispo_p_1";
			}
		}
		document.getElementById(casa).removeAttribute("onclick");
		document.getElementById(casa).setAttribute("onclick", "javascript:casas_bispo(this)");
	}
}
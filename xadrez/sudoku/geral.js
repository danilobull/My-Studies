/********

Autor: Danilo Rangel Martins
Data: 14/09/2012
Versão: 1.0
Descrição: Gerador de jogos sudoku

*********/
//variavel de controle do contador de tempo
var tempo;

//função principal que faz a chamada da geração do jogo e de seu preenchimento
function gerador_sudoku(dificuldade){
	clearTimeout(tempo);
	document.getElementById("carrega").style.display = "block";
	document.getElementById("solucao").value = "";
	var qnt = 0;
	var qnti = 0;
	var resultado = new Array();
	for(var d=0; d<9; d++){
		resultado[d] = new Array();
	}
	var aux;
	for(var x=0; x<9; x++){
		for(var y=0; y<9; y++){
			//controle para gerar jogo
			do{
				aux = gera_numero(x,y,resultado);
				qnt++;
				if(qnt>50){
					for(var b=0; b<9; b++){
						resultado[x][b]=0;
					}
					y=0;
					qnt=0;
					qnti ++;
				}
				if(qnti>1){
					if((x+1)%3==2){
						for(var f=0; f<9; f++){
							resultado[x-1][f]=0;
						}
						x = x - 1;
					}
					else if((x+1)%3==0){
						for(var f=0; f<9; f++){
							resultado[x-1][f]=0;
							resultado[x-2][f]=0;
						}
						x = x - 2;
					}
					qnti = 0;
				}
			}while(aux==0);
			qnt=0;
			resultado[x][y]=aux;
		}
		qnt=0;
		qnti = 0;
	}
	//abaixo preenche a tela com a quantidade de dicas conforme o nivel de dificuldade escolhido
	if(dificuldade==1){
		preenche(resultado,40)
	}
	else if(dificuldade==2){
		preenche(resultado,33)
	}
	else if(dificuldade==3){
		preenche(resultado,25)
	}
	for(var e=0; e<9; e++){
		for(var g=0; g<9; g++){
			document.getElementById("solucao").value += resultado[e][g];
		}
	}
	document.getElementById("carrega").style.display = "none";
	document.getElementById("tempo").style.display = "block";
	document.getElementById("clock1").innerHTML = "";
	getSecs(0,0,-1, "clock1");
}

//função responsável pelo preenchimento da dicas na tela
function preenche(resultado,dica){
	var achou = 0;
	var aux;
	var aux_b = 0;
	var lin;
	var col;
	//faz a escolha aleatória das casas preenchidas ate gerar jogo solucionavel
	do{
		var preenchidos = new Array();
		var matriz_teste = new Array();
		var cont = 0;
		for(var d=0; d<9; d++){
			matriz_teste[d] = new Array();
		}
		for(var w=0; w<dica; w++){
			aux = 1+(Math.round(Math.random()*80));
			for(var i=0; i<cont; i++){
				if(aux == preenchidos[i]){
					achou = 1;
				}
			}
			if(achou==0){
				preenchidos[cont]=aux;
				cont++;
			}
			else{
				w--;
			}
			achou=0;
		}
		for(var f=1; f<82; f++){
			for(var e=0; e<dica; e++){
				if(f==preenchidos[e]){
					achou = 1;
				}
			}
			lin = parseInt((f-1)/9);
			col = (f-1)%9;
			if(achou == 1){
				matriz_teste[lin][col] = resultado[lin][col];
			}
			else{
				matriz_teste[lin][col] = 0;
			}
			achou = 0;
		}
		aux_b = jogo_valido(matriz_teste,dica);
	}while(aux_b==0);
	//preenche a tela com as posições geradas de dicas
	for(var v=1; v<82; v++){
		for(var t=0; t<dica; t++){
			if(v==preenchidos[t]){
				achou = 1;
			}
		}
		lin = parseInt((v-1)/9);
		col = (v-1)%9;
		if(achou==1){
			document.getElementById(v).innerHTML = "<input type='text' class='inputs' readonly='readonly' value='"+resultado[lin][col]+"'>";
		}
		else{
			document.getElementById(v).innerHTML = "<input type='text' class='inputs dica' onkeyup='javascript:verifica_num(this);' value=''>";
		}
		achou=0;
	}
}

//função que gera um número aleatório e verifica se o número gerado é válido na casa escolhida
function gera_numero(x,y,resultado){
	var aux = 1+(Math.round(Math.random()*8));
	var achou = 0;
	for(var m=x; m>-1; m--){
		if(aux == resultado[m][y]){
			return 0;
			achou=1;
		}
	}
	for(var n=y; n>-1; n--){
		if(aux == resultado[x][n]){
			return 0;
			achou=1;
		}
	}
	if((y+1)%3==1){
		if((x+1)%3==2){
			if((aux == resultado[x-1][y])||(aux == resultado[x-1][y+1])||(aux == resultado[x-1][y+2])){
				return 0;
				achou=1;
			}
		}
		else if ((x+1)%3==0){
			if((aux == resultado[x-1][y])||(aux == resultado[x-1][y+1])||(aux == resultado[x-1][y+2])||
				(aux == resultado[x-2][y])||(aux == resultado[x-2][y+1])||(aux == resultado[x-2][y+2])){
				return 0;
				achou=1;
			}
		}
	}
	else if ((y+1)%3==2){
		if((x+1)%3==1){
			if(aux == resultado[x][y-1]){
				return 0;
				achou=1;
			}
		}
		else if((x+1)%3==2){
			if((aux == resultado[x-1][y])||(aux == resultado[x-1][y+1])||(aux == resultado[x-1][y-1])||(aux == resultado[x][y-1])){
				return 0;
				achou=1;
			}
		}
		else if ((x+1)%3==0){
			if((aux == resultado[x-1][y])||(aux == resultado[x-1][y+1])||(aux == resultado[x-1][y-1])||
				(aux == resultado[x-2][y])||(aux == resultado[x-2][y+1])||(aux == resultado[x-2][y-1])||(aux == resultado[x][y-1])){
				return 0;
				achou=1;
			}
		}
	}
	else if ((y+1)%3==0){
		if((x+1)%3==1){
			if((aux == resultado[x][y-1])||(aux == resultado[x][y-2])){
				return 0;
				achou=1;
			}
		}
		else if((x+1)%3==2){
			if((aux == resultado[x-1][y])||(aux == resultado[x-1][y-1])||(aux == resultado[x-1][y-2])
				||(aux == resultado[x][y-1])||(aux == resultado[x][y-2])){
				return 0;
				achou=1;
			}
		}
		else if ((x+1)%3==0){
			if((aux == resultado[x-1][y])||(aux == resultado[x-1][y-1])||(aux == resultado[x-1][y-2])||
				(aux == resultado[x-2][y])||(aux == resultado[x-2][y-1])||(aux == resultado[x-2][y-2])
				||(aux == resultado[x][y-1])||(aux == resultado[x][y-2])){
				return 0;
				achou=1;
			}
		}
	}
	if(achou==0){
		return aux;
	}
	else{
		return 0;
	}
}

//função que verifica se o que foi digitado é um número de apenas um dígito
function verifica_num(casa){
	var valor = casa.value;
	if(valor.length>1){
		casa.value = valor.substring(0,1);
	}
	var digits="0123456789"; 
	var campo_temp;
	for (var i=0;i<casa.value.length;i++){  
	    campo_temp=casa.value.substring(i,i+1); 
	    if (digits.indexOf(campo_temp)==-1){  
	        casa.value = casa.value.substring(0,i);  
	    }  
	} 
	verifica_jogo();
}

//função que verifica se o jogador solucionou o jogo
function verifica_jogo(){
	var jogo = document.getElementById("solucao").value;
	var achou=0;
	for(var x=1; x<82; x++){
		if(document.getElementById(x).getElementsByTagName("input")[0].value != jogo.charAt(x-1)){
			achou = 1;
			break;
		}
	}
	if(achou==0){
		var tempo = document.getElementById("clock1").innerHTML;
		alert("Parabens você ganhou!\nSeu tempo: "+tempo);
		history.go(0);
	}
}

//função que faz o contador de tempo
function getSecs(sHors, sMins, sSecs, campo){
        sSecs++;
        
		if(sMins<=9){
			sMins = "0"+sMins;
		}
		if(sHors<=9){
			sHors = "0"+sHors;
		}
 
        if(sSecs==60){
			sSecs=0;
			sMins++;
			if(sMins<=9)sMins="0"+sMins;
		}
        if(sMins==60){
			sMins="0"+0;sHors++;
			if(sHors<=9)sHors="0"+sHors;
        }
        if(sSecs<=9)sSecs="0"+sSecs;
     
        document.getElementById(campo).innerHTML=sHors+":"+sMins+":"+sSecs;

    tempo = setTimeout("getSecs("+sHors+", "+sMins+","+sSecs+", '" +campo+ "')",1000);
        

}

//função que verifica se o jogo é solucionavel
function jogo_valido(matriz_teste,dica){
	var achou;
	var aux=0;
	var aux_b;
	for (var x=0; x<(81-dica); x++){
		for(var y=0; y<9; y++){
			for(var w=0; w<9; w++){
				if (matriz_teste[y][w]==0){
					for(var z=1; z<10; z++){
						achou = verifica_existencia(matriz_teste,y,w,z);
						if(achou==0){
							for(var t=y-1; t>-1; t--){
								achou = verifica_existencia(matriz_teste,t,w,z);
								if(achou==0){
									aux++;
								}
								achou=0;
							}
							for(var u=y+1; u<9; u++){
								achou = verifica_existencia(matriz_teste,u,w,z);
								if(achou==0){
									aux++;
								}
								achou=0;
							}
							if(aux==0){
								matriz_teste[y][w] = z;
							}
							else{
								aux=0;
								for(var t=w-1; t>-1; t--){
									achou = verifica_existencia(matriz_teste,y,t,z);
									if(achou==0){
										aux++;
									}
									achou=0;
								}
								for(var u=w+1; u<9; u++){
									achou = verifica_existencia(matriz_teste,y,u,z);
									if(achou==0){
										aux++;
									}
									achou=0;
								}
								if(aux==0){
									matriz_teste[y][w] = z;
								}
								else{
									achou = 0;
									if((w+1)%3==1){
										if((y+1)%3==1){
											achou = verifica_regiao(matriz_teste,z,y,y,y+1,y+1,y+1,y+2,y+2,y+2,w+1,w+2,w,w+1,w+2,w,w+1,w+2);
										}
										else if((y+1)%3==2){
											achou = verifica_regiao(matriz_teste,z,y,y,y+1,y+1,y+1,y-1,y-1,y-1,w+1,w+2,w,w+1,w+2,w,w+1,w+2);
										}
										else if ((y+1)%3==0){
											achou = verifica_regiao(matriz_teste,z,y,y,y-1,y-1,y-1,y-2,y-2,y-2,w+1,w+2,w,w+1,w+2,w,w+1,w+2);
										}
									}
									else if ((w+1)%3==2){
										if((y+1)%3==1){
											achou = verifica_regiao(matriz_teste,z,y,y,y+1,y+1,y+1,y+2,y+2,y+2,w+1,w-1,w,w+1,w-1,w,w+1,w-1);
										}
										else if((y+1)%3==2){
											achou = verifica_regiao(matriz_teste,z,y,y,y+1,y+1,y+1,y-1,y-1,y-1,w+1,w-1,w,w+1,w-1,w,w+1,w-1);
										}
										else if ((y+1)%3==0){
											achou = verifica_regiao(matriz_teste,z,y,y,y-1,y-1,y-1,y-2,y-2,y-2,w+1,w-1,w,w+1,w-1,w,w+1,w-1);
										}
									}
									else if ((w+1)%3==0){
										if((y+1)%3==1){
											achou = verifica_regiao(matriz_teste,z,y,y,y+1,y+1,y+1,y+2,y+2,y+2,w-1,w-2,w,w-1,w-2,w,w-1,w-2);
										}
										else if((y+1)%3==2){
											achou = verifica_regiao(matriz_teste,z,y,y,y+1,y+1,y+1,y-1,y-1,y-1,w-1,w-2,w,w-1,w-2,w,w-1,w-2);
										}
										else if ((y+1)%3==0){
											achou = verifica_regiao(matriz_teste,z,y,y,y-1,y-1,y-1,y-2,y-2,y-2,w-1,w-2,w,w-1,w-2,w,w-1,w-2);
										}
									}
									if(achou==0){
										matriz_teste[y][w] = z;
									}
								}
							}
						}
						achou = 0;
					}
					aux=0;
				}
			}
		}
	}
	achou = 0;
	for(var lin=0; lin<9; lin++){
		for(var col=0; col<9; col++){
			if(matriz_teste[lin][col]==0){
				achou = 1;
			}
		}
	}
	switch (achou){
		case 0: return 1;
				break;
		case 1: return 0;
				break;
	}
}

//função que verifica se o valor passado ,z, e na casa passada, é único na região
function verifica_regiao(matriz_teste,z,v1,v2,v3,v4,v5,v6,v7,v8,w1,w2,w3,w4,w5,w6,w7,w8){
	var achou;
	var aux=0;
	achou = verifica_existencia(matriz_teste,v1,w1,z);
	if(achou==0){
		aux++;
	}
	achou = verifica_existencia(matriz_teste,v2,w2,z);
	if(achou==0){
		aux++;
	}
	achou = verifica_existencia(matriz_teste,v3,w3,z);
	if(achou==0){
		aux++;
	}
	achou = verifica_existencia(matriz_teste,v4,w4,z);
	if(achou==0){
		aux++;
	}
	achou = verifica_existencia(matriz_teste,v5,w5,z);
	if(achou==0){
		aux++;
	}
	achou = verifica_existencia(matriz_teste,v6,w6,z);
	if(achou==0){
		aux++;
	}
	achou = verifica_existencia(matriz_teste,v7,w7,z);
	if(achou==0){
		aux++;
	}
	achou = verifica_existencia(matriz_teste,v8,w8,z);
	if(achou==0){
		aux++;
	}
	if(aux==0){
		return 0;
	}
	else{
		return 1;
	}
}

//função que verifica se determinado número pode pertencer a determinada casa ou não
function verifica_existencia(matriz_teste,y,w,z){
	if(matriz_teste[y][w]==0){
		var achou=0;
		for(var m=0; m<9; m++){
			if(z == matriz_teste[m][w]){
				achou=1;
			}
		}
		for(var n=0; n<9; n++){
			if(z == matriz_teste[y][n]){
				achou=1;
			}
		}
		if((w+1)%3==1){
			if((y+1)%3==1){
				if((z == matriz_teste[y+1][w+1])||(z == matriz_teste[y+1][w+2])||
					(z == matriz_teste[y+2][w+1])||(z == matriz_teste[y+2][w+2])){
						achou=1;
				}
			}
			else if((y+1)%3==2){
				if((z == matriz_teste[y-1][w+1])||(z == matriz_teste[y-1][w+2])||
					(z == matriz_teste[y+1][w+1])||(z == matriz_teste[y+1][w+2])){
						achou=1;
				}
			}
			else if ((y+1)%3==0){
				if((z == matriz_teste[y-1][w+1])||(z == matriz_teste[y-1][w+2])||
					(z == matriz_teste[y-2][w+1])||(z == matriz_teste[y-2][w+2])){
						achou=1;
				}
			}
		}
		else if ((w+1)%3==2){
			if((y+1)%3==1){
				if((z == matriz_teste[y+1][w-1])||(z == matriz_teste[y+1][w+1])||
					(z == matriz_teste[y+2][w-1])||(z == matriz_teste[y+2][w+1])){
						achou=1;
				}
			}
			else if((y+1)%3==2){
				if((z == matriz_teste[y-1][w-1])||(z == matriz_teste[y-1][w+1])||
					(z == matriz_teste[y+1][w-1])||(z == matriz_teste[y+1][w+1])){
						achou=1;
				}
			}
			else if ((y+1)%3==0){
				if((z == matriz_teste[y-1][w+1])||(z == matriz_teste[y-1][w-1])||
					(z == matriz_teste[y-2][w+1])||(z == matriz_teste[y-2][w-1])){
						achou=1;
				}
			}
		}
		else if ((w+1)%3==0){
			if((y+1)%3==1){
				if((z == matriz_teste[y+1][w-1])||(z == matriz_teste[y+1][w-2])||
					(z == matriz_teste[y+2][w-1])||(z == matriz_teste[y+2][w-2])){
						achou=1;
				}
			}
			else if((y+1)%3==2){
				if((z == matriz_teste[y-1][w-1])||(z == matriz_teste[y-1][w-2])||
					(z == matriz_teste[y+1][w-1])||(z == matriz_teste[y+1][w-2])){
						achou=1;
				}
			}
			else if ((y+1)%3==0){
				if((z == matriz_teste[y-1][w-1])||(z == matriz_teste[y-1][w-2])||
					(z == matriz_teste[y-2][w-1])||(z == matriz_teste[y-2][w-2])){
						achou=1;
				}
			}
		}
		if(achou==1){
			return 1;
		}
		else{
			return 0;
		}
	}
	else{
		return 1;
	}
}
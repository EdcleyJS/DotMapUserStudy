var arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],clicks=0,d1 = new Date(),stepper1,stepper2,stepper3,stepper4,d4,list,d2,diff,post_url,request_method,form_data,forms;
var novodataset,database,dataset,datasettaxi,databasetaxi;
var tempoinicial=new Date(),tempofinal,tempotutorial,duracaoPerguntas,duracaotutorial,duracao;
d3.json("./data/perguntas.json",function(error,data){
  novodataset=data;
});
d3.json("./data/dados.json",function(error,data){
  database=data;
  d3.json("./data/pe.json",function(error,dados){
    dataset=dados;
  });
});
d3.json("./data/pickup.json",function(error,data){
  databasetaxi=data;
  d3.json("./data/midtown.geojson",function(error,dados){
    datasettaxi=dados;
  });
  databasetaxi = Object.keys(databasetaxi).map(function(key) {
    return [databasetaxi[key]];
  });
});
$(document).ready(function () {
	arr=shuffle(arr);
	//PREENCHE TODAS AS PERGUNTAS.
	arr.forEach(function(d,i){
		switch(i) {
		  	case 0:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("21p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		  	case 1:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("22p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		  	case 2:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("23p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 3:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("24p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 4:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("25p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 5:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("26p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 6:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("27p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 7:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("28p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 8:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("29p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 9:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("30p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 10:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("31p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 11:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("32p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 12:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("33p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 13:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("34p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 14:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("35p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;	
		    case 15:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("36p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 16:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("37p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 17:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("38p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 18:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("39p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 19:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("40p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 20:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("41p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 21:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("42p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 22:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("43p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 23:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("44p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 24:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("45p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 25:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("46p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;		    		    		    		    	    		    
		  default:
		}
	});
	arr.forEach(function(d,i){
	    arr[i]=d+1;
	});
	//COLOCAR AS TABS DAS PERGUNTAS EM ORDEM ALEATÓRIA
	$('#pills-tab >li >a')[0].click();
	$('#pills-tab >li')[1].classList.add('disabled');
	// BLOCO PARA INICIAR OS STEPS DE CADA ETAPA DO SISTEMA 0 - TUTORIAL. 1- PROB. COM ALPHA. 2- PROB. COM INTERVALO. 3- PONTOS 4- MÉDIA ANIMADA. 
	stepper0 = new Stepper($('.bs-stepper')[0]);
	stepper3 = new Stepper($('.bs-stepper')[1]);
	//OCULTA A TELA INICIAL E EXIBE O TUTORIAL
	$('#iniciar').click(function(){
		if($('input[name ="inlineRadioOptions"]:checked').val()==undefined || $('input[name ="inlineRadioOptions"]:checked').val()=='No'){
			$('.alert').addClass("show");//alert('Você Precisa aceitar os termos para começar.');
		}else{
			$('.alert').removeClass("show");
	    	$('#header').css('display','none');
	    	$('#tutorial').css('display','');
	    	InicioDot();
			inicioDotTaxi();		
		}
    });
	// CONTA OS CLICKS PARA DEPOIS ENVIAR COM OS FORMULÁRIOS.
    $(document).on("click",function() {
        clicks+=1;
    });
    // REDUZ RESETA O NÚMERO DE CLICKS JÁ CONSIDERANDO O BOTÃO DE PASSAGEM (NEXT)
    $(".custom-control-input").click(function() {
    	clicks-=1;
    });
    // FUNÇÃO PARA GARANTIR QUE O VALOR ESCOLHIDO NO SLIDER SEJA COLOCADO NO INPUT CORRETO DO FORM.
    $(".ioRangerSlider").ionRangeSlider({
		min: 1,
        max: 5,
        skin: "big",
        grid: true,
        onChange: function (data) {
        	$('#'+data.input[0].id).value=data.input[0].value; 
        }
	});
    // ATUALIZA OS VALORES DO MAPA DE PROB COM ALPHA QUANDO O SLIDER MUDA NA ETAPA DE PERGUNTAS.
	$("#example_id").ionRangeSlider({
		min: 0,
        max: 300,
        skin: "big",
        grid: true,
        onChange: function (data) {
            alpha=data.from;
            inicio(dataset);
        }
	});
	// ATUALIZA OS VALORES DO MAPA DE PROB COM INTERVALO QUANDO O SLIDER MUDA NA ETAPA DE PERGUNTAS.
	$("#sliderrange2").ionRangeSlider({
		type: "double",
		min: 0,
        max: 300,
        from: 60,
        to: 100,
        drag_interval: true,
        skin: "big",
        grid: true,
        onChange: function (data) {
        	interOn=true;
            left=data.from;
            right=data.to;
            inicioRange(dataset);
            interOn=false;
        }
	});
	// ATUALIZA OS VALORES DO MAPA DE PROB COM ALPHA QUANDO O SLIDER MUDA NA ETAPA DO TUTORIAL.
	$("#Vis01Tuto").ionRangeSlider({
		min: 0,
        max: 300,
        skin: "big",
        grid: true,
        onChange: function (data) {
        	opcoes=[];
            alpha=data.from;
            Vis01TutorialFunction(dataset,false);
        }
	});
	// ATUALIZA OS VALORES DO MAPA DE PROB COM INTERVALO QUANDO O SLIDER MUDA NA ETAPA DO TUTORIAL.
	$("#Vis02Tuto").ionRangeSlider({
		type: "double",
		min: 0,
        max: 300,
        from: 60,
        to: 100,
        drag_interval: true,
        skin: "big",
        grid: true,
        onChange: function (data) {
        	opcoes=[];
            left=data.from;
            right=data.to;
            Vis02TutorialFunction(dataset,true);
        }
	});
	// PARA A ETAPA DE TUTORIAL CORRIGE O PROBLEMA DO TAMANHO DO MAPA POR CONTA DAS ANIMAÇÕES E INICIA OS MAPAS.
	$('.bs-stepper')[0].addEventListener('shown.bs-stepper', function (event) {
		if(event.detail.indexStep==3){
			mapVis03.invalidateSize();
		  	opcoes=[];
	        Vis03TutorialFunction(dataset);
    	}
	});
	// PARA A ETAPA DE PERGUNTAS CORRIGE O PROBLEMA DO TAMANHO DO MAPA POR CONTA DAS ANIMAÇÕES E INICIA OS MAPAS QUANDO UMA TAB MUDA.
	$("a[href='#pills-dotmap']").on('shown.bs.tab', function(e) {
		var id= $('#3Form > div.active > div > div > div > div>').siblings()[0].id;
	   	var base=id.substring(3,4);
		id=id.substring(0, 4);
		var p=findP(novodataset,id);
		p=p.highlights;
		p.forEach(function(d,i){
			opcoes.push(d);
		});
		opcoes=[];		
		if(base=='C'){
			$('#chuvaview').show();
			$('#taxiview').hide();
			mapDot.invalidateSize();
			inicioDotMap(dataset);
		}else if(base=='T'){
			$('#taxiview').show();
			$('#chuvaview').hide();
			mapTaxi.invalidateSize();
			inicioTaxi(datasettaxi);
		}
	});
	// VALIDA AS RESPOSTAS DOS FORMS, DESTACA AS ÁREAS PERGUNTADAS E SETA OS VALORES DE TEMPO E CLICK PARA CADA PERGUNTA.
	$(".btn-next-form").click(function() {
		if($(this).hasClass('tutorial')==false){
			var ent= $(this).parent().find('.form-group > div > div> div >').siblings()[0].name;
			var entid= $(this).parent().find('.form-group > div > div> div >').siblings()[0].id;
			if($('input[name='+ent+']:checked').val()==undefined && $('input[name='+ent+']').hasClass('custom-control-input')==true){
				$(this).parent().parent()[0].classList.add('was-validated');
			}else if($('input[name='+ent+']').val()==""&& $('input[name='+ent+']').hasClass('custom-control-input')==false){
				$(this).parent().parent()[0].classList.add('was-validated');
			}else if($('#'+entid).val()==undefined && $('#'+entid).children().length>0){
				$(this).parent().parent()[0].classList.add('was-validated');
			}else{   	
			   	stepper3.next();
			   	$(this).parent().parent().removeClass("was-validated");
			   	var id= $(this).parent().next().find('div >div > div>').siblings()[0].id;
			   	var base=id.substring(3,4);
				id=id.substring(0, 4);
			   	var p=findP(novodataset,id);
			    p=p.highlights;
			    p.forEach(function(d,i){
			    	opcoes.push(d);
			    });
			    opcoes=[];
				if(base=='C'){
					$('#chuvaview').show();
					$('#taxiview').hide();
					mapDot.invalidateSize();
					inicioDotMap(dataset);
				}else if(base=='T'){
					$('#taxiview').show();
					$('#chuvaview').hide();
					mapTaxi.invalidateSize();
					inicioTaxi(datasettaxi);
				}			    
				$(this).parent().find('.form-group > div >.clicks')[0].value = clicks;
				d2 = new Date();
				diff = Math.abs(d1-d2)/1000;
				$(this).parent().find('.form-group > div >.tempo')[0].value = (Math.round((diff/60)*100)/100);
				clicks=-1;
				d1 = new Date();			
			}
		}else{
			//VALIDA O FORM COM INFORMAÇÕES PESSOAIS
			if($(this)[0].id=='btuto1'){
				if($('#5Form')[0].checkValidity()==false){
					$('#5Form')[0].classList.add("was-validated");
				}else{
					stepper0.next();
				}
			// PREPARA E INICIA A ETAPA DE PERGUNTAS PÓS TUTORIAL
			}else if($(this)[0].id=='btuto10'){
				tempotutorial= new Date();
				duracaotutorial= tempotutorial-tempoinicial;
				duracaotutorial= math.round(((duracaotutorial/1000)/60)*100)/100;
				alpha=0;
				left=60;
				right=100;
				clicks=0;
				if(pontos!= undefined){
					pontos.clearLayers();
				}
				$('#tutorial').css('display','none');
	    		$('#vis').css('display','');
	    		opcoes=[];
				mapDot.invalidateSize();
				var id= $('#3Form > div.active > div > div > div > div>').siblings()[0].id;
			   	var base=id.substring(3,4);
				id=id.substring(0, 4);
				var p=findP(novodataset,id);
			   	p=p.highlights;
				p.forEach(function(d,i){
					opcoes.push(d);
				});
				opcoes=[];
				if(base=='C'){
					$('#chuvaview').show();
					$('#taxiview').hide();
					mapDot.invalidateSize();
					inicioDotMap(dataset);
				}else if(base=='T'){
					$('#taxiview').show();
					$('#chuvaview').hide();
					mapTaxi.invalidateSize();
					inicioTaxi(datasettaxi);
				}
			}else{
				stepper0.next();
			}
		}
	});
	$('.btn-previous-form').click(function(){
		stepper0.previous();
	});
	$("#btn1,#2btn1,#3btn1,#4btn1,#btuto10").css('float','right');
	// PARA CADA BOTÃO DA ÚLTIMA PERGUNTA DE CADA TÉCNICA PREPARA A PRÓXIMA TAB PARA SER EXIBIDA.
	$("#btn1,#2btn1,#3btn1,#4btn1").click(function() {
		var ent= $(this).parent().find('.form-group > div > div> div >').siblings()[0].name;
		if($('input[name='+ent+']:checked').val()==undefined && $('input[name='+ent+']').hasClass('custom-control-input')==true){
			$(this).parent().parent()[0].classList.add('was-validated');
		}else if($('input[name='+ent+']').val()==""&& $('input[name='+ent+']').hasClass('custom-control-input')==false){
			$(this).parent().parent()[0].classList.add('was-validated');
		}else{
			d2 = new Date();
			var ent= $(this).parent().find('.form-group > div >.clicks')[0].value = clicks;
			diff = Math.abs(d1-d2)/1000;
			var ent= $(this).parent().find('.form-group > div >.tempo')[0].value = (Math.round((diff/60)*100)/100);
			$('#pills-tab > li> a.active').parent().next()[0].classList.remove("disabled");
			$('#pills-tab > li> a.active').parent().next().find('a').click();
			$('#pills-tab > li> a.active').parent().prev()[0].classList.add("disabled");
			if($(this).parent().parent().hasClass('was-validated')){
				$(this).parent().parent()[0].classList.remove("was-validated");
			}
			clicks=-1;
			d1 = new Date();
		}
	});
	// SUBMETE OS FORMS PARA O GOOGLE SCRIPT WEB SERVICE PARA A API GRAVAR OS DADOS NO GOOGLE SHEETS.
    $('#Form,#2Form,#3Form,#4Form,#5Form').submit(function(){
    	tempofinal= new Date();
    	duracaoPerguntas= tempofinal-tempotutorial;
    	duracaoPerguntas=math.round(((duracaoPerguntas/1000)/60)*100)/100;
    	duracao= tempofinal=tempoinicial;
    	duracao=math.round(((duracao/1000)/60)*100)/100;
    	var nameform=$(this)[0];
    		$.ajax({
		    	type: "POST",
			    url: $(this).attr('action'),
			    data : $(this).serialize(),
			    success: function(result, status, request){
			        console.log(nameform.id+" Estado atual ---\n" + status + "\nResultado: " + JSON.stringify(result));	    	
			        sucesso++;
			    	refresh();
			    },
			    error: function (request, status, erro) {
			      	console.log(nameform.id+" Problema ocorrido: " + status + "\nDescrição: " + erro);
			      	$.ajax(this);
			      	return;
			    }
		    });
	    return false;
	});
	$('input[type=radio][name=inlineRadioOptions]').change(function() {
	    if (this.value == 'Yes') {
	        $('.alert').removeClass("show");
	    }
	});
});
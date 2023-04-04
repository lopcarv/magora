$(document).ready(function(){
});


function upload_download_aula(){	
	var data = new FormData();
	var arquivos = $('#arquivo')[0].files;
	if(arquivos.length > 0) {
		data.append('arquivo', arquivos[0]);
		data.append('id_curso', $("#id_curso").val());
		data.append('id_aula', $("#id_aula").val());
		data.append('titulo', $("#titulo").val());	
		$.ajax({
			type:'POST',
			url:base_url + 'aula/upload',
			data:data,
			contentType:false,
			processData:false,
			dataType: "json",
			beforeSend: function(){
				abrirModal("#janela1");
			},
            error:function(){
                $('#uploadStatus').html('<p style="color:#EA4335;">Falha no arquivo, tente novamente.</p>');
            },
			success:function(data){
				alert("salvo");				
			},
			complete: function(data){
				fecharModal();
			}
		});
	}
}


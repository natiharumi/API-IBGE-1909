$(document).ready(function (e) {

  
    $.ajax({
        type: "get",
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
        data: {orderBy: "nome"},
        dataType: "json",
        success: function (response) {
           
            $.each(response, function (indexInArray, valueOfElement) { 
                var option = "<option>"+valueOfElement.sigla+"</option>" 
                $("#uf").append(option) 
            });
        }
    });

    $('#uf').change(function (e) { 
        e.preventDefault();
        $("#local").empty();
        var uf = $("#uf").val();

       
        if (uf == 'Estados') {
            var option = "<option>Cidades</option>"
            $("#local").append(option)
            return
        }        

        $.ajax({
            type: "get",
            url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+uf+"/municipios",
            data: {orderBy: "nome"}, 
            dataType: "json",
            success: function (response) {
              
                $.each(response, function (indexInArray, valueOfElement) { 
                    var option = "<option>"+valueOfElement.nome+"</option>"
                    $("#local").append(option)
                });
            }
        });
    });
});

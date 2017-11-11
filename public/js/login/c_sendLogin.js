$(document).ready(function (e) {
    $("#inputEmail").keyup(function (e) {
        if ($("#inputEmail").is(':focus')) {
            var typeTxt = $("#inputEmail").val();
            $(".typedText").empty().html(typeTxt);
        }
    });

    $("#inputPW").keyup(function (e) {
        if ($("#inputPW").is(':focus')) {
            var typeTxt = $("#inputPW").val();
            $(".typedText").empty().html(typeTxt);
        }


    });


    $("#searchForm").submit(function (e) {
        e.preventDefault();
        var form = $(this);

        var loginEmail = String(form.find("#inputEmail").val());
        var loginPw = String(form.find("#inputPW").val());
        var url = String(form.attr("action"));

        var reqdata = {email: loginEmail, pw: loginPw};
        //alert(JSON.stringify(json));
        var posting = $.post(url, reqdata, 'json')
                .done(function (json_res) {
                            $(".ajaxResult").html("");
                            var int_resJsonLen = Object.keys(json_res).length;
                            var str_res = "";
                             
                            if(int_resJsonLen !== 0){
                                  
                                str_res =  "server response at " + json_res['serverResTime'] + " : <br />";
                                $(".ajaxResult").append(str_res);   
                                
                                for (var i = 0; i < int_resJsonLen; i++ ){
                                   
                                    if (Object.keys(json_res)[i] !== "serverResTime"){
                                       str_res = Object.keys(json_res)[i] +  " : " + json_res[Object.keys(json_res)[i]] + "<br />";
                                        $(".ajaxResult").append(str_res);
                                    }
                                }
                            };
                })
                .fail(function (qXHR, textStatus, errorThrown) {
                    alert(textStatus + " : " + errorThrown);
                });

    });

 





});



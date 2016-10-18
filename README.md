# fmess
Fast Message (JQuery  + Bootstrap) - Плагин быстрых сообщений

$("#test1").click(function(){
	$(this).fmess({
        text: "Текст сообщения",
        type: "success", //тип сообщения success, info, warning, danger
        direction: "top", //возможны варианты top, right, bottom, left
        time: 1500
    });

});

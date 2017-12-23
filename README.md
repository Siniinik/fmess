# fmess
Fast Message (JQuery  + Bootstrap) - Плагин быстрых сообщений

```js
$("#test1").click(function(){
	$(this).fmess({
        text: "Текст сообщения",
        type: "success", //тип сообщения success, info, warning, danger
        direction: "top", //положение подсказки - возможны варианты top, right, bottom, left
        time: 1500, // время анимации
        distance: 100 //расстояние для анимации
    });

});
```




# fmess
Fast Message (JQuery  + Bootstrap) - Плагин быстрых сообщений

```js
$("#test1").click(function(){
	$(this).fmess({
        text: "Текст сообщения",
        type: "success", //тип сообщения success, info, warning, danger
        direction: "top", //возможны варианты top, right, bottom, left
        time: 1500, // время анимации
        distance: 100 //расстояние для анимации
    });

});
```

#Примера работы Demo
http://sinsite.ru/2005

[![N|Solid](http://sinsite.ru/img/fmess.gif)](http://sinsite.ru/2005)


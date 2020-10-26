//Portfolio
let desarrollo_galery = $('#desarrollo_galery');
let audiovisual_galery = $('#audiovisual_galery');
let desarrollo_boton = $('#desarrollo');
let audiovisual_boton = $('#audiovisual');

audiovisual_boton.click(()=>{
    desarrollo_galery.hide();
    audiovisual_galery.show();
    //desarrollo_galery.fadeTo('slow',0);
    audiovisual_galery.fadeTo('slow',1);
    aclaracion.show();
});

desarrollo_boton.click(()=>{
    desarrollo_galery.show();
    audiovisual_galery.hide();
    aclaracion.hide();
    //audiovisual_galery.fadeTo('slow',0);
    desarrollo_galery.fadeTo('slow',1);
});

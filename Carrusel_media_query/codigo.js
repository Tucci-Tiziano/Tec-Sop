function activarMiCarousel(id, interval) {
    var num = 1;
    var l ="#i" + num;
    $(l).addClass('principal');
    $("#i2").addClass('secundario');
    $("#i3").addClass('secundario');
    $("#i4").addClass('secundario');
    setInterval(() => {
        if (num == 4) {
            num = 0;
            l ="#i" + num;
            $(l).addClass('principal');
            $("#i2").addClass('secundario');
            $("#i3").addClass('secundario');
            $("#i4").addClass('secundario');
        }
        l ="#i" + num;
        $(l).removeClass('principal');
        $(l).addClass('secundario');
        num = num + 1;
        l ="#i" + num;
        $(l).removeClass('secundario');
        $(l).addClass('principal');
    }, interval);
}
  
  
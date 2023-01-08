const NOMBRE_ID = 'nombre';
const APELLIDOS_ID = 'apellidos';

$(function() {
    $('form').submit(function(event) {
        if (!compruebaSiTieneValor(NOMBRE_ID)) setError(NOMBRE_ID, event);
        else setValid(NOMBRE_ID);
        if (!compruebaSiTieneValor(APELLIDOS_ID)) setError(APELLIDOS_ID, event);
        else setValid(APELLIDOS_ID);
    })
});

$("#tamano").on('change', function() {
    $.ajax({
        type: "POST",
        url: "http://localhost:5000/checksize",
        data: {
            tamano: this.value,
        },
        success: function (result) {
            $("#resultado_tamano").text(result);
            const color = result === 'Disponible' ? 'green' : 'red';
            $("#resultado_tamano").css('color', color)
        }
    });
        
});

function compruebaSiTieneValor(elementId) {
    let value = $('#'+elementId).val();
    return value !== ''
        ? true
        : false;
}

function setError(elementId, event) {
    getLabelByElementId(elementId).css('color', 'red');
    event.preventDefault();
}

function setValid(elementId) {
    getLabelByElementId(elementId).css('color', 'black');
}

function getLabelByElementId(elementId) {
    return $('label[for="' + elementId + '"]');
 }
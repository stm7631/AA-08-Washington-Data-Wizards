// Weird bug occurs if I don't set a timer
$('#onchoViz').addClass("noviz")
$('html').addClass("noScroll")

setTimeout(() => {
    $('#schistoViz, #lfViz').addClass("hidden")
    $('#onchoViz').removeClass("noviz")

    $('#diseases').on('change', function () {
        if (this.value == "oncho") {
            $('#onchoViz').removeClass("hidden")
            $('#schistoViz, #lfViz').addClass("hidden")
        } else if (this.value == "schisto") {
            $('#schistoViz').removeClass("hidden")
            $('#onchoViz, #lfViz').addClass("hidden")
        } else {
            $('#lfViz').removeClass("hidden")
            $('#onchoViz, #schistoViz').addClass("hidden")
        }
    });

    $('html').removeClass("noScroll")
    $('.cover, .loader').remove()
}, 10000);

// Weird bug occurs if I don't set a timer
$('html').addClass("noScroll")

setTimeout(() => {
    $('#schistoViz, #lfViz').addClass("hidden")

    $('#diseases').on('change', function () {
        if (this.value == "oncho") {
            $('#dataInfo').text("Oncho Specific Information")
            $('#onchoSummary, #onchoData, #onchoViz').removeClass("hidden")
            $('#schistoSummary, #schistoData, #schistoViz, #lfSummary, #lfData, #lfViz').addClass("hidden")
        } else if (this.value == "schisto") {
            $('#dataInfo').text("Schisto Specific Information")
            $('#schistoSummary, #schistoData, #schistoViz').removeClass("hidden")
            $('#onchoSummary, #onchoData, #onchoViz, #lfSummary, #lfData, #lfViz').addClass("hidden")
        } else {
            $('#dataInfo').text("LF Specific Information")
            $('#lfSummary, #lfData, #lfViz').removeClass("hidden")
            $('#onchoSummary, #onchoData, #onchoViz, #schistoSummary, #schistoData, #schistoViz').addClass("hidden")
        }
    });

    $('html').removeClass("noScroll")
    $('.cover, .loader').remove()
}, 3000);

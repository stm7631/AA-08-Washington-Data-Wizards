// Weird bug occurs if I don't set a timer
$('html').addClass("noScroll")

setTimeout(() => {
    $('#schistoViz, #lfViz').addClass("hidden")

    $('#diseases').on('change', function () {
        if (this.value == "oncho") {
            $('#dataInfo').text("Data Information (Oncho)")
            $('#onchoSummary, #onchoData, #onchoViz').removeClass("hidden")
            $('#schistoSummary, #schistoData, #schistoViz, #lfSummary, #lfData, #lfViz').addClass("hidden")
        } else if (this.value == "schisto") {
            $('#dataInfo').text("Data Information (Schisto)")
            $('#schistoSummary, #schistoData, #schistoViz').removeClass("hidden")
            $('#onchoSummary, #onchoData, #onchoViz, #lfSummary, #lfData, #lfViz').addClass("hidden")
        } else {
            $('#dataInfo').text("Data Information (LF)")
            $('#lfSummary, #lfData, #lfViz').removeClass("hidden")
            $('#onchoSummary, #onchoData, #onchoViz, #schistoSummary, #schistoData, #schistoViz').addClass("hidden")
        }
    });

    $('html').removeClass("noScroll")
    $('.cover, .loader').remove()
}, 3000);

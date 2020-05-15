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
  
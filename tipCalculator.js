$(function () {


    //All fields must be filled out to work. 
    //must only allow 6 characters and one decimal in input field
    //provide option to split bill. with only one numeric input with 1 as the default
    //calculate button that will only work if all fields filled out. if not send alert with fields missing. 
    // if validation passes show tip amount per person split. 
    // If more than one person is split between show full split total. ------<
    //
    //share button to share to sharethis.com
    //publish in a folder on git hub and to git hub site
    var billAmount = ""
    var multiplier = ""
    var billTotal = ""
    var tip = ""
    var billTotal = ""

    $("#collectData").click(function (ev) {
        amount = $("#billTotal").val();
        multiplier = $('#optionDrop').find(":selected").val();
        peopleSplit = $("#peopleSplit").find(":selected").val();
        totalTip = (amount * multiplier).toFixed(2)
        tipPer = ((amount * multiplier / peopleSplit) * 100 / 100).toFixed(2);
        total = (((parseFloat(amount) + parseFloat(totalTip)) / peopleSplit) * 100 / 100).toFixed(2);
        var div = $("<div></div>");
        div.append("Total tip: $" + totalTip + "<br />")
            .append("Tip per person: $" + tipPer + "<br />")
            .append("Total bill per person: $" + total)
        $(".results").append(div);
    });


});




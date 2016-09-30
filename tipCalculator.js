$(function () {


    //All fields must be filled out to work. -- check
    //must only allow 6 characters and one decimal in input field -- meh
    //provide option to split bill. with only one numeric input with 1 as the default --check
    //calculate button that will only work if all fields filled out. if not send alert with fields missing. --check
    // if validation passes show tip amount per person split. --check
    // If more than one person is split between show full split total. ---check
    //
    //share button to share to sharethis.com
    //publish in a folder on git hub and to git hub site --check
    var billAmount = ""
    var multiplier = ""
    var billTotal = ""
    var tip = ""
    var billTotal = ""


    $("#collectData").click(function (ev) {
        if ($("#billTotal").val() == 0) {
     alert("Please fill out all fields.");
        } else if ($('#optionDrop').find(":selected").val() == 0){
        alert("Please fill out all fields.");
        return null;
        } else {
        amount = $("#billTotal").val();
        multiplier = $('#optionDrop').find(":selected").val();
        peopleSplit = $("#peopleSplit").find(":selected").val();
        totalTip = (amount * multiplier).toFixed(2)
        tipPer = ((amount * multiplier / peopleSplit) * 100 / 100).toFixed(2);
        total = (((parseFloat(amount) + parseFloat(totalTip)) / peopleSplit) * 100 / 100).toFixed(2);
        
        if (peopleSplit > 1){
            var div = $("<div></div>");
        div.append("Total tip: $" + totalTip + "<br />")
            .append("Tip per person: $" + tipPer + "<br />")
            .append("Total bill per person: $" + total)
        $(".results").append(div);
        return false;
        } else { 
            var div = $("<div></div>");
        div.append("Total tip: $" + totalTip + "<br />")
            .append("Total bill: $" + total)
        $(".results").append(div);
         return false;
        }
        }
        
    });
  


});


$(function () {
    var latI = '';
    var longI = '';
    var town = '';
    var icon = '';

    $("#sendZip").click(function (ev) {
        var area = $("#zipCode").val();
        $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + area + "&key=AIzaSyAt3yHpgvBYw2u5lrWXKisJ9d23ITL3VUQ", { dataType: "json" }).done(function (data) {
            console.log(data);
            latI = data.results[0].geometry.location.lat;
            longI = data.results[0].geometry.location.lng;
            town = data.results[0].formatted_address;
            $.ajax("https://api.darksky.net/forecast/71ce746e051ee5b5e05ffb182555ea67/" + latI + "," + longI, { dataType: "jsonp" }).done(function (data) {
                console.log(data);
                var dailySummary = data.currently.summary;
                var currentTemperature = data.currently.temperature;
                var tempHigh = data.daily.data[0].apparentTemperatureMax;
                var tempMin = data.daily.data[0].apparentTemperatureMin;
                var chanceOfRain = data.daily.data[0].precipProbability;
                var displayTemperature = Math.round(currentTemperature);
                var displayTemperatureHigh = Math.round(tempHigh);
                var displayTemperatureMin = Math.round(tempMin);
                var iconRequest = data.currently.icon;

                var div = $("<div></div>");
                div.append("<center>" + town + "<br />" + dailySummary + "<br />" + "Temperature: " + displayTemperature + "&deg; " + "<br />" + "Temp high: " + displayTemperatureHigh + "&deg; " + "<br />" + "Temp min: " + displayTemperatureMin + "&deg; " + "<br />" + "Chance of Rain: " + chanceOfRain + "%" + "<hr/>" + "</center>")
                $("#newCard").append(div);
            });
            $("#delete").click(function () {
                var area = $("#newCard").empty();

            });
        });
    });

});







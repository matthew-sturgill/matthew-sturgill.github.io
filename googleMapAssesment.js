$(function () {
    var latI = '';
 
    var town = '';
   
    $("#getMap").click(function (ev) {
        var area = $("#location").val();
        $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + area + "&key=AIzaSyAt3yHpgvBYw2u5lrWXKisJ9d23ITL3VUQ", { dataType: "json" }).done(function (data) {
            console.log(data);
            latI = data.results[0].geometry.location.lat;
            longI = data.results[0].geometry.location.lng;
            town = data.results[0].formatted_address;
            console.log(latI);
            console.log(longI);

          $.ajax("https://maps.googleapis.com/maps/api/staticmap?center=" + latI  + "," + longI + "&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C40." + latI + "," + longI + "& key=AIzaSyBIIX4VrRX1CRxYEmHOVf");
           var div = $("<div></div>");
           $("#map").append('<img src="https://maps.googleapis.com/maps/api/staticmap?center=" + latI  + "," + longI + "&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C40." + latI + "," + longI + "& key=AIzaSyBIIX4VrRX1CRxYEmHOVf - F0QiqiLJPPmE" height="100px" width="90px">');
     
     
       //   $('#map').append('<img src="https://maps.googleapis.com/maps/api/staticmap?center=" + latI  + "," + longI + "&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C40." + latI + "," + longI + "& key=AIzaSyBIIX4VrRX1CRxYEmHOVf - F0QiqiLJPPmE" height="100px" width="90px">');
            
       
  
        });
    });
});

          












        //   var div = $("<div></div>");
        //  div.append(
        //        .append(marker)
        //  $("#map").append(div);


















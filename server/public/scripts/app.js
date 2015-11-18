$(document).ready(function() {

    gameSearch();

});

function gameSearch() {
    var apikey = "3ab8967d07caf3cc7fcf420937eb687fd8fe09b5";
    var baseUrl = "http://www.giantbomb.com/api";

    // construct our URL
    var gameSearchURL = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&limit=50';
    var query = 'Batman & Robin';

    var q = gameSearchURL + '&query=' + encodeURI(query);
    console.log(q);

    $.ajax({
        type: "GET",
        url: gameSearchURL + '&query=' + encodeURI(query),
        dataType: "jsonp",
        crossDomain: true,
        jsonp: 'json_callback',
        success: function(data) {
            console.log(data);
            searchCallback(data);
        }
    });

}

function searchCallback(data) {
    var batman = data.results;
    for (var i = 0; i < batman.length; i++){
        var batPics = {};
        var batDeck;
        if (batman[i].image) {
            batPics = batman[i].image;
        }  else {
            batPics.icon_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvgcBrVP_wz1Ux3UR_AmXNOnw30IJ69-etz3dpACrVsabyoI9";
        }
        if (batman[i].deck == null){
            batDeck = "Quack!"
        } else {
            batDeck = batman[i].deck
        }
        var el = '<div class="batman well col-md-3"' +
            '<p>' + batman[i].name + '</p>' +
            '<img src="' + batPics.icon_url + '">' +
            '<p>' + batDeck + '</p>' +
            '</div>';
        $('#displayInfo').append(el);
    }
}




function getData() {

    var rowConverter = function (d) {
        return {
            //country: d.country, //No conversion
            //province: d.province,
            health_zone: d.health_zone,
            lat: d.lat,
            lon: d.lon,
            confirmed_cases: d.confirmed_cases
        };
    };

    d3.csv("data/kongocity.csv", rowConverter, function (data) {
        d3.select("body").selectAll("p")
            .data(data)
            .enter()
            .append("p")
            .text(function (d) {
                if (d.confirmed_cases>10)

                    return d.health_zone+","+d.lat+","+d.lon+","+d.confirmed_cases

            })
    });




}


/*
d3.csv("data/dataebolazone.csv", rowConverter, function (data) {
    d3.select("body").selectAll("p")
        .data(data)
        .enter()
        .append("p")
        .text(function (d) {

            if (d.total_cases > 100) {
                //fetch('https://nominatim.openstreetmap.org/search?q='+d.health_zone+'&format=json&addressdetails=1')
                fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + d.health_zone + '&key=AIzaSyAG1JFBdunAdkZCbwoWpcvRUIJszyZFfZA')
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (myResult) {
                        //console.log((d.health_zone+","+myResult.latt +","+ myResult.longt));
                        //console.log((myResult.results));
                        if (myResult.results.length != 0) {
                            console.log(d.health_zone + "," + myResult.results[0].geometry.location.lat + "," + myResult.results[0].geometry.location.lng);
                        }

                    });
                //   return d.country +","+ d.province +","+d.total_cases
            }
// console.log(d.country);
//console.log(data[1].country);
//

        })
});
*/


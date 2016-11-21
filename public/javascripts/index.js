var apiKey　= 'f4ffdaa107eb984944b810c5e207f560'
var query = "dog"

var url = 'http://apis.baidu.com/qunartravel/travellist/travellist?'
$.ajax({
            type:"POST",
            headers: {"apikey": apiKey},
            url: url,
            data: "page=1&query=dog",
            processData: false,
            success: function(msg) {
                console.log(msg);
            }
    });

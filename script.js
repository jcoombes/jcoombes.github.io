
var getJSON = function(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function() {

        var status = xhr.status;

        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };

    xhr.send();
};

getJSON('gallery2.json',  function(err, data) {

    if (err != null) {
        console.error(err);
    } else {

        console.log(text);
    }
});

function times_liked() {

};

function get_next_img() {

};

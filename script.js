
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

var looking = getJSON('gallery2.json',  function(err, data) {

    if (err != null) {
        console.error(err);
    } else {

        var gallery = data;
        console.log('gallery: ',gallery);
       console.log('data: ',data);
        return data;
    }
});

console.log(looking);

function times_liked() {

};

function get_next_img() {

};

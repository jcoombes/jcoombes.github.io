var getJSON = function(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function() {

        var status = xhr.status;

        if (status == 200) {
            callback(null, xhr.response, main);
        } else {
            callback(status, main);
        }
    };

    xhr.send();
};

var looking = getJSON('gallery2.json',  function(err, data, main) {

    if (err != null) {
        console.error(err);
    } else {

        var gallery = data;
        // I have to put all my code inside this asynchronous block. :(
        main(gallery);


    }
});

console.log(looking);


var main = function (gallery) {
  times_liked(gallery);
};

function times_liked(gallery) {
  alert(2);

};

function get_next_img() {

};

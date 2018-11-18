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
        main("hello");


    }
});

console.log(looking);


var main = function (foo) {
  alert(foo);
}

function times_liked() {

};

function get_next_img() {

};

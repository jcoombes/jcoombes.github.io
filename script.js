var function getJSON(url, callback) {

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

var function main(gallery) {
  times_liked(gallery);
};

function times_liked(gallery, tag_list, user_likes, user_dislikes) {

  tag_list = ["african","animal","asian","big","blue","brown",
              "dead","european","face", "instrument","jar","leather",
              "mouth","music","odd","shiny","statue","stone",
              "tool","weapon","white","wood"]

  for (var tag in tag_list) {
    console.log(tag);

  }
};

function get_next_img() {

};


getJSON('gallery2.json',  function(err, data, main) {

    if (err != null) {
        console.error(err);
    } else {

        var gallery = data;
        // I have to put all my code inside this asynchronous block. :(
        main(gallery);
    }
});

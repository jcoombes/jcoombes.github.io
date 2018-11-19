function getJSON(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function () {

        var status = xhr.status;

        if (status == 200) {
            callback(null, xhr.response, main);
        } else {
            callback(status, main);
        }
    };

    xhr.send();
}

/*var user_likes = ["african mask"];
var user_dislikes = [];*/

function main(gallery) {
    var pref = times_liked(gallery, tag_list, user_likes, user_dislikes);
    var best_unseen = get_next_img(gallery, pref, user_likes, user_dislikes);

    //console.log(best_unseen);
}

function times_liked(gallery, tag_list, user_likes, user_dislikes) {
    //returns user preferences by tag as an object
    var user_prefs = {
        "african": 0,
        "animal": 0,
        "asian": 0,
        "big": 0,
        "blue": 0,
        "brown": 0,
        "dead": 0,
        "european": 0,
        "face": 0,
        "instrument": 0,
        "jar": 0,
        "leather": 0,
        "mouth": 0,
        "music": 0,
        "odd": 0,
        "shiny": 0,
        "statue": 0,
        "stone": 0,
        "tool": 0,
        "weapon": 0,
        "white": 0,
        "wood": 0
    };

    for (var tag in tag_list) {

        for (var liked in user_likes) {
            if (
                gallery[user_likes[liked]].picture_attributes[tag_list[tag]] === "true"
            ) {
                user_prefs[tag_list[tag]] = user_prefs[tag_list[tag]] + 1;
            }
        }

        for (var disliked in user_dislikes) {
            if (
                gallery[user_dislikes[disliked]].picture_attributes[tag_list[tag]] === "true"
            ) {
                user_prefs[tag_list[tag]] = user_prefs[tag_list[tag]] - 1;
            }
        }
    }
    return user_prefs;
}

function get_next_img(gallery, user_prefs, user_likes, user_dislikes) {
    // takes user preferences as input and outputs the next image.
    // returns the image with tags which were most liked by the user.
    let seen = user_likes;
    //let seen = user_likes.concat(user_dislikes); //assuming user can't like and dislike simultaneaously
    let best = "null";
    let topscore = 0;

    console.log("seen, ",seen);

    for (var img in gallery) {
        if (seen.includes(img) === false) {
            let score = 0;
            for (var att in gallery[img]["picture_attributes"]) {
                score = score + user_prefs[att];
            }
            //console.log(img, score);

            if (score > topscore) {
                topscore = score;
                best = img;
            }
        }
    }
    return [best, gallery[best]["url"]];

}

function like(gallery, self, tag_list, user_likes, user_dislikes) {
    // gallery is the name of the json file.
    // self is string, name of what image the user just liked.
    // add img name to user_likes
    //call times_liked and get_next_img
    //return img
    getJSON(gallery, function (err, data, main) {

        if (err !== null) {
            console.error(err);
        } else {
            var gallery = data;
            // I have to put all my code inside this asynchronous block. :(
            //user_likes = user_likes.push(self);
            user_likes.push(document.getElementById("picture").name);
            let prefs = times_liked(gallery, tag_list, user_likes, user_dislikes);
            let best_unseen = get_next_img(gallery, prefs, user_likes, user_dislikes);

            console.log(best_unseen);
            document.getElementById('picture').name = best_unseen[0];
            document.getElementById('picture').src = best_unseen[1];
            return best_unseen;

        }
    });

    }

function dislike() {
    // add img name to user_dislikes
    alert('oh no');
}

var tag_list = ["african", "animal", "asian", "big", "blue", "brown",
          "dead", "european", "face", "instrument", "jar", "leather",
          "mouth", "music", "odd", "shiny", "statue", "stone",
          "tool", "weapon", "white", "wood"];

var user_likes = [];

var user_dislikes = [];

// getJSON('gallery2.json', function (err, data, main) {
//
//     if (err !== null) {
//         console.error(err);
//     } else {
//         var gallery = data;
//         // I have to put all my code inside this asynchronous block. :(
//         main(gallery);
//     }
// });

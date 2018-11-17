fetch("gallery2.json").then(function (response) {
  console.log("Maybe?");
  gallery = response.json();

}).then(function (jsonresponse) {

  console.log("success?");
  console.log("Output: " , jsonresponse);

});

function times_liked() {

};

function get_next_img() {

};

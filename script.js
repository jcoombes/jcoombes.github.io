let gallery = fetch('http://www.jcoombes.github.io/gallery2.json')
.then(res => res.json())
.then((out) => {
  console.log('Output: ', out);
}).catch(err => console.error(err));


function times_liked() {

};

function get_next_img() {

};

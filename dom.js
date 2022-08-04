var array = [
  {
    image: "major.jpg",
    movieName: "major",
    release: "3/june/2022",
    director: "Aliseikh"
  },
  {
    image: "The_Power_film.jpg",
    movieName: "The-power",
    release: "14/jan/2021",
    director: "mahesh"
  },
  {
    image: "lukka.jpeg",
    movieName: "lukka-chupi",
    release: "07/oct/2019",
    director: "laxhman"
  },
  {
    image: "major.jpg",
    movieName: "major",
    release: "3/june/2022",
    director: "Aliseikh"
  },
  {
    image: "The_Power_film.jpg",
    movieName: "The-power",
    release: "14/jan/2021",
    director: "mahesh"
  },
  {
    image: "lukka.jpeg",
    movieName: "lukka-chupi",
    release: "07/oct/2019",
    director: "laxhman"
  }
];

function movieCardMaker({ image, movieName, release, director }) {
  //  const { image, movieName, release, director } = movieObj;
  var div = document.createElement("div");
  div.className = "movie-info";
  var img = document.createElement("img");
  img.src = image;
  img.alt = "major";
  img.className = "image";

  div.appendChild(img);

  var h3 = document.createElement("h3");
  h3.className = "movie-name";
  var b = document.createElement("b");
  var h2 = document.createElement("h2");
  h2.innerText = movieName;

  b.appendChild(h2);
  h3.appendChild(b);
  div.appendChild(h3);

  var h4 = document.createElement("h4");
  var p = document.createElement("p");
  p.innerText = "RELEASE:";
  h4.appendChild(p);
  var p = document.createElement("p");
  p.innerText = release;
  h4.appendChild(p);
  var p = document.createElement("p");
  var b = document.createElement("b");
  b.innerText = "DIRECTOR";
  var span = document.createElement("span");
  span.innerText = director;
  p.appendChild(b);
  p.appendChild(span);
  h4.appendChild(p);
  div.appendChild(h4);

  return div;
}

function render(list) {
  const demo = document.getElementById("demo");
  demo.innerHTML = "";
  for (let movie of list) {
    demo.appendChild(movieCardMaker(movie));
  }
}
render(array);

function search(event) {
  const searchValue = event.target.value;
  if (event.key === "Enter") {
    console.log(event.target.value);
    const result = array.filter(selectMovie);
    console.log(result);
    render(result);
  }
  function selectMovie(value) {
    return value.movieName == searchValue;
  }
}

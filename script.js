let output = document.querySelector('#output');
let searchBar = document.querySelector('#searchBar');
let submitButton = document.querySelector('#submit');

function search(text) {
  let loader = document.createElement("P");
  loader.innerHTML = "loading...";
  output.appendChild(loader);
  for (index in organisms) {
    let item = organisms[index];
    if (item.title.toLowerCase().includes(text.toLowerCase()) ||
    item.keywords.includes(text.toLowerCase())
    ) {
      if (item.wikipedia != null) {
        output.innerHTML += `<div class="result">
          <div class="container1">
            <h3>${item.title}</h3>
              <details>
                <summary>info</summary>
                <p>${item.description}</p>
                <a href="${item.wikipedia}">${item.wikipedia}</a>
                <p>Keywords:${item.keywords}</p>
              </details>
          </div>
        </div>`;
      } else {
        output.innerHTML += `<div class="result">
          <div class="container1">
            <h3>${item.title}</h3>
              <details>
                <summary>info</summary>
                <p>${item.description}</p>
                <p>Keywords:${item.keywords}</p>
              </details>
          </div>
        </div>`;
      }
    };
  };
  output.removeChild(output.childNodes[0]);
}

searchBar.addEventListener('input', e => {
  output.innerHTML = '';
  search(searchBar.value);
});

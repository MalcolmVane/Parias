let output = document.querySelector('#output');
let searchBar = document.querySelector('#searchBar');
let submitButton = document.querySelector('#submit');

function search(text) {
  for (index in organisms) {
    let item = organisms[index];
    if (item.title.toLowerCase().includes(text.toLowerCase()) ||
    item.description.toLowerCase().includes(text.toLowerCase())) {
      if (item.wikipedia != null) {
        output.innerHTML += `<div class="result">
          <div class="imageBox"><img src="${item.image}"></div>
          <div class="container1">
            <h3>${item.title}</h3>
              <details>
                <summary>info</summary>
                <p>${item.description}</p>
                <a href="${item.wikipedia}">${item.wikipedia}</a>
                <iframe width="500" height="500" src="${item.wikipedia}"></iframe>
              </details>
          </div>
        </div>`;
      } else {
        output.innerHTML += `<div class="result">
          <div class="imageBox"><img src="${item.image}"></div>
          <div class="container1">
            <h3>${item.title}</h3>
              <details>
                <summary>info</summary>
                <p>${item.description}</p>
              </details>
          </div>
        </div>`;
      }
    };
  };
}

searchBar.addEventListener('input', e => {
  output.innerHTML = '';
  search(searchBar.value);
});
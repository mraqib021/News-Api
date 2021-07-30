let news = document.getElementById("main");


function foo() {
  async function foo1(input) {
    console.log(input);
    const response = await fetch(`https://newsapi.org/v2/everything?q=${input}&from=2021-06-30&sortBy=publishedAt&apiKey=0f9b4062c0834d46ab541613cc85ff84`)
    const json = await response.json()
    return json
  }
  let search = document.getElementById("search");
  foo1(search.value).then(function (json) {
    news.innerHTML = ""
    console.log(json)
    for (var i = 0; i < json.articles.length; i++) {
      console.log(json.articles[i])
      let card = `<div class="card flex" style="width: 18rem;">
            <img src="${json.articles[i].urlToImage}" class="card-img-top" alt="Loading">
            <div class="card-body">
              <h5 class="card-title">${json.articles[i].title}</h5>
              <p class="card-text">${json.articles[i].description}</p>.
              
            </div>
          </div>`
      news.innerHTML += card
      search.value = ""
    }
  }
  );
}

import * as fetch from "node-fetch"

fetch("http://127.0.0.1:10000/index.html")
    .then(response => response.text())
    .then(html => console.log(html));
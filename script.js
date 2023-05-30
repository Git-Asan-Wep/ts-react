let row = document.querySelector(".row")
const btn = document.querySelector(".search-btn")
const input = document.querySelector(".input")
const error = document.querySelector(".error")
let select = document.querySelector(".select")


input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        search()
    }
})

select.addEventListener('click', () => {
    search()
})




btn.addEventListener("click", () => {
    search()
})

function search() {
    fetch(`https://dog.ceo/api/breed/${input.value.toLowerCase() || select.value.toLowerCase() }/images`)
        .then(res => res.json())
        .then(data => {
            row.innerHTML = ""
            console.log(data.message.slice(0, 30))
            data.message.length ? data.message.slice(0, 30).map(el => {
                row.innerHTML += `<div class="d-flex col-4 my-5">
<img src="${el}" alt="img" class="image my-4" style="width: 350px; height: 400px; margin-right: 20px;">
</div>`
            }) : error.innerHTML += "ничего не найдено"
        })
}








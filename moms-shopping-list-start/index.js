const form = document["add-item"]

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const title = form.title.value
    form.title.value = "" 
    const li = document.createElement("li")
    const div = document.createElement("div")
    div.textContent = title
    const btn = document.createElement("button")
    const btn1 = document.createElement("button")
    const x = document.createTextNode = ("X")
    const edit = document.createTextNode = ("edit")
    btn.append(x)
    btn1.append(edit)
    document.getElementsByTagName("ul")[0].append(div)
    document.getElementsByTagName("ul")[0].append(btn1)
    document.getElementsByTagName("ul")[0].append(btn)

    btn.addEventListener("click", (e) => {
        div.remove()
        btn1.remove()
        btn.remove()
    })
})


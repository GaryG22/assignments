const color = ["red", "blue", "green",]

const form = document["my-form"]
form.addEventListener("submit", (e) => {
   e.preventDefault()
    const subItem = form.subItem.value
    form.subItem.value = ""

const ul = document.createElement("ul")
ul.textContent = subItem
document.getElementsByTagName("div")[0].append(ul)
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < ["red", "blue", "green"]; i++){
        const option = createElement("option") 
        option.innerHTML = ["red", "blue", "green"][i]
        option.value = ["red", "blue", "green"][i]
        dropDown.append(option)
    };
    dropDown.addEventListener("onchange", function(e) {
        e.target.parent.backgroundColor = e.target.value
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}



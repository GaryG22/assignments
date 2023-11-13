const list = document.getElementById("list") //div where our todos will sit
const inputForms = document.inputForms


const updateCompleted = {
    completed: true
}
const updatedNotCompleted = {
    completed: false
}

//get request for the list of todos
function getList(){
    axios.get("https://api.vschool.io/garygritsch/todo")
    .then(response => listDisplay(response.data))
    .catch(error => console.log(error))
}

//formating how our api's will be seen 
function listDisplay(list){
    clear()

    for(let i = 0; i < list.length; i ++){ //looping through each api
        const newItem = document.createElement("div") // creating our div for each element

        const itemTitle = document.createElement("h1") //creating element
        itemTitle.textContent = `${list[i].title}` //assigning it's text content
        itemTitle.setAttribute("class", "data") //setting our attributes name and value

        const itemDescription = document.createElement("h1")
        itemDescription.textContent = `${list[i].description}`
        itemDescription.setAttribute("class", "data")

        const itemPrice = document.createElement("h1")
        itemPrice.textContent = `${list[i].price}`
        itemPrice.setAttribute = ("class", "data")

        const listImg = document.createElement("img")
        listImg.src = list[i].imgUrl

        const completed = document.createElement("h1")
        completed.textContent = "completed"
        completed.setAttribute("class", "data")

        const checkBox = document.createElement("input")
        checkBox.setAttribute("type", "checkbox")

        //appending our api's to the div
        document.getElementById("list").appendChild(newItem)
        newItem.appendChild(itemTitle)
        newItem.appendChild(itemDescription)
        newItem.appendChild(itemPrice)
        newItem.appendChild(completed)
        completed.appendChild(checkBox)
        newItem.appendChild(listImg)

        const id = list[i]._id 

        //creating our delete button
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        newItem.appendChild(deleteBtn)

        //creating our edit button
        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        newItem.appendChild(editBtn)

        //adding styling
        deleteBtn.style.margin = "20px"
        newItem.style.display = "flex"
        newItem.style.flexDirection = "column"
        newItem.style.alignItems = "center"
        newItem.style.border = "solid white 4px"
        newItem.style.padding = "10px"
        newItem.style.background = "lightblue"

        //crossing out todo when checkbox is clicked
        if (list[i].completed === true){
            itemTitle.style.textDecoration = "line-through"
            checkBox.checked = true
        }
        
        //upadting the status of our todos
        checkBox.addEventListener("change", function(){
            if (checkBox.checked === true){
                axios.put("https://api.vschool.io/garygritsch/todo/" + id, updateCompleted)
                .then(response => getList())
                .catch(err => console.log(err))
            } else if (checkBox.checked === false){
                axios.put("https://api.vschool.io/garygritsch/todo/" + id, updatedNotCompleted)
                .then(response => getList())
                .catch(err => console.log(err))
            }
        })
        //functionality of our delete button
        deleteBtn.addEventListener("click", function(){
            axios.delete("https://api.vschool.io/garygritsch/todo/" + id)
            .then(response => getList())
            .catch(err => console.log(err))
        })

        //functionality of our edit button
        editBtn.addEventListener("click", function(){
            itemTitle.remove(this)
            itemDescription.remove(this)
            itemPrice.remove(this)
            listImg.remove(this)

            const imgEdit = document.createElement("input")
            imgEdit.value = listImg.src
            newItem.prepend(imgEdit)
            imgEdit.setAttribute("class", "editInput")

            const editPrice = document.createElement("input")
            editPrice.value = itemPrice.textContent
            newItem.prepend(editPrice)
            editPrice.setAttribute("class", "editInput")

            const editDescription = document.createElement("input")
            editDescription.value = newItem.textContent
            newItem.prepend(editDescription)
            editDescription.setAttribute("class", "editInput")

            const editTitle = document.createElement("input")
            editTitle.value = newItem.textContent
            newItem.prepend(editTitle)
            editTitle.setAttribute("class", "editInput")

            editBtn.remove(this)
            const saveBtn = document.createElement("button")
            saveBtn.textContent = "save"
            newItem.appendChild(saveBtn)

            saveBtn.addEventListener("click", function(){ //adding finctionality to save button

                const updatedInfo = { //updating info based on value
                    title: editTitle.value,
                    description: editDescription.value,
                    price: editPrice.value,
                    imgUrl: imgEdit.value
                }

                console.log(updatedInfo)

                axios.put("https://api.vschool.io/garygritsch/todo/" + id, updatedInfo)
                .then(response => getList())
                .catch(err => console.log(err))

                editTitle.remove(this)
                editDescription.remove(this)
                editPrice.remove(this)
                imgEdit.remove(this)
                saveBtn.remove(this)

                newItem.appendChild(editBtn)
            })
        })
    }
}

getList()

function clear(){
    const div = document.getElementById("list")
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
}

inputForms.addEventListener("submit", function(e){ //adding functionality to input form
    e.preventDefault() 

    const newList = { 
        title: inputForms.title.value,
        description: inputForms.description.value,
        price: inputForms.price.value,
        imgUrl: inputForms.imgUrl.value
    }

    inputForms.title.value = ""
    inputForms.description.value = ""
    inputForms.price.value = ""
    inputForms.imgUrl.value = ""

    axios.post("https://api.vschool.io/garygritsch/todo", newList)  
    .then(result => getList())
    .catch(err => console.log(err))
})
const travelForm = document.travelForm
travelForm.addEventListener("submit", function(e){
    e.preventDefault()

    const restrictions = []

    for( let i = 0; i < travelForm.restrictions.length; i++){
        if (travelForm.restrictions[i].checked){
            restrictions.push("" + travelForm.restrictions[i].value)
        }
    }

alert (
    "First name: " + travelForm.fName.value +
    "\n Last Name: " + travelForm.lName.value +
    "\n Age: " + travelForm.age.value +
    "\n Gender: " + travelForm.gender.value +
    "\n Destination: " + travelForm.destination.value +
    "\n restrictions: " + restrictions
)
})
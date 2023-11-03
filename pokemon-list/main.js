const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)

xhr.send()

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        const pokemonNames = data.objects[0].pokemon
        console.log(data)
        showPokemon(pokemonNames)
    }
}

function showPokemon(pokemon){
    for(let i = 0; i < pokemon.length; i++ ){
        const h2 = document.createElement("h2")
        h2.textContent = pokemon[i].name
        document.body.appendChild(h2)
        const details = document.createElement("p")
        details.textContent = pokemon[i].resource_uri
        h2.appendChild(details)
        details.style.fontSize = "10px"
    }
}


const onskeDivEl = document.querySelector("#onskeDiv")

const json = JSON.parse(localStorage.getItem("julenisseJSON"))

const makeOnske = (onske, i) => {

    const boxEl = document.createElement("div")

    boxEl.className = ""

    boxEl.innerHTML += `<h2>Ønske nummer ${i + 1}</h2>`
    boxEl.innerHTML += `<p>Type: ${onske.type}</p>`
    boxEl.innerHTML += `<p>Onske: ${onske.onske}</p>`
    
    return boxEl
}




json.forEach((onske, i) => onskeDivEl.appendChild(makeOnske(onske, i)));


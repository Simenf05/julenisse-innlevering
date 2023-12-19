
const seOnskeEl = document.querySelector("#seOnske")
const onskeDivEl = document.querySelector("#onskeDiv")

const json = JSON.parse(localStorage.getItem("julenisseJSON"))


seOnskeEl.onclick = () => {

    document.body.id = ""
    seOnskeEl.style.display = "none"
    seOnskeEl.innerHTML = ""

}


const makeOnske = (onske, i) => {

    const boxEl = document.createElement("div")

    boxEl.className = "pointer"

    boxEl.onclick = () => {

        seOnskeEl.innerHTML = ""

        document.body.id = "faded"
        seOnskeEl.style.display = "flex"

        seOnskeEl.innerHTML += `<h2>Ønske nummer ${i + 1}</h2>`
        seOnskeEl.innerHTML += `<p>Type: ${onske.type}</p>`
        seOnskeEl.innerHTML += `<p>Onske: ${onske.onske}</p>`
    }

    boxEl.innerHTML += `<h2>Ønske nummer ${i + 1}</h2>`
    boxEl.innerHTML += `<p>Type: ${onske.type}</p>`
    boxEl.innerHTML += `<p>Onske: ${onske.onske}</p>`
    
    return boxEl
}




json.forEach((onske, i) => onskeDivEl.appendChild(makeOnske(onske, i)));


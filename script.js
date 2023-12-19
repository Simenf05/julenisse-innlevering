

const submitButtonEl = document.querySelector("#submitButton")
const typeGaveEl = document.querySelector("#typeGave")
const finishEl = document.querySelector("#finish")
const wishBoxEl = document.querySelector("#wishBox")

let onske = ""
let type = ""


if (!localStorage.getItem("julenisseJSON")) localStorage.setItem("julenisseJSON", "[]")


const enableSubmit = () => submitButtonEl.disabled = false

function onskeSkriving(e) {

    if (e.target.value.length < 1) {
        submitButtonEl.disabled = true
        return
    }

    onske = e.target.value

    if (type && onske) enableSubmit()
}

function typeChange(e) {

    if (!e.target.value) {
        submitButtonEl.disabled = true
        return
    }

    type = e.target.value

    if (type && onske) enableSubmit()
}


submitButtonEl.onclick = () => {

    finishEl.hidden = false
    wishBoxEl.style.display = "none"

    const json = JSON.parse(localStorage.getItem("julenisseJSON"))

    json.push({
        type: type,
        onske: onske,
    })

    const stringJson = JSON.stringify(json)

    localStorage.setItem("julenisseJSON", stringJson)

}




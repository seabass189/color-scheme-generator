let colors = []
let colorHexes = []
const colorsDiv = document.getElementById('colors')
const hexesDiv = document.getElementById('color-hexes')

reloadColorScheme()

document.getElementById('scheme-form').addEventListener('submit', function (e) {
    e.preventDefault()
    reloadColorScheme()
})

function reloadColorScheme() {
    let color = document.getElementById('color-picker').value.replace('#', '')
    let mode = document.getElementById('mode-select').value
    // console.log(`color ${color}, mode ${mode}`)

    const url = `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=${mode}&count=6`

    // console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const colorObjs = data.colors
            let colorHtml = ''
            let hexesHtml = ''
            colorObjs.forEach(col => {
                // console.log(col.hex.value)
                colorHtml += `<div style="background: ${col.hex.value};"></div>`
                hexesHtml += `<p>${col.hex.value}</p>`
            })

            colorsDiv.innerHTML = colorHtml
            hexesDiv.innerHTML = hexesHtml
        })
}
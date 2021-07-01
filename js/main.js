let character = document.getElementById("character")
const raceUrl = 'https://www.dnd5eapi.co/api/races'
const subraceUrl = 'https://www.dnd5eapi.co/api/subraces' //NEEDS MORE LOGIC
const classUrl = 'https://www.dnd5eapi.co/api/classes'
const backgroundUrl = 'https://www.dnd5eapi.co/api/backgrounds' //NOPE
const skillsUrl = 'https://www.dnd5eapi.co/api/skills'
const weaponUrl = 'https://www.dnd5eapi.co/api/equipment-categories/weapon'
const featuresUrl = 'https://www.dnd5eapi.co/api/features'
const proficienciesUrl = 'https://www.dnd5eapi.co/api/proficiencies'
const languagesUrl = 'https://www.dnd5eapi.co/api/languages' 
const alignmentUrl = 'https://www.dnd5eapi.co/api/alignments'

rollChar(raceUrl, displayRace)
rollChar(subraceUrl, displaySubrace)
rollChar(classUrl, displayClass)
rollChar(backgroundUrl, displayBackground)
rollChar(skillsUrl, displaySkills)
rollChar(weaponUrl, displayWeapon)
rollChar(featuresUrl, displayFeature)
rollChar(proficienciesUrl, displayProficiencies)
rollChar(languagesUrl, displayLanguages)
rollChar(alignmentUrl, displayAlignments)

function rollChar(url, displayData) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayData(data)
        })
        .catch(error => console.error(error))
}

function displayRace(data) {
    const name = data.results[random(data.count)].name
    console.log(data.results)
    character.innerHTML += `<h2>Race:</h2><p class="character">${name}</p>`
}

function displaySubrace(data) {
    const name = data.results[random(data.count)].name
    console.log(data.results)
    character.innerHTML += `<h2>Subrace:</h2><p class="character">${name}</p>`
}

function displayClass(data) {
    const name = data.results[random(data.count)].name
    console.log(data.results)
    character.innerHTML += `<h2>Class:</h2><p class="character">${name}</p>`
}

function displayBackground(data) {
    const name = data.results[random(data.count)].name
    console.log(data.results)
    character.innerHTML += `<h2>Background:</h2><p class="character">${name}</p>`
}

function displaySkills(data) {
    const name = data.results[random(data.count)].name
    console.log(data.results)
    character.innerHTML += `<h2>Skills:</h2><p class="character">${name}</p>`
}

function displayWeapon(data) {
    const length = data.equipment.length
    const name = data.equipment[random(length)].name
    console.log(data.equipment)
    character.innerHTML += `<h2>Weapon:</h2><p class="character">${name}</p>`
}

function displayFeature(data) {
    const name = data.results[random(data.count)].name
    console.log(data.results)
    character.innerHTML += `<h2>Feature:</h2><p class="character">${name}</p>`
}

function displayProficiencies(data) {
    const name = data.results[random(data.count)].name
    console.log(data.results)
    character.innerHTML += `<h2>Proficiency:</h2><p class="character">${name}</p>`
}

function displayLanguages(data) {
    const name = data.results[random(data.count)].name
    console.log(data.results)
    character.innerHTML += `<h2>Languages:</h2><p class="character">${name}</p>`
}

function displayAlignments(data) {
    const name = data.results[random(data.count)].name
    console.log(data.results)
    character.innerHTML += `<h2>Alignment:</h2><p class="character">${name}</p>`
}

function random(max) {
    return Math.floor(Math.random() * max)
}

function locationReplace() {
    window.location.replace("character.html")
}
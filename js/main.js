let keepCharacter = {}

let character = document.getElementById("character")
const raceUrl = 'https://www.dnd5eapi.co/api/races'
const classUrl = 'https://www.dnd5eapi.co/api/classes'
const backgroundUrl = 'https://www.dnd5eapi.co/api/backgrounds' //NOPE
const skillsUrl = 'https://www.dnd5eapi.co/api/skills'
const weaponUrl = 'https://www.dnd5eapi.co/api/equipment-categories/weapon'
const featuresUrl = 'https://www.dnd5eapi.co/api/features'
const proficienciesUrl = 'https://www.dnd5eapi.co/api/proficiencies'
const languageUrl = 'https://www.dnd5eapi.co/api/languages' 
const alignmentUrl = 'https://www.dnd5eapi.co/api/alignments'

function rollCharCall() {
    rollChar(raceUrl, displayRace)
    rollChar(classUrl, displayClass)
    rollChar(backgroundUrl, displayBackground)
    rollChar(skillsUrl, displaySkills)
    rollChar(weaponUrl, displayWeapon)
    rollChar(featuresUrl, displayFeature)
    rollChar(proficienciesUrl, displayProficiencies)
    rollChar(languageUrl, displayLanguage)
    rollChar(alignmentUrl, displayAlignments)
}


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
    character.innerHTML += `<h2>Race:</h2><p id="race" class="character">${name}</p>`
    keepCharacter.race = `${name}`
    console.log(keepCharacter)
}

function displayClass(data) {
    const name = data.results[random(data.count)].name
    character.innerHTML += `<h2>Class:</h2><p id="class" class="character">${name}</p>`
    keepCharacter.classs = `${name}`
}

function displayBackground(data) {
    const name = data.results[random(data.count)].name
    character.innerHTML += `<h2>Background:</h2><p id="background" class="character">${name}</p>`
    keepCharacter.background = `${name}`
}

function displaySkills(data) {
    const name = data.results[random(data.count)].name
    character.innerHTML += `<h2>Skills:</h2><p id="skills" class="character">${name}</p>`
    keepCharacter.skill = `${name}`
}

function displayWeapon(data) {
    const length = data.equipment.length
    const name = data.equipment[random(length)].name
    character.innerHTML += `<h2>Weapon:</h2><p id="weapon" class="character">${name}</p>`
    keepCharacter.weapon = `${name}`
}

function displayFeature(data) {
    const name = data.results[random(data.count)].name
    character.innerHTML += `<h2>Feature:</h2><p id="feature" class="character">${name}</p>`
    keepCharacter.feature = `${name}`
}

function displayProficiencies(data) {
    const name = data.results[random(data.count)].name
    character.innerHTML += `<h2>Proficiency:</h2><p id="proficiency" class="character">${name}</p>`
    keepCharacter.proficiency = `${name}`
}

function displayLanguage(data) {
    const name = data.results[random(data.count)].name
    character.innerHTML += `<h2>Language:</h2><p id="language" class="character">${name}</p>`
    keepCharacter.language = `${name}`
}

function displayAlignments(data) {
    const name = data.results[random(data.count)].name
    character.innerHTML += `<h2>Alignment:</h2><p id="alignment" class="character">${name}</p>`
    keepCharacter.alignment = `${name}`
}

function random(max) {
    return Math.floor(Math.random() * max)
}

function reload() {
    location.reload()
}

function save() {
    const saveChar = document.getElementById('saveChar')
    saveChar.style.display = 'block'
}

const saveButton = document.getElementById('saveBtn')

saveButton.addEventListener('click', (event) => {
    event.preventDefault()
    let charName = document.getElementById('charName')
    localStorage.setItem(charName.value, JSON.stringify(keepCharacter))
    window.location.href = '/charList.html'
})

function getCharList() {   
    Object.keys(localStorage).forEach(function(key){
        let display = document.getElementById('charListDiv')
        console.log(localStorage.getItem(key));

        let keyObject = JSON.parse(localStorage.getItem(key))
        display.innerHTML += `<div class="charList" id="char${key}"><p>Character Name: <span>${key}</span></p><p>Race: <span>${keyObject.race}</span></p><p>Class: <span>${keyObject.classs}</span></p></div>`

        let event = document.getElementById(`char${key}`)
        console.log(`char${key}`)
        // event.addEventListener('click', (event) => {
        //     window.location.href = '/charDetail.html'
        //     let details = document.getElementById('charDetails')
        //     details += `<h2>Race:</h2><p id="race" class="character">keyObject${race}</p>
        //     <h2>Class:</h2><p id="class" class="character">keyObject${classs}</p>
        //     <h2>Background:</h2><p id="background" class="character">keyObject${background}</p>
        //     <h2>Skill:</h2><p id="skill" class="character">keyObject${skills}</p>
        //     <h2>Weapon:</h2><p id="weapon" class="character">keyObject${weapon}</p>
        //     <h2>Feature:</h2><p id="feature" class="character">keyObject${feature}</p>
        //     <h2>Proficiency:</h2><p id="proficiency" class="character">keyObject${proficiency}</p>
        //     <h2>Language:</h2><p id="language" class="character">keyObject${language}</p>
        //     <h2>Alignment:</h2><p id="alignment" class="character">keyObject${alignment}</p>`
        // })
     });
}
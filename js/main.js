function rollChar() {
    let character = document.getElementById("character")
    const raceUrl = 'https://www.dnd5eapi.co/api/races'
    const subraceUrl = 'https://www.dnd5eapi.co/api/subrace'
    const classUrl = 'https://www.dnd5eapi.co/api/class'
    const backgroundUrl = 'https://www.dnd5eapi.co/api/background'
    const skillsUrl = 'https://www.dnd5eapi.co/api/skills'
    const weaponUrl = 'https://www.dnd5eapi.co/api/weapon'
    const featuresUrl = 'https://www.dnd5eapi.co/api/features'
    const proficienciesUrl = 'https://www.dnd5eapi.co/api/proficiencies'
    const languagesUrl = 'https://www.dnd5eapi.co/api/languages'
    // const urls = [raceUrl, subraceUrl, classUrl, backgroundUrl, skillsUrl, weaponUrl, featuresUrl, proficienciesUrl, languagesUrl]
    
    fetch(raceUrl)
        .then(response => response.json())
        .then(data => {
            const race = data.results[random(9)].name
            console.log(data.results)
            character.innerHTML = `<h2>Race:</h2><p class="character">${race}</p>`
        })
        .catch(error => console.error(error))
}

function random(max) {
    return Math.floor(Math.random() * max)
}

function locationReplace() {
    window.location.replace("character.html")
}
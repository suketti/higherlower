let p;

async function getTwoPeople() {
    const res = await fetch("http://localhost:8000/api/twopersons/");
    return await res.json();
}

function compareTwoPeople(state) {
    if(value == "higher"){
        p[1].value > p[0].value ? alert("nyertel") : alert("nem nyertel")
    } else{
        p[1].value < p[0].value ? alert("nyertel") : alert("nem nyertel")
    }
}

getTwoPeople().then(people => {
    p = people;
    document.getElementById('left').innerHTML = "<h1>" + people[0].name + "</h1>"
    document.getElementById('left').style.backgroundImage = `url(${people[0].img.slice(9)}`;
    document.getElementById('left').innerHTML += `<button onclick="compareTwoPeople('higher')">higher</button>`
    document.getElementById('left').innerHTML += `<button onclick="compareTwoPeople('lower')">lower</button>`
    document.getElementById('right').innerHTML = "<h1>" + people[1].name + "</h1>"
    document.getElementById('right').style.backgroundImage = `url(${people[1].img.slice(9)}`;
    document.getElementById('right').innerHTML += `<button onclick="compareTwoPeople('lower')">higher</button>`
    document.getElementById('right').innerHTML += `<button onclick="compareTwoPeople('higher')">lower</button>`
})
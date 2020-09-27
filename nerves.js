
    const starters=[
        {
            name:"Joe Burrow",
            team:"Bengals",
            position:"Quarterback",
            color:"orange2",
            news: "Has swagger for days"
        },
        {
            name:"Joe Mixon",
            team:"Bengals",
            position:"Running Back",
            color:"orange2",
            news: "Yet to breakout"
        },
        {
            name:"Nick Chubb",
            team:"Browns",
            position:"Running Back",
            color:"orange",
            news: "Spearheads the best 1-2 punch in the league"
        },
        {
            name:"Odell Beckham Jr.",
            team:"Browns",
            position:"Wide Receiver",
            color: "orange",
            news: "Massive Upside"
        },
        {
            name:"DK Metcalf",
            team:"Seahawks",
            position:"Wide Receiver",
            color: "teal",
            news: "TD Metcalf"
        },
        {
            name:"Dallas Goedert",
            team:"Eagles",
            position:"Tight End",
            color:"sea",
            news: "One of the few threats the Eagles have"
        },
        {
            name:"Kareem Hunt",
            team:"Browns",
            position:"Running Back",
            color:"orange",
            news:"Part of a devastating 1-2 punch"
        },
        {
            name:"San Diego",
            team:"Chargers",
            position:"D/ST",
            color: "lightblue",
            news:"Fired up with Herbert as the starter"
        },
        {
            name:"Mason Crosby",
            team:"Packers",
            position:"Kicker",
            color:"green",
            news:"Great kicker on an unstoppable offense"
        },
    ]

    for(let i = 0; i < starters.length; i++){
        let color = starters[i].color;
        document.getElementById("mid").innerHTML += `
        <div class="data">
        <div class="data2">
        <h3 class="${color}">${starters[i].name}</h3>
        <h3 class="${color}">${starters[i].team}</h3>
        <h3 class="${color}">${starters[i].position}</h3>
        </div>
        <div class="data3">
        <h3>${starters[i].news}</h3>
        </div>
        </div>
        `
        console.log(starters[i]);
    }

// for(player in starters){
//     console.log(player.starters);
// document.getElementById("mid").innerHTML += `
//     <h3>${player.name}</h3>
//     <h3>${player.team}</h3>
//     <h3>${player.position}</h3>
// `
// }
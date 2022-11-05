function creatGame(player1, hour, player2) {
    return `
<li>
    <img src="assets/logo-${player1}.svg" 
    alt="Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="assets/logo-${player2}.svg" 
    alt="Bandeira do ${player2}"/>
</li>
    `
}

let delay = -0.4;
function creatCard(date, day, games) {
  delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
</div>
    `
}

document.querySelector("#app").innerHTML = `
<header>
<img src="./assets/logo.svg" alt="logo">
</header>
<main id="cards">
${creatCard("24/11", "quinta",
  creatGame("brazil", "16:00", "serbia")
)}
${creatCard("28/11", "segunda",
  creatGame("brazil", "13:00", "suiça") +
  creatGame("portugual", "13:00", "ghana")
)}
${creatCard("02/12", "sexta",
  creatGame("brazil", "16:00", "camerron")
)}
</main>
`
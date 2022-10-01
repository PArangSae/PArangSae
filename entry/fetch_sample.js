const csrf = await fetch("https://playentry.org");
const body = await csrf.text();
const index = body.indexOf("csrf-token") + 21;
const csrfToken = body.slice(index, index + 36);
fetch('https://playentry.org/graphql', {
  method: "POST",
  headers: {"Content-Type": "application/json", "CSRF-Token": csrfToken},
  body: JSON.stringify()});
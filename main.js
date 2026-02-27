import { Scramjet } from "@mercuryworkshop/scramjet";

const sj = new Scramjet({
  wasm: "/scramjet.wasm"
});

sj.start().then(() => {
  document.body.innerHTML += "<p>Scramjet started!</p>";
});

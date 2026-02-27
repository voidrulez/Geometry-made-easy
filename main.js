import * as ScramjetMod from "@mercuryworkshop/scramjet";

const Scramjet = ScramjetMod.default || ScramjetMod.Scramjet || ScramjetMod;

const sj = new Scramjet({});
console.log("Scramjet initialized:", sj);

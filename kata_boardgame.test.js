

const fight = require('./kata_boardgame');
let list_fight = [
    ["p","a"],
]

let list_fight_resposta = [
    
]

test('teste_fight', () => {
  expect(fight("p", "a")).toBe("Attacker");
  
});
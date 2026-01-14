// This file will handle the cart-related functionality of the application.
const prompt = require('prompt-sync')({ sigint: true });

let maxAge=120

let order = {
  items:[],
  view:function(){
    for(let x in this.items)
      console.log(this.items[x][0],':','details: ',this.items[x][1].join(', '),'| number: ', x)
  },
  cancel:function(num){
    let _ =this.items[num]
    console.log('removed:',_[0],':','details: ',_[1].join(', '),'| number: ', num)
    this.items.splice(num,1)
    console.log('\nnew order\n')
    this.view()
  },
  order:function(){
    maxAge=maxAge-this.items.length
    this.items=[]
    console.log('order complete, thank you!')
    console.log('your new max life age is',maxAge,'thank you for your donation of',120-maxAge,'years!!')
  }
}

let __help = `
for help obviously since you are here you probably typed: --help...

ẹ̷͇͈͖̺̝̩͙̜̉͒͘ͅv̵̰͉͕̟̞̭̰̬̓ȩ̵̨͇̻̣̩̦̝͖͋̈́̆̒r̴̢̩̙͇̒̉̈́̓̈́̄̍̃̀̊̐̔͘͜͝͝y̷͚͈̼̯̓͗̇̈́̅͝ ̷̣̗̠̲͙̝̭̳͕̄̿͌̒ǫ̸̡͔̪̼̫͚͓̱̩̃͜r̷̤͚̬͙̙͚̝̙͍͈̗̺̠͋͊d̶̨̻̻̫̥̄̂͑̅ē̷̱ȑ̴̻͓̻̹͌̚͜ ̵̠̬̦̭͔̰͓̬̱͙̣͍̻̝̰͛̉̋̿͂̌̋̓́̍̎͑͘͠ţ̶̧̨̩͎͍̙̭͇̻̰̞̿̋̅̋̊̚̚ḁ̸̘͖̓͒̑̓̎̊̓k̵̹͗̌̀͝e̴͎̭̘̮̹̳̦̫̼̺̲̍̇͌̓̀̋͜͝s̸̨̢̠͖̱̮̠͚̘͓͇̝͖̰̍̍́̾́̇͘ ̶̨̢̹̠̫͔͍͎̘̠̺͙̻͖͇̽̇̑̇͛̈́̄͂̑͝à̷̬̒̏̇́̓̊͐͑̿̽̄̈͝͠ ̸̢̙̜̩̼͓͕̖̲͓̥̪͕́͑̆̋̂͑͘y̸̺̓͐̎̍͜e̵̯̦̽̓́à̴̬̗̮́͂ȓ̴͚̖̦̺̖̼̲̻̆̑̓́͝ ̸̧̢̡̜͈̦̻̜̹̏̋̄͛̈́̄̓͐͒̽̈́̊̀̎͜͠o̵̰͎͎̝̝̝͉̮̳͐̑̉̈́̍̓͝f̶̠̳̹̖̦͈̊̊̍̀͗̐́̊͌̈̄̈́̌̉̒f̶̼͎̤͉̭̜̟̋͐̋̑̈̽͐̽́́̊̃̽͗͝ ̴̨̩̼̺̘̟̖̮̺̠̦͓̃͌̾̅̆ơ̶̡̘̜͕̥͇̳̭̠̠͈̎̏̃̽̓̽͑̓̅̿̊̇̕f̴̛͇͗͌͒̇̓̍͝ͅ ̶͈̲̮̞̼̏̑̒̆̔̂̚͘͝y̸̨͈̦̺̟̹͓̦̞̬̰̭̓̚ö̵̺́̏̾̈́̽̀̓̀̽͗̃̌ư̵̢̢̢̛̦̝̖̼͇̯̖͙̝̓͋̽͌̂̒̓͘ŕ̸̮͕̖̳͇̟̬͔̞̇̏̀̈ ̵̨̛̻̬̝̙̠̃̔̒̽l̵̨̩̰͎̹̄̊̇̔̽̇͋͋͛̇̑͑͆́ͅi̴̢̡̨̮̻̮̤̞̼̞͇̓̀̂̐̏͋̀͗̕͝f̵̼̥͙̼͉̻̦̔̏́́ě̸̯͉̭̤̱͇͔̤̱̭̽͗̽͋̚ ̸͉̱̥͐͊̿̊͐̏͘͝ä̶̧̗̖͕̣̫̅̎̌̇̑̐͘͝ǹ̶͕̙̓̎̇̉͋̍̔͑̈̃̍̚̕d̷̻͙̤̣͛̄̾̽̋ ̷̡̡̮͕̳̜͖͙̠̭͍̮͒̿̌̽͊͂́̕g̸̡̧̲̭̦͕̹͖͓̪̲̮̑̇͘ͅḯ̸̲̱̟͉̹̗̳͎͓̳͖̮̮̯͒̅̍͝ͅv̷͉̳̦̭̀̕e̵͔̘̼͒̌̌͗͒̅s̶̢̡̡̝̰̬͎̭̥̫̭̜̝̈̊͗͛͗̈́ ̴̲̜̞̫̞̻̯̳͕̻̌̂͜į̸̛̹͓̀͊t̵̡̧͈̲̩̺̹̞͈͍̞͛͋̒̂̉ ̸̭̟͎͎̼͉̫̙̦̮̻̈̽̈͋̏̊̈́͆̎ṫ̴̰͉̦͖͓̻̩̝͔̔͗̈̈́͒̃̇̊͜͝ǫ̵̛̞̹͖͈͖͍̭̺̠͗́̋͊̏͂̽̔͋͘͝ ̵̨̻̭̬̗̠͈̥̭̘̺̼̟̽m̷̹̙̊̍͒̍͒̿ḛ̷͆̈́!̶̤̗̥̥̹̩̃̒͌͗̎̌̇̒̎͂̃͒̑͘

to list spells you can order type: --spells

to view order you can type: *view

to remove an item from order type: *cancel {#itemNumber}

to quit type: quit

Thank you for visiting - twilight Sparklepants
`

let __spells=`
these are the spells i have to offer

befriend - Forces friendship with alarming efficiency, unlike Pinkie Pie, who somehow thinks confetti counts as social bonding.  

trust - Lowers their defenses so they tell you everything, unlike Fluttershy, who whispers secrets and still expects you to remember them correctly.  

miss - Leaves a subtle ache when you’re gone, unlike Rainbow Dash, who somehow misses deadlines as much as she misses punctuality.  

invite - Adjusts social logistics so your presence is unavoidable, unlike Rarity, who “forgets” guest lists and calls it elegance.  

lean - Compresses personal space until closeness feels natural, unlike Applejack, who claims “practicality” while elbowing everyone anyway.  

confide - Encourages honesty without prompting, unlike Fluttershy, who somehow overshares and undercommunicates simultaneously.  

prefer - Reorders priorities so you’re noticed first, unlike Spike, who prioritizes literally everything else over basic common sense.  

defend - Activates loyalty instantly, unlike Rainbow Dash, who rushes in first and thinks later—usually about herself.  

recall - Forces memory recall of you, unlike Pinkie Pie, who remembers events that never actually happened.  

return - Makes them come back repeatedly, unlike Starlight Glimmer, whose attempts at “growth” are visible but inconvenient.  

depend - Makes your absence feel wrong, unlike Princess Luna, who dramatically sighs at everyone else’s mistakes but never admits fault.

`

class SpellBook {
  //ps. this array is the ONLY part i used AI for
  static spells = {
  befriend: [
    "So you want to force someone to be your friend!\nCool!\nThey’ll laugh, listen, and swear you’re amazing—for reasons they can’t quite explain.",
    ["Victim"],
    "I remember my forced friendship days!"
  ],

  trust: [
    "Cracks open their instincts like a cheap lock.\nThey’ll hand you secrets wrapped in confidence.",
    ["Victim"],
    "Hope you like oversharing."
  ],

  miss: [
    "Installs a quiet ache.\nYou’ll cross their mind when the room gets still.",
    ["Victim"],
    "Works best after midnight."
  ],

  invite: [
    "Suddenly, it’d feel wrong *not* to include you.\nEven if you weren’t supposed to be there.",
    ["Victim", "Event"],
    "You were always on the list. Obviously."
  ],

  lean: [
    "Shrinks personal space by a few dangerous inches.\nPurely accidental. Repeatedly.",
    ["Victim"],
    "They won’t pull away."
  ],

  confide: [
    "Lowers their voice.\nRaises your importance.",
    ["Victim"],
    "This stays between you… mostly."
  ],

  prefer: [
    "Reorders their priorities without asking.\nGuess who’s suddenly first?",
    ["Victim"],
    "Funny how tastes change."
  ],

  defend: [
    "They’ll back you up before thinking it through.\nLogic comes later.",
    ["Victim"],
    "Ride or die—no refunds."
  ],

  recall: [
    "You show up in their memories more than you should.\nEven in moments you weren’t part of.",
    ["Victim"],
    "Nostalgia is flexible."
  ],

  return: [
    "Makes them circle back.\nJust to check in. Just once. Again.",
    ["Victim"],
    "They swear it was their idea."
  ],

  depend: [
    "Absence feels wrong.\nPresence feels necessary.",
    ["Victim"],
    "Handle with care."
  ]
}
  static cast(command){
    //if command is doc ref
    if(command[0].startsWith('--')){
      eval(`console.log(${command[0].replaceAll('--','__')})`)
      return true
    }
    if(command[0].startsWith('*')){
      eval(`order.${command[0].replaceAll('*','')}(${command.length>1?command[1]:''})`)
      return true
    }
    //if spell no exist
    if(!Object.keys(SpellBook.spells).some(x=>x===command[0]))
      return false
    
    
    // param step start
    let p = 0
    let param = []
    //console.log steps 
    console.log(SpellBook.spells[command[0]][0])

    while(p<SpellBook.spells[command[0]][1].length){
      console.log(`step: ${p+1}/${SpellBook.spells[command[0]][1].length}`)
      param[p] = prompt(`${SpellBook.spells[command[0]][1][p]} $ `)
      if(command==='misorder')return true
      console.log('\n')
      p++
    }
    order.items.push([command[0],[...param]])
    console.log(SpellBook.spells[command[0]][2],command[0], 'has been added to the order!')
    return true
  }

}

module.exports = { SpellBook};

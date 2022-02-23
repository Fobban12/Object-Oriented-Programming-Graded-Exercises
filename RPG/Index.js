const prompts = require('prompts');


class Place{constructor(name, description, detailedInfo)
{
this.name = name;
this.description = description;
this.detailedInfo = detailedInfo;
}
examineArea() 
  {
    console.log("You are at "+ this.name + " It's "+ this.description + " But if you look at it more deeply it's " + this.detailedInfo );
  }
  continueForward() 
  {
      console.log("You move forward, you are at: "+ this.name)
  }
  continueInside(){console.log("You move deeper inside the dungeon, you are at: "+ this.name +"."+" !!! You feel a precence in the room! Examine area to know more.")}

  goBack(){console.log("You go back to where you came from, you are now at: "+ this.name)}

  }

  

class Outside extends Place{constructor(name, description, detailedInfo)
{
super(name, description, detailedInfo);

}}
class Inside extends Place{constructor(name, description, detailedInfo)
{
super(name, description, detailedInfo);
this.monsters = [];

}}


class Entity 
{
  constructor(name, healthPoints, attackDamage, hitChance, description, weaponType) {
      this.name = name;
      this.healthPoints = healthPoints;
      this.attackDamage = attackDamage;
      this.hitChance = hitChance;
      this.description = description;
      this.weaponType = weaponType;
  }
  displayInformation() 
  { 
      console.log("You are "+this.name+" Your HP is: "+this.healthPoints + " Your weapon is: "+this.weaponType +","+ " Damage "+this.attackDamage);
  }
  
  attack(){
    if(Math.random() < this.hitChance/1){ console.log(this.name + " attacked with "+ this.weaponType + " and hit for "+ this.attackDamage)}

    else{console.log(this.name + " attacked but missed. "+ this.weaponType + " hits just air.")}
  }
  displayDetailedInfo(){console.log(this.description)}
}


class Player extends Entity 
{
  constructor(name, healthPoints, attackDamage, hitChance, description, weaponType) 
  {
      super(name, healthPoints, attackDamage, hitChance, description, weaponType);
  }
 stopAndRelax() 
 {
 let healed =  Math.floor((Math.random()*10)+1);
 console.log("You stop and sit to catch your breath. You feel at peace and relax. " + healed +"HP Recovered")  
 }

}

class Creatures extends Entity {constructor(name, healthPoints, attackDamage, hitChance, description, weaponType,amount){ 
  
      super(name, healthPoints, attackDamage, hitChance, description,weaponType);
      this.amount = amount;
}
inspectCreature(){console.log("\nIn the middle of the "+ Area[currentIndex].name+" is " + this.name + " there are "+ this.amount + " of them")}
 
stopAndRelax(){console.log("Hello")}
};
  
class Rat extends Creatures {constructor(name, healthPoints, attackDamage, hitChance, description, weaponType, amount)
 {
 super(name, healthPoints, attackDamage, hitChance, description, weaponType, amount);

 }

}

class Dragon extends Creatures {constructor(name, healthPoints, attackDamage, hitChance, description, weaponType, amount)
{
  super(name, healthPoints, attackDamage, hitChance, description, weaponType, amount);

}}

//Area of the game

let Area = [new Outside("a forest","a dark and gloomy forest with almost no sunlight apart from the small rays going trough the thick and tall trees.", "An forest that has existed for who knows how long, well maybe someone still knows but me? I don't.\nWell, there isn't much to say other than that there are big trees and bushes everywhere, no wildlife to be seen nearby. Could that be because of the dungeon or something else?"), 
new Outside("an Entrance", "a hole in the mountain, probably the dungeon entrance","an entrance of a dungeon, or more like an big hole in the mountain side. If someone didn't know this would look like a normal cave, a slightly bigger one, but normal nonetheless. Looks harmless at a first glance \nbut if you look closely you can see some sort of dark smoke or something coming from within. You feel dread."),
new Inside("Stairway","Stairway leading into the dungeon, just a bit after the Entrance","a spiral stairway, made from some kind of white stone, leading deeper into the dungeon. Seems endless but it can't be. Can it? I steel my resolve and continue down the steps"),
new Inside("Narrow hallway","a narrow path or an hallway after the seemingly endless stairs","an full white stone hallway, same kind of stone as the stair, about the width of 3 adults side to side. But as I go along this long hallway I spot something in the distance. Will I move forward expecting a fight, or will I sneak past whatever it is?"),
new Inside("Big room","a room the size of a football field","a giant room that is connected to the narrow hallway I came from. It's just a giant white room with something on the middle. Something huge and black that contrasts with the surrounding room. Should I check it out by attacking or should I just try to sneak past the big thing? Also on the opposite side is a massive door, that maybe could be opened or not, need to touch it first."),
new Inside("Teleporter"),]; 

//Characters for the game
let player = new Player("Player", 25,9,0.8,"You are an adventurer searching for fortune and fame", "Sword");

let creatures = [new Rat("an abomination",10,2,0.6,"Its a disgusting looking creature, slightly looks like a rat, at least it's a rodent? Or is it?","Teeth",2),
new Dragon("A Corrupted Dragon",25,15,0.2,"It's a black dragon? Or maybe not it's hard to tell because of all the black veins on it's body. Little red can be seen underneath. The creature has no eyes, it seems blind","Claws",1)]



const initialActionChoices = 
[
  { 
    type: 'Continue Forward', 
    value: 'Continue Forward',
  },
  { 
    type: 'Go back', 
    value: 'Go back',
  },
    { 
      title: 'Stop and Relax', 
      value: 'Stop and Relax' 
  },
    { 
      title: 'Examine Area', 
      value: 'Examine Area' 
  },
    { 
    title: 'Display Player Info', 
    value: 'info'
  },
    { 
      title: 'Who Am I?', 
      value: 'detailedInfo'
  },
  { 
    title: 'Attack?', 
    value: 'Attack'
},
    { 
      title: 'Give up and Exit', 
      value: 'Give Up'
  },
];




//For moving forward and back in the game
let currentIndex = 0;
function next(){move()}
function previous(){move(false);}
function move (advance = true)
{
currentIndex =((currentIndex + (advance ? 1 : -1) + Area.length) % Area.length);
}


async function gameLoop() {
    let continueGame = true;

    const response = await prompts
    (
      {
      type: 'select',
      name: 'value',
      message: 'Choose your action',
      choices: initialActionChoices,
      }
    );





function firstLoop(){
    switch(response.value) {
         case 'Continue Forward':
           if (currentIndex < 2){ next();
             Area[currentIndex].continueForward()}
            else{ next(); Area[currentIndex].continueInside()}
            //When at the teleporter room this will go off, and end the game
            if (currentIndex < 5){continueGame = true}
            else if(currentIndex >= 5){console.log("There might've been something inside the room but before you could do anything a strong light came upon you.\nYou have been teleported to an unknown place, your fate also unknown.\n\nThe game has ended.\n") ;continueGame = false}
          break;

          case 'Go back':
            //Can't move back when you are in the first room/forest.
          if (currentIndex < 1){ console.log("You cannot go back now")}
          else  {previous();Area[currentIndex].goBack();}
          break; 

         case 'Stop and Relax':
          player.stopAndRelax();
          break;

         case 'Examine Area':
          Area[currentIndex].examineArea();
          //For the rooms when there are enemies
          if (currentIndex >= 3 && currentIndex < 4){creatures[0].inspectCreature(); creatures[0].displayDetailedInfo();}
          else if(currentIndex >= 4){creatures[1].inspectCreature();creatures[1].displayDetailedInfo();}
          break;

         case 'info':
          player.displayInformation();
          break;

         case 'detailedInfo':
          player.displayDetailedInfo();
          break;

          case 'Attack':
            if(currentIndex<3){console.log("Nothing to attack")}
            //When the player attacks, the monster attacks after. If I knew how I would make it so that their hp would lower and they could be killed but I just couldn't. Pretty much an attack that does nothing. This uses the damage and hitchance, but doesn't lower hp of enemies or yourself.
            else if(currentIndex>=3 && currentIndex < 4){player.attack(); creatures[0].attack();}
            else if(currentIndex>=4){player.attack(); creatures[1].attack();}
            break;

         case 'Give Up':
          console.log("Despite the braveness of our hero, the dungeon was too much to bear. 'I'm sorry everyone but I cannot do this'"+ "\n-------------------------------------------------- \nThe player has left to search for a better purpose \n");
          continueGame = false;
          break;
          }    

 
         ;}
         
         firstLoop();

    if(continueGame) {
      gameLoop();
    }    
    
}


process.stdout.write('\033c'); 

console.log('WELCOME TO THE DUNGEONS OF LORD OBJECT ORIENTUS!')
console.log('================================================')
console.log('After a long and tedious journey you arrive at your destination, the famous, and uncleared dungeon of lord Orientus.\n You sigh and feel relaxed but immediately you snap out of it. "What am I doing? I cant be relaxed near a dangerous dungeon" I remind myself before I start to approach the entrance'
+  '\n What will you do?')
gameLoop();

Typing War
==========

Boilerplate: [`react-redux-starter-kit`](https://github.com/davezuko/react-redux-starter-kit)

## Concept

The game puts the player in charge of an army that's faced against an ever increasing number
of enemies that become more and more powerful as time goes on. In order to push them back,
the player has a number of commands that can give to their army.

## Game Mechanics

### Basics

The game is a typing game where precision and dexterity with the keyboard will be necessary
to reach the higher scores. It's endless, in a sense that it will become more and more
difficult as team passes until the player gets defeated. The objective is to rack up
points and/or survive as long as possible. There's a strategy component as multiple commands
are available and the player has to decide which one to use at the appropriate moment.

### Battle

The game faces the player against a computer controlled opponent. The core ideas behind the
battle are:

* The game is endless, but the enemy should grow stronger until it is practically unstoppable.
* The player should have an increasing number of commands for his army that should help them
overcome (for a while at least) the increase in difficulty.

#### Rules

Both armies have a power meter. In the case of the enemy army, this power meter is ever
increasing. The power meter decreases when receiving attacks, doubling as a health meter. When the player's power meter reaches zero, it's game over. The enemy's power meter never reaches zero, and since its rate of recovery is also ever increasing it doesn't matter much as it will overcome the player eventually anyway. Higher power levels mean more damaging attacks.

* _Maybe the power level shouldn't be the same as the health meter, to avoid the player
inevitably losing when it gets too low?_

#### Player's army

The player's army starts with a fixed power amount. Certain commands cause this amount
to increase. Other commands which attack the enemy calculate their damage based on it.
In practice this means that keeping a high power amount (a more numerous army, a higher morale)
is crucial, since when it decreases too much it will be difficult to make a dent on the
enemy army.

#### Enemy army

The enemy army starts with a fixed power amount, and it increases with each game tick. The
rate of increase also increases, meaning that the enemy army will become more powerful faster
as time passes, keeping the player on their toes and eventually outnumbering them. The enemy
attacks regularly based on its power level. Plans for the future include different kind of units
that replace the fallen ones, and bosses.

#### Commands

The way the player controls their army is by issuing commands by typing them. The player has
to type the commands without errors, as errors block them from issuing new commands for a few
seconds. As the player's power increases, new commands become available.

##### Go!

Incites the troops to move forward, boosting their morale and power level.

##### Attack

Attacks the enemy army, reducing its power level by an amount based on the player's power level.

##### Retreat

The army retreats to safety, increasing its power level even more but leaving them unable to
attack for a couple of seconds.

* _Maybe they should block attacks or receive less damage for a couple of seconds too?_

### Score

The player continuously receives points until they lose. That way the objective is to hold
the enemy as long as possible.

* _Maybe there could be commands that boost the rate at which points are gained at the expense
of something else._
* _Maybe beating bosses or some other enemies should grant bonus points or multipliers._

var attributeData = [
{
	name : "generic.maxHealth",
	info : "The maximum health of this mob; determines the highest Health they may be healed to.",
	defaultBase : 20,
	max : 2147483647,
},
{
	name : "generic.followRange",
	info : "The range in blocks within which a mob with this attribute will target players or other mobs to track. Exiting this range will cause the mob to cease following the player/mob. Actual value used by most mobs is 16; for Zombies it is 40.",
	defaultBase : 32,
	max : 2048,
},
{
	name : "generic.knockbackResistance",
	info : "Resistance to knockback from attacks, explosions, and projectiles. 1.0 is full resistance.",
	defaultBase : 0,
	max : 1,
},
{
	name : "generic.movementSpeed",
	info : "Speed of movement in some unknown metric. The mob's maximum speed in blocks/second is a bit over 43 times this value, but can be affected by various conditions.",
	defaultBase : 0.7,
	max : "infinite",
},
{
	name : "generic.attackDamage",
	info : "Damage dealt by attacks, in half-hearts.",
	defaultBase : 1,
	max : "infinite",
},
{
	name : "horse.jumpStrength",
	info : "Horse jump strength in some unknown metric.",
	defaultBase : 0.7,
	category : "EntityHorse",
	max : 2,
},
{
	name : "zombie.spawnReinforcements",
	info : "Chance that a zombie will spawn another zombie when attacked.",
	defaultBase : 0.7,
	category : "Zombie",
	max : 1,
},
]

var tagData = [
{
	name : "DropChance",
	info : "List of float values from 0 to 1 representing the chance for a carried item to drop. By default these are all 0.085, but they get set to 2 if the mob picks up an item. Items with durability held by a mob that have an associated DropChances greater than 1.0 will retain the defined durability of the item. If the DropChances is 1.0 or lower, the durability is randomized. If the \"Unbreakable\" tag exists on the item, the durability will be assigned as defined, regardless of the DropChances value.",
	editor : "DropChance",
	category : "Mobs",
	difficulty : 0,
},
{
	name : "Anger",
	info : "Anger level. Determines the aggressivity of the creature towards players. 0 for neutral Zombie Pigmen.",
	editor : "integer",
	category : "PigZombie",
	difficulty : 0,
},
{
	name : "SkeletonType",
	info : "0 for normal skeleton, 1 for wither skeleton.",
	editor : "boolean",
	category : "Skeleton",
	difficulty : 0,
},
{
	name : "UUIDLeast",
	info : "The least significant bits of this entity's Universally Unique IDentifier.",
	editor : "string",
	category : "Entity",
	difficulty : 1,
},
{
	name : "UUIDMost",
	info : "The most significant bits of this entity's Universally Unique IDentifier. This is joined with UUIDLeast to form this entity's unique ID",
	editor : "string",
	category : "Entity",
	difficulty : 1,
},
{
	name : "Age",
	info : "Represents the age of the mob in ticks; when negative, the mob is a baby. When 0 or above, the mob is an adult. When above 0, represents the number of ticks before this mob can breed again.",
	editor : "integer",
	category : "Breedable",
	difficulty : 0,
},
{
	name : "Air",
	info : "How much air the entity has, in ticks. Fills to a maximum of 300 in air, giving 15 seconds submerged before the entity starts to drown, and a total of up to 35 seconds before the entity dies (if it has 20 health). Decreases while underwater. If 0 while underwater, the entity loses 1 health per second.",
	editor : "integer",
	category : "Entity",
	difficulty : 1,
},
{
	name : "AttackTime",
	info : "Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.",
	editor : "integer",
	category : "Mobs",
	difficulty : 1,
},
{
	name : "BatFlags",
	info : "1 when hanging upside-down from a block, 0 when flying.",
	editor : "boolean",
	category : "Bat",
	difficulty : 0,
},
{
	name : "CanBreakDoors",
	info : "1 or 0 (true/false) - true if the zombie can break doors (default value is 0).",
	editor : "boolean",
	category : "Zombie",
	difficulty : 0,
},
{
	name : "CanPickUpLoot",
	info : " 1 or 0 (true/false) - true if the mob can pick up loot (wear armor it picks up, use weapons it picks up).",
	editor : "boolean",
	category : "Mobs",
	difficulty : 0,
},
{
	name : "CatType",
	info : "The ID of the skin the ocelot has. 0 is wild ocelot, 1 is tuxuedo, 2 is tabby and 3 is siamese. Does not determine an ocelot's behavior: it will be wild unless its Owner string is not empty, meaning wild ocelots can look like cats and vice versa.",
	editor : "integer",
	category : "Ozelot",
	difficulty : 0,
},
{
	name : "ConversionTime",
	info : "-1 when not being converted back to a villager, positive for the number of ticks until conversion back into a villager. The regeneration effect will parallel this",
	editor : "integer",
	category : "Zombie",
	difficulty : 1,
},
{
	name : "CustomName",
	info : "The custom name of this entity. Appears in player death messages and villager trading interfaces, as well as above the mob's head when your cursor is over it. May not exist.",
	editor : "string",
	category : "Mobs",
	difficulty : 0,
},
{
	name : "CustomNameVisible",
	info : "1 or 0 (true/false) - if true, and this mob has a custom name, it will always appear above their head, whether or not the cursor is pointing at it. May not exist.",
	editor : "boolean",
	category : "Mobs",
	difficulty : 0,
},
{
	name : "AbsorptionAmount",
	info : "Amount of extra health added by Absorption effect",
	editor : "integer",
	category : "Mobs",
	difficulty : 0,
},
{
	name : "DeathTime",
	info : "Number of ticks the mob has been dead for. Controls death animations. 0 when alive.",
	editor : "integer",
	category : "Mobs",
	difficulty : 1,
},
{
	name : "Dimension",
	info : "Unknown usage; entities are only saved in the region files for the dimension they are in. -1 for The Nether, 0 for The Overworld, and 1 for The End.",
	editor : "integer",
	category : "Entity",
	difficulty : 1,
},
{
	name : "ExplosionPower",
	info : "The radius of the explosion created by the fireballs this ghast fires. Default value of 1.",
	editor : "integer",
	category : "Ghast",
	difficulty : 0,
},
{
	name : "ExplosionRadius",
	info : "The radius of the explosion itself, default 3.",
	editor : "integer",
	category : "Creeper",
	difficulty : 0,
},
{
	name : "FallDistance",
	info : "Distance the entity has fallen. Larger values cause more damage when the entity lands.",
	editor : "integer",
	category : "Entity",
	difficulty : 1,
},
{
	name : "Fire",
	info : "Number of ticks until the fire is put out. Negative values reflect how long the entity can stand in fire before burning. Default -1 when not on fire.",
	editor : "integer",
	category : "Entity",
	difficulty : 0,
},
{
	name : "ForcedAge",
	info : "A value of age which will be assigned to this mob when it grows up. Incremented when a baby mob is fed.",
	editor : "integer",
	category : "Breedable",
	difficulty : 0,
},
{
	name : "HealF",
	info : "Amount of health the entity has, in floating point format. A value of 1 is half a heart. If it's set, Health is ignored.",
	editor : "integer",
	category : "Mobs",
	difficulty : 0,
},
{
	name : "Fuse",
	info : "The number of ticks before the creeper will explode (does not affect creepers that fall and explode upon impacting their victim). Default 30",
	editor : "integer",
	category : "Creeper",
	difficulty : 0,
},
{
	name : "HurtTime",
	info : "Number of ticks the mob turns red for after being hit. 0 when not recently hit.",
	editor : "integer",
	category : "Mobs",
	difficulty : 1,
},
{
	name : "InLove",
	info : "Number of ticks until the mob loses its breeding hearts and stops searching for a mate. 0 when not searching for a mate.",
	editor : "integer",
	category : "Breedable",
	difficulty : 0,
},
{
	name : "id",
	info : "Entity ID. This tag does not exist for the Player entity.",
	editor : "integer",
	category : "Entity",
	difficulty : 1,
},
{
	name : "Silent",
	info : "1 or 0 (true/false) - if true, this entity will not make sound. May not exist.",
	editor : "boolean",
	category : "Entity",
	difficulty : 0,
},
{
	name : "ignited",
	info : "1 or 0 (true/false) - Whether the creeper has been ignited by a Flint and Steel.",
	editor : "boolean",
	category : "Creeper",
	difficulty : 1,
},
{
	name : "Invulnerable",
	info : " 1 or 0 (true/false) - true if the entity should not take damage. This applies to living and nonliving entities alike: mobs will not take damage from any source (including potion effects) and objects such as vehicles and item frames cannot be destroyed unless their supports are removed. Note that these entities also cannot be moved by fishing rods, attacks, explosions, or projectiles.",
	editor : "boolean",
	category : "Entity",
	difficulty : 0,
},
{
	name : "IsBaby",
	info : "1 or 0 (true/false) - true if this infected villager is a baby. May be absent on non-villager zombies.",
	editor : "boolean",
	category : "Zombie",
	difficulty : 0,
},
{
	name : "IsChickenJockey",
	info : "1 or 0 (true/false) - Whether or not the chicken is a jockey for a baby zombie. True if the chicken can naturally despawn. Other effects are unknown. Baby zombies can still control a ridden chicken even if this is set false.",
	editor : "boolean",
	category : "Chicken",
	difficulty : 0,
},
{
	name : "IsVillager",
	info : "1 or 0 (true/false) - true if this is an infected villager. May be absent on non-villager zombies.",
	editor : "boolean",
	category : "Zombie",
},
{
	name : "Leashed",
	info : "1 or 0 (true/false) - whether the mob is leashed.",
	editor : "boolean",
	category : "Mobs",
	difficulty : 1,
},
{
	name : "Motion",
	info : "3 TAG_Doubles describing the current dX,dY,dZ velocity of the entity in meters per tick.",
	editor : "XYZ",
	category : "Entity",
	difficulty : 0,
},
{
	name : "OnGround",
	info : "1 or 0 (true/false) - true if the entity is touching the ground.",
	editor : "boolean",
	category : "Entity",
	difficulty : 1,
},
{
	name : "Owner",
	info : " Name of the player that owns this mob. Empty string if no owner.",
	editor : "string",
	category : "Tameable",
	difficulty : 0,
},
{
	name : "PersistenceRequired",
	info : "1 or 0 (true/false) - true if the mob must not despawn naturally.",
	editor : "boolean",
	category : "Mobs",
	difficulty : 0,
},
{
	name : "PortalCooldown",
	info : "The number of ticks before which the entity may be teleported back through a portal of any kind. Initially starts at 900 ticks (45 seconds) after teleportation and counts down to 0.",
	editor : "integer",
	category : "Entity",
	difficulty : 1,
},
{
	name : "powered",
	info : "1 or 0 (true/false) - May not exist. True if the creeper is charged from being struck by lightning.",
	editor : "boolean",
	category : "Creeper",
	difficulty : 0,
},
{
	name : "Sitting",
	info : "1 or 0 (true/false) - true if the mob is sitting.",
	editor : "boolean",
	category : "Tameable",
	difficulty : 0,
},
{
	name : "Size",
	info : "The size of the slime. Note that this value is zero-based, so 0 is the smallest slime, 1 is the next larger, etc. The sizes that spawn naturally are 0, 1, and 3.",
	editor : "integer",
	category : "Slime",
	difficulty : 0,
},
{
	name : "PlayerCreated",
	info : "1 or 0 (true/false) - true if this golem was created by a player.",
	editor : "boolean",
	category : "VillagerGolem",
	difficulty : 1,
},
{
	name : "Invul",
	info : " The number of ticks of invulnerability left after being initially created. 0 once invulnerability has expired.",
	editor : "integer",
	category : "Wither",
	difficulty : 1,
},
{
	name : "Angry",
	info : "1 or 0 (true/false) - true if the wolf is angry.",
	editor : "boolean",
	category : "Wolf",
	difficulty : 0,
},
{
	name : "Sheared",
	info : "1 or 0 (true/false) - true if the sheep has been shorn.",
	editor : "boolean",
	category : "Sheep",
	difficulty : 0,
},
{
	name : "Color",
	info : "0 to 15 - see wool data values for a mapping to colors.",
	editor : "integer",
	category : "Sheep",
	difficulty : 0,
},
{
	name : "Willing",
	info : "1 or 0 (true/false) - true if the villager is willing to mate. Becomes true after certain trades (those which would cause offers to be refreshed), and false after mating.",
	editor : "boolean",
	category : "Villager",
	difficulty : 1,
},
{
	name : "CareerLevel",
	info : "The current level of this villager's trading options. Influences the trading options generated by the villager; if it is greater than their career's maximum level, no new offers are generated. Increments when a trade causes offers to be refreshed. If 0, the next trade to do this will assign a new Career and set CareerLevel to 1.",
	editor : "integer",
	category : "Villager",
	difficulty : 1,
},
{
	name : "Riches",
	info : " Currently unused. Increases by the number of emeralds traded to a villager any time they are traded.",
	editor : "integer",
	category : "Villager",
	difficulty : 1,
},
{
	name : "Bred",
	info : " 1 or 0 (true/false) - Unknown. Remains 0 after breeding. Causes horse to become persistent.",
	editor : "boolean",
	category : "EntityHorse",
	difficulty : 1,
},
{
	name : "Type",
	info : "The type of the horse. 0 = Horse, 1= Donkey, 2= Mule, 3 = Zombie, 4 = Skeleton.",
	editor : "entityHorseType",
	category : "EntityHorse",
	difficulty : 0,
},
{
	name : "ChestedHorse",
	info : "1 or 0 (true/false) - true if the horse has chests. As of 13w39b, a chested horse that is not a donkey or a mule will crash the game.",
	editor : "boolean",
	category : "EntityHorse",
	difficulty : 0,
},
{
	name : "EatingHaystack",
	info : "1 or 0 (true/false) - true if the horse is grazing.",
	editor : "boolean",
	category : "EntityHorse",
	difficulty : 1,
},
{
	name : "HasReproduced",
	info : " 1 or 0 (true/false) - currently unused. Always 0",
	editor : "boolean",
	category : "EntityHorse",
	difficulty : 1,
},
{
	name : "Tame",
	info : " 1 or 0 (true/false) - true if the horse is tamed. (Non players mobs will not be able to ride a tamed horse if it has no saddle)",
	editor : "boolean",
	category : "EntityHorse",
	difficulty : 0,
},
{
	name : "Temper",
	info : " Ranges from 0 to 100; increases with feeding. Higher values make a horse easier to tame.",
	editor : "integer",
	category : "EntityHorse",
	difficulty : 0,
},
{
	name : "OwnerName",
	info : "Contains the name of the player that tamed the horse. Has no effect on behaviour.",
	editor : "string",
	category : "EntityHorse",
	difficulty : 0,
},
{
	name : "Saddle",
	info : "1 or 0 (true/false) - true if there is a saddle on the horse.",
	editor : "boolean",
	category : "EntityHorse",
	difficulty : 0,
},
{
	name : "Lifetime",
	info : " How long the Endermite has existed in ticks. Disappears when this reaches around 2400.",
	editor : "integer",
	category : "Endermite",
	difficulty : 1,
},
{
	name : "EndermiteCount",
	info : " Number of Endermites that have spawned from teleportation by the Enderman (defaults to 0). Chance of spawn from next teleportation is (15 - EndermiteCount)% â€“ i.e., 15% when 0, and 0% when 15.",
	editor : "integer",
	category : "Enderman",
	difficulty : 1,
},
{
	name : "inData",
	info : "Metadata of tile arrow is in.",
	editor : "integer",
	category : "Arrow",
	difficulty : 1,
},
{
	name : "pickup",
	info : "0 = cannot be picked up by players. 1 = can be picked up by players in survival or creative. 2 = can only be picked up by players in creative.",
	editor : "integer",
	category : "Arrow",
	difficulty : 0,
},
{
	name : "player",
	info : "1 or 0 (true/false) - If pickup is not used, and this is true, the arrow can be picked up by players.",
	editor : "boolean",
	category : "Arrow",
	difficulty : 0,
},
{
	name : "life",
	info : "Increments each tick when an arrow is not moving; resets to 0 if it moves. When it ticks to 1200, the arrow despawns.",
	editor : "integer",
	category : "Arrow",
	difficulty : 1,
},
{
	name : "damage",
	info : "Unknown how this affects actual damage inflicted by the arrow. May not be a whole number. 2.0 for normal arrows, and increased 0.5 per level of Power enchantment on the firing bow. If the Power enchantment is present, an additional 0.5 is added on (so Power I gives a bonus of 1.0, while Power II gives 1.5).",
	editor : "double",
	category : "Arrow",
	difficulty : 0,
},
{
	name : "shake",
	info : "The 'shake' when arrows hit a block.",
	editor : "string",
	category : "Shake",
	difficulty : 1,
},
{
	name : "xTile",
	info : " X coordinate of the item's position in the chunk.",
	editor : "double",
	category : "Tile",
	difficulty : 1,
},
{
	name : "yTile",
	info : " Y coordinate of the item's position in the chunk.",
	editor : "double",
	category : "Tile",
	difficulty : 1,
},
{
	name : "zTile",
	info : " Z coordinate of the item's position in the chunk.",
	editor : "double",
	category : "Tile",
	difficulty : 1,
},
{
	name : "inTile",
	info : "ID of tile projectile is in.",
	editor : "integer",
	category : "Tile",
	difficulty : 1,
},
{
	name : "inGround",
	info : "1 or 0 (true/false) - If the Projectile is in the ground or hit the ground already (For arrow pickup; you cannot pickup arrows in the air)",
	editor : "boolean",
	category : "Tile",
	difficulty : 1,
},
{
	name : "ExplosionPower",
	info : "The power and size of the explosion created by the fireball upon impact. Default value 1.",
	editor : "integer",
	category : "Fireball",
	difficulty : 0,
},
{
	name : "ownerName",
	info : "The name of the player this projectile was thrown by.",
	editor : "string",
	category : "Throwable",
	difficulty : 0,
},
{
	name : "potionValue",
	info : "If the Potion tag does not exist, this value is used as the damagevalue of the thrown potion.",
	editor : "string",
	category : "ThrownPotion",
	difficulty : 0,
},
{
	name : "Age",
	info : "The number of ticks the item has been 'untouched'. After 6000 ticks (5 minutes [1]) the item is destroyed. If set to -32768, the Age will not decrease, thus the item will not automatically despawn.",
	editor : "integer",
	category : "Items",
	difficulty : 0,
},
{
	name : "Health",
	info : "The health of the item, which starts at 5. Items take damage from fire, lava, falling anvils, and explosions. The item is destroyed when its health reaches 0.",
	editor : "integer",
	category : "Item",
	difficulty : 0,
},
{
	name : "PickupDelay",
	info : " The number of ticks the item cannot be picked up. Decreases by 1 per tick. If set to 32767, the PickupDelay will not decrease, thus the item can never be picked up.",
	editor : "integer",
	category : "Item",
	difficulty : 0,
},
{
	name : "Owner",
	info : "If not an empty string, only the named player will be able to pick up this item, until it is within 10 seconds of despawning. Used by the give command (and can be set in a summon command) to prevent the wrong player from picking up the spawned item entity.",
	editor : "string",
	category : "Item",
	difficulty : 0,
},
{
	name : "Thrower",
	info : "Set to the name of the player who dropped the item, if dropped by a player. Used by the 'Diamonds to you!' achievement.",
	editor : "string",
	category : "Item",
	difficulty : 0,
},
{
	name : "Health",
	info : "Same properties as Health in Item. However, this value is stored as a byte in saved data, and read as a short but clipped to the range of a byte. As a result, its range is 0-255, always positive, and values exceeding 255 will overflow.",
	editor : "integer",
	category : "XPOrb",
	difficulty : 1,
},
{
	name : "Value",
	info : "The amount of experience the orb gives when picked up.",
	editor : "integer",
	category : "XPOrb",
	difficulty : 0,
},
{
	name : "Elder",
	info : "1 when Elder Guardian (Boss), 0 when normal Guardian.",
	editor : "boolean",
	category : "Guardian",
	difficulty : 0,
},
{
	name : "NoAI",
	info : "1 or 0 (true/false) - If true, the mob's AI will be disabled. The mob will not attempt to move and cannot move, to the extent of not falling when normally able.",
	editor : "boolean",
	category : "Mobs",
	difficulty : 0,
},
{
	name : "DisabledSlots",
	info : "Bit field determining which parts of the Armor Stand can be picked up. 1 for the item hold in the hand, 2 for the boots, 4 for the legs, 8 for the chest and 16 for the helmet. For example, when set to 6, you can't pick up items from boots and legs slots. When set to 31, none of the items can be picked up.",
	editor : "integer",
	category : "ArmorStand",
	difficulty : 0,
},
{
	name : "Invisible",
	info : "1 or 0 (true/false) - if true, ArmorStand will be invisible, although items on it will display.",
	editor : "boolean",
	category : "ArmorStand",
	difficulty : 0,
},
{
	name : "NoBasePlate",
	info : "1 or 0 (true/false) - if true, ArmorStand will not display the base beneath it.",
	editor : "boolean",
	category : "ArmorStand",
	difficulty : 0,
},
{
	name : "NoGravity",
	info : "1 or 0 (true/false) - if true, ArmorStand will not fall if in the air.",
	editor : "boolean",
	category : "ArmorStand",
	difficulty : 0,
},
{
	name : "ShowArms",
	info : " 1 or 0 (true/false) - if true, ArmorStand will display full wooden arms.",
	editor : "boolean",
	category : "ArmorStand",
	difficulty : 0,
},
{
	name : "Small",
	info : "1 or 0 (true/false) - if true, ArmorStand will be much smaller. Compare to a Baby Zombie.",
	editor : "boolean",
	category : "ArmorStand",
	difficulty : 0,
},
{
	name : "CustomDisplayTile",
	info : "Optional. 1 or 0 (true/false) - whether to display the custom tile in this minecart.",
	editor : "boolean",
	category : "Minecarts",
	difficulty : 0,
},
{
	name : "DisplayTile",
	editor : "blockSelect",
	meta : "DisplayData",
	category : "Minecarts",
	difficulty : 0,
},
{
	name : "CustomName",
	info : "Optional. The custom name of this minecart. (\"@\" by default for command block minecarts)",
	editor : "string",
	category : "Minecarts",
	difficulty : 0,
},
{
	name : "DisplayOffset",
	info : "Optional. The offset of the block displayed in the Minecart. Positive values move the block upwards, while negative values move it downwards. A value of 16 will move the block up by exactly one multiple of its height.",
	editor : "integer",
	category : "Minecarts",
	difficulty : 0,
},
{
	name : "Command",
	info : "The command entered into the minecart.",
	editor : "string",
	category : "MinecartCommandBlock",
	difficulty : 0,
},
{
	name : "TrackOutput",
	info : "1 or 0 (true/false) - Determines whether or not the LastOutput will be stored. Can be toggled in the GUI by clicking a button near the \"Previous Output\" textbox. Caption on the button indicates current state: \"O\" if true,\"X\" if false.",
	editor : "boolean",
	category : "MinecartCommandBlock",
	difficulty : 0,
},
{
	name : "SuccessCount",
	info : "Represents the strength of the analog signal output by redstone comparators attached to this minecart. Only updated when the minecart is activated with an activator rail.",
	editor : "integer",
	category : "MinecartCommandBlock",
	difficulty : 1,
},
{
	name : "LastOutput",
	info : "The last line of output generated by the minecart. Still stored even if the gamerule commandBlockOutput is false. Appears in the GUI of the minecart when right-clicked, and includes a timestamp of when the output was produced.",
	editor : "string",
	category : "MinecartCommandBlock",
	difficulty : 1,
},
{
	name : "Fuse",
	info : "Ticks until explosion. Default is 80 (4 seconds).",
	editor : "integer",
	category : "PrimedTnt",
	difficulty : 0,
},
{
	name : "Block",
	info : "The Block ID using the alphabetical ID format: minecraft:stone. Only in and after 1.8.",
	editor : "blockSelect",
	meta : "Data",
	category : "FallingSand",
	difficulty : 0,
},
{
	name : "Time",
	info : "The number of ticks the entity has existed. If set to 0, the moment it ticks to 1, it will vanish if the block at its location has a different ID than the entity's TileID. If the block at its location has the same ID as its TileID when Time ticks from 0 to 1, the block will instead be deleted, and the entity will continue to fall, having overwritten it. (This was the result of Mojang's failed attempt to \"fix\" infinite sand/gravel/dragon egg/anvil/etc. generators by trying to have the falling sand entity delete the duplicated block the next tick) When Time goes above 600, or above 100 while the block is below Y=0, the entity is deleted.",
	editor : "integer",
	category : "FallingSand",
	difficulty : 0,
},
{
	name : "DropItem",
	info : "1 or 0 (true/false) - true if the block should drop an item that can be picked up when it breaks.",
	editor : "boolean",
	category : "FallingSand",
	difficulty : 0,
},
{
	name : "HurtEntities",
	info : "1 or 0 (true/false) - true if the block should hurt entities it falls on.",
	editor : "boolean",
	category : "FallingSand",
	difficulty : 0,
},
{
	name : "FallHurtMax",
	info : "The maximum number of hitpoints of damage to inflict on entities that intersect this FallingSand. For vanilla FallingSand, always 40 (20 hearts).",
	editor : "integer",
	category : "FallingSand",
	difficulty : 0,
},
{
	name : "FallHurtAmount",
	info : "Multiplied by the FallDistance to calculate the amount of damage to inflict. For vanilla FallingSand, always 2.",
	editor : "integer",
	category : "FallingSand",
	difficulty : 1,
},
{
	name : "ItemDropChance",
	info : "The chance the item will drop when the item frame breaks. 1.0 by default.",
	editor : "double",
	category : "ItemFrame",
	difficulty : 0,
},
{
	name : "ItemRotation",
	info : "The number of times the item has been rotated 45 degrees clockwise.",
	editor : "integer",
	category : "ItemFrame",
	difficulty : 0,
},
{
	name : "Motive",
	info : "The name of this painting's art.",
	editor : "string",
	category : "Painting",
	difficulty : 1,
},
]
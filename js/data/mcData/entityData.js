entityData = [{
		name: 'bat',
		display: {
			name: 'Bat'
		},
		image: 'bat.png',
		heart: 6,
		info: 'Bats are flying passive mobs that spawn in caves.',
		class: 'Mob',
		category: ['Entity', 'Mobs']
	},
	{
		name: 'blaze',
		display: {
			name: 'Blaze'
		},
		image: 'blaze.png',
		heart: 20,
		info: 'Blazes are mobs with yellow skin and black eyes found in the Nether.',
		class: 'Mob',
		category: ['Entity', 'Mobs']
	},
	{
		name: 'ender_dragon',
		display: {
			name: 'Enderdragon'
		},
		image: 'enderdragon.png',
		heart: 200,
		info: 'The Ender Dragon is the first official boss mob to appear in Minecraft (with the second being the Wither).',
		class: 'Mob',
		category: ['Entity', 'Mobs']
	},
	{
		name: 'creeper',
		display: {
			name: 'Creeper'
		},
		image: 'creeper.png',
		heart: 20,
		info: 'Creepers are common hostile mobs that explode when close to the player.',
		class: 'Mob',
		category: ['Entity', 'Mobs']
	},
	{
		name: 'cow',
		image: 'cow.png',
		display: {
			name: 'Cow'
		},
		heart: 10,
		info: 'Cows are passive mobs that dwell in the Overworld.',
		class: 'Mob',
		category: ['Entity', 'Mobs', 'Breedable']
	},
	{
		name: 'giant',
		display: {
			name: 'Giant'
		},
		image: 'zombie.png',
		heart: 100,
		info: 'Giants are over-sized mobs that have currently have no purpose other than decoration.',
		class: 'Mob',
		category: ['Entity', 'Mobs']
	},
	{
		name: 'magma_cube',
		display: {
			name: 'Magma Cube'
		},
		image: 'magmacube.png',
		info: 'Magma cubes are hostile mobs with dark red and black skin and red, orange and yellow eyes only found around the Nether. They are considered the Nether equivalent of slimes, with similar behaviors.',
		class: 'Mob',
		heart: 1,
		category: ['Entity', 'Mobs', 'Slime']
	},
	{
		name: 'ozelot',
		display: {
			name: 'Ozelot'
		},
		image: 'ozelot.png',
		info: 'Ocelots are tameable passive mobs.',
		class: 'Mob',
		heart: 10,
		category: ['Entity', 'Mobs', 'Breedable', 'Tameable']
	},
	{
		name: 'pig',
		display: {
			name: 'Pig'
		},
		image: 'pig.png',
		info: 'Pigs are rideable passive mobs.',
		class: 'Mob',
		heart: 10,
		category: ['Entity', 'Mobs', 'Breedable']
	},
	{
		name: 'skeleton',
		display: {
			name: 'Skeleton'
		},
		image: 'skeleton.png',
		heart: 20,
		info: 'Skeletons are undead, ranged hostile mobs equipped with bows.',
		class: 'Mob',
		category: ['Entity', 'Mobs']
	},
	{
		name: 'ghast',
		display: {
			name: 'Ghast'
		},
		image: 'ghast.png',
		heart: 10,
		info: 'Ghasts are huge, floating Nether mobs that shoot explosive fireballs at the player.',
		class: 'Mob',
		category: ['Entity', 'Mobs']
	},
	{
		name: 'slime',
		display: {
			name: 'Slime'
		},
		image: 'slime.png',
		heart: 1,
		info: 'A Slime is a hostile mob that spawns underground and in swamp biomes.',
		class: 'Mob',
		category: ['Entity', 'Mobs']
	},
	{
		name: 'zombie',
		display: {
			name: 'zombie'
		},
		image: 'Zombie.png',
		info: 'Zombies are undead hostile mobs.',
		class: 'Mob',
		heart: 20,
		category: ['Entity', 'Mobs']
	},
	{
		name: 'stray',
		display: {
			name: 'Stray'
		},
		image: 'Stray.png',
		info: '80% of skeletons spawned directly under the sky in ice plains, ice mountains, and ice plains spikes biomes will be strays. ',
		class: 'Mob',
		heart: 20,
		category: ['Entity', 'Mobs']
	},
	{
		name: 'cave_spider',
		image: 'cavespider.png',
		heart: 12,
		info: 'The cave spider is a neutral mob that can inflict poisoning.',
		class: 'Mob',
		category: ['Entity', 'Mobs'],
		display: {
			name: 'Cave Spider'
		}
	},
	{
		name: 'chicken',
		image: 'chicken.png',
		heart: 4,
		info: 'Chickens are egg-laying passive mobs.',
		class: 'Mob',
		category: ['Entity', 'Mobs', 'Breedable'],
		display: {
			name: 'Chicken'
		}
	},
	{
		name: 'mooshroom',
		image: 'mooshroomcow.png',
		info: 'Mooshrooms are unique variations of cows.',
		class: 'Mob',
		heart: 10,
		category: ['Entity', 'Mobs', 'Breedable'],
		display: {
			name: 'Mooshroom'
		}
	},
	{
		name: 'zombie_pigman',
		image: 'zombiepigman.png',
		heart: 20,
		info: 'Zombie Pigmen are neutral mobs that live in the Nether.',
		class: 'Mob',
		category: ['Entity', 'Mobs'],
		display: {
			name: 'Zombie pigamn'
		}
	},
	{
		name: 'snowman',
		image: 'snowgolem.png',
		heart: 4,
		info: 'Snow Golems are the game\'s first utility mob.',
		class: 'Mob',
		category: ['Entity', 'Mobs'],
		display: {
			name: 'Snow Golem'
		}
	},
	{
		name: 'spider',
		image: 'spider.png',
		heart: 16,
		info: 'Spiders are common neutral mobs that have the unique ability to climb walls..',
		class: 'Mob',
		category: ['Entity', 'Mobs'],
		display: {
			name: 'Spider'
		}
	},
	{
		name: 'squid',
		image: 'squid.png',
		heart: 10,
		info: 'Squid are 8-armed mobs that spawn in water.',
		class: 'Mob',
		category: ['Entity', 'Mobs'],
		display: {
			name: 'Squid'
		}
	},
	{
		name: 'enderman',
		image: 'enderman.png',
		info: 'Endermen are 3-block high neutral mobs that can teleport.',
		class: 'Mob',
		heart: 40,
		category: ['Entity', 'Mobs'],
		display: {
			name: 'Enderman'
		}
	},
	{
		name: 'horse',
		image: 'horse.png',
		heart: 15,
		info: 'Horses are tamable mobs that have three in-game variants: Horses, Donkeys, and Mules. The variants can appear in one of several different coat colors that exhibit different markings.',
		class: 'Mob',
		category: ['Entity', 'Mobs'],
		display: {
			name: 'Horse'
		}
	},
	{
		name: 'sheep',
		image: 'sheep.png',
		heart: 8,
		info: 'Sheep are shearable passive mobs.',
		class: 'Mob',
		category: ['Entity', 'Mobs', 'Breedable'],
		display: {
			name: 'Sheep'
		}
	},
	{
		name: 'silverfish',
		image: 'sliverfish.png',
		heart: 8,
		info: 'Silverfish are small, bug-like hostile mobs.',
		class: 'Mob',
		category: ['Entity', 'Mobs'],
		display: {
			name: 'Silverfish'
		}
	},
	{
		name: 'villager',
		image: 'villager.png',
		heart: 20,
		info: 'A Villager is an intelligent passive NPC.',
		class: 'Mob',
		category: ['Entity', 'Mobs'],
		display: {
			name: 'Villager'
		}
	},
	{
		name: 'villager_golem',
		image: 'golem.png',
		heart: 100,
		info: 'Iron golems are large, strong utility mobs that defend villagers.',
		class: 'Mob',
		category: ['Entity', 'Mobs'],
		display: {
			name: 'Villager Golem'
		}
	},
	{
		name: 'witch',
		image: 'witch.png',
		heart: 26,
		info: 'Witches are hostile mobs that use splash potions as their ranged weapon. They also use beneficial potions on themselves defensively.',
		class: 'Mob',
		category: ['Entity', 'Mobs'],
		display: {
			name: 'Witch'
		}
	},
	{
		name: 'wither',
		image: 'wither.png',
		heart: 300,
		info: 'The wither is a floating, three-headed boss mob.',
		class: 'Mob',
		category: ['Entity', 'Mobs'],
		display: {
			name: 'Wither Boss'
		}
	},
	{
		name: 'wolf',
		image: 'wolf.png',
		heart: 8,
		info: 'Wolves are neutral mobs that can be allied with the player.',
		class: 'Mob',
		category: ['Entity', 'Mobs', 'Tameable'],
		display: {
			name: 'Wolf'
		}
	},
	{
		name: 'endermite',
		image: 'endermite.png',
		heart: 8,
		info: 'Endermites are the second smallest mob in Minecraft.',
		class: 'Mob',
		category: ['Entity', 'Mobs'],
		display: {
			name: 'Endermite'
		}
	},
	{
		name: 'guardian',
		image: 'guardian.png',
		heart: 30,
		info: 'The Guardian is an underwater hostile mob. It also has a larger, gray, variant called the elder guardian.',
		class: 'Mob',
		category: ['Entity', 'Mobs'],
		display: {
			name: 'Guardian'
		}
	},
	{
		name: 'rabbit',
		image: 'bunny.png',
		heart: 10,
		info: 'Rabbits (or bunnies) are passive mobs.',
		class: 'Mob',
		category: ['Entity', 'Mobs'],
		display: {
			name: 'Rabbit'
		}
	},
	{
		name: 'arrow',
		image: 'arrow.png',
		heart: 0,
		info: 'Arrows are ammunition for bows and dispensers.',
		class: 'Projectile',
		category: ['Entity', 'Projectiles', 'Shake', 'Tile'],
		display: {
			name: 'Arrow'
		}
	},
	{
		name: 'snowball',
		image: 'snowball.png',
		info: 'Snowballs are throwable items.',
		class: 'Projectile',
		heart: 0,
		category: ['Entity', 'Projectiles', 'Shake', 'Tile', 'Throwable'],
		display: {
			name: 'Snowball'
		}
	},
	{
		name: 'fireball',
		image: 'Fireball.png',
		heart: 0,
		info: 'Fire charges are items which light fires when used.',
		class: 'Projectile',
		category: ['Entity', 'Projectiles', 'Tile'],
		display: {
			name: 'Fireball'
		}
	},
	{
		name: 'small_fireball',
		image: 'SmallFireball.png',
		heart: 0,
		info: 'Fire charges are items which light fires when used.',
		class: 'Projectile',
		category: ['Entity', 'Projectiles', 'Tile'],
		display: {
			name: 'Small Fireball'
		}
	},
	{
		name: 'wither_skull',
		image: 'WitherSkull.png',
		heart: 0,
		info: 'Wither skulls explode with the same force as a fireball.',
		class: 'Projectile',
		category: ['Entity', 'Projectiles', 'Tile'],
		display: {
			name: 'Wither Skull'
		}
	},
	{
		name: 'xp_orb',
		image: 'xporb.png',
		heart: 0,
		info: 'An Experience Orb is an entity similar to an item entity, an orb that fades between a green and yellow color. When collected by a player, that player is awarded experience points.',
		class: 'Item',
		category: ['Entity', 'Items'],
		display: {
			name: 'XP Orb'
		}
	},
	{
		name: 'item',
		image: 'item.png',
		heart: 0,
		info: 'Items are objects which only exist within the player\'s inventory and hands - which means, they cannot be placed in the game world.',
		class: 'Item',
		category: ['Entity', 'Items'],
		display: {
			name: 'Item'
		}
	},
	{
		name: 'armor_stand',
		image: 'ArmorStand.png',
		heart: 2,
		info: 'Armor Stands are entities that are able to hold and display wearable items.',
		class: 'Other',
		category: ['Entity', 'Other'],
		display: {
			name: 'Armor Stand'
		}
	},
	{
		name: 'boat',
		image: 'Boat.png',
		heart: 0,
		info: 'A boat is both an item and a vehicle entity.',
		class: 'Vehicle',
		category: ['Entity', 'Vehicle'],
		display: {
			name: 'Boat'
		}
	},
	{
		name: 'minecart',
		image: 'Minecart.png',
		heart: 0,
		info: 'Minecarts are vehicle entities.Minecarts are placed in the same manner as most blocks; but can only be placed on top of rails.',
		class: 'Vehicle',
		category: ['Entity', 'Vehicle', 'Minecarts'],
		display: {
			name: 'Minecart'
		}
	},
	{
		name: 'chest_minecraft',
		image: 'Storage_Minecart.png',
		heart: 0,
		info: 'Minecarts with Chests (also called Chest Minecarts or Storage Minecarts) are minecarts with chests inside.',
		class: 'Vehicle',
		category: ['Entity', 'Vehicle', 'Minecarts'],
		display: {
			name: 'Minecart Chest'
		}
	},
	{
		name: 'furnace_minecart',
		image: 'Powered_Minecart.png',
		heart: 0,
		info: 'Minecarts with Furnace (also called Furnace Minecarts or Powered Minecarts) is a self-propelling minecart with furnace inside.',
		class: 'Vehicle',
		category: ['Entity', 'Vehicle', 'Minecarts'],
		display: {
			name: 'Minecart Furnace'
		}
	},
	{
		name: 'hopper_minecart',
		image: 'Minecart_with_Hopper.png',
		heart: 0,
		info: 'A Minecart with Hopper is a hopper inside a minecart.',
		class: 'Vehicle',
		category: ['Entity', 'Vehicle', 'Minecarts'],
		display: {
			name: 'Minecart Hopper'
		}
	},
	{
		name: 'tnt_minecart',
		image: 'Minecart_with_TNT.png',
		heart: 0,
		info: 'The Minecart with TNT is a block of TNT inside a minecart.',
		class: 'Vehicle',
		category: ['Entity', 'Vehicle', 'Minecarts'],
		display: {
			name: 'Minecart T N T'
		}
	},
	{
		name: 'spawner_minecart',
		image: 'Minecart_with_Spawner.png',
		heart: 0,
		info: 'A Minecart with Spawner is a combination of a minecart and a monster spawner.',
		class: 'Vehicle',
		category: ['Entity', 'Vehicle', 'Minecarts'],
		display: {
			name: 'Minecart Spawner'
		}
	},
	{
		name: 'commandblock_minecart',
		image: 'Minecart_with_Command_Block.png',
		heart: 0,
		info: 'Minecart with Command Block is a command block inside a minecart.',
		class: 'Vehicle',
		category: ['Entity', 'Vehicle', 'Minecarts'],
		display: {
			name: 'Minecart Command Block'
		}
	},
	{
		name: 'falling_block',
		image: 'FallingSand.png',
		heart: 0,
		info: 'FallingSand has two important NBT Tag fields that change the appearance, movement, and lifetime of the entity. Most notable of the is BlockID.',
		class: 'Dynamic Tile',
		category: ['Entity', 'Dynamic Tile'],
		display: {
			name: 'Falling Block'
		}
	},
	{
		name: 'tnt',
		image: 'PrimedTnt.png',
		heart: 0,
		info: 'TNT is an explosive block.',
		class: 'Dynamic Tile',
		category: ['Entity', 'Dynamic Tile'],
		display: {
			name: 'Primed Tnt'
		}
	},
	{
		name: 'ender_crystal',
		image: 'Endercrystal.png',
		heart: 0,
		info: 'An Ender Crystal is an entity found in The End.',
		class: 'Other',
		category: ['Entity', 'Other'],
		display: {
			name: 'Ender Crystal'
		}
	},
	{
		name: 'eye_of_ender_signal',
		image: 'Eye_of_Ender.png',
		heart: 0,
		info: 'An Eye of Ender (or Ender Eye) is a craftable item used to locate and activate end portals within strongholds.',
		class: 'Other',
		category: ['Entity', 'Other'],
		display: {
			name: 'Eye Of Ender Signal'
		}
	},
	{
		name: 'fireworks_rocket',
		image: 'Firework_rocket.png',
		heart: 0,
		info: 'Firework rockets are items and entities used to create decorative explosions.',
		class: 'Other',
		category: ['Entity', 'Other'],
		display: {
			name: 'Fireworks Rocket '
		}
	},
	{
		name: 'item_frame',
		image: 'Item_Frame.png',
		heart: 0,
		info: 'An Item Frame is an item that displays the item or block that is inside it.',
		class: 'Other',
		category: ['Entity', 'Other'],
		display: {
			name: 'Item Frame'
		}
	},
	{
		name: 'leash_knot',
		image: 'Leash.png',
		heart: 0,
		info: 'Leads also known as leashes, are items used to leash and lead passive mobs.',
		class: 'Other',
		category: ['Entity', 'Other'],
		display: {
			name: 'Leash Knot'
		}
	},
	{
		name: 'painting',
		image: 'Painting.png',
		heart: 0,
		info: 'Paintings are simple, low-resolution versions of a canvas. Paintings are currently non-flammable and can protect flammable blocks from catching on fire.',
		class: 'Other',
		category: ['Entity', 'Other'],
		display: {
			name: 'Painting'
		}
	}
]

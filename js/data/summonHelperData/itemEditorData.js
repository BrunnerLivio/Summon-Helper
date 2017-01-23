//Object options
//{
//	name : %string%,
//	defaultEditor : %string%,
//  defaultCategory : [
//		{
//			text_type : %string%
//			meta : %integer%
//		}
//  ],
//  defaultPreTag : %string%,
//	navigation : [
//		{
//			name : %string%,
//			editor : %string%,
//			info : %string%,
//			texture :  %string%,
//			category : %string%,
//			difficulty : %integer%,
//  	],
//		}
//	]
//}

var itemEditorData = [
	{
		name : "Enchantment",
		defaultEditor : "Enchantment",
		defaultPreTag : "ench",
		navigation : enchantData,
	},
	{
		name : "Tag",
		navigation : [	
			{
				name : "SkullOwner",
				editor : "SkullEditor",
				info : "Skin of the Skull",
				difficulty : 0,
				category : [
					{
						text_type : "skull",
						meta : 3
					}
				],
			},
			{
				name : "CustomName",
				editor : "itemString",
				info : "The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual '@' when using commands such as \"say\" and \"tell\".",
				difficulty : 0,
				category : [
					{
						text_type : "chest",
					},
					{
						text_type: "furnace"
					},
					{
						text_type: "dispenser"
					},
					{
						text_type: "dropper"
					},
					{
						text_type: "hopper"
					},
					{
						text_type: "brewing_stand"
					},
					{
						text_type : "enchanting_table"
					},
					{
						text_type: "command_block"
					}
				],
			},
			{
				name : "Lock",
				editor : "itemString",
				info : "When not blank, prevents the container from being opened unless the opener is holding an item whose name matches this string.",
				difficulty : 0,
				category : [
					{
						text_type : "chest",
					},
					{
						text_type: "furnace"
					},
					{
						text_type: "dispenser"
					},
					{
						text_type: "dropper"
					},
					{
						text_type: "hopper"
					},
					{
						text_type: "brewing_stand"
					},
					{
						text_type : "beacon"
					},
				],
			},
			{
				name : "Levels",
				editor : "itemInteger",
				info : "The number of levels available from the pyramid.",
				difficulty : 0,
				category : [
					{
						text_type : "beacon",
					},
				],
			},
			{
				name : "TransferCooldown",
				editor : "itemInteger",
				info : "Time until the next transfer in game ticks, naturally between 1 and 8 or 0 if there is no transfer.",
				difficulty : 0,
				category : [
					{
						text_type : "hopper",
					},
				],
			},
		],
	},
	{
		name : "Display",
		defaultPreTag : "display",
		navigation : [
			{
				name : "Name",
				editor : "itemString",
				info : "Sets a custom name.",
			},
		],
	},
	{
		name : "Owner",
		defaultPreTag : "Owner",
		defaultCategory : [
			{
				text_type : "skull",
			}
		],
		navigation : [
			{
				name : "Id",
				editor : "itemString",
				info : "UUID of owner.",
				difficulty : 1
			},
			{
				name : "Name",
				editor : "itemString",
				info : "Username of owner.",
				difficulty : 1
			},
		],
	},
]
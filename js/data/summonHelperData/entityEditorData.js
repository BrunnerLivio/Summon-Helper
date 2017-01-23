//Object options
//{
//	name : %string%,
//	defaultEditor : %string%,
//	navigation : [
//		{
//			name : %string%,
//			editor : %string%,
//			info : %info%,
//			texture :  %string%,
//			element : %string%,
//			category : [
//			{
//				text_type : %string%
//				meta : %integer%
//			}
//  	],
//		}
//	]
//}

var entityEditorData = [
	{
		name: "Equipment",
		defaultEditor : "Equipment",
		navigation : [
		{
				name: "Equipment",
				element: 0,
				displayName : "Hand",
			},
			{
				name: "Equipment",
				element: 1,
				displayName : "Boots",
				
			},
			{
				name: "Equipment",
				element: 2,
				displayName : "Leggins",
			},
			{
				name: "Equipment",
				element: 3,
				displayName : "Chestplate",
			},
			{
				name: "Equipment",
				element: 4,
				displayName : "Helmet",
			},
		]
	},
	{
		name : "Tag",
		defaultEditor : "string",
		navigation : tagData,
	},
	{
		name : "Effect",
		defaultEditor : "Effect",
		navigation : effectData,
	},
	{
		name : "Attribute",
		defaultEditor : "Attribute",
		navigation : attributeData,
	},
	
]
const ProductData = {
	title: "FitBit 19 - The Smartest Watch",
	description:
		"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.",
	colorOptions: [
		{
			id: 1,
			styleName: "Black Strap",
			imageUrl: "https://imgur.com/iOeUBV7.png",
		},
		{
			id: 2,
			styleName: "Red Strap",
			imageUrl: "https://imgur.com/PTgQlim.png",
		},
		{
			id: 3,
			styleName: "Blue Strap",
			imageUrl: "https://imgur.com/Mplj1YR.png",
		},
		{
			id: 4,
			styleName: "Purple Strap",
			imageUrl: "https://imgur.com/xSIK4M8.png",
		},
	],
	featureList: ["Time", "Heart Rate"],
};

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;

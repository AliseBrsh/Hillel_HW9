let furniture = [
	{
		type: 'desk',
		price: 27.87
	},
	{
		type: 'closet',
		price: 187.32
	},
	{
		type: 'chair',
		price: 79.29
	},
	{
		type: 'bed',
		price: 239.99
	}
];

let devices = [
	{
		type: 'desktop',
		price: [272, 769]
	},
	{
		type: 'laptop',
		price: [499, 1800]
	},
	{
		type: 'smartphone',
		price: [100, 800]
	},
	{
		type: 'tablet',
		price: [185, 1000]
	},
    {
		type: 'console',
		price: 889
	}
];

let appliances = [
	{
		type: 'oven',
		price: 780
	},
	{
		type: 'microwave',
		price: [50, 1400]
	},
	{
		type: 'mixer',
		price: 215.17
	}
];


function products(arr, nameCategory) {
	
   	return arr.map(function(elem) {

        this.category = nameCategory;
        this.type = elem.type;
        this.price = elem.price;
		let product = new Product(nameCategory, type, price);
		

        return product.render();
    }).join('');

	
};


function Product(category, type, price) {

	this.category = category;
    this.type = type;
    this.price = price;

	
	this.render = function render(){ return (`<tr>
		<td><div "class=div_image"><img src="./images/${category}/${type}.svg" alt="bed" width="50" height="50"></div></td>
		<td class="type">${type}</td>
		<td class="price"><b>${price} USD</b></td>
		</tr>`);
	};

};

let write = document.write(`
<table class = "table">
<th class = "th_header">ICON</th>
<th class = "th_header">NAME</th>
<th class = "th_header">PRICE</th>
${products(furniture, 'furniture')}
${products(devices, 'devices')}
${products(appliances, 'appliances')}
</table>
`);



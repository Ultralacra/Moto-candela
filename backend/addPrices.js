const fs = require('fs');

function updatePrices(filename, min, max) {
	// Read the file
	const data = fs.readFileSync(filename, 'utf8');

	// Parse the JSON
	const items = JSON.parse(data);

	// Update the price for each item
	for (let item of items) {
		const price = Math.random() * (max - min + 1) + min;
		item.price = {
			$numberDecimal: price.toFixed(2)
		}
	}

	// Stringify the JSON
	const updatedData = JSON.stringify(items, null, 2);

	// Write the updated data to the file
	fs.writeFileSync(filename, updatedData, 'utf8');
}

// Update the prices in the motorcycles and replacements files
updatePrices('moto-candela.motorcycles.json', 500, 3000);
updatePrices('moto-candela.replacements.json', 20, 300);
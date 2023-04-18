export default {
	getMenuOptions: () => {
		return get_menus.data.map(m => ({label: m.name, value: m.menu_id}))
	},
	filterProducts: () => {
		const selectedMenuID = menu_select.selectedOptionValue
		return get_products.data.filter(product => product.product_id === selectedMenuID)
	},
	addItemToOrder: () => {
		const product = product_list?.selectedItem
		if (product !== undefined) {
			storeValue('orderProducts', [...(appsmith.store?.orderProducts || []), product])
		}
	},
	get_subtotal: () => {
		const orderProducts = appsmith.store?.orderProducts || []
		return orderProducts.reduce((accumulator, currentValue) => (accumulator + parseFloat(currentValue.price)), 0)
	},
	submit_order: () =>  {
		console.log("Products: ", appsmith.store?.orderProducts)
		console.log("Subtotal: ", subtotal_input.inputText)
		console.log("Tax: ", tax_input.inputText)
		console.log("Fee: ", fee_input.inputText)
		console.log("Tip: ", tip_input.inputText)
	}
}
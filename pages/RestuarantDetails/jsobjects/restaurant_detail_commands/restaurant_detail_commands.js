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
	}
}
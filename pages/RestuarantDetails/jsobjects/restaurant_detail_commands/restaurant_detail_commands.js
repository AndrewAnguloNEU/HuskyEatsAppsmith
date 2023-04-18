export default {
	getMenuOptions: () => {
		return get_menus.data.map(m => ({label: m.name, value: m.menu_id}))
	},
	filterProducts: () => {
		const selectedMenuID = menu_select.selectedOptionValue
		return get_products.data.filter(product => product.product_id === selectedMenuID)
	}
}
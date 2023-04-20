export default {
	refresh_products () {
		showModal('remove_product_modal')
		get_products.run()
	},
	
	add_products_refresh() {
		showModal('add_product_modal')
		get_menus.run()
	},
	
	remove_menu_refresh() {
		showModal('remove_menu_modal')
		get_menus.run()
	}
}
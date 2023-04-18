export default {
	getCurrentStudent: () => {
		console.log(appsmith.store.currentStudent)
	},
	clear: () => {
		clearStore()
	},
	getStudentOrders: () => {
		return appsmith.store?.currentStudent ? get_orders.data.filter(order => (order.student_id == appsmith.store.currentStudent.student_id)) : []
	},
}
export default {
	namespaced: true,
	state: {
		tags: [
			{   
                id: 1,
				title: 'TRAVEL',
                style: {
                    backgroundColor: '#6b3de4'
                }
			},
			{
                id: 2,
				title: 'EXPLORERS',
                style: {
                    backgroundColor: '#d9a34a'
                }
			},
			{
                id: 3,
				title: 'NATURE',
                style: {
                    backgroundColor: '#41a674'
                }
			},
            {
                id: 4,
				title: 'СЕЛЬСКОЕ ХОЗЯЙСТВО',
                style: {
                    backgroundColor: '#41a674'
                }
			},
            {
                id: 5,
				title: 'КОРМА',
                style: {
                    backgroundColor: '#d8a252'
                }
			},
            {
                id: 6,
				title: 'SCIENCE',
                style: {
                    backgroundColor: '#007ac2'
                }
			}
		]
	},
	getters: {
		menuTags(state){
			return state.tags;
		}
	},
	mutations: {

	},
	actions: {
		
	}
}
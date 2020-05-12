export default {
	namespaced: true,
	state: {
		blocks: [
			{
              id: 1,
              nameTag: 'TRAVEL'     
            },
            {
              id: 2,
              style: {
                  gridColumn: 'span 2'
               },
              nameTag: 'EXPLORERS'     
            },
            {
              id: 6,
              nameTag: 'SCIENCE',
              fill: true  
            },
            {
              id: 4,
              nameTag: 'СЕЛЬСКОЕ ХОЗЯЙСТВО'  
            },
            {
              id: 2,
              nameTag: 'EXPLORERS'  
            },
            {
              id: 1,
              style: {
                  gridRow: 'span 2'
               },
              nameTag: 'TRAVEL',
              fill: true
            },
            {
              id: 3,
              nameTag: 'NATURE'
            },
            {
              id: 2,
              nameTag: 'EXPLORERS'
            },
            {
              id: 6,
              nameTag: 'SCIENCE'
            },
            {
              id: 1,
              nameTag: 'TRAVEL' 
            }  
		]
	},
	getters: {
		allBlocks(state){
			return state.blocks;
		}
	},
	mutations: {

	},
	actions: {
		
	}
}
// since we're just using this file to store the directory items, 
// we dont need any actions, just a reducer

// storing component data in reducers makes it EASIER to test

const INITIAL_STATE = {

    sections: [
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1526265218618-bdbe4fdb5360?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fHdvbWFuJTIwc3R5bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                   
                    id: 1,
                    linkUrl: 'shop/womens'                   
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1513269890889-8e4e362e5593?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                    id: 2,
                    linkUrl: 'shop/mens'  
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://images.unsplash.com/photo-1600706721165-7cf5c05fcdeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
                    id: 3,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'shoes',
                    imageUrl: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id: 4,
                    linkUrl: 'shop/shoes'   
                },
                {
			        title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 5,
                    linkUrl: 'shop/hats'
                }
            ]

};

const directoryReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
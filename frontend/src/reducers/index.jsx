import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';

// import { reducer as selectedProduct } from 'modules/selectedProduct';
// import { reducer as findMyLocation } from './findMyLocation';
// import { reducer as shoppingCart } from 'modules/shoppingCart';
// import { reducer as userStores } from './userStores';
// import { reducer as departments } from './departments';
// import { reducer as specialOffers } from 'modules/specialOffers';
// import { reducer as bestSallers } from 'modules/bestSallers';
// import { reducer as yourFavourites } from 'modules/yourFavourites';
// import { reducer as app } from './app';
// import { reducer as quickList } from 'modules/quickList';
// import { reducer as products } from './products';
// import { reducer as auth } from 'modules/auth';
// import { reducer as userProfile } from 'modules/userProfile';
// import { reducer as search } from 'modules/search';
// import { reducer as actions } from 'modules/actions';
// import { reducer as disputeChat } from 'modules/disputeChat';

import { reducer as projects } from 'modules/projects';

export default combineReducers({
    projects,
    router: routerStateReducer,
    form: formReducer,
});

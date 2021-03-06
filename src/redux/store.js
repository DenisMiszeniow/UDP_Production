import { combineReducers, legacy_createStore as createStore } from "redux";
import { contactPageReducer } from "./contact_page_reducer";
import { productsPageReducer} from "./products_reducer";
import {productItemReducer} from './product_item_reducer'
import { servicesReducer } from "./services_reducer";

const reducers = combineReducers(
    {
        productsPage: productsPageReducer,
        productItem: productItemReducer,
        serviceItem: servicesReducer,
        contactPage: contactPageReducer,
    }
)

const store = createStore(reducers)

export default store
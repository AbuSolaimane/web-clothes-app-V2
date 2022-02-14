import { ProductAction } from "./product-action.enum";

export interface ProductEvent {
    type: ProductAction;
    payload?: any;
}

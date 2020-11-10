export interface Product {
    color: string,
    title: string,
    text: string
}

export interface ProductResponse {
    products: Product[];
}
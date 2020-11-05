export interface Product {
    color: number,
    title: string,
    text: string
}

export interface ProductResponse {
    products: Product[];
}
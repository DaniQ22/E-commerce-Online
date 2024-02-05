export interface formProductSave {
    productId: number,
    name: string,
    categoryId: number,
    providerId: string,
    stockProduct: number,
    description: string,
    price: number,
    expirationDate?: Date,
}
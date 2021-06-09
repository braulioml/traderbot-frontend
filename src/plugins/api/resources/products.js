class Product {
    constructor(axios) {
        this.axios = axios
    }

    async list() {
        try {
            const response = await this.axios.get("products");

            return response.data
        } catch (error) {
            throw error
        }
    }
}

export default Product
class Signal {
    constructor(axios) {
        this.axios = axios
    }

    async list() {
        try {
            const response = await this.axios.get("signalRegister");

            return response.data
        } catch (error) {
            throw error
        }
    }

}

export default Signal
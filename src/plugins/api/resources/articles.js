class Article {
    constructor(axios) {
        this.axios = axios
    }

    async list() {
        try {
            const response = await this.axios.get("articles");

            return response.data
        } catch (error) {
            throw error
        }
    }

    async upload(articleData){
        try {
            // const token = store.state.token
            // const config = {
            //     headers: {
            //       Authorization: `Bearer ${token}`,
            //     },
            // }
            const config ={}
        
            const response = await this.axios.post("articles", articleData, config)
            
            return response.data
        }catch(error){
            throw error
        }        
    }
}

export default Article
import store from '@/store/index'

class Order{
    constructor(axios){
        this.axios = axios
    }

    async list(){
        try {
            const token = store.state.token
            const config = {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            }
        
            const response = await this.axios.get("orders", config);
            
            return response.data
        }catch(error){
            throw error
        }
    }

    async send(orderData){
        try {
            const token = store.state.token
            const config = {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            }
        
            const response = await this.axios.post("orders", orderData, config)
            
            return response.data
        }catch(error){
            throw error
        }
    }
}

export default Order
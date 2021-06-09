class Auth{
    constructor(axios){
        this.axios = axios
    }

    async login(credentialsData){
        try {
            const config ={}
            const response = await this.axios.post("auth/login", credentialsData)
            console.log(response.data)
            return response.data
        }catch(error){
            console.log(error)
            //throw error
        }
    }
}

export default Auth
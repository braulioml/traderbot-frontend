import jwtDecode from 'jwt-decode'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//camino de ejecución de VUEX
//1. se llama a una acción (que debe llamar a una mutación)
//2. se ejecuta la mutación (reponsable de hacer los cambios sobre el estado)
//3. cambia el valor de state por el que corresponda (lo modifica una mutación)

export default new Vuex.Store({
  state: {
    cart: [],
    token: null,
    user: null
  },
  mutations: {
    clearProducts(state){
      state.cart = []
    },
    addProduct(state, product) {
      //mutación se encarga de modificar el estado (state)
      const foundItem = state.cart.find((cartItem) => cartItem.id === product._id)

      if (!foundItem) {
        const cartItem = {
          id: product._id,
          title: product.title,
          quantity: 1,
          unitPrice: product.price,
        }

        state.cart.push(cartItem)
      } else {
        foundItem.quantity++
      }
    },
    increaseProduct(state, productId) {
      const foundItem = state.cart.find((cartItem) => cartItem.id === productId)

      if (foundItem) {
        foundItem.quantity++
      }
    },
    decreaseProduct(state, productId) {
      const foundItem = state.cart.find((cartItem) => cartItem.id === productId)

      if (foundItem) {
        if (foundItem.quantity === 1) {
          const index = state.cart.findIndex((item) => item.id === productId)

          state.cart.splice(index, 1)
        } else {
          foundItem.quantity--
        }
      }
    },
    saveToken(state, token = null){
      state.token = token

      if(token){
        state.user = jwtDecode(token)
      }

      if(!token){
        state.user = null
      }
    }
  },
  actions: {
    addToCart(context, product) {
      //lógica de la acción
      console.info(product)

      //ejecuta la mutación
      context.commit('addProduct', product)
    },
    increaseCartItem(context, productId) {
      context.commit('increaseProduct', productId)
    },
    decreaseCartItem(context, productId) {
      context.commit('decreaseProduct', productId)
    },
    emptyCart(context) {
      context.commit('clearProducts')
    },
    login(context, token){
      if(token !== null){
        localStorage.setItem("jwt-token", token)
      }

      context.commit('saveToken', token)
    },
    logout(context){
      localStorage.removeItem("jwt-token")

      context.commit('saveToken')
    }
  },
  getters: {
    isAuth(state){
      return state.token !== null
    },
    token(state){
      return state.token
    },
    currentUser(state){
      return state.user
    },
    cartTotal (state){
      const onlyPrice = state.cart.map(
        (item) => item.unitPrice * item.quantity
      )
      
      return onlyPrice.reduce((acc, current) => acc + current, 0)
    },
    cartProducts (state){
      const onlyQty = state.cart.map(
        (item) => item.quantity
      )
      
      return onlyQty.reduce((acc, current) => acc + current, 0)
    }
  },
  modules: {
  }
})

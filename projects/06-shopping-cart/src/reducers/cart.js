export const cartInitialState = JSON.parse(window.localStorage.getItem('cart'))

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}
export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART:{
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)
      if (productInCartIndex >= 0) {
        /* const newCart = state.map(item => {
          if (id === item.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        }) */
        const newCart = [
          ...state.slice(0, productInCartIndex),
          { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
          ...state.slice(productInCartIndex + 1)
        ]
        updateLocalStorage(newCart)
        return newCart
      }

      const newCart = [
        ...state,
        {
          ...actionPayload, // poduct
          quantity: 1
        }
      ]
      updateLocalStorage(newCart)
      return newCart
    }
    case CART_ACTION_TYPES.REMOVE_FROM_CART:{
      const { id } = actionPayload
      const newCart = state.filter(item => item.id !== id)
      updateLocalStorage(newCart)
      return newCart
    }
    case CART_ACTION_TYPES.CLEAR_CART:
      updateLocalStorage([])
      return []
  }
}

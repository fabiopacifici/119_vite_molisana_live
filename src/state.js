import { reactive } from 'vue';
import axios from 'axios';
// Global state here
export const state = reactive ({
  // State (your  data)
  message: 'This is a test',
  // Actions that change the state
  products: [],
  base_products_api_url: 'http://localhost:3000/products',

  getProducts(url){

    axios.get(url)
      .then(response => {
        console.log(response)
        this.products = response.data
      })
      .catch(err => {
        console.error(err.message)
      })
  }


})
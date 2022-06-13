//const product = 'Socks'

const app = Vue.createApp({
    data(){    //LangeVercie:  data: function (){
        return{
            product: 'Socks',
            image: 'assets/socks_green.png',
            inStock: true,
            inventory: 9,
        }
    }
})

//const product = 'Socks'

const app = Vue.createApp({
    data(){    //LangeVercie:  data: function (){
        return{
            product: 'Socks',
            image: './assets/socks_green.png',
            inStock: false,
            inventory: 3,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 1, color: 'green', image: './assets/socks_green.png', quantity: 50 },
                { id: 2, color: 'blue', image: './assets/socks_blue.png', quantity: 50},
            ],
            sizes: ['40','41','42','43','44' ,'45'],
            cart: 0,
            brand:'Vue Mastery',
        }
    },
    methods:{
        addToCard() {
            this.cart += 1 ;
        },
        updateImg(img){
            this.image = img;  // this.image verwijst naar  image: '',
        },
        RemoveFromCard(){
            if(this.cart !== 0 ){
                this.cart -= 1;
            }
        }
    },
    computed:{
        computedTitle(){
            return this.brand +" "+ this.product
        }
    }
})
const list = ["eee","zz","ee","zzz"]

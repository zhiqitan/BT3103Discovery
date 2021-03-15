<template>
<div>
    <h3>Menu:</h3> 
    <ul>
        <li v-for= "order in selectedItems" v-bind:key= "order[0]">
            {{order[0]}} x {{order[1]}} <br>
        </li>
    </ul>
    <button v-on:click= "findTotal()">Calculate Total</button>
    <p id="prices" v-show= "show">Subtotal: ${{total}} </p>
    <p id="prices" v-show= "show">Grand Total: ${{netTotal.toFixed(2)}}</p>
    <br><br>
    <button v-on:click= "sendOrder()">Submit</button>
        
</div>
    
</template>



<script>
import database from '../firebase.js';
export default {
    name: 'Basket',
    props: {
        selectedItems: {
            type:Array
        }
        
    },
    data() {
        return {
            total: 0,
            netTotal: 0,
            show: false
        }
    },
    methods: {
        findTotal: function() {
            this.show = true;
            this.total= 0; //reset 
            for(let i = 0; i < this.selectedItems.length; i++) {
                this.total += this.selectedItems[i][1] * this.selectedItems[i][2];
            }
            return this.total;
        },
        sendOrder: function() {
            var orders = {};

            for (let j = 0; j < this.selectedItems.length; j++) {
                var ele1 = this.selectedItems[j][0];
                orders[ele1] = this.selectedItems[j][1];
            }
            database.collection('orders').add(orders).then(() => location.reload())
        }
    },
    watch: {
        total: function() {
            this.netTotal = (this.total*1.07);
        }
    }
}
</script>

<style scoped>
    #prices {
        font-size: 20px;
        font-family: Arial;
    }
    p {
        font-size: 25px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    li {
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: 18px;
    }
    button {
        text-align: center;
        background-color: rgb(207, 185, 212);
        font-size: 20px;
        border-radius: 8px;
        padding: 5px 10px;
    }
</style>    

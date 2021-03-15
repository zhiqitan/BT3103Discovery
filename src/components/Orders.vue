<template>
   <div>
    <ul>
      <li v-for="(order,index) in this.orders" :key="index">
        <div v-for="(qty, pdt) in order[1]" :key="pdt.length"> 
          {{pdt}} : {{qty}}      
        </div>
        <button v-bind:id="order[0]" v-on:click="deleteItem($event)" >Delete</button>
        <!--<button v-bind:id="order[0]" v-on:click="route($event)">Modify</button>-->
      </li>
    </ul>
   </div>

</template>

<script>
import database from '../firebase.js';

export default {
    data() {
        return {
            orders: []
        }
    },
    methods: {
       fetchItems : function() {
          database.collection('orders').get().then((querySnapShot) => {
            querySnapShot.forEach(doc => {
              let item=[]
              item[0]=doc.id
              item[1]=doc.data()
              this.orders.push(item)
            }) }) } ,

      deleteItem : function(event) {
        let doc_id = event.target.getAttribute("id"); 
        database.collection('orders')
        .doc(doc_id).delete().then(()=>{
          var filteredOrders = this.orders.filter((itemf)=>itemf[0]!==doc_id);
          this.orders=filteredOrders
        });
      }},
/*
      route : function(event) {


      }},
      */
    created() {
      this.fetchItems()
    }  
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}

button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>


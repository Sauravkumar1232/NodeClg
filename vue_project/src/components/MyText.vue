<template>
<h1 v-if='check'>{{ heading }}</h1>    
<p v-else>{{ subHeading     }}</p>
<h2>Sum {{ a+b }}</h2>
<h2>Sum from function  {{ z}}</h2>

<h2>{{ students[0] }}</h2>

<h1 v-for="(student,index) in students" :key= "index" >{{ student }}</h1>


<input id ="btn" type="button" value="Click" @click="add()"/> 

</template>

<script>
    export default {
        name:'MyText',
        data(){
            return {
                heading:"Welcome to Bharat",
                subHeading:"Welcome to UP",
                check:true,
                a:5,b:4,
                z:0,
                students:[
                    'ram','mohan','gettaa'
                ]
                // result : a+b
            }

        },
        methods:{
            add(){
            //    alert ('ClickMe')
               this.z = this.a+this.b
               this.heading = "RD"

            }
        }
    }
</script>

<style scoped>
h1{
    color:rgb(223, 222, 239)d;
}
#btn{
        color: aqua;
}
</style>
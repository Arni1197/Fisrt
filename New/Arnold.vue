<template>
    <div class="Project" >

    <div class="AboutText" >
        Как Вы думаете, какое любимое блюдо у французов? Это блюдо называется   <span id="Boom111" >{{ Boom }}</span> 
<span @click="NameOfDishes" >Хотите узнать?</span> 
</div>


<div class="Victorina" >
    <span>Давайте подумаем, какой фрукт больше всего любят французцы? </span>
    <input type="text" v-model="Answer" >
    <button @click="FindAnswer" > Узнать</button>
</div>


    <div v-show="InputModel" class="BlockInput"   >
   <div class="MainText" >
    Давайте попробуем приготовить блюдо! Но какое? 
Напишите изделие, которые хотите приготовить, и мы сами Вам предложим блюдо и рецепт к нему! 
Поехали!
   </div> 
<div class="MainInput" >
    <button @click="getWeather" >Узнать</button>
        <input  type="text" v-model="nameInsert" ><br>
        <span v-if="users" >{{ users.results[0].title }}</span>
</div>




<div>

</div>

    </div>


<div class="Film" >
    <span class="FilmsStoka">    Это фильм про Шеф повара
</span>
    <img src="./Adav.jpg" alt="">
    
</div>



<div  class="Porterot" >
    <p class="TextInfo">Это Джеймс Оливер, один ищ лучших поваров в мире!!!
        <img src="./cooking.jpg" alt="">
    </p>
</div>


</div>

<div>
    <RightBlock :AboutME="AboutME" />
</div> 
<div>
    <LeftBlock  :friends="friends" />

</div>




</template>

<script>
import RightBlock from './RightBlock.vue'
import LeftBlock from './LeftBlock.vue'

export default {
    components: {RightBlock, LeftBlock},
    data() {
        return {
            AboutME: false,
            friends: false,
            city: null,
            value34: "",
            id: "",
            info: '',
            //url: 'https://jsonplaceholder.typicode.com/users'  ${this.nameInsert},
            users: null,
            nameInsert: '',
            InputModel: true,
            Boom: "",
            Answer: '',

            

           
           
        }
    },
      mounted() {
        this.getWeather
},


methods: {
    async getWeather() {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=6f3d78c798104672b599ff470995f3ce&query=${this.nameInsert}&maxFat=25&number=2
`)
        const result =  await response.json()
        this.users = result
    },
    NameOfDishes () {
        this.Boom = "Луковый суп"
    },
    FindAnswer () {
        if(this.Answer == 'Лук') {
            alert("Это правильный ответ")}
            else {
                alert("Попрубуйте еще раз!")
            }
        
    },

}







    

 

    
    
    
    


}
        





        
   



</script>

<style scoped >

</style>
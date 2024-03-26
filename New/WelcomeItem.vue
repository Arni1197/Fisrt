<template>
    <div class="WgoleWolrd" >
        <div class="Bbt" >
            <Button @click="WhoWeAre =!WhoWeAre">Узнать кто мы</Button>
            <Button @click="WhatWeDoing =!WhatWeDoing" >Что мы делаем</Button>
            <Button @click="WhatOurHistory =!WhatOurHistory" >Наша история</Button>
        </div>
        <div class="CentralBlock" >
            <div @mouseover="WaterProect=!WaterProect" >Мы создаем лучшие проекты по трем направлениям:</div>
            <div class="DiffrentProjects">
            <p v-if="WaterProect" >Водные проекты</p>
            </div>
            <div class="DiffrentProjects1">
                <p v-if="WaterProect" >Земные проекты </p> 
            </div>
        </div> 

        </div>
        <div class="AnswerThree">
            <p v-if="WhoWeAre" >Это мы!! Самая лучшая компания на свете!!! Ураааа</p>
            <p v-if="WhatWeDoing" >Мы делаем очень классный продукт который понравится людям</p>
            <p v-if="WhatOurHistory" >Мы делаем очень классный продукт который понравится людям</p>
        </div>

        <RouterLink to="/hello" > Hello world</RouterLink>






</template>

<script>
export default {
    data() {
        return {
            WhoWeAre: false,
            WhatWeDoing: false,
            WhatOurHistory: false,
            WaterProect: false,

        }
    },
    methods: {

    }

}

</script>

<style>

</style>
<template>
  <button @click="Timer" >Hello</button>
    <p v-if="mark" >Hello wolrd</p>
    <button @click="Posts" >Get posts</button>
    <p>{{ post }}</p>
    <p>I love you baby</p>
    <p v-if="message" >Very</p>
    <p v-if="message1">much </p>
    <p v-if="hello" >{{ hello}}</p>

</template>

<script>
export default {
  data() {
    return {
      question: true,
      answer: 'Questions usually contain a question mark. ;-)',
      loading: false,
      inpiurVa: false,
      mark: false,
      post: [],
      message: false,
      message1: false,
      hello: null,
    }
  },
  created() {
    setTimeout(() => {
      this.myFunction()
    }, 2000)
    setTimeout(() => {
      this.myFunction1()
    }, 3000)
  },
  watch: {
    inpiurVa(newQuestion) {
      if (newQuestion == true) {
        this.getAnswer()
      }
    }
  },
  methods: {
    Posts () {
      fetch('http://localhost:3000/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
    }
  }

}
  /*
  methods: {
     getAnswer() {
        alert("Hello")
    },
    Timer () {
    setTimeout(() => {
        this.mark = true;
      }, 2000)

  },
  myFunction() {
      this.message = true
    },
    myFunction1 () {
      this.message1 = true

    },
    async Posts () {
      const response = await fetch('http://localhost:3000/comments')
      const output = await response.json()
      this.hello = output
    }

  }
  
}
*/
</script>

<style>


</style>
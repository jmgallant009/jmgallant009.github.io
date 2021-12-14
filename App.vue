<template>
  <div class="app">
    <h1 class="title">🦊 Choose your favorite foxes! 🦊</h1>
    <img class="card" alt="So floofy!" :src="currentFoxUrl" />
    <button class="fav">Fave</button>
    <button class="next">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentFoxUrl: "https://randomfox.ca/images/21.jpg",
    };
  },
  methods: {
    loadFox: async function () {
      const response = await fetch("https://randomfox.ca/floof/");
      const foxData = await response.json();
      console.log(foxData);
    },
  },
  created() {
    this.loadFox();
  },
};
</script>

<style>
body {
  margin: 0;
  color: rgb(255, 102, 0);
  font-family: arial;
  background: rgb(71, 36, 23);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ff9999' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.app {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 500px 100px 1fr;
  grid-template-areas:
    "title title"
    "card card"
    "fav next"
    "favorites favorites";
}

.title {
  grid-area: title;
  font-size: 2em;
  text-align: center;
}

.card {
  grid-area: card;
  display: block;
  width: 100%;
  max-width: 400px;
  height: 500px;
  margin: auto;
  border-radius: 10px;
  border: 8px solid white;
  object-fit: cover;
  overflow: hidden;
  background-color: white;
}

button {
  width: 70px;
  height: 70px;
  margin: 20px 5px;
  border: 8px solid white;
  border-radius: 50%;
  text-align: center;
  font-weight: bold;
  color: transparent;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
}

.next {
  grid-area: next;
  background: url("https://github.com/FrontEndFoxes/curriculum/blob/main/workshops/vue/minis/images/next.jpeg?raw=true")
    center no-repeat;
  background-size: 70px;
}

.fav {
  grid-area: fav;
  background: url("https://github.com/FrontEndFoxes/curriculum/blob/main/workshops/vue/minis/images/heart.png?raw=true")
    no-repeat center;
  background-size: 70px;
  justify-self: end;
}

.fav:hover,
.next:hover {
  opacity: 0.5;
}

h2 {
  text-align: center;
}

.favorites {
  grid-area: favorites;
  overflow-y: auto;
}

.favorites-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.favorites-item {
  position: relative;
  list-style: none;
  margin: 15px;
}

.favorites-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.remove {
  position: absolute;
  bottom: -8px;
  right: -15px;
  height: 30px;
  width: 30px;
  margin: 0;
  border: 2px solid white;
  background: url("https://github.com/FrontEndFoxes/curriculum/blob/main/workshops/vue/minis/images/x.png?raw=true")
    #F44F63 center no-repeat;
  background-size: 10px;
}
</style>

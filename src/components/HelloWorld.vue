<template>
  <div>
    <div class="flex-container">
      <div class="flex-item container">
        <div class="square square-1"></div>
        <div class="square square-2"></div>
        <div class="square square-1"></div>
      </div>
      <div class="flex-item">
        <p class="title">E-Menu Demo</p>
      </div>
      <div class="flex-item container">
        <div class="square square-2"></div>
        <div class="square square-1"></div>
        <div class="square square-2"></div>
      </div>
    </div>
    <div>
      <div
        :class="
          filterMoblieMenu == true ? 'filter-container-mb' : 'filter-container'
        "
        :data-aos="filterMoblieMenu == true ? 'fade-left' : 'fade-right'"
      >
        <a
          href="#targetAll"
          id="targetAll"
          :class="
            filterMoblieMenu == true
              ? 'target filter-item-mb filter-btn-mb'
              : 'target filter-item filter-btn'
          "
          v-on:click="setFilter('')"
        >
          All
        </a>
        <a
          href="#targetFood"
          id="targetFood"
          :class="
            filterMoblieMenu == true
              ? 'target filter-item-mb filter-btn-mb'
              : 'target filter-item filter-btn'
          "
          v-on:click="setFilter('food')"
        >
          Foods
        </a>
        <a
          href="#targetDrink"
          id="targetDrink"
          :class="
            filterMoblieMenu == true
              ? 'target filter-item-mb filter-btn-mb'
              : 'target filter-item filter-btn'
          "
          v-on:click="setFilter('drink')"
        >
          Drinks
        </a>
        <a
          href="#targetSnack"
          id="targetSnack"
          :class="
            filterMoblieMenu == true
              ? 'target filter-item-mb filter-btn-mb'
              : 'target filter-item filter-btn'
          "
          v-on:click="setFilter('snack')"
        >
          Snacks
        </a>
      </div>
      <div class="product-cards">
        <div v-if="filterFood.length > 0" class="product-cards">
          <!-- {{filterFood}} -->
          <div class="card" v-for="item in filterFood" :key="item.id">
            <div
              class="img-cover"
              :data-aos="item.id / 2 != 0 ? 'fade-right' : 'fade-left'"
            >
              <img v-bind:src="item.img" />
              <div class="icon">
                {{ item.price }}
              </div>
            </div>

            <div class="desc">
              <h1>{{ item.name }}</h1>
            </div>
          </div>
        </div>
        <div v-else class="product-cards hidden-filter">
          <div class="card" v-for="item in allFood" :key="item.id">
            <!-- <div v-if="currentFilter === item.type || currentFilter === ''"> -->
            <!-- <div v-if="item"></div> -->
            <!-- {{ item }} -->
            <!-- <div v-if="item.length > 0">
            </div> -->
            <div
              class="img-cover"
              :data-aos="item.id / 2 != 0 ? 'fade-right' : 'fade-left'"
            >
              <img v-bind:src="item.img" />
              <div class="icon">
                {{ item.price }}
              </div>
            </div>

            <div class="desc">
              <h1>{{ item.name }}</h1>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  methods: {
    setFilter: function(filter) {
      let filterArr = [];
      for (let i = 0; i < this.allFood.length; i++) {
        if (this.allFood[i].type == filter) {
          filterArr.push(this.allFood[i]);
        }
      }
      this.filterFood = filterArr;
    },
    handleScroll() {
      // Any code to be executed when the window is scrolled
      // this.isUserScrolling = (window.scrollX > 0);
      if (window.scrollY > Number(295)) {
        this.filterMoblieMenu = true;
        // console.log(this.filterMoblieMenu);
      } else if (window.scrollY >= Number(260)) {
        this.filterMoblieMenu = false;
        // console.log(this.filterMoblieMenu);
      } else {
        // console.log("out");
        this.filterMoblieMenu = false;
      }
      // console.log('calling handleScroll');
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      currentFilter: "",
      filterMoblieMenu: false,
      filterFood: [],
      allFood: [
        {
          id: "1",
          type: "food",
          name: "Egg benedict",
          price: "3.5$",
          img:
            "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          id: "2",
          type: "food",
          name: "Fried egg",
          price: "1.5$",
          img:
            "https://images.pexels.com/photos/722223/pexels-photo-722223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          id: "3",
          type: "food",
          name: "Toast",
          price: "2.5$",
          img:
            "https://images.pexels.com/photos/6294290/pexels-photo-6294290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          id: "4",
          type: "drink",
          name: "Latte",
          price: "3.5$",
          img:
            "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          id: "5",
          type: "drink",
          name: "Americano",
          price: "3.0$",
          img:
            "https://images.pexels.com/photos/6347/coffee-cup-working-happy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          id: "6",
          type: "drink",
          name: "Cappuccino",
          price: "3.5$",
          img:
            "https://images.pexels.com/photos/2638019/pexels-photo-2638019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          id: "7",
          type: "drink",
          name: "Mocha",
          price: "3.0$",
          img:
            "https://images.pexels.com/photos/2836945/pexels-photo-2836945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          id: "8",
          type: "food",
          name: "Spaghetti",
          price: "4.5$",
          img:
            "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: "9",
          type: "food",
          name: "Salad",
          price: "2.5$",
          img:
            "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: "10",
          type: "snack",
          name: "Macaron",
          price: "1.5$",
          img:
            "https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: "11",
          type: "snack",
          name: "Yogurt",
          price: "1.5$",
          img:
            "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: "12",
          type: "snack",
          name: "French fries",
          price: "2.5$",
          img:
            "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: "13",
          type: "snack",
          name: "Cake",
          price: "3.5$",
          img:
            "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: "14",
          type: "food",
          name: "Salmon",
          price: "3.5$",
          img:
            "https://images.pexels.com/photos/3490368/pexels-photo-3490368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: "15",
          type: "snack",
          name: "Pancake",
          price: "1.5$",
          img:
            "https://images.pexels.com/photos/3807397/pexels-photo-3807397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: "16",
          type: "food",
          name: "Steak",
          price: "5.5$",
          img:
            "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: "17",
          type: "snack",
          name: "Ice cream",
          price: "3.5$",
          img:
            "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: "18",
          type: "snack",
          name: "Lemon juice",
          price: "1.5$",
          img:
            "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-section {
  display: flex;

  flex-flow: row wrap;
  justify-content: space-around;

  padding: 0;
  margin: 0;
}
.container {
  display: flex;
}
.square {
  height: 50px;
  width: 10px;
  border-radius: 5px;
  background-color: #000000;
  transform: rotate(45deg);
}
.square-1 {
  background: #467189;
}
.square-2 {
  background: #4dd1c1;
}
.square:not(:first-of-type),
.square:not(:last-of-type) {
  margin: 0 15px;
}
.title {
  text-align: center;
  font-weight: bold;
  font-size: 58px;
  background: linear-gradient(transparent 70%, #ba5023 30%);
  display: inline;
  font-size: 36px;
  margin-top: 40px;
  padding-bottom: 0;
}
.flex-container {
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  list-style: none;
}

.flex-item {
  /* background: tomato; */
  padding: 5px;
  width: auto;
  height: 150px;
  margin-top: 10px;
  /* color: white; */
}

.filter-container {
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  list-style: none;
}

.filter-item {
  padding: 5px;
  width: 10%;
  margin-top: 10px;
  /* color: white; */
}
.filter-btn {
  text-decoration: none;
  background-color: rgb(28, 179, 153);
  color: #ffffff;
  padding: 15px;
  margin: 5px;
  font-size: 15px;
  font-family: Arial;
  border-radius: 25px;
}

.filter-btn:hover {
  cursor: pointer;
}

.filter-container-mb {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  list-style: none;
  position: fixed;
  overflow: hidden;
  z-index: 100;
}

.filter-item-mb {
  padding: 5px;
  width: 100%;
  margin-top: 10px;
  /* color: white; */
}
.filter-btn-mb {
  text-decoration: none;
  background-color: rgb(28, 179, 153);
  color: #ffffff;
  padding: 15px;
  margin: 5px;
  font-size: 15px;
  font-family: Arial;
  border-radius: 25px;
}

:target {
  background-color: #467189;
}

.product-cards {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.card {
  margin: auto;
  width: 350px;
  overflow: hidden;
  border-radius: 20px;
  background: white;
  margin-top: 50px;
  transition: all 0.2s;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}

.card:hover {
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.5);
  transform: translate(-5px, -5px);
}

.card:hover .icon svg {
  animation: iconjln 1s;
}

.img-cover {
  position: relative;
}

.card img {
  width: 350px;
  height: 350px;
  object-fit: cover;
}

.icon {
  position: absolute;
  top: 0;
  padding: 25px;
  right: 0;
  border-bottom-left-radius: 20px;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.desc {
  padding: 1.5em;
  font-family: "Poppins", sans-serif;
}
.desc h1 {
  display: inline;
}
.tdesc {
  margin-bottom: 40px;
  width: 100%;
  height: 50px;
  overflow: auto;
}

.desc a {
  text-decoration: none;
  background-color: dodgerblue;
  padding: 15px 25px;
  color: white;
  border-radius: 15px;
  display: block;
  text-align: center;
  transition: all 0.2s;
}
.desc a:hover {
  background-color: SteelBlue;
}
.desc a:hover svg {
  animation: iconjln 1s;
}

@keyframes iconjln {
  0%,
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
  50% {
    opacity: 0;
    transform: translateX(100%);
  }
  70% {
    opacity: 0;
    transform: translateX(-100%);
  }
}

@media only screen and (max-width: 600px) {
  .title {
    text-align: center;
    font-weight: bold;
    background: linear-gradient(transparent 70%, #ba5023 30%);
    display: inline;
    font-size: 36px;
    margin-top: 40px;
    padding-bottom: 0;
  }
  .flex-container {
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .square {
    height: 50px;
    width: 5px;
    border-radius: 5px;
    /* background-color: #000000; */
    transform: rotate(45deg);
  }
  .square-1 {
    background: #467189;
  }
  .square-2 {
    background: #4dd1c1;
  }
  .square:not(:first-of-type),
  .square:not(:last-of-type) {
    margin: 1px;
  }
  .flex-item {
    width: auto;
    margin-top: 10px;
  }

  .filter-container {
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .filter-item {
    padding: 5px;
    width: 100%;
    margin-top: 10px;
    /* color: white; */
  }
  .filter-btn {
    text-decoration: none;
    background-color: rgb(28, 179, 153);
    color: #ffffff;
    padding: 15px;
    margin: 5px;
    font-size: 15px;
    font-family: Arial;
  }

  .filter-container-mb {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    list-style: none;
    position: fixed;
    overflow: hidden;
    z-index: 100;
  }

  .filter-item-mb {
    width: 90%;
    margin-top: 10px;
    /* color: white; */
  }
  .filter-btn-mb {
    text-decoration: none;
    background-color: rgb(28, 179, 153);
    color: #ffffff;
    padding: 5px;
    font-size: 15px;
    font-family: Arial;
  }
  :target {
    background-color: #467189;
  }
  .hidden-filter {
    display: hidden;
  }
}
</style>

<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <!-- Logo -->
      <a class="navbar-brand" href="/"><h1>PhotoShowcase</h1></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Search -->
      <div class="input-group rounded">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <!-- Shopping Cart -->
      <div class="shopping_cart">
        <a href=""><i class="fas fa-shopping-cart fa-2x"></i></a>
      </div>
      <!-- Price -->
      <div class="price_product" v-show="getActionComponentCourse">
        <div class="btn-group">
          <button type="button" class="btn btn-dark">
            {{ getPriceCourse[0].title }}
          </button>
          <button
            type="button"
            class="btn btn-dark dropdown-toggle dropdown-toggle-split"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul class="dropdown-menu">
            <li v-for="(price, index) in getTypePriceCourse" :key="index">
              <a class="dropdown-item" href="#" @click="ACTIONS_PRICE(index)">{{
                price.title
              }}</a>
            </li>
          </ul>
        </div>
      </div>
      <!--sign Up and sign In  -->
      <div class="SignUpIn">
        <div class="signUp">
          <button type="button" class="btn btn-dark">
            <i class="fas fa-pencil-alt"></i> Sign Up
          </button>
        </div>
        <div class="signIn">
          <button type="button" class="btn btn-primary">
            <i class="fas fa-sign-in-alt"></i> Sign In
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "getTypePriceCourse",
      "getPriceCourse",
      "getActionComponentCourse",
    ]),
  },
  methods: {
    ...mapActions(["ACTIONS_PRICE"]),
  },
  components: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Azeret+Mono:ital,wght@1,600&display=swap");
.header {
  font-family: "Azeret Mono", monospace;
}
.header a h1 {
  font-size: 30px;
}
.shopping_cart a i {
  color: #dddddd;
  margin: 0px 10px;
}
.shopping_cart a i:hover {
  color: #f05454;
}
.SignUpIn{
  /* text-align:center; */
  display:flex;
}
.signIn, .signUp{
  margin: 0px 10px;
  
}
.SignUpIn .signUp :hover{
  color: #DDDDDD;
}
</style>
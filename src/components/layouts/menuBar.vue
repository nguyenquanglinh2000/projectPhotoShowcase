<template>
  <div class="menuBarTemplate">
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-2">
        <a href=""><i class="fas fa-icons"></i>About</a>
      </div>
      <div class="col-sm-2">
        <a href=""><i class="fas fa-graduation-cap"></i> Learning</a>
      </div>
      <div class="col-sm-2">
        <a href=""><i class="fas fa-hand-holding-usd"></i> MarketPlace</a>
      </div>
      <div class="col-sm-2">
        <a href=""><i class="fas fa-book"></i> Blogs</a>
      </div>
      <div class="col-sm-2">
        <a href=""><i class="fas fa-briefcase"></i> Job</a>
      </div>
      <div class="col-sm-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi:wght@700&display=swap");
.menuBarTemplate {
  background-color: #222831;
  border: 1px solid darkgray;
  font-family: "Kaisei HarunoUmi", serif;
  text-align: center;
  padding: 10px 0px;
}
.menuBarTemplate a {
  font-size: 20px;
  color: #dddddd;
  text-decoration: none;
  padding: 10px 20px;
  transition: 0.6s;
  /* border-bottom: 5px solid blue; */
}
.menuBarTemplate a:hover {
  background-color: #485363;
  color: white;
}
</style>
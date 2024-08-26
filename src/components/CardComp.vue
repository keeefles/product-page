<template>
  <div class="card">
    <div class="cardHeader">
      <slot name="card-header"></slot>
    </div>
    <div class="cardBody">
      <slot name="card-body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComp",
};
</script>

<style scoped>
.card {
  width: 18rem;
  margin: 0.5rem;
}
img{
  width: 200px;
  aspect-ratio: 1/1.25;
}
.btn {
  border-radius: 30px;
  color: #fff;
  background-color: #4E96D3;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: .4s;
}
.btn:hover{
  background-color: #1d3557;
  color: #fff;
  transition: 1s;
  padding: 10px;
  font-size: small;
}
.card-deck {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 10px;
}
.card{
    margin: 20px auto;
    height: auto;
    border-radius: 15px;
}
.card:hover {
  border: none;
  box-shadow: 10px 5px 15px 0px #4E96D3;
}
.card-img-top {
  height: 160px;
  width: 18rem;
  display: flex;
  margin: auto;
}
</style>

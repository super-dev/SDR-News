<template>
  <header>
    <img class="logo" src="./assets/logo.png">
    <h1>Web Development News</h1>
  </header>
  <div class="container">
    <div class="grid-container">
      <Subreddit name="web_design"></Subreddit>
      <Subreddit name="webdev"></Subreddit>
      <Subreddit name="frontend"></Subreddit>
      <Subreddit name="css"></Subreddit>
      <Subreddit name="programmerhumor"></Subreddit>
      <Subreddit name="javascript"></Subreddit>
    </div>
  </div>
  <footer>
    <div class="container">
      <p>
        To get a better understanding of how this boilerplate works, check out
        <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
        It is also recommended to go through the docs for
        <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
        <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
        If you have any issues with the setup, please file an issue at this boilerplate's
        <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
      </p>
      <p>
        You may also want to checkout
        <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
        <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
      </p>
    </div>
  </footer>
</template>

<script>
import Subreddit from './components/Subreddit'


export default {
  components: {
    Subreddit
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

a{
	text-decoration: none;
}

a:hover{
	text-decoration: underline;
}

html{
	font: normal 16px/24px sans-serif;
	color: #333;
	background-color: #f9f9f9;
}
body {
  padding: 30px;
}

header {
  text-align: center;
}

.container{
	max-width: 1250px;
  margin: 0 auto;
}

.grid-container {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;  
	padding: 27px 20px;
	margin: 30px auto 50px;
	background-color: #fff;
	box-shadow: 0 0 1px #ccc;
}

.logo {
  width: 100px;
  height: 100px
}
</style>

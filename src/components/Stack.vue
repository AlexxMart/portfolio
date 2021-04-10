<template>
  <div id="stack">
    <h2>Results From My Pluralsight IQ Tests</h2>
    <div class="pluralsight-grid">
      <img
        v-scroll-reveal.reset="{ delay: 300 }"
        v-for="item in pluralsightGrid"
        :key="item.title"
        :src="item.image"
        :title="item.title"
        :alt="item.title"
      />
    </div>

    <h2>My Stack</h2>
    <p>Technologies I Use</p>
    <div class="stack-grid">
      <img
        v-scroll-reveal.reset="{ delay: 450 }"
        v-for="item in techGrid"
        :key="item.title"
        :src="item.logo"
        :title="item.title"
        :alt="item.title"
        class="tech-logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      techGrid: [
        {
          logo: require("../assets/icons/html.png"),
          title: "HTML5",
        },
        {
          logo: require("../assets/icons/css.png"),
          title: "CSS3",
        },
        {
          logo: require("../assets/icons/js.png"),
          title: "JS",
        },
        {
          logo: require("../assets/icons/bootstrap.png"),
          title: "Bootstrap",
        },
        {
          logo: require("../assets/icons/jQuery.png"),
          title: "jQuery",
        },
        {
          logo: require("../assets/icons/webpack.png"),
          title: "WebPack",
        },
        {
          logo: require("../assets/icons/react.png"),
          title: "React",
        },
        {
          logo: require("../assets/icons/next.png"),
          title: "NextJS",
        },
        {
          logo: require("../assets/icons/redux.png"),
          title: "Redux",
        },
        {
          logo: require("../assets/icons/heroku.png"),
          title: "Heroku",
        },
        {
          logo: require("../assets/icons/github.png"),
          title: "GitHub",
        },
        {
          logo: require("../assets/icons/vue.png"),
          title: "VueJS",
        },
        {
          logo: require("../assets/icons/nuxt.png"),
          title: "Nuxt",
        },
      ],
      pluralsightGrid: [
        {
          image: require("../assets/pluralsight/htmlScore.png"),
          title: "HTML5 Score",
        },
        {
          image: require("../assets/pluralsight/cssScore.png"),
          title: "CSS3 Score",
        },
        {
          image: require("../assets/pluralsight/jsScore.png"),
          title: "JavaScript Score",
        },
        {
          image: require("../assets/pluralsight/reactScore.png"),
          title: "React Score",
        },
        {
          image: require("../assets/pluralsight/reduxScore.png"),
          title: "Redux Score",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#stack > p {
  text-align: center;
  font-family: "Roboto Mono";
  font-size: 1.1em;
  color: #232323;
}

.stack-grid,
.pluralsight-grid {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #ececec;
  padding: 40px;
  width: 100%;
}

.pluralsight-grid {
  background-color: #0d0f12;
}

.stack-grid > .tech-logo {
  max-height: 100px;
  margin: 30px 60px;
}
</style>
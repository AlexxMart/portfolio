<template>
  <div>
    <div id="progressBar"></div>
    <div id="progressBarContainer"></div>
    <nav id="navBar">
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#stack">My Stack</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contactMe">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#progressBar {
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  background: linear-gradient(to top, #181c20, #28c1f6);
  height: 0;
  opacity: 0;
}

#navBar {
  top: 0;
  position: fixed;
  background-color: #242424;
  z-index: 10;
  width: 100%;
}

#navBar > ul {
  display: flex;
	justify-content: space-around;
  width: 80%;
  margin: 0 auto;
}

#navBar > ul > li {
  list-style: none;
  width: 100%;
  transition: 0.3s;
}

#navBar > ul > li:hover {
  background-color: #eff2fe;
  transition: 0.3s;

  a {
    color: #242424;
  }
}

#navBar > ul > li > a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 100%;
  text-decoration: none;
  color: #eff2fe;
  font-family: "Roboto Mono";
  font-size: 20px;
  transition: 0.3s;
}

#navBar > ul > li > a:hover {
  color: #242424;
  transition: 0.3s;
}
</style>
<template>
  <div id="app">
    <nav-bar />

    <div class="main-wrapper">
      <div id="about">
        <h2>Bio</h2>
        <img
          id="profile-picture"
          src="https://res.cloudinary.com/dqjmv8wtt/image/upload/v1680030945/07854081-457C-4083-80B7-C4EC606E17F1_jvmxi3.jpg"
          alt="Awesome selfie"
        />
        <div class="bio">
          <p>
            Hello! My name is Alexx Martínez and I am a Web and Mobile Developer
            from El Salvador, Central America.
          </p>

          <p>
            I have 5+ years of professional experience working Front-End and Back-End
            Technologies and Frameworks, REST and GraphQL APIs and the SCRUM
            methodology.
          </p>

          <p>
            I aim to deliver pixel-perfect solutions that are user friendly,
            implementing web accesibility best practices, and thoroughly
            planning structures for the projects to make them easy to maintain
            and understand.
          </p>
        </div>
      </div>

      <stack />
      <projects-grid />

      <footer id="contactMe">
        <h2>Contact Me</h2>
        <div class="contact-grid">
          <a
            href="https://github.com/AlexxMart"
            target="_blank"
            rel="noreferrer noopener"
            ><font-awesome-icon :icon="['fab', 'github']"
          /></a>

          <a
            href="https://www.freecodecamp.org/alexxmart"
            target="_blank"
            rel="noreferrer noopener"
            ><font-awesome-icon :icon="['fab', 'free-code-camp']"
          /></a>

          <a
            href="https://www.linkedin.com/in/oscar-alexander-mata-5227a213a/"
            target="_blank"
            rel="noreferrer noopener"
            ><font-awesome-icon :icon="['fab', 'linkedin']"
          /></a>

          <a
            href="https://codepen.io/Alexxander/"
            target="_blank"
            rel="noreferrer noopener"
            ><font-awesome-icon :icon="['fab', 'codepen']"
          /></a>

          <a
            href="https://www.instagram.com/devalexxander/"
            target="_blank"
            rel="noreferrer noopener"
            ><font-awesome-icon :icon="['fab', 'instagram']"
          /></a>

          <a
            href="https://twitter.com/alexxander_dev"
            target="_blank"
            rel="noreferrer noopener"
            ><font-awesome-icon :icon="['fab', 'twitter']"
          /></a>

          <a class="email" href="mailto:devalexander19@gmail.com"
            ><font-awesome-icon :icon="['fa', 'envelope']" />
            <span>devalexander19@gmail.com</span></a
          >
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Stack from "./components/Stack.vue";
import ProjectsGrid from "./components/ProjectsGrid.vue";

export default {
  components: {
    NavBar,
    Stack,
    ProjectsGrid,
  },
  beforeCreate() {
    document.title = "Alexx's Portfolio";
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:600|Open+Sans|Roboto+Mono");

html,
body {
  width: 100%;
  padding: 20px 0;
  margin: 0;
}

body {
  background: #ff416c;
  background: -webkit-linear-gradient(to top, #ff4b2b, #ff416c);
  background: linear-gradient(to top, #ff4b2b, #ff416c);
  padding-top: 100px;
}

.main-wrapper {
  width: 80%;
  background-color: #eff2fe;
  border-radius: 20px;
  padding: 40px 0;
  margin: 0 auto;
}

#about > h2,
#stack > h2,
#projects > h2,
#contactMe > h2 {
  text-align: center;
  color: #232323;
  font-family: "Open Sans";
  margin-bottom: 40px;
}

#profile-picture {
  display: block;
  width: 200px;
  border-radius: 40px;
  margin: 0 auto -100px auto;
}

.bio {
  width: 50%;
  border-radius: 20px;
  border-top: 5px solid #ff4b2b;
  box-shadow: 0 10px 30px #e0dfdf;
  padding: 100px 40px 40px 40px;
  margin: 0 auto;
  transition: 0.3s;
}

.bio:hover {
  box-shadow: 0 10px 10px #c9c8c8;
  transition: 0.3s;
}

.bio > p {
  font-family: "Roboto Mono";
  font-size: 1.1em;
  color: #232323;
  line-height: 1.7em;
  margin: 25px 0;
}

.contact-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
}

.contact-grid > a > svg {
  font-size: 24px;
  color: #252525;
  margin: 10px 20px;
  transition: 0.3s;
}

.contact-grid > a > svg:hover {
  color: #ff4b2b;
  transition: 0.3s;
}

.email {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  font-family: "Open Sans";
  text-decoration: none;
  line-height: 35px;
  text-align: center;
  color: #252525;
  transition: 0.3s;
}

.email > svg {
  margin-right: 0;
  margin-bottom: 0;
}

.email:hover {
  color: #ff4b2b;
  transition: 0.3s;
}

.email > span {
  vertical-align: middle;
  padding-left: 15px;
}

@media all and (max-width: 801px) {
  .main-wrapper {
    width: 90%;
  }

  #navBar > ul {
    width: 90%;
    padding: 0;
  }

  #navBar > ul > li > a {
    font-size: 16px;
    padding: 5px !important;
  }

  .bio {
    width: 70%;
  }
}

@media all and (max-width: 415px) {
  body {
    padding-top: 70px;
  }

  #navBar > ul {
    width: 100%;
    padding: 0;
  }

  #navBar > ul > li > a {
    font-size: 14px;
    padding: 5px !important;
  }

  .main-wrapper {
    width: 95%;
  }

  .bio {
    width: 70vw;
  }

  .stack-grid {
    padding: 20px;
  }

  .stack-grid > .tech-logo {
    max-height: 70px;
    margin: 24px 40px;
  }

  .projects-grid > .projects-card {
    max-width: 310px;
  }

  .contact-grid > a > svg {
    margin: 8px 16px;
  }
}
</style>
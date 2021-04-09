  <!-- <script src="https://use.fontawesome.com/823308ced3.js"></script> -->
<template>
  <div id="app">
    <nav-bar />
    
    <div class="main-wrapper">
      <div id="about">
        <h2>Bio</h2>
        <img
          id="profile-picture"
          src="./assets/avatar.png"
          alt="Awesome selfie"
        />
        <div class="bio">
          <p>
            My name is Alexx Martínez and I am a Web Developer from El Salvador,
            Central America.
          </p>

          <p>
            I have 3+ years of professional experience working Front-End
            Technologies and Frameworks, REST and GraphQL APIs, Back-End
            Languages, and the SCRUM methodology for delivering high-quality
            products with a medium or large group of developers either remote or
            local.
          </p>

          <p>
            My personal goal in every project is delivering a pixel-perfect
            solution, that is user friendly, always implementing web
            accesibility best practices, and involving a structure that is easy
            to maintain and understand for other devs that might get involved
            later in the project .
          </p>

          <p>
            Currently I have a full-time web developer job at
            <a
              href="https://www.ravn.co/"
              target="_blank"
              rel="noreferrer noopener"
              >Ravn Development</a
            >
            and I'm a volunteer for
            <a
              href="https://www.poderosaisherpower.org/"
              target="_blank"
              rel="noreferrer noopener"
              >Poderosa Is Her Power.</a
            >
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
          ><i class="fa fa-github fa-2x"></i
        ></a>

        <a
          href="https://www.freecodecamp.org/alexxmart"
          target="_blank"
          rel="noreferrer noopener"
          ><i class="fa fa-free-code-camp fa-2x"></i
        ></a>

        <a
          href="https://www.linkedin.com/in/oscar-alexander-mata-5227a213a/"
          target="_blank"
          rel="noreferrer noopener"
          ><i class="fa fa-linkedin fa-2x"></i
        ></a>

        <a
          href="https://codepen.io/Alexxander/"
          target="_blank"
          rel="noreferrer noopener"
          ><i class="fa fa-codepen fa-2x"></i
        ></a>

        <a
          href="https://www.instagram.com/devalexxander/"
          target="_blank"
          rel="noreferrer noopener"
          ><i class="fa fa-instagram fa-2x"></i
        ></a>

        <a
          href="https://twitter.com/Alexx__Mata"
          target="_blank"
          rel="noreferrer noopener"
          ><i class="fa fa-twitter fa-2x"></i
        ></a>

        <a class="email" href="mailto:devalexander19@gmail.com"
          ><i class="fa fa-envelope fa-2x"></i
          ><span>devalexander19@gmail.com</span></a
        >
      </div>
    </footer>

    </div>
  </div>
</template>

<script>
import $ from "jquery";
import M from "materialize-css";

import NavBar from "./components/NavBar.vue";;
import Stack from './components/Stack.vue';
import ProjectsGrid from './components/ProjectsGrid.vue';

export default {
  components: {
    NavBar,
    Stack,
    ProjectsGrid,
  },
  mounted() {
    const progressBar = document.querySelector("#progressBar");
    let totalPageHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = () => {
      let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
      progressBar.style.height = `${newProgressHeight}%`;
      progressBar.style.opacity = `${newProgressHeight}%`;
    };
    var elems = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(elems, {});
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top,
              },
              1000,
              function () {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  return false;
                } else {
                  $target.attr("tabindex", "-1");
                  $target.focus();
                }
              }
            );
          }
        }
      });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:600|Open+Sans|Roboto+Mono");

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

html,
body {
  scrollbar-width: none;
  width: 100%;
  padding: 20px 0;
  margin: 0;
}

body {
  background: #ff416c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #ff4b2b,
    #ff416c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #ff4b2b,
    #ff416c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding-top: 100px;
}

.main-wrapper {
    width: 80%;
    background-color: #EFF2FE;
    border-radius: 20px;
    padding: 40px 0;
    margin: 0 auto;
}

#about > h2, #stack > h2, #projects > h2, #contactMe > h2 {
    text-align: center;
    color: #232323;
    font-family: 'Open Sans';
    margin-bottom: 40px;
}

#profile-picture {
    display: block;
    width: 200px;
    border-radius: 50%;
    margin: 0 auto -100px auto;
}

.bio {
    width: 50%;
    border-radius: 20px;
    border-top: 5px solid #FF4B2B;
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
    font-family: 'Roboto Mono';
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

.contact-grid > a > i {
    color: #252525;
    margin: 10px 20px;
    transition: 0.3s;
}

.contact-grid > a > i:hover {
    color: #FF4B2B;
    transition: 0.3s;
}

.email {
    display: block;
    width: 100%;
    height: 30px;
    line-height: 35px;
    text-align: center;
    color: #252525;
    transition: 0.3s;
}

.email:hover {
    color: #FF4B2B;
    transition: 0.3s;
}

.email > span {
    vertical-align: middle;
    padding-left: 15px;
}

.fa-2x {
    vertical-align: middle;
}

@media all and (max-width: 801px) {
    .main-wrapper {
        width: 90%;
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
    }

    #navBar > ul > li > a {
        font-size: 14px;
        padding: 5px !important;
    }

    .main-wrapper {
        width: 95%;
    }

    .bio {
        width: 90%;
    }

    .stack-grid {
        padding: 20px;
    }

    .stack-grid > .tech-logo {
        max-height: 70px;
    }

    .projects-grid > .projects-card {
        max-width: 310px;
    }
}
</style>
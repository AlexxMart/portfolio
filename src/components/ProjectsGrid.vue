<template>
  <div id="projects">
    <h2>Projects I've worked on</h2>

    <div class="projects-grid">
      <div v-for="item in projects" :key="item.title" class="projects-card">
        <img
          :src="item.image"
          :title="item.title"
          :alt="item.title"
          class="materialboxed"
        />
        <div class="project-sub-section">
          <h3 class="section-title">Project Description</h3>
          <p class="section-description">
            Role: {{ item.role }} <br />
            {{ item.desc }}
          </p>
          <h3 class="section-title">Technologies involved</h3>
          <img
            v-for="tech in item.tech"
            :key="tech.id"
            class="section-description"
            :src="tech.src"
            :alt="tech.alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1629678013/vaga360_v1noh2.jpg",
          title: "Sample view for VAGA360 homepage",
          role: "Full-Stack Developer",
          desc: "Online businesses catalog for restaurants, hotels, and bars located in touristic areas of El Salvador.",
          tech: [
            {
              alt: "ReactJS",
              id: Math.random(),
              src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
            },
            {
              alt: "Redux",
              id: Math.random(),
              src: "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
            },
            {
              alt: "Sass",
              id: Math.random(),
              src: "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
            },
            {
              alt: "Heroku",
              id: Math.random(),
              src: "https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white",
            },
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1629678017/paxonline_tpybdq.png",
          title: "Sample view for paxonline.org",
          role: "Full-Stack Developer",
          desc: "Site with reading resources and help contacts for victims of Gender-Based violence in the United States.",
          tech: [
            {
              alt: "HTML",
              id: Math.random(),
              src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
            },
            {
              alt: "CSS",
              id: Math.random(),
              src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
            },
            {
              alt: "JavaScript",
              id: Math.random(),
              src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
            },
            {
              alt: "Ruby",
              id: Math.random(),
              src: "https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white",
            },
            {
              alt: "Rails",
              id: Math.random(),
              src: "https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white",
            },
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1629678011/alfred_fway7v.png",
          title: "Sample view for Alfred website",
          role: "Front-End Developer",
          desc: "Creation of CMS for administrators of appartment buildings to handle payments, reservations, and residents basic contact information.",
          tech: [
            {
              alt: "React",
              id: Math.random(),
              src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
            },
            {
              alt: "Redux",
              id: Math.random(),
              src: "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
            },
            {
              alt: "Sass",
              id: Math.random(),
              src: "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
            },
            {
              alt: "Ant Design",
              id: Math.random(),
              src: "https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white",
            },
            {
              alt: "Heroku",
              id: Math.random(),
              src: "https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white",
            },
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1629678011/calleja_izccax.png",
          title: "Sample view for Carlos Calleja's website in the news section",
          role: "Front-End Developer",
          desc: 'I contributed in the creation of a site for a presidential candidate. Specifically in the menu shown in "Prensa" and the articles design.',
          tech: [
            {
              alt: "HTML",
              id: Math.random(),
              src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
            },
            {
              alt: "CSS",
              id: Math.random(),
              src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
            },
            {
              alt: "WebPack",
              id: Math.random(),
              src: "https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black",
            },
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1629678010/cointel_i7dn0v.png",
          title: "Sample view for Grupo Cointel homepage",
          role: "Front-End Developer",
          desc: "I contribured in the creation of the website for this telecomunications company in El Salvador.",
          tech: [
            {
              alt: "CSS",
              id: Math.random(),
              src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
            },
            {
              alt: "JavaScript",
              id: Math.random(),
              src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
            },
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1629678017/miamiheat_nqsqg9.png",
          title: "Sample view for Miami Heat's website in the news section",
          role: "Front-End Developer",
          desc: "In this proyect I worked for one NBA team and was in charge of implementing the new design for the following pages: Media, Articles Design, Community, Player Statistics and Team Statistics.",
          tech: [
            {
              alt: "HTML",
              id: Math.random(),
              src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
            },
            {
              alt: "CSS",
              id: Math.random(),
              src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
            },
            {
              alt: "JavaScript",
              id: Math.random(),
              src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
            },
            {
              alt: "jQuery",
              id: Math.random(),
              src: "https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white",
            },
            {
              alt: "Bootstrap",
              id: Math.random(),
              src: "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
            },
            {
              alt: "Webpack",
              id: Math.random(),
              src: "https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black",
            },
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1629678005/goverb_z1q13r.png",
          title: "Sample view for goVerb homepage",
          role: "React-Native Developer",
          desc: "Created the React-Native application for this American startup focused in providing a high quality learning platform for teams and personal development.",
          tech: [
            {
              alt: "React Native",
              id: Math.random(),
              src: "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
            },
            {
              alt: "Styled-Components",
              id: Math.random(),
              src: "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
            },
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1629678008/misalariosv_g4a6uu.png",
          title: "Homepage for MiSalarioSv",
          role: "Web Developer",
          desc: "Completed the creation of a site that calculates all salary deductions from the government based on the most recent data published by the ministry of tresaury.",
          tech: [
            {
              alt: "HTML",
              id: Math.random(),
              src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
            },
            {
              alt: "CSS",
              id: Math.random(),
              src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
            },
            {
              alt: "JavaScript",
              id: Math.random(),
              src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
            },
            {
              alt: "Webpack",
              id: Math.random(),
              src: "https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black",
            },
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1629678058/acantilados_mcfgbc.jpg",
          title: "Homepage for Hotel Acantilados",
          role: "Web Developer",
          desc: "Developed the latest version of this website for one of the biggest and most luxurious hotels in El Salvador the website benefits from server-side rendering thanks to Gatbsy, it is available both in Spanish and English.",
          tech: [
            {
              alt: "React",
              id: Math.random(),
              src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
            },
            {
              alt: "Sass",
              id: Math.random(),
              src: "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
            },
            {
              alt: "Tailwind",
              id: Math.random(),
              src: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
            },
            {
              alt: "Gatsby",
              id: Math.random(),
              src: "https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&logo=gatsby&logoColor=white",
            },
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1634060055/Screen_Shot_2021-10-12_at_11.31.51_AM_rwc9kw.png",
          title: "Natuvia - Costa Rica",
          role: "Web Developer",
          desc: "Created the marketing site for Natuvia, used WordPress as a headless CMS for the team to upload different images, recipes and products in the product page and for front-end everything is based on React.",
          tech: [
						{
              alt: "React",
              id: Math.random(),
              src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
            },
            {
              alt: "Sass",
              id: Math.random(),
              src: "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
            },
            {
              alt: "Netlify",
              id: Math.random(),
              src: "https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7",
            },
					],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.projects-grid > .projects-card {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  margin: 20px 10px;
  max-width: 440px;
}

.materialboxed {
  width: 100%;
}

.projects-grid > .projects-card > .project-sub-section > .section-title {
  color: #ff483c;
  font-family: "Montserrat";
  font-size: 20px;
}

.projects-grid > .projects-card > .project-sub-section > .section-description {
  color: #242424;
  font-family: "Roboto Mono";
  font-size: 17px;
}
</style>
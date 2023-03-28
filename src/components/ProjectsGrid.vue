<template>
  <div id="projects">
    <h2>Projects</h2>

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
          <div class="section-description">
            <p><strong>Role:</strong> {{ item.role }}</p>
            <p><strong>Description:</strong> {{ item.desc }}</p>
          </div>

          <h3 class="section-title">Technologies Used</h3>
          <img
            v-for="tech in item.tech"
            :key="tech.id"
            class="section-description"
            :src="tech.src"
            :alt="tech.alt"
          />

          <h3 class="section-title">Visit Project</h3>
          <p v-for="link in item.links" :key="link">
            <a :href="link.href" target="_blank" rel="noopener noreferrer">{{
              link.text
            }}</a>
          </p>
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
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1629678017/miamiheat_nqsqg9.png",
          title: "Sample view for Miami Heat's website in the news section",
          role: "Front-End Developer",
          desc: "The Miami Heats needed to renovate their  Media, Articles, Community, Player Statistics and Team Statistics pages, my team and I were in charge of implementing the new design system, following A11Y best practices and semantic HTML.",
          links: [
            {
              href: "https://www.nba.com/heat?tmd=1",
              text: "View website",
            },
          ],
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
            {
              alt: "Drupal",
              id: Math.random(),
              src: "https://img.shields.io/badge/drupal-%230678BE.svg?style=for-the-badge&logo=drupal&logoColor=white",
            },
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1669526811/Screen_Shot_2022-11-26_at_11.26.44_PM_pfupea.png",
          title: "Sample view of LifeOmic's website",
          role: "React Native Developer",
          desc: "LifeOmic needed to improve the performance on their app, add the feture of social circles to keep chats among users and improve the tests coverage. In this staff augmentation effort we were able to improve the homescreen and profile page's performance in a 50% and got rid some of bugs reported by the users.",
          links: [
            {
              href: "https://play.google.com/store/apps/details?id=com.lifeomic.lifefasting",
              text: "View App for Android",
            },
            {
              href: "https://apps.apple.com/us/app/life-fasting-timer-tracker/id1319306064",
              text: "View App for iOS",
            },
          ],
          tech: [
            {
              alt: "React Native",
              id: Math.random(),
              src: "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
            },
            {
              alt: "Testing Library",
              id: Math.random(),
              src: "https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white",
            },
            {
              alt: "Cypress",
              id: Math.random(),
              src: "https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white",
            },
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1669527515/Screen_Shot_2022-11-26_at_11.38.06_PM_ko1vam.png",
          title: "Sample view of Keller Williams's website",
          role: "React Native Lead Developer",
          desc: "KWX is a service from Keller Williams that integrates several different metrics to allow their real estate agents to provide more up-to-date data to their customers and match them to better houses/apartments that better suits their needs.",
          links: [
            {
              href: "https://play.google.com/store/apps/details?id=com.smarteragent.android.kw",
              text: "View App for Android",
            },
            {
              href: "https://apps.apple.com/us/app/kw-buy-sell-real-estate/id652512924",
              text: "View App for iOS",
            },
          ],
          tech: [
            {
              alt: "React Native",
              id: Math.random(),
              src: "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
            },
            {
              alt: "Testing Library",
              id: Math.random(),
              src: "https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white",
            },
            {
              alt: "Storybook",
              id: Math.random(),
              src: "https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white",
            },
            {
              alt: "Styled Components",
              id: Math.random(),
              src: "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
            },
            {
              alt: "Chart JS",
              id: Math.random(),
              src: "https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white",
            },
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1629678005/goverb_z1q13r.png",
          title: "Sample view for goVerb homepage",
          role: "React-Native Developer",
          desc: "GoVerb is an american startup that provides learning resources to entrepreneurs like trainings, peer learning, reading material and more. They came to us looking for React-Native developers to create their application and with that provide a new way of learning for their group of business owners or entrepreneurs",
          links: [
            {
              href: "https://goverb.com/",
              text: "Visit website",
            },
          ],
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
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1669527917/Screen_Shot_2022-11-26_at_11.44.56_PM_az4fg4.png",
          title: "Sample view for Hinge Health's homepage",
          role: "React-Native Developer",
          desc: "HingeHealth is a company that provides motion-based workouts to users that have gone through surgeries or have been involved in accidents that affect their mobility, with the sensors shipped to them this React Native app is able to track the user's movements and make sure they're being performed in a safely manner. I contributed creating the screen where the users can rate the exercise session they just completed and some performance improvements.",
          links: [
            {
              href: "https://www.hingehealth.com/",
              text: "Visit website",
            },
          ],
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
            {
              alt: "Apollo GraphQL",
              id: Math.random(),
              src: "https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white",
            },
          ],
        },

        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1669528633/Screen_Shot_2022-11-26_at_11.57.09_PM_ucuqcf.png",
          title: "Homepage for CityGro",
          role: "NativeScript Developer",
          desc: "Joining and working on this project was a great experience, they came to our company because at the time the version of NativeScript and some of their libraries was not compantible with iOS 16, also, the way they asked for user permission didn't meet Apple's policies at the time causing so the app immediately crashed for all of their iOS users. Taking bits of their previous app they asked us to rebuild it from scratch solving the bugs in the compilation of the app and the new permissions required by iOS 16.",
          links: [
            {
              href: "https://citygro.com/",
              text: "Visit site",
            },
          ],
          tech: [
            {
              alt: "Vue",
              id: Math.random(),
              src: "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D",
            },
            {
              alt: "NativeScript",
              id: Math.random(),
              src: "https://img.shields.io/badge/NativeScript-3655FF?style=for-the-badge&logo=NativeScript&logoColor=black",
            },
            {
              alt: "TypeScript",
              id: Math.random(),
              src: " https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
            },
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1629678058/acantilados_mcfgbc.jpg",
          title: "Homepage for Hotel Acantilados",
          role: "Web Developer",
          desc: "Hotel Acantilados, in La Libertad (El Salvador) needed to integrate a in-house reservation system that could sync to their systems at the hotel's front desk. Working with their API provider I was able to complete an integration where the users can look for available rooms, complete a reservation and process payments. The information is automatically stored in the DB and distributed to the systems inside the hotel.",
          links: [
            {
              href: "https://acantilados.sv/",
              text: "Acantilados",
            },
          ],
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
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1629678008/misalariosv_g4a6uu.png",
          title: "Homepage for MiSalarioSv",
          role: "Web Developer",
          desc: "This is a passion project I made, sometimes calculating the net pay can be a little bit difficult so I decided to create a site that can calculate the monthly taxex and the bonuses the companies give out.",
          links: [
            {
              href: "https://www.misalariosv.com/",
              text: "Visit site",
            },
          ],
          tech: [
            {
              alt: "Vue",
              id: Math.random(),
              src: "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D",
            },
            {
              alt: "Nuxt",
              id: Math.random(),
              src: "https://img.shields.io/badge/nuxt.js-00C58E?style=for-the-badge&logo=nuxtdotjs&logoColor=white",
            },
            {
              alt: "Netlify",
              id: Math.random(),
              src: "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white",
            },
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1634060055/Screen_Shot_2021-10-12_at_11.31.51_AM_rwc9kw.png",
          title: "Natuvia - Costa Rica",
          role: "Web Developer",
          desc: "Natuvia needed to create the website where they can showcase the benefits of this natural substitute of sugar, share recipes, and contact information for the company",
          links: [
            {
              href: "https://natuvia.cr/",
              text: "Visit site",
            },
          ],
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
            {
              alt: "Wordpress",
              id: Math.random(),
              src: "https://img.shields.io/badge/Wordpress-21759B?style=for-the-badge&logo=wordpress&logoColor=white",
            },
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dqjmv8wtt/image/upload/v1669528433/Screen_Shot_2022-11-26_at_11.51.56_PM_wr7ejt.png",
          title: "Sample view for Chip Cookie homepage",
          role: "React/React-Native Developer",
          desc: "I helped Chip solving bugs in their geolocation API, the order system in their React Native app, performance issues and the refactoring of some of their components",
          links: [
            {
              href: "https://www.chipcookies.co/",
              text: "Visit website",
            },
          ],
          tech: [
            {
              alt: "React",
              id: Math.random(),
              src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
            },
            {
              alt: "React Native",
              id: Math.random(),
              src: "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
            },
            {
              alt: "Ruby on Rails",
              id: Math.random(),
              src: "https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="css">
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
  font-weight: 300;
  font-size: 17px;
}

.projects-grid > .projects-card > .project-sub-section > .section-description > strong {
  font-weight: 800;
}

.projects-grid > .projects-card > .project-sub-section > p {
  font-family: "Roboto Mono";
  font-weight: 800;
}

.projects-grid > .projects-card > .project-sub-section > p > a {
  text-decoration: none;
}
</style>
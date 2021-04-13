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
            <p class="section-description">
              {{ item.tech }}
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
	export default {
		data () {
			return {
				projects: [
					{
						image: require('../assets/vaga360.jpg'),
						title: 'Sample view for VAGA360 homepage',
						role: 'Full-Stack Developer',
						desc: 'Online businesses catalog for restaurants, hotels, and bars located in touristic areas of El Salvador.',
						tech: 'React, Redux, SASS, Material UI, Heroku'
					},
					{
						image: require('../assets/paxonline.png'),
						title: 'Sample view for paxonline.org',
						role: 'Full-Stack Developer',
						desc: 'Site with reading resources and help contacts for victims of Gender-Based violence in the United States.',
						tech: 'HTML, CSS, JS, Ruby on Rails, DigitalOcean'
					},
					{
						image: require('../assets/alfred.png'),
						title: 'Sample view for Alfred website',
						role: 'Front-End Developer',
						desc: 'Creation of CMS for administrators of appartment buildings to handle payments, reservations, and residents basic contact information.',
						tech: 'React, Redux, SASS, Heroku'
					},
					{
						image: require('../assets/calleja.png'),
						title: 'Sample view for Carlos Calleja\'s website in the news section',
						role: 'Front-End Developer',
						desc: 'I contributed in the creation of a site for a presidential candidate. Specifically in the menu shown in "Prensa" and the articles design.',
						tech: 'HTML, CSS, Liquid, NationBuilder, Dropboox'
					},
					{
						image: require('../assets/cointel.png'),
						title: 'Sample view for Grupo Cointel homepage',
						role: 'Front-End Developer',
						desc: 'I contribured in the creation of the website for this telecomunications company in El Salvador.',
						tech: 'Wordpress, CSS, JS'
					},
					{
						image: require('../assets/miamiheat.png'),
						title: 'Sample view for Miami Heat\'s website in the news section',
						role: 'Front-End Developer',
						desc: 'In this proyect I worked for one NBA team and was in charge of implementing the new design for the following pages: Media, Articles Design, Community, Player Statistics and Team Statistics.',
						tech: 'HTML, CSS, JS, jQuery, Bootstrap, WebPack, Drupal'
					},
					{
						image: require('../assets/goverb.png'),
						title: 'Sample view for goVerb homepage',
						role: 'React-Native Developer',
						desc: 'Created the React-Native application for this American startup focused in providing a high quality learning platform for teams and personal development.',
						tech: 'React Native, Auth0, Styled Components'
					},
					{
						image: require('../assets/misalariosv.png'),
						title: 'Homepage for MiSalarioSv',
						role: 'Web Developer',
						desc: 'Completed the creation of a site that calculates all salary deductions from the government based on the most recent data published by the ministry of tresaury.',
						tech: 'HTML, SASS, JS (ES6), WebPack'
					},
					{
						image: require('../assets/acantilados.png'),
						title: 'Homepage for Hotel Acantilados',
						role: 'Web Developer',
						desc: 'Developed the latest version of this website for one of the biggest and most luxurious hotels in El Salvador the website benefits from server-side rendering thanks to Gatbsy, it is available both in Spanish and English.',
						tech: 'Gatsby, React, Tailwind, SASS, WordPress, ACF'
					},
				]
			}
		}
	}
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
    font-family: 'Montserrat';
    font-size: 20px;
}

.projects-grid > .projects-card > .project-sub-section > .section-description {
    color: #242424;
    font-family: 'Roboto Mono';
    font-size: 17px;
}
</style>
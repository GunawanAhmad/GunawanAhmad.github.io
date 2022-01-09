<template>
    <div class="portfolio section">
        <svg class="outline-text">
            <text
                text-anchor="middle"
                font-size="250"
                fill="none"
                stroke-width=".4"
                font-weight="700"
                stroke="#fff"
                font-family="Montserrat"
            >
                Portfolio
            </text>
        </svg>
        <div class="text">
            <h1 class="title">My Portfolio</h1>
            <p class="deks">A small gallery of my recent projects</p>
        </div>
        <div @click="menuBackgroundAnim(1)" ref="btn" class="btn">
            <router-link class="link-btn" to="/work">
                See more!
            </router-link>
        </div>
        <div class="gallery">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<script>
export default {};
</script>

<style scoped src="../styles/home/portfolioComp.css"></style>

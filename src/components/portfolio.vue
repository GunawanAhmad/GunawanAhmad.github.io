<template>
    <div class="portfolio section">
        <div class="text">
            <h1 class="title">
                My Portfolio
                <div class="outline-text">Portfolio</div>
            </h1>
            <p class="deks">A small gallery of my recent projects</p>
        </div>
        <div @click="menuBackgroundAnim(1)" ref="btn" class="btn">
            <router-link to="/work">
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

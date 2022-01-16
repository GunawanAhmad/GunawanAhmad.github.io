<template>
    <div class="portfolio section">
        <div class="text">
            <h1 class="title">
                <div class="outline-text">Portfolio</div>
                <span class="hov">M</span>
                <span class="hov">y</span>
                <span class="space"></span>
                <span class="hov">p</span>
                <span class="hov">o</span>
                <span class="hov">r</span>
                <span class="hov">t</span>
                <span class="hov">f</span>
                <span class="hov">o</span>
                <span class="hov">l</span>
                <span class="hov">i</span>
                <span class="hov">o</span>
            </h1>
            <p class="desc">A small gallery of my recent projects</p>
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

<style scoped src="../styles/work.css"></style>

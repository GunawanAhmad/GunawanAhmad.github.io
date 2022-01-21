<template>
    <div class="about view-page">
        <div class="container">
            <div class="text">
                <h1 class="title">
                    <div class="outline-text">About</div>
                    <span class="hov">A</span>
                    <span class="hov">b</span>
                    <span class="hov">o</span>
                    <span class="hov">u</span>
                    <span class="hov">t</span>
                    <span class="space"></span>
                    <span class="hov">M</span>
                    <span class="hov">e</span>
                </h1>
                <p class="desc">
                    My name is Gunawan Nur Ahmad, I'm a Front End Developer and
                    currently studying Computer Science. I'm from Lampung,
                    Indonesia.
                    <br /><br />
                    Well organised person, problem solver, independent with high
                    intention to detail. <br /><br />
                    In my works I always try to combine aesthetic with
                    functional aspects, looking for the right balance to
                    communicate without annoying.
                </p>
            </div>
            <div class="tagcloud"></div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        const TagCloud = require("TagCloud");
        const SCREEN_WIDTH = window.innerWidth;
        const container = ".tagcloud";
        let radius = 250;
        if(SCREEN_WIDTH > 1024) {
            radius = 250
        } else if(SCREEN_WIDTH > 800) {
            radius = 170
        } else if(SCREEN_WIDTH > 500) {
            radius = 130
        }
        const texts = [
            "VueJs",
            "HTML",
            "JavaScript",
            "CSS3",
            "ReactJs",
            "SCSS",
            "Figma",
            "GIT",
            "WEB",
            "NodeJs",
            "NoSQL",
            "SQL",
            "Java",
            "ExpressJs",
            "TailwindCSS",
            "Bootstrap",
            "JQuery",
            "Typescript",
        ];
        const options = {
            radius: radius,
        };

        TagCloud(container, texts, options);
    },
};
</script>

<style scoped src="../styles/about.css"></style>

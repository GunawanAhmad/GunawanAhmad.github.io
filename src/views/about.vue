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
                    Hi, My name is Gunawan Nur Ahmad, and I'm a frontend developer with expertise creating engaging and straightforward user experiences. I'm enthusiastic about building seamless experiences that assist people in achieving their objectives.
                    <br /><br />
                    As a computer science student, I'm constantly learning and improving my abilities. I've worked on projects ranging from small websites to large-scale web applications, and I'm committed to providing high-quality work that fulfills both the demands of the user and the specifications of the project.
                    <br /><br />
                    Please get in touch if you're seeking for a frontend developer that is passionate about designing engaging and intuitive user interfaces, or if you have an intriguing project you'd like to explore. I'm thrilled to collaborate with you and help you realize your vision.
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

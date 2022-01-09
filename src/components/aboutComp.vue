<template>
    <div class="about section">
        <svg class="outline-text">
            <text
                text-anchor="middle"
                font-size="150"
                fill="none"
                stroke-width=".4"
                font-weight="700"
                stroke="#fff"
                font-family="Montserrat"
            >
                About
            </text>
        </svg>
        <div class="container">
            <div class="text">
                <h1 class="title">About Me</h1>
                <p class="deks">
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

        const container = ".tagcloud";
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
            "MongoDB",
            "MySQL",
            "Java",
            "ExpressJs",
            "TailwindCSS",
            "Bootstrap",
            "JQuery",
        ];
        const options = {
            radius: 250,
        };

        TagCloud(container, texts, options);
    },
};
</script>

<style scoped src="../styles/home/aboutComp.css"></style>

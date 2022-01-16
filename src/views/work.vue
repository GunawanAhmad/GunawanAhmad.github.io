<template>
    <div class="work page">
        <div class="text">
            <h1 class="title">
                <div class="outline-text">Projects</div>
                <span class="hov">M</span>
                <span class="hov">y</span>
                <span class="space"></span>
                <span class="hov">p</span>
                <span class="hov">r</span>
                <span class="hov">o</span>
                <span class="hov">j</span>
                <span class="hov">e</span>
                <span class="hov">c</span>
                <span class="hov">t</span>
                <span class="hov">s</span>
            </h1>
        </div>

        <div class="work-list">
            <div class="work" v-for="work in myProjects" :key="work.key">
                <div class="information">
                    <h2 class="work-number">0{{ work.key }}.</h2>
                    <h1 class="work-title">
                        {{ work.title }}
                    </h1>
                    <img
                        :src="require(`@/assets/${work.img}`)"
                        alt=""
                        class="mobile-img"
                    />
                    <p class="description">
                        {{ work.description }}
                    </p>
                    <div class="tools">
                        <p>
                            Code Tools :
                            <span>{{ work.codeTools.join(", ") }}</span>
                        </p>
                        <p class="design">
                            Design : <span>{{ work.design }}</span>
                        </p>
                    </div>
                    <div class="links">
                        <a
                            target="_blank"
                            class="btn"
                            :href="work.link"
                            :class="work.link === '' ? 'disabled' : ''"
                            >Visit</a
                        >
                        <a
                            target="_blank"
                            class="btn"
                            :href="work.source"
                            :class="work.source === '' ? 'disabled' : ''"
                            >Source Code</a
                        >
                    </div>
                </div>
                <div class="img">
                    <img :src="require(`@/assets/${work.img}`)" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isExpand: false,
            icon: "fas fa-expand",
            isDetail: false,
            myProjects: [
                {
                    title: "Web Application for Online Consultation (Kliniku)",
                    description:
                        "Kliniku is an online consultation platform where people can fill in an online form about their health issue to send for a doctor. The doctor can respond and give them medical advice.",
                    source:
                        "https://github.com/GunawanAhmad/Sisfo-Klinik-Full-Stack",
                    link: "",
                    codeTools: ["VueJS", "MongoDB", "NodeJs", "ExpressJS"],
                    design: "Design by Faris Azizy",
                    img: "kliniku.svg",
                    key: 1,
                },
                {
                    title: "Radio and Checkbox Input Generator",
                    description:
                        "Radio and Checkbox Input Generator is a web where developer can make their custom radio and checkbox input for HTML and CSS code and make the development process easier and faster.",
                    source:
                        "https://github.com/GunawanAhmad/Radio-Checkbox-Generator",
                    link:
                        "https://gunawanahmad.github.io/Radio-Checkbox-Generator/",
                    img: "generator.png",
                    codeTools: ["HTML", "SCSS", "Javascript"],
                    design: "Design by Me with Adobe XD",
                    key: 2,
                },
                {
                    title: "Pathfinding Visualizer",
                    description:
                        "Pathfinding visualizer is a visualization tool for famous pathfinding algorithm such as Dijsktra and A* Search. The user can choose the start and finish point on the grid and add wall to the grid so the path cannot cross through it.",
                    source:
                        "https://github.com/GunawanAhmad/pathfinding-visualizer",
                    link:
                        "https://gunawanahmad.github.io/pathfinding-visualizer/#/",
                    img: "pathfinding-visualizer.png",
                    codeTools: ["Vue JS", "SCSS"],
                    design: "Design by Me",
                    key: 3,
                },
                {
                    title: "Sorting Visualizer",
                    description:
                        "Sorting visualizer is visualization tool for famous sorting algorithm such as Insertion and Selection. The user can random the array and it's also included the pseudo code visualization and a bit of information of the algorithm.",
                    source:
                        "https://github.com/GunawanAhmad/sorting-visualizer",
                    link: "https://gunawanahmad.github.io/sorting-visualizer/",
                    img: "sorting.png",
                    codeTools: ["Vue JS"],
                    design: "Design by Me with Figma",
                    key: 4,
                },
                {
                    title: "Inventory Web App",
                    description:
                        "Inventory web app is an app where the user can store and manage the user property/inventory ",
                    source:
                        "https://github.com/GunawanAhmad/Inventory-Frontend",
                    link: "https://inventory-web-app.herokuapp.com/",
                    img: "inventory.png",
                    codeTools: [
                        "React Js",
                        "SCSS",
                        "NodeJs",
                        "Express",
                        "Mongoose",
                    ],
                    design: "Design by Me with Figma",
                    key: 5,
                },
                {
                    title: "Indeas.io (Landing Page)",
                    description:
                        "Collaboration tool website for managing users projects.",
                    source: "https://github.com/GunawanAhmad/Ideas.io",
                    link: "https://ideas-io.vercel.app/",
                    img: "ideas.png",
                    codeTools: ["HTML", "Tailwind CSS", "Javascript"],
                    design: "Design by Me with Figma",
                    key: 6,
                },
                {
                    title: "Statued (Landing Page)",
                    description:
                        "Online shop for statue customization with 3d look.",
                    source: "https://github.com/GunawanAhmad/Statued",
                    link: "https://statued.vercel.app/",
                    img: "statued.png",
                    codeTools: [
                        "HTML",
                        "Tailwind CSS",
                        "Javascript",
                        "Three Js",
                    ],
                    design: "Design by Me with Figma",
                    key: 7,
                },
            ],
        };
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped src="../styles/work.css"></style>

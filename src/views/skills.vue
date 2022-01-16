<template>
    <div class="skills">
        <div class="text">
            <h1 class="title">
                <div class="outline-text">Skills</div>
                <span class="hov">W</span>
                <span class="hov">h</span>
                <span class="hov">a</span>

                <span class="hov">t</span>
                <span class="space"></span>
                <span class="hov">I</span>
                <span class="space"></span>
                <span class="hov">D</span>
                <span class="hov">o</span>
            </h1>

            <p>
                The main area of my expertise is front end development (client
                side of the web).
            </p>

            <p>
                Build beautiful and interactive Web Application with HTML, CSS,
                and Javascript or Vue.js.
            </p>

            <p>
                I also have full stack development experience with Node.Js and
                MongoDB.
            </p>
            <p>
                Visit my
                <a
                    target="_blank"
                    href="https://linkedin.com/in/gunawan-ahmad-0148441b7"
                    class="link linkedln"
                    >Linkedln</a
                >
                profile for more details or just
                <span @click="menuBackgroundAnim(4)"
                    ><router-link to="/contact" class="link contact"
                        >contact me.</router-link
                    ></span
                >
            </p>
        </div>
        <div class="illus">
            <!-- <h1>My Tools</h1> -->
            <div class="front__end">
                <div
                    class="react stack"
                    @click="
                        showInfo('React.Js', 'react', 'A Javascript framework')
                    "
                >
                    <p>React.Js</p>

                    <span>
                        <i class="fab fa-react"></i>
                    </span>
                </div>
                <div
                    class="vue stack"
                    @click="showInfo('Vue.Js', 'vue', 'A Javascript framework')"
                >
                    <p>Vue.Js</p>

                    <span>
                        <i class="fab fa-vuejs"></i>
                    </span>
                </div>
                <div
                    class="js stack"
                    @click="
                        showInfo(
                            'Javascript',
                            'javascript',
                            'JavaScript is the Programming Language for the Web'
                        )
                    "
                >
                    <p>Javascript</p>

                    <span>
                        <i class="fab fa-js-square"></i>
                    </span>
                </div>
                <div
                    class="sass stack"
                    @click="
                        showInfo(
                            'Sass',
                            'sass',
                            'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.'
                        )
                    "
                >
                    <p>Sass</p>

                    <span>
                        <i class="fab fa-sass"></i>
                    </span>
                </div>
                <div
                    class="css stack"
                    @click="
                        showInfo(
                            'CSS',
                            'css',
                            'CSS is a tool for Create beautiful, responsive layout, and implementing the design into the Web App'
                        )
                    "
                >
                    <p>CSS</p>

                    <span>
                        <i class="fab fa-css3-alt"></i>
                    </span>
                </div>
                <div
                    class="html stack"
                    @click="
                        showInfo(
                            'HTML',
                            'html',
                            'HTML is a standard for describing a structure and presentation of information in a web.'
                        )
                    "
                >
                    <p>HTML</p>

                    <span>
                        <i class="fab fa-html5"></i>
                    </span>
                </div>
            </div>
            <div class="back__end">
                <div
                    class="express stack"
                    @click="
                        showInfo(
                            'Express.Js',
                            'express',
                            'Express.Js is a framework for Node.Js, '
                        )
                    "
                >
                    <p>Express.Js</p>

                    <span>
                        <i class="fab fa-node-js"></i>
                    </span>
                </div>
                <div
                    class="node stack"
                    @click="
                        showInfo(
                            'Node Js',
                            'node',
                            'A Javascript runtime environment that executes JavaScript code outside a web browser. For example for Backend.'
                        )
                    "
                >
                    <p>Node.Js</p>

                    <span>
                        <i class="fab fa-node"></i>
                    </span>
                </div>
                <div
                    class="mongo stack"
                    @click="
                        showInfo(
                            'MongoDB',
                            'mongodb',
                            'MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program.'
                        )
                    "
                >
                    <p>MongoDB</p>

                    <span>
                        <i class="fas fa-database"></i>
                    </span>
                </div>
            </div>
        </div>

        <div class="skills-info" ref="skillInfo">
            <div class="card">
                <div class="logo">
                    <img :src="require('../../src/assets/' + icon + '.svg')" />
                </div>
                <h3>{{ title }}</h3>
                <p>{{ content }}</p>
                <div class="close" @click="closeInfo">
                    <i class="fas fa-times"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TransitionMixin from "../mixins/transition";
export default {
    mixins: [TransitionMixin],
    data() {
        return {
            title: "",
            icon: "vue",
            content: "",
        };
    },

    methods: {
        showInfo(title, icon, content) {
            this.title = title;
            this.icon = icon;
            this.content = content;
            let info = this.$refs.skillInfo;
            info.classList.toggle("show");
        },
        closeInfo() {
            let info = this.$refs.skillInfo;
            info.classList.toggle("show");
        },
    },
};
</script>

<style scoped src="../styles/skills.css"></style>

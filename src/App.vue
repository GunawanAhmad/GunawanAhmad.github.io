<template>
    <div id="app">
        <div class="cursor" ref="cursor" v-if="isMixSupport"></div>

        <div class="welcome" ref="welcome">
            <h1>
                <span>H</span>
                <span>i</span>
                <span>.</span>
            </h1>
        </div>

        <div class="view">
            <div class="symbols">
                <div class="top">
                    <i class="fas fa-less-than"></i>
                </div>
                <div class="bottom">
                    <i class="fas fa-slash"></i>
                    <i class="fas fa-greater-than"></i>
                </div>
            </div>
            <transition name="fade" mode="out-in" class="route">
                <keep-alive>
                    <router-view />
                </keep-alive>
            </transition>
        </div>
        <div>
            <navBar />
        </div>

        <div class="trans-back" ref="transition">
            <img src="./assets/logoName.svg" alt="" />
            <p>Let me think &#129300;</p>
            <div class="loadbar">
                <div class="progress"></div>
            </div>
        </div>
    </div>
</template>

<script>
import navBar from "./components/nav.vue";

import TransitionMixin from "./mixins/transition";

export default {
    mixins: [TransitionMixin],
    data() {
        return {
            isMixSupport: true,
        };
    },

    components: {
        navBar,
    },

    mounted() {
        //check if mix-blend-mode porperty support in the brwoser
        if (window.getComputedStyle(document.body).mixBlendMode !== undefined) {
            this.isMixSupport = true;
        } else {
            this.isMixSupport = false;
        }

        this.$store.state.backgroundTransition = this.$refs.transition;

        let cursor = this.$refs.cursor;

        document.addEventListener("mousemove", (e) => {
            cursor.setAttribute(
                "style",
                `top : ${e.clientY}px; left : ${e.clientX}px`
            );
        });

        setTimeout(() => {
            this.$refs.welcome.classList.toggle("show");
        }, 2500);

        let pathLists = ["/", "/about", "/skills", "/work", "/contact"];
        let currentPath = this.$route.path;
        let pageIndex = pathLists.indexOf(currentPath);
        this.menuBackgroundAnim(pageIndex);
    },
};
</script>
<style src="./styles/app.css"></style>

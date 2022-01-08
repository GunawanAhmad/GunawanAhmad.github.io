<template>
    <div id="app">
        <div class="cursor" ref="cursor" v-if="isMixSupport"></div>

        <!-- <div class="welcome" ref="welcome">
      <svg
        width="962"
        height="155"
        viewBox="0 0 962 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="logo"
      >
        <path
          d="M188 6.99998L152.2 148H130L97.4 32.8L64.8 148H42.6L6.60001 6.99998H26.8L53.8 126.8L87.2 6.99998H107.4L140.8 126.4L168 6.99998H188Z"
          stroke="#FAFAFA"
          stroke-width="5"
        />
        <path
          d="M227.527 21.8V70H281.127V84H227.527V133.2H287.127V148H209.327V6.99998H287.127V21.8H227.527Z"
          stroke="#FAFAFA"
          stroke-width="5"
        />
        <path
          d="M328.698 133.8H378.698V148H310.498V6.99998H328.698V133.8Z"
          stroke="#FAFAFA"
          stroke-width="5"
        />
        <path
          d="M459.617 5.59999C476.817 5.59999 491.017 9.86666 502.217 18.4C513.417 26.8 521.151 38.3333 525.417 53H506.217C502.617 43.6667 496.817 36.2667 488.817 30.8C480.817 25.2 471.017 22.4 459.417 22.4C450.217 22.4 441.951 24.6667 434.617 29.2C427.417 33.6 421.684 40 417.417 48.4C413.284 56.6667 411.217 66.4 411.217 77.6C411.217 88.6667 413.284 98.3333 417.417 106.6C421.684 114.867 427.417 121.267 434.617 125.8C441.951 130.2 450.217 132.4 459.417 132.4C471.017 132.4 480.817 129.667 488.817 124.2C496.817 118.6 502.617 111.133 506.217 101.8H525.417C521.151 116.467 513.417 128.067 502.217 136.6C491.017 145 476.817 149.2 459.617 149.2C446.417 149.2 434.751 146.2 424.617 140.2C414.484 134.067 406.551 125.6 400.817 114.8C395.217 103.867 392.417 91.4667 392.417 77.6C392.417 63.6 395.217 51.1333 400.817 40.2C406.551 29.2667 414.484 20.8 424.617 14.8C434.751 8.66665 446.417 5.59999 459.617 5.59999Z"
          stroke="#FAFAFA"
          stroke-width="5"
        />
        <path
          d="M614.356 5.19998C627.423 5.19998 639.156 8.26665 649.556 14.4C660.09 20.5333 668.356 29.1333 674.356 40.2C680.356 51.1333 683.356 63.5333 683.356 77.4C683.356 91.2667 680.356 103.733 674.356 114.8C668.356 125.733 660.09 134.267 649.556 140.4C639.156 146.533 627.423 149.6 614.356 149.6C601.29 149.6 589.423 146.533 578.756 140.4C568.223 134.267 559.956 125.733 553.956 114.8C547.956 103.733 544.956 91.2667 544.956 77.4C544.956 63.5333 547.956 51.1333 553.956 40.2C559.956 29.1333 568.223 20.5333 578.756 14.4C589.423 8.26665 601.29 5.19998 614.356 5.19998ZM614.356 22.2C604.623 22.2 595.89 24.4667 588.156 29C580.556 33.4 574.556 39.8 570.156 48.2C565.89 56.4667 563.756 66.2 563.756 77.4C563.756 88.4667 565.89 98.2 570.156 106.6C574.556 115 580.556 121.467 588.156 126C595.89 130.4 604.623 132.6 614.356 132.6C623.956 132.6 632.556 130.333 640.156 125.8C647.89 121.267 653.89 114.867 658.156 106.6C662.556 98.2 664.756 88.4667 664.756 77.4C664.756 66.2 662.556 56.4667 658.156 48.2C653.89 39.8 647.89 33.4 640.156 29C632.556 24.4667 623.956 22.2 614.356 22.2Z"
          stroke="#FAFAFA"
          stroke-width="5"
        />
        <path
          d="M849.159 9.39999V148H830.959V37.4L786.759 148H770.559L726.159 37.8V148H707.959V9.39999H729.759L778.959 125.8L827.359 9.39999H849.159Z"
          stroke="#FAFAFA"
          stroke-width="5"
        />
        <path
          d="M896.472 21.8V70H950.072V84H896.472V133.2H956.072V148H878.272V6.99998H956.072V21.8H896.472Z"
          stroke="#FAFAFA"
          stroke-width="5"
        />
      </svg>
    </div> -->

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

        this.$store.state.hover.push(this.$refs.cursor);
        let cursor = this.$refs.cursor;
        let btn = this.$store.state.hover;
        btn.forEach((p) => {
            p.addEventListener("mouseenter", () => {
                cursor.classList.add("hover");
            });
            p.addEventListener("mouseleave", () => {
                cursor.classList.remove("hover");
            });
        });

        document.addEventListener("mousemove", (e) => {
            cursor.setAttribute(
                "style",
                `top : ${e.pageY}px; left : ${e.pageX}px`
            );
        });

        // setTimeout(() => {
        //   this.$refs.welcome.classList.toggle("show");
        // }, 4000);

        // let pathLists = ["/", "/about", "/skills", "/work", "/contact"];
        // let currentPath = this.$route.path;
        // let pageIndex = pathLists.indexOf(currentPath);
        // this.menuBackgroundAnim(pageIndex);
    },
};
</script>
<style src="../public/styles/app.css"></style>

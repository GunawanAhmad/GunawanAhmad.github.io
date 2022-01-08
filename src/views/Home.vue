<template>
    <div class="home view-page">
        <img
            class="logo-outline"
            src="../assets/logo-outline-white.svg"
            alt=""
        />
        <div class="container">
            <div class="text">
                <div class="title">
                    <h1>
                        <span class="hov">H</span>
                        <span class="hov">i</span>
                        <span class="hov">,</span>
                    </h1>
                    <h1>
                        <span class="hov">I</span>
                        <span class="hov">'</span>
                        <span class="hov">m</span>
                        <span class="space"></span>
                        <span class="hov">G</span>
                        <span class="hov">u</span>
                        <span class="hov">n</span>
                        <span class="hov">a</span>
                        <span class="hov">w</span>
                        <span class="hov">a</span>
                        <span class="hov">n</span>
                        <span class="hov">,</span>
                    </h1>

                    <h1 class="bottom-text">
                        <span class="hov">W</span>
                        <span class="hov">e</span>
                        <span class="hov">b</span>
                        <span class="space"></span>
                        <span class="hov">D</span>
                        <span class="hov">e</span>
                        <span class="hov">v</span>
                        <span class="hov">e</span>
                        <span class="hov">l</span>
                        <!-- <span class="hov">o</span> -->

                        <div class="eye">
                            <div class="pupil">
                                <div class="light"></div>
                            </div>
                        </div>
                        <span class="hov">p</span>
                        <span class="hov">e</span>
                        <span class="hov">r</span>
                        <span class="hov">.</span>
                    </h1>
                    <div class="deks">
                        <p>Front End Developer</p>
                    </div>
                </div>

                <!-- <div class="cursor"></div> -->
                <div @click="menuBackgroundAnim(1)" ref="btn" class="btn">
                    <router-link class="contact-btn" to="/about">
                        about me
                    </router-link>
                </div>
            </div>
            <div class="logo-con">
                <!-- <div class="circle"></div> -->
                <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 316.03 529.14"
                >
                    <title>logo</title>
                    <path
                        d="M165.46,395.67c96.3,71,209.48,9.73,219.92-87.47a134.32,134.32,0,0,0,.67-19.17l.27.24-16.95-187c-.6-6.6-10-7.17-11.42-.68l-11.31,53c-3.6,16.89-21.92,26.37-37.61,19.16a132.18,132.18,0,0,0-41.16-11.31C170.66,152,86.73,249.55,135.69,358.73A93.44,93.44,0,0,0,165.46,395.67Zm45.82-165.79c81.85-42.7,155.26,48.37,96.15,119.28a36.78,36.78,0,0,1-11.25,9.08C214.33,400.94,140.92,309.86,200,239A36.89,36.89,0,0,1,211.28,229.88Z"
                        transform="translate(-73.96 -94)"
                        style="fill: none;stroke: #f0f0f0;stroke-miterlimit: 10;stroke-width: 6px"
                    />
                    <path
                        id="test"
                        d="M145.34,481.9a31,31,0,0,0-32.7,21,34.21,34.21,0,0,0-2.5,9.69l-9.58,89.14a6.16,6.16,0,0,0,11.52,3.63L138.78,557a27.77,27.77,0,0,1,27.28-14.2L299.94,557.2a58.36,58.36,0,0,0,64.26-51.8h0Z"
                        transform="translate(-73.96 -94)"
                        style="fill: none;stroke: #f0f0f0;stroke-miterlimit: 10;stroke-width: 6px"
                    />
                    <path
                        d="M138.9,410.21c96.3,71,209.47,9.73,219.91-87.47a131.45,131.45,0,0,0,.67-19.17l.28.24-17-187c-.59-6.6-10-7.17-11.41-.68l-11.31,53c-3.61,16.89-21.93,26.37-37.62,19.16A132,132,0,0,0,241.3,177c-97.2-10.44-181.13,87.14-132.17,196.33A93.39,93.39,0,0,0,138.9,410.21Zm45.82-165.79c81.84-42.7,155.25,48.37,96.15,119.28a36.81,36.81,0,0,1-11.26,9.08c-81.84,42.7-155.25-48.38-96.15-119.29A37,37,0,0,1,184.72,244.42Z"
                        transform="translate(-73.96 -94)"
                        style="fill: #f0f0f0"
                    />
                    <path
                        d="M118.78,496.44a31,31,0,0,0-32.7,21,34.22,34.22,0,0,0-2.51,9.69L74,616.31c-.72,6.68,8.27,9.52,11.52,3.63l26.69-48.38a27.8,27.8,0,0,1,27.29-14.2l133.87,14.38a58.38,58.38,0,0,0,64.27-51.8h0Z"
                        transform="translate(-73.96 -94)"
                        style="fill: #f0f0f0"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
// // @ is an alias to /src
// import anime from "animejs";
import TransitionMixin from "../mixins/transition";

export default {
    name: "Home",
    mixins: [TransitionMixin],
    data() {
        return {
            toggle: false,
            counter: 1,
            isBoxSupport: true,
        };
    },

    mounted() {
        this.$store.state.hover.push(this.$refs.btn);

        if (window.getComputedStyle(document.body).transformBox !== undefined) {
            this.isBoxSupport = true;
        } else {
            this.isBoxSupport = false;
        }

        const eyes = document.querySelectorAll(".pupil");
        document.onmousemove = function(event) {
            var x = (event.clientX * 100) / window.innerWidth + "%";
            var y = (event.clientY * 100) / window.innerHeight + "%";
            eyes.forEach((eye) => {
                eye.style.left = x;
                eye.style.top = y;
                eye.style.transform = "translate(-" + x + ", -" + y + ")";
            });
        };
    },
};
</script>

<style scoped src="../styles/home.css"></style>

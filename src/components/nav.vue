<template>
    <div class="navbar">
        <nav>
            <div class="logo">
                <img src="../assets/logo.svg" alt="" />
            </div>
            <div class="direct" ref="navList">
                <div class="active-back" ref="menuBag">
                    <span class="top-white"></span>
                    <span class="top-black"></span>
                    <span class="bot-white"></span>
                    <span class="bot-black"></span>
                </div>
                <div
                    ref="size"
                    class="home list"
                    @click="menuBackgroundAnim(0)"
                >
                    <router-link to="/" data-content="Home">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.5 15L18 4.5L28.5 15L28.5 30H7.50001L7.5 15Z"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </router-link>
                </div>
                <div class="profile list" @click="menuBackgroundAnim(1)">
                    <router-link to="/about" data-content="About">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M30 31.5V28.5C30 25.1863 27.3137 22.5 24 22.5H12C8.68629 22.5 6 25.1863 6 28.5V31.5M24 10.5C24 13.8137 21.3137 16.5 18 16.5C14.6863 16.5 12 13.8137 12 10.5C12 7.18629 14.6863 4.5 18 4.5C21.3137 4.5 24 7.18629 24 10.5Z"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </router-link>
                </div>

                <div class="skills list" @click="menuBackgroundAnim(2)">
                    <router-link to="/skills" data-content="Skills">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 6C15 5.17157 15.6716 4.5 16.5 4.5H19.5C20.3284 4.5 21 5.17157 21 6V6.85318C21 7.49488 21.4307 8.05237 22.0233 8.29843C22.6162 8.54457 23.3065 8.45076 23.7604 7.99684L24.3639 7.39336C24.9497 6.80758 25.8994 6.80758 26.4852 7.39336L28.6065 9.51468C29.1923 10.1005 29.1923 11.0502 28.6065 11.636L28.0031 12.2394C27.5492 12.6933 27.4554 13.3837 27.7015 13.9766C27.9476 14.5693 28.5051 15 29.1469 15L30 15C30.8284 15 31.5 15.6716 31.5 16.5V19.5C31.5 20.3284 30.8284 21 30 21H29.1469C28.5051 21 27.9476 21.4307 27.7016 22.0234C27.4554 22.6163 27.5492 23.3066 28.0032 23.7605L28.6066 24.3639C29.1924 24.9497 29.1924 25.8995 28.6066 26.4853L26.4852 28.6066C25.8995 29.1924 24.9497 29.1924 24.3639 28.6066L23.7605 28.0032C23.3066 27.5492 22.6162 27.4554 22.0234 27.7016C21.4307 27.9476 21 28.5051 21 29.1469V30C21 30.8284 20.3284 31.5 19.5 31.5H16.5C15.6716 31.5 15 30.8284 15 30V29.1469C15 28.5051 14.5693 27.9476 13.9766 27.7015C13.3837 27.4554 12.6933 27.5492 12.2394 28.0031L11.636 28.6066C11.0502 29.1924 10.1004 29.1924 9.51466 28.6066L7.39334 26.4852C6.80755 25.8995 6.80755 24.9497 7.39334 24.3639L7.99684 23.7604C8.45076 23.3065 8.54457 22.6162 8.29843 22.0233C8.05237 21.4307 7.49488 21 6.85318 21H6C5.17157 21 4.5 20.3284 4.5 19.5V16.5C4.5 15.6716 5.17157 15 6 15L6.85315 15C7.49487 15 8.05238 14.5693 8.29844 13.9766C8.5446 13.3838 8.45078 12.6934 7.99685 12.2395L7.39336 11.636C6.80758 11.0502 6.80758 10.1005 7.39336 9.51469L9.51468 7.39337C10.1005 6.80758 11.0502 6.80758 11.636 7.39337L12.2395 7.99685C12.6934 8.45079 13.3837 8.5446 13.9766 8.29844C14.5693 8.05238 15 7.49487 15 6.85315V6Z"
                                stroke="#F0F0F0"
                                stroke-width="2"
                            />
                            <path
                                d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
                                stroke="#F0F0F0"
                                stroke-width="2"
                            />
                        </svg>
                    </router-link>
                </div>
                <div class="work list" @click="menuBackgroundAnim(3)">
                    <router-link to="/work" data-content="My Work">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3 18C3 18 8.45455 7.5 18 7.5C27.5455 7.5 33 18 33 18C33 18 27.5455 28.5 18 28.5C8.45455 28.5 3 18 3 18Z"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M18 22.5C20.4853 22.5 22.5 20.4853 22.5 18C22.5 15.5147 20.4853 13.5 18 13.5C15.5147 13.5 13.5 15.5147 13.5 18C13.5 20.4853 15.5147 22.5 18 22.5Z"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </router-link>
                </div>
                <div class="contact list" @click="menuBackgroundAnim(4)">
                    <router-link to="/contact" data-content="Contact">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.33333 8.33333L17.143 20.143C18.4447 21.4447 20.5553 21.4447 21.857 20.143L33.6667 8.33333M6.16667 30.8333H32.8333C33.7538 30.8333 34.5 30.0871 34.5 29.1667V9.16667C34.5 8.24619 33.7538 7.5 32.8333 7.5H6.16667C5.24619 7.5 4.5 8.24619 4.5 9.16667V29.1667C4.5 30.0871 5.24619 30.8333 6.16667 30.8333Z"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="menu-toogle">
                <input type="checkbox" @click="slide" />
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </div>
</template>

<script>
import TransitionMixin from "../mixins/transition";
export default {
    mixins: [TransitionMixin],
    data() {
        return {
            navListSize: 0,
        };
    },
    methods: {
        slide() {
            this.$refs.nav.classList.toggle("slide");
        },
    },
    mounted() {
        this.$store.state.navList = this.$refs.navList;
        this.$store.state.menuListHeight = this.$refs.size.clientHeight;
        this.$store.state.lastVisitedPage = this.$refs.size.children[0];
        this.$store.state.lastVisitedPage.classList.toggle("active");
        this.$store.state.hover.push(document.querySelector(".logo"));
        let nav1 = document.querySelectorAll(".direct a");
        nav1.forEach((p) => {
            this.$store.state.hover.push(p);
        });

        let nav2 = document.querySelectorAll(".mob-ver div");
        nav2.forEach((p) => {
            this.$store.state.hover.push(p);
        });
    },
};
</script>

<style scoped src="../styles/nav.css"></style>

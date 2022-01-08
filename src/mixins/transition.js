export default {
  methods: {
    pageTransition() {
      this.$store.state.backgroundTransition.classList.toggle("show");
      setTimeout(() => {
        this.$store.state.backgroundTransition.classList.toggle("show");
      }, 1500);
    },
    menuBackgroundAnim(index) {
      let navList = this.$store.state.navList;
      this.$store.state.lastVisitedPage.classList.remove("active");
      this.$store.state.lastVisitedPage = navList.children[index + 1];
      navList.children[index + 1].classList.add("active");
      navList.children[index + 1].children[0].classList.add("active");
      navList.children[0].style.transform = `translateY(${index *
        this.$store.state.menuListHeight}px)`;
      this.pageTransition();
    },
  },
};

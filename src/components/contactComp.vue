<template>
    <div class="contact section">
        <div class="container">
            <div>
                <div class="text">
                    <h1 class="title">
                        <div class="outline-text">Contact</div>
                        <span class="hov">C</span>
                        <span class="hov">o</span>
                        <span class="hov">n</span>
                        <span class="hov">t</span>
                        <span class="hov">a</span>
                        <span class="hov">c</span>
                        <span class="hov">t</span>
                        <span class="space"></span>
                        <span class="hov">M</span>
                        <span class="hov">e</span>
                    </h1>
                </div>
                <form class="form" @submit="send">
                    <input type="hidden" name="_captcha" value="false" />
                    <div class="input-wrapper">
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            v-model="name"
                            name="name"
                            class="input"
                        />

                        <input
                            type="email"
                            placeholder="Email address"
                            name="email"
                            required
                            v-model="email"
                            class="input"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Subject"
                        required
                        v-model="subject"
                        name="name"
                        class="input"
                    />
                    <textarea
                        id
                        cols="30"
                        rows="10"
                        placeholder="Your Message"
                        name="message"
                        required
                        v-model="message"
                        class="textarea"
                    ></textarea>
                    <button class="btn" type="submit">Send Message</button>
                </form>
            </div>
        </div>
        <div class="loader " v-if="isShowingStatus">
            <div class="lds-ring" v-if="isLoading"></div>
            <div v-else class="message-status">
                <b>{{ sendMessageStatus }}</b>
                <p>{{ statusMessage }}</p>
                <button @click="toggleStatusPage" class="btn">OK</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            name: "",
            email: "",
            subject: "",
            message: "",
            statusMessage:
                "Your Message has been sent successfully, I will contact you very soon !",
            sendMessageStatus: "Thank you !",
            isLoading: false,
            isShowingStatus: false,
        };
    },
    methods: {
        send(e) {
            e.preventDefault();
            this.isLoading = true;
            this.toggleStatusPage();
            axios.defaults.headers.post["Content-Type"] = "application/json";
            axios
                .post("https://formsubmit.co/ajax/gunawanahmadef@gmail.com", {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                    subject: this.subject,
                })
                .then((res) => {
                    console.log(res);
                    this.email = "";
                    this.name = "";
                    this.message = "";
                    this.isLoading = false;
                    this.isShowingStatus = true;
                    this.statusMessage =
                        "Your Message has been sent successfully, I will contact you very soon !";
                    this.sendMessageStatus = "Thank you !";
                })
                .catch((err) => {
                    console.log(err);
                    this.isShowingStatus = true;
                    this.isLoading = false;
                    this.statusMessage =
                        "Some error has occured, Please try again next time !";
                    this.sendMessageStatus = "Sorry !";
                });
        },
        toggleStatusPage() {
            this.isShowingStatus = !this.isShowingStatus;
        },
    },
};
</script>

<style scoped src="../styles/contact.css"></style>

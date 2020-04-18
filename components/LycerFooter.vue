<template>
    <div class="footer">
        <div class="links footer-chunk">
            <div class="title">
                Informationen
            </div>
            <nuxt-link to="/">Startseite</nuxt-link>
            <nuxt-link to="/about">Wir Über Uns</nuxt-link>
            <!-- <nuxt-link to="/">Anfahrt</nuxt-link> -->
            <nuxt-link to="/company-details">Impressung</nuxt-link>
            <nuxt-link to="/privacy">Datenschutzerklärung</nuxt-link>
        </div>
        <div class="contact footer-chunk">
            <div class="title">
                Kontakt
            </div>
            <LycerContactInfo/>
        </div>
        <div class="footer-map">
            <div class="title">
                Karte
            </div>
            <div class="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.1002231952475!2d8.50594181597386!3d51.58472651286694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bbc8e240a1f743%3A0x42da9ce82ee8d022!2sLycer%C2%B4s%20H%C3%BCpfburg%20%26%20Eventservice!5e0!3m2!1sde!2sde!4v1586704253420!5m2!1sde!2sde"
                    width="350"
                    height="190"
                    frameborder="0"
                    style="border:0;"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script>
import LycerContactInfo from '@/components/LycerContactInfo'

export default {
    name: 'LycerFooter',
    components: { LycerContactInfo }
}
</script>

<style scoped>
.footer {
    background-color: #272c38;
    width: 100%;
    padding: 0 80px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
}

.footer-chunk {
    width: 250px;
    padding: 20px 0;
}

.footer-map {
    width: 350px;
    padding: 20px 0;
}

.title {
    font-size: 16pt;
    color: #ddd;
    text-transform: uppercase;
    margin-bottom: 10px;
    line-height: 30px;
}

.links {
    display: flex;
    flex-direction: column;
}

.links a {
    text-decoration: none;
    margin: 2px 0;
    padding: 2px 0;
    line-height: 24px;
    color: #aaa;
    transition-duration: 0.2s;
}

.links a:hover {
    color: #ccc;
    text-decoration: underline;
}

.map {
    height: 190px;
    width: 100%;
}
</style>
<template>
    <div class="contact-info">
        <div class="line">
            <div class="icon"><FontAwesomeIcon icon="map-marker-alt"/></div>
            <div class="content">
                <div>{{ contactInfo.address.street }}</div>
                <div>{{ contactInfo.address.postalCode }}, {{ contactInfo.address.city }}</div>
            </div>
        </div>
        <div class="line">
            <div class="icon"><FontAwesomeIcon icon="phone-alt"/></div>
            <div class="content">{{ contactInfo.phone }}</div>
        </div>
        <div class="line">
            <div class="icon"><FontAwesomeIcon icon="mobile-alt"/></div>
            <div class="content">{{ contactInfo.mobile }}</div>
        </div>
        <div class="line">
            <div class="icon"><FontAwesomeIcon icon="envelope"/></div>
            <div class="content">
                <a :href="mailTo">{{ contactInfo.email }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LycerContactInfo',
    data() {
        return {
            contactInfo: {
                address: {
                    city: 'Büren / Steinhausen',
                    postalCode: '33142',
                    street: 'Lippstädter Weg 40',
                },
                phone: "02951 9338982",
                mobile: "0174 2508180",
                email: "lycer@t-online.de"
            }
        }
    },
    computed: {
        mailTo() { return `mailto:${this.contactInfo.email}` }
    }
}
</script>

<style scoped>
.contact-info {
    display: flex;
    flex-direction: column;
    color: #aaa;
}

.line {
    display: flex;
    /* align-items: center; */
    line-height: 24px;
    margin: 2px 0;
}

.icon {
    width: 20px;
    text-align: center;
    margin-right: 10px;
}

.content a {
    text-decoration: none;
    color: #aaa;
    transition-duration: 0.1s;
}

.content a:hover {
    text-decoration: underline;
    color: #ccc;
}
</style>
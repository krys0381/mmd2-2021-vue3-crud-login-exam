<template>
    <div class="contact">
        <Header />
        <ContactComponent />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ContactComponent from '../components/ContactComponents/ContactComponent.vue'

export default {
    name: 'ContactView',

    components:{
        Header,
        ContactComponent,
        Footer
    }
}
</script>

<style scoped lang="scss">

</style>
<template>
  <div class="events">
    <Header />
    <h1>Willkommen to Events</h1>

    <EventListUsers />
    <Footer />
  </div>
</template>

<script>
// Stuff for CRUD

import Header from '../components/Header.vue'
import EventListUsers from '@/components/EventsComponents/EventListUsers.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'EventsView',
  components: {
    Header,
    EventListUsers,
    Footer
  }
}
</script>
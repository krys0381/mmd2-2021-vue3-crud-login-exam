<template>
  <div class="events">
    <HeaderComponent />
    <h1>Willkommen to Events</h1>

    <EventListUsers />
  </div>
</template>

<script>
// Stuff for CRUD

import HeaderComponent from '../components/Header.vue'
import EventListUsers from '@/components/EventListUsers.vue'

export default {
  name: 'EventsView',
  components: {
    HeaderComponent,
    EventListUsers
  }
}
</script>
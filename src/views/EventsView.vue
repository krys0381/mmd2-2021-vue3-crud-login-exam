<template>
  <div class="events">
    <h1>Willkommen to Events</h1>

    <img alt="Vue logo" src="../assets/logo.png">

    <EventListUsers />
  </div>
</template>

<script>
// Stuff for CRUD

import EventListUsers from '@/components/EventListUsers.vue'

export default {
  name: 'EventsView',
  components: {
    EventListUsers
  }
}
</script>
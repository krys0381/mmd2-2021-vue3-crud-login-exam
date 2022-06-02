import firebase from 'firebase'
import { ref, onUnmounted } from 'vue' // 1: Will be used in our CRUD functions

const config = {
  apiKey: "AIzaSyAlXu_W-cgrTLY5KkVNCCG5dwHCRurGOGQ",
  authDomain: "techhubsyd.firebaseapp.com",
  projectId: "techhubsyd",
  storageBucket: "techhubsyd.appspot.com",
  messagingSenderId: "35059165841",
  appId: "1:35059165841:web:c524ab0bcc7ec09b5f2d30"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()   // 1:  saving into a const variable
const eventCollection = db.collection('events') // 1:  grab the collection from firestore
const testimonialCollection = db.collection('testimonials')

// 2 : Make our CRUD functions and exporting them for use in other components

// create project by using the add prototype from firebase
// Add a project to the project collection
export const createEvent = event => {
  return eventCollection.add(event)
}

export const createTestimonial = testimonial => {
  return testimonialCollection.add(testimonial)
}

// accept project id and return the documentation if it exist in the project collection
export const getEvent = async id => {
  const event = await eventCollection.doc(id).get()
  return event.exists ? event.data() : null  
}

export const getTestimonial = async id => {
  const testimonial = await testimonialCollection.doc(id).get()
  return testimonial.exists ? testimonial.data() : null
}

// accepts project + id (through the v-for) and updates the correct project based in id
export const updateEvent = (id, event) => {
  return eventCollection.doc(id).update(event)
}

export const updateTestimonial = (id, testimonial) => {
  return testimonialCollection.doc(id).update(testimonial)
}

// accepts id => deletes
export const deleteEvent = id => {
  return eventCollection.doc(id).delete()
}

export const deleteTestimonial = id => {
  return testimonialCollection.doc(id).delete()
}

// composition hook, that will return a ref to an array of projects from the database
// to do this we add a listener(onSnapshot) on projectCollections so 
// it updates whenever a change is detected


export const useLoadEvents = () => {
  const events = ref([])
  const close = eventCollection.orderBy("date").onSnapshot(snapshot => {
    events.value = snapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }))
  })
  onUnmounted(close)
  return events
}

export const useLoadTestimonials = () => {
  const testimonials = ref([])
  const close = testimonialCollection.onSnapshot(snapshot => {
    testimonials.value = snapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }))
  })
  onUnmounted(close)
  return testimonials
}

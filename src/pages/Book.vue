<template>
  <div class="contacts-container">
    <Author />
    <div>
      <Panel />
      <div class="contacts">
        <ContactCard
          v-for="(contact, index) in Contacts"
          :key="contact.index"
          :contact="contact.name"
          :contactid="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Author from '@/components/Author'
import Panel from '@/components/Book/Panel'
import ContactCard from '@/components/Book/ContactCard'

export default {
  components: {
    Author,
    Panel,
    ContactCard
  },
  computed: {
    // Mapping state with Contacts to current component
    ...mapState({
      Contacts: (state) => state.ContactBook.Contacts
    })
  }
}
</script>

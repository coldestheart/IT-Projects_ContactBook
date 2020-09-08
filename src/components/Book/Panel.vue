<template>
  <div id="Panel">
    <div class="icon-add">
      <addContact @click="newContact()" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import addContact from '@/assets/icons/add.svg?inline'

import '@/assets/styles/components/Book/Panel.scss'

export default {
  components: {
    addContact
  },
  computed: {
    ...mapState({
      contactslength: (state) => state.ContactBook.Contacts.length
    })
  },
  methods: {
    ...mapMutations({
      addcontact: 'add_contact'
    }),
    newContact() {
      this.addcontact()
      this.$router.push(`/contact/${this.contactslength - 1}`)
    }
  }
}
</script>

<template>
  <div class="contact">
    <hr />
    <div class="contact-row">
      <h3>{{ contact }}</h3>
      <div class="contact-board">
        <div class="contact-icon icon-del" @click="del()">
          <DeleteIcon />
        </div>
        <div class="contact-icon icon-more" @click="openContact()">
          <MoreIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteIcon from '@/assets/icons/delete.svg?inline'
import MoreIcon from '@/assets/icons/more.svg?inline'

import '@/assets/styles/components/Book/ContactCard.scss'
import { mapMutations } from 'vuex'

export default {
  components: {
    DeleteIcon,
    MoreIcon
  },
  props: {
    contact: {
      type: String,
      default: ''
    },
    contactid: {
      type: Number,
      default: 0
    }
  },
  methods: {
    // Map Contact Deletion Mutation
    ...mapMutations({
      delContact: 'delete_contact'
    }),
    // Go To Contact Page by index
    openContact() {
      this.$router.push(`contact/${this.contactid}`)
    },
    del() {
      if (confirm('Delete contact?')) {
        this.delContact(this.contactid)
      }
    }
  }
}
</script>

<template>
  <div class="contacts-container">
    <div :key="Render">
      <Name :id="contactID" :contactname="contacts[contactID].name" />
      <h3>Information:</h3>
      <Fields
        v-for="(field, index) in contacts[contactID].fields"
        :id="contactID"
        :key="field.index"
        :fieldid="index"
        :inputfield="field"
      />
      <Tools :id="contactID" />
    </div>
  </div>
</template>

<script>
import Name from '@/components/Contact/Name'
import Fields from '@/components/Contact/Fields'
import Tools from '@/components/Contact/Tools'

import { mapState } from 'vuex'

export default {
  name: 'ContactsBook',
  components: {
    Name,
    Fields,
    Tools
  },
  data() {
    return {
      contactID: parseInt(this.$route.params.index)
    }
  },
  computed: {
    // Mapping State for get current Contact by index
    ...mapState({
      contacts: (state) => state.ContactBook.Contacts,
      Render: (state) => state.ContactBook.render
    })
  }
}
</script>

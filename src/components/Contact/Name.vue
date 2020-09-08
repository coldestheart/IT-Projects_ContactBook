<template>
  <div class="contact-name">
    <h3>Name:</h3>
    <input
      v-model="currentname"
      class="input-name"
      type="text"
      @input="changeName()"
    />
    <div class="icon undo" @click="cancel()">
      <UndoButton v-if="oldname !== currentname" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import UndoButton from '@/assets/icons/undo.svg?inline'

import '@/assets/styles/components/Contact/Name.scss'

export default {
  components: {
    UndoButton
  },
  props: {
    contactname: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      timeout: null,
      oldname: this.contactname,
      currentname: this.contactname,
      Obj: { name: '', id: this.id }
    }
  },
  methods: {
    ...mapMutations({
      setname: 'set_name',
      setsnapshot: 'set_snapshot'
    }),
    // Changing name
    changeName() {
      // clear timeout variable
      clearTimeout(this.timeout)
      const self = this
      this.timeout = setTimeout(function() {
        self.setsnapshot(self.id)
        // handle this block of code after second
        self.Obj.name = self.currentname
        self.setname(self.Obj)
      }, 1000)
    },
    // Cancel changes
    cancel() {
      if (confirm('Cancel changes for this field?')) {
        this.currentname = this.oldname
        this.changeName()
      }
    }
  }
}
</script>

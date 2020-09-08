<template>
  <div class="fields">
    <div class="icon undo" @click="cancel('key')">
      <UndoButton v-if="oldkey !== currentkey" />
    </div>
    <input
      v-model="currentkey"
      class="input-fields"
      type="text"
      @input="input()"
    />
    :
    <input
      v-model="currentvalue"
      class="input-fields"
      type="text"
      @input="input()"
    />
    <div class="icon undo" @click="cancel('value')">
      <UndoButton v-if="oldvalue !== currentvalue" />
    </div>
    <div class="icon undo" @click="del()">
      <Delete />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import UndoButton from '@/assets/icons/undo.svg?inline'
import Delete from '@/assets/icons/delete.svg?inline'

import '@/assets/styles/components/Contact/Fields.scss'

export default {
  components: {
    UndoButton,
    Delete
  },
  props: {
    id: {
      type: Number,
      default: 0
    },
    fieldid: {
      type: Number,
      default: 0
    },
    inputfield: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      oldkey: this.inputfield.key,
      oldvalue: this.inputfield.value,
      currentkey: this.inputfield.key,
      currentvalue: this.inputfield.value,
      Obj: {
        id: this.id,
        fieldid: this.fieldid,
        field: { key: this.inputfield.key, value: this.inputfield.value },
        timeout: null
      }
    }
  },
  methods: {
    // Mapping Change Fields Mutation
    ...mapMutations({
      setfield: 'set_field',
      delfield: 'del_field',
      setsnapshot: 'set_snapshot'
    }),
    // Use Change Field Mutation
    input() {
      // clear timeout variable
      clearTimeout(this.timeout)
      const self = this
      this.timeout = setTimeout(function() {
        // handle this block of code after second
        self.setsnapshot(self.id)
        self.Obj.field.key = self.currentkey
        self.Obj.field.value = self.currentvalue
        self.setfield(self.Obj)
      }, 1000)
    },
    cancel(type) {
      if (confirm('Cancel changes for this field?')) {
        this.setsnapshot(this.id)
        if (type === 'key') {
          this.currentkey = this.oldkey
        } else {
          this.currentvalue = this.oldvalue
        }
        this.input()
      }
    },
    del() {
      if (confirm('Delete?')) {
        this.setsnapshot(this.id)
        this.delfield(this.Obj)
      }
    }
  }
}
</script>

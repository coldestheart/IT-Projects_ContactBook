<template>
  <div class="tools">
    <div
      class="icon undo"
      :class="{ disabled: !snapShot }"
      @click="UndoCurrent()"
    >
      <UndoButton /> Undo
    </div>
    <div class="icon addfield" @click="addField()"><AddField />Add Field</div>
    <div class="icon home" @click="goHome()"><Home />To Homepage</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import '@/assets/styles/components/Contact/Tools.scss'

import AddField from '@/assets/icons/addfield.svg?inline'
import UndoButton from '@/assets/icons/undo.svg?inline'
import Home from '@/assets/icons/tohome.svg?inline'

export default {
  components: {
    AddField,
    UndoButton,
    Home
  },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState({
      snapShot: (state) => state.ContactBook.snapshot
    })
  },
  methods: {
    ...mapMutations({
      addfield: 'add_field',
      restoresnapshot: 'restore_snapshot',
      setsnapshot: 'set_snapshot'
    }),
    // Create Field via Mutation
    addField() {
      this.setsnapshot(this.id)
      this.addfield(this.id)
    },
    // Undo last and update render
    UndoCurrent() {
      this.restoresnapshot(this.id)
    },
    // Redirect to homepage
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

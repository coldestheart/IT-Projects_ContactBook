const state = {
  Contacts: [],
  snapshot: null,
  render: 1
}

const mutations = {
  //Home Page Mutations

  // Add Contacts
  add_contact(state) {
    const payload = { index: state.Contacts.length, name: '', fields: [] }
    state.Contacts.push(payload)
  },
  // Delete Contact
  delete_contact(state, payload) {
    state.Contacts.splice(payload, 1)
  },

  //Contact page mutations

  //Changing Name for Current Contact
  set_name(state, payload) {
    state.Contacts[payload.id].name = payload.name
  },
  // Change fields in for Current Contact
  set_field(state, payload) {
    state.Contacts[payload.id].fields[payload.fieldid] = payload.field
  },
  // Add new field for Current Contact
  add_field(state, payload) {
    const field = {
      index: state.Contacts[payload].fields.length,
      key: '',
      value: ''
    }
    state.Contacts[payload].fields.push(field)
    state.render++
  },
  // Delete Field for Current Contact
  del_field(state, payload) {
    state.Contacts[payload.id].fields.splice(payload.fieldid, 1)
    state.render++
  },

  // Snapshot Mutations Fastest way

  // Crate Snapshot
  set_snapshot(state, payload) {
    // Make Snapshot not reactive
    state.snapshot = JSON.parse(JSON.stringify(state.Contacts[payload]))
  },
  // Restore Snapshot
  restore_snapshot(state, payload) {
    // Make Snapshot not reactive
    state.Contacts[payload] = JSON.parse(JSON.stringify(state.snapshot))
    // Clear
    state.snapshot = null
    state.render++
  }
}

export default {
  state,
  mutations
}

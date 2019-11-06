"use strict";

import  noteList from "../cmps/note-list.cmp.js"
import  notePreview from "../cmps/note-preview.cmp.js"
import notesService  from "../services/note-service.js"


Vue.config.productionTip = false;
export default {
  name: 'keep-app',
  components: {
    noteList,
    notePreview,
    notesService,
},

  template: `
    <section>
    <h1 class="header">Keep App</h1>
    <form @submit.prevent="addingNote">
        <input  placeholder="Take a note" v-model="text" class="take-a-note" >
        <button>Add</button>
    </form>
    <note-list :notes="notes" ></note-list>


</section>
    `,
  data() {
    return {
        text: 'nimrod',
        selectedNote: null,
      notes: notesService.getNotes(),
    } 
  },
  created() {
//     console.log(notesService.getNotes(), 'testing'),
    // console.log(notesService.addNote('testing'), 'testing adding')
  },

  methods: {
    selectNote(selectedNoteId) {
      console.log('in the app')
      notesService.getNoteById(selectedNoteId)
      .then(note=>this.selectedNote=note)
    },
    // saveNote() {
    //     notesService.saveNote(this.noteToEdit)
    //         .then(savedNote => {
    //             const msg = {
    //                 txt: `${savedNote.name} Saved Succefully`,
    //                 type: 'success'
    //             }
    //             eventBus.$emit('show-msg', msg);
    //             // alert('Success! id:' + savedNote.id);
    //             this.$router.push('/note');
    //         })
    //         .catch(err => {
    //             const msg = {
    //                 txt: `NOT Saved (${err})`,
    //                 type: 'error'
    //             }
    //             eventBus.$emit('show-msg', msg);
    //         })
    // },
    addingNote() {
        notesService.addNote(this.text)

    
    }
  },
  computed: {
    notesToShow() {
      if (!this.filterBy) return this.notes;
      let regex = new RegExp(`${this.filterBy.name}`, "i");
      var tempBooks = this.books.filter(book => regex.test(book.title));
      return tempBooks.filter(
        book => book.listPrice.amount <= this.filterBy.price
      );
    }
  }}
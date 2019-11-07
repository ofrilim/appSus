import keepService from '../services/note-service.js';
import noteTxt from './dynamic-cmps/note-text.cmp.js'
import noteImg from './dynamic-cmps/note-img.js'
import noteAudio from './dynamic-cmps/note-audio.cmp.js'


export default {
    template: `
        <section  class="note-preview">
           
            <h1>note preview</h1>
            <component :is="note.noteType" :note="note" :curr-mode="'preview'" v-if="note">
            </component>
            
        </section>
    `,
    data(){
        return {
           note: null
        }
    },
    created() {
        this.loadNote()        
    },
    methods:{
        loadNote() {
            keepService
              .getNoteById(this.$route.params.noteId)
              .then(note => (this.note = note));
          }
    },
    watch:{
        '$route.params.noteId': function(newNoteId) {
            console.log('$route.params.noteId has changed!', newNoteId);
            this.loadNote();
          }
    },
    components: {
        noteTxt,
        noteImg,
        noteAudio
    }
}
import bus from '../../services/event-bus.service.js'


export default {
    template: `
        <section class="controls" v-if="currMode !== 'preview' && currMode !== 'new'">
            <button v-if="currMode === 'list'" @click="deleteNote(note.id)" title="Delete"> <i class="fas fa-trash-alt"> </i></button>
            <button v-if="currMode === 'list'" @click="editNote(note.id)" title="Edit"> <i class="fas fa-pencil-alt" ></i></button>
            <button v-if="currMode === 'list'"  @click="pinNote(note.id)" title="Pin to starts">  <i class="fas fa-thumbtack"></i> </button>
            <button  v-if="currMode === 'list'" @click="previewNote(note.id)" title="Preview"> <i class="fas fa-expand"></i> </button>
            <input v-if="currMode === 'list'" :id="note.id" type="color" @change="emitChangeColor" class="color-input" title="Change color"/>
            <label :for="note.id"><i class="fas fa-palette"></i></label>
            <button  v-if="currMode === 'edit'" @click="saveNotes()" title="Save changes" class="save-btn-control">Save changes </button>
        </section>
    `,
    props: ['note', 'currMode'],
    components: {
        bus   
    },
    data() {
        return {
            isPinned: false
        }
    },
    created() {
        // console.log(this.noteId);
    },
    methods: {
        deleteNote(noteId) {
            bus.$emit('deleteNote', noteId);
            // console.log('delete', noteId);
        },
        editNote(noteId) {
            bus.$emit('editNote', noteId);
            // console.log('delete', noteId);
        },
        previewNote(noteId) {
            bus.$emit('previewNote', noteId);
            // console.log('delete', noteId);
        },
        pinNote(noteId) {
            this.isPinned = !this.isPinned 
            bus.$emit('pinNote', noteId);
            // console.log('delete', noteId);
        },
        saveNotes() {
            bus.$emit('saveNotes');
            // console.log('delete', noteId);
        },
        // changeColor(color) {
        //     this.note.color = color
        //     bus.$emit('saveNotes', this.note);
        // },
        emitChangeColor() {
            console.log ('this note color', this.note)
            bus.$emit('changeColor', this.note)
        },
        
        // changeColor(color) {
        //     // bus.$emit('saveNotes');
        //     console.log('color', color);
        // }

        // changeColor(jscolor) {
            // 'jscolor' instance can be used as a string
            // console.log('color', jscolor);
            // document.getElementById('rect').style.backgroundColor = '#' + jscolor
        // }
        
    }
}


{/* <input class="jscolor {onFineChange:'changeColor(this)'}" value="cc66ff"> */}
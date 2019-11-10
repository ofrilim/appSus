import bus from '../../services/event-bus.service.js'

const colorPicker = {
    props: ['colors'],
    template: `
    <div class="color-picker" @mouseleave="hideColorPicker" >
        <div :style="{'background-color': note.color}" v-for="(color) in colors" :key="color">
            <div class="color-circle" :style="{zIndex:'10', backgroundColor:'black'}" @click.stop="changeColor(color)" ></div>
            <!-- <div class="color-circle" :style="getClass(color)" @click.stop="changeColor(color)" ></div> -->
        </div>
    </div>
    `,
    methods: {
        hideColorPicker() {
            this.$emit('hideColorPicker')
        },
        changeColor(color) {
            this.$emit('changeColor', color)
        },
        getClass(color) {
            return { 'backgroundColor': color }
        }
    },
}

export default {
    template: `
        <section class="controls" v-if="currMode !== 'preview' && currMode !== 'new'">
            <button v-if="currMode === 'list'" @click="deleteNote(note.id)" title="Delete"> <i class="fas fa-trash-alt"> </i></button>
            <button v-if="currMode === 'list'" @click="editNote(note.id)" title="Edit"> <i class="fas fa-pencil-alt" ></i></button>
            <button v-if="currMode === 'list'"  @click="pinNote(note.id)" title="Pin to starts">  <i class="fas fa-thumbtack"></i> </button>
            <button  v-if="currMode === 'list'" @click="previewNote(note.id)" title="Preview"> <i class="fas fa-expand"></i> </button>
            <button v-if="currMode === 'list'" @click="showColorPicker=!showColorPicker" title="Change color"><i class="fas fa-palette note-control-opt"></i></button>
            <button  v-if="currMode === 'edit'" @click="saveNotes()" title="Save changes" class="save-btn-control">Save changes </button>
        </section>
    `,
    props: ['note', 'currMode'],
    components: {
        colorPicker, 
        bus   
    },
    data() {
        return {
            colors: ['CornflowerBlue', 'yellow', 'orange', 'PaleGreen', 'LightGoldenRodYellow', 'tomato', 'LightGray', 'LightPink', 'white'],
            showColorPicker: false,
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
        changeColor(color) {
            this.note.color = color
            bus.$emit('saveNotes', this.note);
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
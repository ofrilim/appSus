import noteControls from './note-controls.cmp.js'


export default {
    template: `
        <section class="note" :class="{active: isPinned}">
        <h1 v-if="currMode !== 'edit' && currMode !== 'new'"> {{note.data.title}} </h1>
        <h1 v-if="currMode === 'edit' || currMode === 'new'">
                <input type="text" v-model="note.data.title" placeholder="Enter title"/>
        </h1>
            <div class="content">
                <audio ref="audio" controls>
                    <source  :src="note.data.src" type="audio/mp3">
                    Your browser does not support the audio tag.
                </audio>
                <div v-if="currMode === 'edit' || currMode === 'new'">
                    <input  type="text" v-model="note.data.src" @input="reloadSound()" placeholder="Enter sound url"/>
                </div>
            </div>
            <note-controls :note="note" :currMode="currMode" :isPinned="isPinned"></note-controls>
        </section>
    `,
    props: ['note', 'currMode'],
    data() {
        return {
           isPinned: false
        }
    },
    created() {

        
    },
    methods: {
         reloadSound() {
            this.$refs.audio.load(); //call this to just preload the audio without playing
        },
        pinToggle() {
            this.$emit('pinned', this.isPinned)
        }
        
    },
    computed: {
        
    },
    components: {
        noteControls
    }
}
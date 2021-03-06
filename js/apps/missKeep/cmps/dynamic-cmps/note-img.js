import noteControls from './note-controls.cmp.js'



export default {
    template: `
        <section class="note" >
        <h1 v-if="currMode !== 'edit' && currMode !== 'new'"> {{note.data.title}} </h1>
        <h1 v-if="currMode === 'edit' || currMode === 'new'">
                <input type="text" v-model="note.data.title" placeholder="Enter title"/>
        </h1>
            <div class="content">
              <img ref="img" :src="note.data.src" />
              <div v-if="currMode === 'edit'  || currMode === 'new'">
                    <input type="text" v-model="note.data.src" placeholder="Enter image url"/>
                </div>
            </div>
            

            <note-controls :note="note" :currMode="currMode"></note-controls>
        </section>
    `,
    props: ['note', 'currMode'],
    data() {
        return {
            // title: this.note.data.title,
        }
    },
    created() {
    },
    methods: {
    },
    components: {
        noteControls
    }
}
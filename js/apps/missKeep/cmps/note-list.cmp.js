"use strict";
import  notePreview from "./note-preview.cmp.js"

export default {
  props: ["notes"],
  components: {
    notePreview
},
  template: `
           <section>
                <ul class="note-list">
                    <note-preview v-for="note in notes" v-bind:note="note" :key="note.id"></note-preview>
                </ul>
            </section>
    </section>
    `,
  methods: {

    }
  }


'use strict';

import noteTxt from './dynamic-cmps/note-text.cmp.js'
import noteImg from './dynamic-cmps/note-img.js'
import noteAudio from './dynamic-cmps/note-audio.cmp.js'
import noteVideo from './dynamic-cmps/note-video.cmp.js'



export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <component v-for="(note, idx) in notes"  :is="note.noteType" :key="note.id" :note="note" :curr-mode="'list'" :class="{active: note.isPinned}">
            </component> 
        </section>
    `,
    methods: {
        noteSelected(noteId) {
            this.$emit('selected', noteId);
        }
    },
    components: {
        noteTxt,
        noteImg,
        noteAudio,
        noteVideo
    }
}
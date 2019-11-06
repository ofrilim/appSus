"use strict";
import notesService from "../services/note-service.js";

export default {
  props: ["note"],
  template: `
    <li class="note-preview">
      <div class="note-title"
        <h4>{{note.name}}</h4>
</div>
<div style="getBgColor" class="note-content>"
        <img class="img-small" :src="note.img">
</div>

        <button @click="removeNote(note.id)">X</button>
  <div class="color">
<input type="text" v-bind:style="getBgColor" v-model="color" maxlength="7"/>
  <input type="color" v-model="color"/>
    </div>
    </li>
    `,
      data() {
      return {
        color: ''
      }
},
  methods: {
    removeNote(noteId) {
      notesService.removeNote(noteId);
    }
  },
  computed: {
    getBgColor() {
        return { 'backgroundColor': this.note.bgColor }
    }
}
}

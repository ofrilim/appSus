

export default {
    getNotes,
    removeNote,
    saveNote,
    addNote

}




var gNextId = 101;
const gNotes = [_createNote('Bobi'), _createNote('Pinchilada', 'https://i.kym-cdn.com/entries/icons/mobile/000/006/026/NOTSUREIF.jpg'
)]

function getNotes() {
    return gNotes;
}

function removeNote(noteId) {
    var idx = gNotes.findIndex(note =>note.id === noteId);
    gNotes.splice(idx, 1)
}

function _createNote(name,img) {
    return {
        id: gNextId++,
        name,
        img,

    
    }
}
function saveNote() {
    // NEW DOG
    if (!note.id) {
        note.id = makeId()
        gNotes.unshift(note);
    } else {
        // EXISTING DOG
        const idx = gNotes.findIndex(currNote => currNote.id === note.id);
        gNotes.splice(idx, 1, note);
        // The following line is not supported by Vue's reactivity system
        // gNotes[idx] = note;
    }
    storageService.store(STORAGE_KEY, gNotes)
    return Promise.resolve(note)
    // return Promise.reject('Big Badabum')
}

function addNote(txt,img) {
    gNotes.unshift(_createNote(txt,img));

}

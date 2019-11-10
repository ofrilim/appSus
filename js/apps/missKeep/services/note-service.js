import utilService from "./util-service.js";
import storageService from "./local-storage-service.js";

var notes = [];

var NOTES_KEY = "keepApp";
var notesFilter = "All";

function getNewNote(noteType) {
  var newNote = {
    id: utilService.makeId(6),
    type: noteType,
    color: '',
    isPinned: false,
    data: {
      title: "",
      txt: ""
    }
  };
  if (noteType === "note-txt") newNote.data.txt = "";
  if (
    noteType === "note-audio" ||
    noteType === "note-video" ||
    noteType === "note-img"
  )
    newNote.data.url = "";
//   if (noteType === 'note-todos') {
//         newNote.txt = note.txt.split(',').map
//         }
  return Promise.resolve(newNote);
}

export default {
  query,
  deleteNote,
  getNoteById,
  store,
  getNoteType,
  addNote,
  pinNote,
  getNewNote
};

function getNoteType(noteType) {
  var note = null;
  switch (noteType) {
    case "note-img" || 'note-audio' || 'note-video' || 'note-list'|| 'note-txt':
      note = getNewNote();
      break;
    default:
      note = getNewNote();
  }

  return Promise.resolve(note);
}

function query() {
  notes = storageService.load(NOTES_KEY);
  if (!notes || notes.length === 0) {
    notes = [
      {
        noteType: "note-txt",
        id: utilService.makeId(6),
        color: 'greenyellow',
        isPinned: false,
        data: {
          title: "sprint 3",
          txt: "working on note service"
        }
      },
      {
        noteType: "note-img",
        id: utilService.makeId(6),
        color: 'green',
        isPinned: false,
        data: {
          title: "fun reading",
          src:
            "https://a.thumbs.redditmedia.com/8Tym4EAD4XirLemV3iBYX1Q0agaiH1cBhw4A8rKIyt4.png"
        }
      },
      {
        noteType: "note-audio",
        id: utilService.makeId(6),
        color: 'lightgray',
        isPinned: false,
        data: {
          title: "good song",
          src:
            "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
        }
      },
      {
        noteType: "note-video",
        id: utilService.makeId(6),
        color: 'brown',
        isPinned: false,
        data: {
          title: "video is working",
          src: "http://techslides.com/demos/sample-videos/small.mp4"
        }
      },
      {
        noteType: "note-img",
        id: utilService.makeId(6),
        color: 'blue',
        isPinned: false,
        data: {
          title: "fun what",
          src:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Rick_Sanchez.png/160px-Rick_Sanchez.png"
        }
      },
      {

      },
    //   {
    //     noteType: "note-todo",
    //     id: utilService.makeId(6),
    //     data: {
    //       title: "todo list",
    //       todos:[
    //         {
    //             id: utilService.makeId(6),
    //             txt: 'testing',
    //             isDone: false
    //         },
    //         {
    //             id: utilService.makeId(6),
    //             txt: 'two',
    //             isDone: false
    //         },
    //         {
    //             id: utilService.makeId(6),
    //             txt: 'todotodotodotodo',
    //             isDone: false
    //         },
    //     ],
    //     }
    //   },
      {
        noteType: "note-txt",
        id: utilService.makeId(6),
        color: 'blue',
        isPinned: false,
        data: {
          title: "angie",
          txt:
            "Angie, Angie When will those clouds all disappear Angie, Angi Where will it lead us from here With no loving in our soul And no money in our coat You cant say were satisfied But Angie, Angie"
        }
      },
      
    ];
  }
  return Promise.resolve(notes);
}

function addNote(note) {
  console.log("addNote - ", note);
  notes.unshift(note);
  storageService.store(NOTES_KEY, notes);
  return Promise.resolve();
}

function pinNote(id) {
  var noteIdx = getNoteIdxById(id);
  if (noteIdx === -1) return;
  var note = notes.splice(noteIdx, 1)[0];
  console.log("pinNote --- ", note);
  notes.unshift(note);
  note.isPinned = !(note.isPinned)
  storageService.store(NOTES_KEY, notes);
  return Promise.resolve();
}

function deleteNote(id) {
  var noteIdx = getNoteIdxById(id);
  if (noteIdx === -1) return;
  notes.splice(noteIdx, 1);
  storageService.store(NOTES_KEY, notes);
  return Promise.resolve();
}

function toggleNote(id) {
  var note = getNoteById(id);
  if (!note) return;
  note.isDone = !note.isDone;
  storageService.store(NOTES_KEY, notes);
  return Promise.resolve(note);
}

function getNoteById(id) {
  var note = notes.find(note => note.id === id);
  return Promise.resolve(note);
}

function getNoteIdxById(id) {
  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];
    if (note.id === id) return i;
  }
  return -1;
}

function setFilter(strFilter) {
  notesFilter = strFilter;
}

function getNotesForDisplay() {
  var notes = [];
  notes.forEach(function(note) {
    if (
      notesFilter === "All" ||
      (notesFilter === "Active" && !note.isDone) ||
      (notesFilter === "Done" && note.isDone)
    ) {
      notes.push(note);
    }
  });
  return Promise.resolve(notes);
}

function getCount() {
  return notes.length;
}

function getActiveCount() {
  var activeCount = 0;
  notes.forEach(function(note) {
    if (!note.isDone) activeCount++;
  });
  return activeCount;
}

function store() {
  storageService.store(NOTES_KEY, notes);
}

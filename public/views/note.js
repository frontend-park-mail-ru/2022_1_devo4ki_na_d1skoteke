import { CreateLeftSide } from "../components/LeftSideBar/LeftSideBar.js";
import { CreateNoteContent } from "../components/NoteContent/NoteContent.js";
import { ApiStore } from "../store/ApiStore.js";

export const note = async (node) => {
  const page = document.createElement("div");

  page.classList.add("notion__whole__page");

  const fetchRes = await ApiStore.GetAllNotes();

  // const bookStore = fetchRes.notes;
  // let bookStore = {
  //   notes: [
  //     {
  //       title: "First note heheheh interesting",
  //       favincon: "s3/erfgefwfwef",
  //       token: "AP-ion-2342341242regf3qf3f3f3wfd",
  //     },
  //     {
  //       title: "2 note heheheh interesting",
  //       favincon: "s3/erfgefwfwef",
  //       token: "API-ion-2342341242regf3qf3f3f3wfe",
  //     },
  //     {
  //       title: "3 note heheheh interesting",
  //       favincon: "s3/erfgefwfwef",
  //       token: "API-ion-2342341242regf3qf3f3f3wfd",
  //     },
  //   ],
  // };


  console.log()



  // console.log(fetchRes);

  // bookStore = bookStore.notes;


  CreateLeftSide(page, { name: "Henry", bookStore });

  const tno = await ApiStore.GetNoteByToken("My first note");

  CreateNoteContent(page, { name: "Henry", title: "1", bookStore });

  node.appendChild(page);
};



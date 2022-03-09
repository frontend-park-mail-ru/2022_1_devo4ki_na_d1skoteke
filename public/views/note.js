import { CreateLeftSide } from "../components/LeftSideBar/LeftSideBar.js";
import { CreateNoteContent } from "../components/NoteContent/NoteContent.js";
import { ApiStore } from "../store/ApiStore.js";

export const note = async (node) => {
  const page = document.createElement("div");

  page.classList.add("notion__whole__page");

  const fetchRes = await ApiStore.GetAllNotes();
  // const bookStore = fetchRes.notes;

  console.log(fetchRes);

  CreateLeftSide(page, { name: "Henry", bookStore });

  const tno = await ApiStore.GetNoteByToken("My first note");

  CreateNoteContent(page, { name: "Henry", title: tno.name, bookStore });

  node.appendChild(page);
};

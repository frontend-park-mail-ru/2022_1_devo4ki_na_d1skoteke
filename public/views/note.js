import { CreateLeftSide } from "../components/LeftSideBar/LeftSideBar.js";
import { CreateNoteContent } from "../components/NoteContent/NoteContent.js";
import { ApiStore } from "../store/ApiStore.js";

export const note = async (node) => {
  const page = document.createElement("div");

  page.classList.add("notion__whole__page");

  const back = new ApiStore();

  const fetchRes = await back.GetAllNotes();
  const bookStore = fetchRes.notes;

  CreateLeftSide(page, { name: "Henry", bookStore });

  const tno = await back.GetNoteByToken("My first note");

  CreateNoteContent(page, { name: "Henry", title: tno.name, bookStore });

  node.appendChild(page);
};

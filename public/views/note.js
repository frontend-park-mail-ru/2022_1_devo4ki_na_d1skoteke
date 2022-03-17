import { CreateLeftSide } from "../components/LeftSideBar/LeftSideBar.js";
import { CreateNoteContent } from "../components/NoteContent/NoteContent.js";
import { ApiStore } from "../store/ApiStore.js";

export const note = async (node) => {

  node.innerHTML = '';

  const page = document.createElement("div");

  page.classList.add("notion__whole__page");

  const fetchRes = await ApiStore.GetAllNotes();

  const bookStore = fetchRes.notes;

  CreateLeftSide(page, { name: "Henry", bookStore });

  CreateNoteContent(page, { name: "Henry", title: "1", bookStore });

  node.appendChild(page);

  let logout = document.getElementById("logout");
  logout.dataset.section = 'logout';
};



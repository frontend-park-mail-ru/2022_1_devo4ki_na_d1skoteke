/* eslint-disable camelcase,class-methods-use-this */
import { eventBus } from '../../modules/eventBus.js';
import { ApiStore } from '../../modules/apiStore.js';
import { events } from '../../consts/events.js';

export class NotesModel {
  async getDataForNotes() {
    const notesData = await ApiStore.GetAllNotes();
    const userData = await ApiStore.GetUser();

    const { notes } = notesData;
    const note = notes[0] !== undefined ? notes[0] : { name: '', body: '' };

    eventBus.emit(events.notesPage.notesReady, { userData, notes, note });
  }

  logoutHandler = async () => {
    await ApiStore.Logout();
    // eventBus.emit(events.authPage.unauthorised, { data: 'login' });
    eventBus.emit(events.pathChanged, { URL: 'login' });
  };

  userChangeHandler = async (data) => {
    const avatar = document.getElementById('mediaFile').value;
    const email = data.profileForm.email.value.trim();
    const password = data.profileForm.password.value.trim();
    const username = data.profileForm.nickname.value.trim();

    await ApiStore.ProfileChange({
      avatar, email, username, password,
    }).then(() => {
      eventBus.emit(events.notesPage.reRenderNewData, { avatar, email, username });
    });
  };
}

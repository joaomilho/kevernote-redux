import fs from 'fs';

const db_path = 'server/db/notes.json';

export default class Note {
  static all() {
    const notes = JSON.parse(fs.readFileSync(db_path, {encoding: 'utf-8'}))['notes'];
    return notes;
  }

  static create(note) {
    note.createdAt = new Date().getTime();
    const notes = [note, ...this.all()];
    return this.save(notes);
  }

  static delete(id) {
    this.validateExistence(id);

    const notes = this.all().filter(note => note.id != id);
    return this.save(notes);
  }

  static update(id, data) {
    this.validateExistence(id);

    const notes = this.all().map(note => note.id == id ? {...note, ...data} : note);
    return this.save(notes);
  }

  static validateExistence(id) {
    if(!this.all().filter(note => note.id == id)[0])
      throw(new Error(`Note with id ${id} not found`))
  }

  static save(notes) {
    fs.writeFileSync(db_path, JSON.stringify({notes: notes}), {encoding: 'utf-8'});
    return true;
  }
}

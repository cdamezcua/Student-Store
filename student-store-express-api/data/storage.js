import path from "path";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";

class Storage {
  constructor() {
    this.path = path.resolve("data/db.json");
    this.setup()
  }

  async setup() {
    const adapter = new FileSync(this.path)
    this.db = low(adapter)
    this.db.defaults({ orders: [], products: [] }).write()
  }

  set(key, value) {
    return this.db.set(key, value);
  }

  get(key) {
    return this.db.get(key);
  }
}

export const storage = new Storage();

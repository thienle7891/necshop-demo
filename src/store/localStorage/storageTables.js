
const TABLES_STORAGE_KEY = 'TABLES';
export default {
  
    getTables() {
        return JSON.parse(localStorage.getItem(TABLES_STORAGE_KEY)) || [];
    },
    set(tables) {
        localStorage.setItem(TABLES_STORAGE_KEY, JSON.stringify(tables));
    }

}

const DRINKS_STORAGE_KEY = 'DRINKS';
export default {
  
    getDrinks() {
        return JSON.parse(localStorage.getItem(DRINKS_STORAGE_KEY)) || [];
    },
    set(drinks) {
        localStorage.setItem(DRINKS_STORAGE_KEY, JSON.stringify(drinks));
    }

}
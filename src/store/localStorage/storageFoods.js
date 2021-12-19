const DRINKS_STORAGE_KEY = 'FOODS';
export default {
  
    getFoods() {
        return JSON.parse(localStorage.getItem(DRINKS_STORAGE_KEY)) || [];
    },
    set(foods) {
        localStorage.setItem(DRINKS_STORAGE_KEY, JSON.stringify(foods));
    }

}
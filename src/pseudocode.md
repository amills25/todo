## TO DO LIST 
##### NOTES 
* local storage is an api
* video 12 from react basics should be helpful (9. Forms in reactjs docs)
* do styling at the very end
* however you last left the list, it should be that way if you leave the page or close out or refresh it because of local storage
* start with model, then view, then controller
 * pseudocode all controller methods before you turn any of them into code
* use CRUD -- create will be hardest, delete will be easiest
 * and updater is also a setter (aka an Update uses localStorage.setItem)
* use bootstrap icons
* add bootstrap and popper (axios?)

###### Things To See On Page
* 3 total making up the organism, each have atoms on them:
1. input field molecule -- key down enter or add button are fine
2. to do list item molecule -- check box, text, X button -- X button shouldn't remove from an array, but set a state of deleted true or false (soft delete/archive)
3. bottom nav bar molecule -- items arent deleted, but moved. re-rendering view, sorting or filtering. # of items left.
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
 * the to do list is an organism
3. bottom nav bar organism -- items arent deleted, but moved. re-rendering view, sorting or filtering. # of items left.
 * the buttons that never change are a molecule

### PSEUDOCODE WITH IAN
1. Wireframe
2. UML diagram
3. Methods & Design Patterns

#### Wireframe
```
TO-DO
___________________________
Input
To-dos -- checkbox and X
Count / Buttons / Clear all
___________________________
```
* React Components
 * App -- this is true because it's a single page (ButtonBar could be on App because it's only used once and can use state of the App)
 * Input? -- could be on App because there's only one of them
 * TodoItem
 * ButtonBar -- but only if menu isn't visible with an empty list

* Bootstrap
 * 4 rows, at least
 * col-2/10 for input
 * col-1/10/1 for listItem (could make a List Group as the organism)
 * col-2/8/10 for buttonBar (could be a Button Group btn-group? as the organism)

#### UML Design
* See pictures of whiteboard

#### Methods & Design Patterns
##### APP
###### Model
* view/filterValue/filterBy
 * all, completed, or active -- string or number? num is probably easier
* toDoArray [{ }]
 * id - timestamp
 * checked - boolean
 * deleted - boolean
 * textValue - string
* currentToDo -- could be in the Input component if there is one

##### View


##### Controller
* C
 * createNewToDo
* R
 * see list
 * view count
 * render
* U
 * clear
 * filterValueChange
 * updateCurrentValue
 * deleteToDo (soft delete/archive)
* D
 * ?
___
* componentDidMount
 * stringify and parse id from local storage and plug into id
* helper method that returns toDoListItems
```
toDoArray.map((todo, index) => {
    return (
        todo
        key = {index or todo.id}
        data = {todo}
    )
})
```
* filterArray
 * switch case inside of filter method to show the filterValue ("all", "completed", or "active")
* handleClear
 * onclick method
* viewCount
 * just returns the filtered length of the array

#### TO DO ITEM
##### Model



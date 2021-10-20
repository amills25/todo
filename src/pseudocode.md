## TO DO LIST

##### NOTES

-   local storage is an api
-   video 12 from react basics should be helpful (9. Forms in reactjs docs)
-   do styling at the very end
-   however you last left the list, it should be that way if you leave the page or close out or refresh it because of local storage
-   start with model, then view, then controller
-   pseudocode all controller methods before you turn any of them into code
-   use CRUD -- create will be hardest, delete will be easiest
-   and updater is also a setter (aka an Update uses localStorage.setItem)
-   use bootstrap icons
-   add bootstrap and popper (axios?)

###### Things To See On Page

-   3 total making up the organism, each have atoms on them:

1. input field molecule -- key down enter or add button are fine
2. to do list item molecule -- check box, text, X button -- X button shouldn't remove from an array, but set a state of deleted true or false (soft delete/archive)

-   the to do list is an organism

3. bottom nav bar organism -- items arent deleted, but moved. re-rendering view, sorting or filtering. # of items left.

-   the buttons that never change are a molecule

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

-   React Components

    -   App -- this is true because it's a single page (ButtonBar could be on App because it's only used once and can use state of the App)
    -   Input
    -   TodoItem
    -   ButtonBar -- but only if menu isn't visible with an empty list

-   Bootstrap
    -   4 rows, at least
    -   col-10/2 for input
    -   col-1/10/1 for listItem (could make a List Group as the organism)
    -   col-2/8/10 for buttonBar (could be a Button Group btn-group? as the organism)

#### UML Design

-   See pictures of whiteboard

#### Methods & Design Patterns

##### APP

###### Model

-   filterBy
    -   all, completed, or active -- num is probably easier (active, completed, all)
-   toDoArray [{ }]
    -   id - timestamp
    -   checked - boolean
    -   deleted - boolean
    -   textValue - string

##### Controller

-   C
    -   createNewToDo
-   R
    -   see list
    -   view count
    -   render
-   U
    -   clear
    -   filterValueChange
    -   updateCurrentToDo?
    -   deleteToDo (soft delete/archive)
-   D
    -   ?

---

-   componentDidMount
    -   stringify and parse id from local storage and plug into id
-   componentDidUpdate
    -   when state updates, store changes in localStorage
-   createNewToDo
    -   when the user types in the form, it will create a value
    -   every time a new to do, we're creating a new toDoArray that is the exact same as it was, but with the newToDo added to it
-   toDoListMap

```
toDoArray.map((todo, index) => {
    return (
        todo
        key = {index or todo.id}
        data = {todo}
    )
})
```

-   handleItemComplete
    -   onlick method
    -   if check is clicked, change wasDeleted to true
-   handleItemX
    -   onclick method
    -   will soft delete an item from the list
-   filterArray
    -   switch case inside of filter method to show the filterValue ("active", "completed", or "all")
-   handleListClear
    -   onclick method
    -   empty the array (make wasDeleted: true)
-   viewCount
    -   just returns the filtered length of the array

##### View

#### INPUT BAR

##### Model

-   currentToDo - string

##### Controller

-   updateInputValue
    -   when the user clicks the add button, it will be added to the array
    -   clear the input field
-   onCreateSubmit
    -   gets value from user input and calls parent method

##### View

-   col-10/2 for input
-   typing form, then add icon

#### LIST ITEM

##### Model

##### Controller

##### View

-   col-1/10/1 for listItem (could make a List Group as the organism)
-   checkbox icon -- text value -- X icon

#### BUTTON BAR

-   will only display if there are items in the list

##### Model

##### Controller

##### View

-   col-2/8/10 for buttonBar (could be a Button Group btn-group? as the organism)
-   count -- all, active, completed -- clear all

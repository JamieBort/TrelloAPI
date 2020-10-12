# README TrelloAPI

### Status
Commit 4152308302b121df334596dce5e706e94d44c991
`Modified the trelloapi/src/App.js file. Show/hide is working with the api call.`
Next need to clean up the file.
And create a button for the 'Chores' card so that when it is selected a new page loads with all of the Chores cards listed.

Commit 377282f1fef5afb8f56ffbc710752cecb3fa8041
`Got the show/hide commonents to work.` (it should have said "Got the show/hide components to work.")
~~Next, need them to populate if the api call has a response and with the data from the api call.~~

Created the ShowHide.js component.

But haven't done anything with it yet. 

I'm in the process of following this [ShowHideComponent](https://github.com/JamieBort/LearningDirectory/tree/master/JavaScript/Frameworks/React/ShowHideComponent) tutorial so that I can use the Showhide component in this app.

The end goal with this component is to be able to hide the list of Trello Boards after I create that list. 

Toggle it on and off, if you will.

Currently getting this error:
>`Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.`

Might need to back up a few commits.

Also, on this `902b94298b7fbdb1413ec48bb74ba71d79a6934f` commit, 
>Modified the README.md file. Because I am getting an error. Read that error before commiting anything else.

### To Do
1. ~~Generate a React project~~
2. ~~Set up .env so that I can make api calls without compromising my key when I push files into git.~~
3. Then make an api call.
  a. ~~have it load automatically when the component loads.~~
  b. ~~then have it occur when I push a button (create a button)~~
  c. ~~then make a button component in another file and pass the info via props~~
  d. then via state ? come back to this
4. then make the api call(s) I am interested in.
5. Lastly create components for the api call.
6. ~~Implement hide feature so that the card(s) disappears if I select a button.~~
7. list the date of the card further in the future
8. display cards in a graph such that the independent axis is date, dependent axis is the number of cards for each date.

## Files and Directories
`.env.development.local` the local environment variables for development.

`.env` the environment variables. Was redundant. It wasn't originally included. It caused confusion. So I removed it.

## Resources
Using [contacts-manager](https://github.com/JamieBort/LearningDirectory/tree/master/JavaScript/Frameworks/React/contacts-manager) this tutorial in order to ultimately list the Boards.

Using [ShowHideComponent](https://github.com/JamieBort/LearningDirectory/tree/master/JavaScript/Frameworks/React/ShowHideComponent) this tutorial to hide components.
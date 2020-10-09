# README TrelloAPI

### Status
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
6. list the date of the card further in the future
7. display cards in a graph such that the independent axis is date, dependent axis is the number of cards for each date.

## Files and Directories
`.env.development.local` the local environment variables for development.

`.env` the environment variables. Was redundant. It wasn't originally included. It caused confusion. So I removed it.

## Resources
Using [this tutorial](https://github.com/JamieBort/LearningDirectory/tree/master/JavaScript/Frameworks/React/contacts-manager) in order to ultimately list the Boards.
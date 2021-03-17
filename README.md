# pokedex-solution-2021

### Client Requirements:

- I can search pokémons and get details using `name`
- I can see searched pokémon's name, height, weight and image on screen.
  I should also see a list of the pokémon's types. ("fire", "grass", "poison" etc...)
- On clicking one of the pokémon's types, I should also see a list containing the names of all the pokémons of this type.

  For example:

  Pokémon "Bulbasaur" is from types "grass" and "poison". Clicking "poison" will show me a list of all the poison pokémons, and clicking "grass" will show me a list of all the grass pokémons.

- Clicking a name on the list should switch the view to show the clicked pokémon.

  For example:

  When viewing pikachu and clicking pichu, the view should re-render and show pichu's details. Should act the same as searching for "pichu".

- Pokémon's image changes from front to back when hovering over the image.
- I can "catch" a pokémon by clicking the catch button. Caught pokémons should be marked and have a "release option instead".
- Alert `404` responds from server with a special message.

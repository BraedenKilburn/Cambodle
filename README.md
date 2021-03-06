# Cambodle

## Summary

[Cambodle](https://cambodle.braedenkilburn.com/), based on the web-based word game [Wordle](https://www.nytimes.com/games/wordle/index.html), is a simple game in which the player must guess the highlighted Cambodian province of the day. They must guess this within six tries and, if they do not succeed, they will lose the game and the province will be revealed.

Every day, the highlighted province changes and gives the player a new opportunity to play another round.

## Todo

- Safari `border-radius` appears to not work on the GuessList rows
- The combobox needs to be shuffled as to avoid revealing the order of the provinces in rotation (otherwise, knowing yesterday's province will reveal today's province because the combobox is ordered the same as the answer array)
- There needs to be a way to show the user they've got six guesses
  - We could possibly add six empty rows to our GuessList and then update them as the user guesses
  - We could put a counter that says "Guesses Remaining"
- The buttons at the top of the page need to be implemented
  - For example, we should put a dark mode feature
  - We could put a hard mode with no combobox or lower guess allowance
  - We definitely need a help page to explain the game
- A leaderboard or statistics metric should be kept
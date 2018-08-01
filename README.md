# Psychic-Game
Homework 3, easier

0. guesses + losses start at 0, guesses left starts at 9
1. user guesses letter
2. computer generates random letter
3. if user letter = random letter
    a. wins ++
    b. guesses left reset to 9
    c. record user guess
4. if user letter != random letter
    a. record user guess
    b. guesses left --
        1. if guesses left = 0,
            a. loss ++
            b. guesses left reset to 9
            c. user guesses list cleared
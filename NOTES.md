# Notes

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:
- ✅ Create user stories
- ✅ first refactor - file names etc. 
- ✅ UAT1.1: When given empty array, return exception
- ✅ UAT1.2: When given boolean, return exception
- ✅ UAT1.3: When given only one number, return exception

- ✅ UAT2.1: When given 0,0, return 0
- ✅ UAT2.2: When given 1,0, return 1
- ✅ UAT2.3: When given 1,1, return 10
- 🚧 UAT2.4: When given 1,2, return 11

Pomodoro 2:
- 🚧 UAT2.3: When given 1,1, return 10

Pomodoro 3:
- ✅ UAT2.3: When given 1,1, return 10
- ✅ UAT2.4: When given 1,2, return 11
- ✅ UAT2.5: When given 2,2, return 100

Pomodoro 4:
- ✅ UAT2.6: When given 0,5, return 101

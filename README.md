# Solution for Quiz: Terrain retention

The quiz specs are provided on
https://plant-split-14d.notion.site/Quiz-Terrain-retention-22049fe67f26443094b43210361db3e3

## How to run?

```sh
npm run calc -- ARRAY_OF_NUMBERS_INPUT
```

The script calculates the capacity for a given terrain specified as `ARRAY_OF_NUMBERS_INPUT`
In case you input contains some spaces, don't forget to wrap the input in quotes.
Note: the script was tested with node@14.15. Higher versions should most likely work fine.

## Development
In case you want extend the implementation or update the tests, you want to install the dependencies first:
```sh
npm ci
```

Then you can run the tests e.g. in watch mode:
```sh
npm run test:tdd
```

## The Implementation Story
As this is a task I don't commonly work with, I tried to solve it the same way
I would do on a piece of paper. I had a feeling there is a better way, but I wasn't able to figure it out.

Once the naive solution seemed to work, I was thinking about the algorithm complexity.
I was thinking it is probably something around `n*n/3` - which is still quadratic complexity. As this was more of a guess, I tried to come up with the worst possible input.
And as I was thinking about it, it just struck me - there is a much easier solution. I don't have to check the whole terrain from left to right, but I can just divide the terrain to multiple segments that don't affect each other. 

The algorithm has been here for ages: `divide and conquer`. The code became smaller, easier to read, and with a nice "loglinear" complexity `O(n*log(n))`

As I ended up with two different implementations, and they give the same result for given inputs, I humbly assume that the calculation is correct.

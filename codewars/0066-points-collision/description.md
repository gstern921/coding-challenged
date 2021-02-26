# Points Collision

This challenge can be found [here](https://www.codewars.com/kata/589a785f77c96080b7000050)

## Task
You are given two different points on a plane. Each point has its own initial coordinates and own velocity vector (in some units per second). The points start moving with given velocities at the same moment in time. Will they collide?

## Example
For `p=[0, 0],q=[10, 0],u=[40, 0] and v=[-30, 0]`, the result should be true.

For `p=[1, 1],q=[30, 30],u=[5, 5] and v=[4, 4]`, the result should be true.

For `p=[-3, 0],q=[-2, 0],u=[2, 0] and v=[2, 0]`, the result should be false.

## Input & Output
- `[input]` integer array `p`

  coordinates of the first point in the form [X, Y]

  Constraints:

  `-100 ≤ X ≤ 100,`

  `-100 ≤ Y ≤ 100,`

- `[input]` integer array `q`

  coordinates of the second point in the form [X, Y]

  Constraints:

  `-100 ≤ X ≤ 100,`

  `-100 ≤ Y ≤ 100,`

- `[input]` integer array `u`

  velocity of the first point in the form [Vx, Vy]

  Constraints:

  `-100 ≤ X ≤ 100,`

  `-100 ≤ Y ≤ 100,`

- `[input]` integer array `v`

  velocity of the second point in the form [Vx, Vy]

  Constraints:

  `-100 ≤ X ≤ 100,`

  `-100 ≤ Y ≤ 100,`

- `[output]` a boolean value

  `true` if the points will have the same coordinates at some point in time, `false` otherwise
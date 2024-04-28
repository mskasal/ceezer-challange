## Getting Started

Run the development server:

```bash
npm run dev
```

Run the tests:

```bash
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

#### Approach

##### First iteration, POC

After the initial setup of the project, I wanted to explore the project data,
plan the layout in my head and experiment a little. My goal was determining the
requirements, and setting the additional data if required.

#### Second iteration, Drawing, more robust layout

After POC, I started to create the project layout. Started to think about the
state. My goal was, to see things more clearly, determining the state.

#### Third iteration, state!

After the layout was pretty much shaped, and everything clear with mock data, I
started to implement store using Zustand state management library (NextJs
hydration caused some headaches, used a workaround with a persistent state)

#### Last iteration, fixing bugs, testing

The last iteration was mostly a bit chaotic, finding little adjustments, and
corrections all over the place and fixing them. Also writing a test for, the
most important component CartListItem, testing if the edit and delete works.


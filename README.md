# React Router Exercises

This is a React/Redux app with 4 components. The structure of each component is as follows:

There a subdirectory within the `src` directory for each component, each subdirectory has these 3 files:

* COMPONENT.js - the presentation component plus the container component, it exports the container component as the default export
* COMPONENT.actions.js - exports all action creators that this component uses
* COMPONENT.reducer.js - exports the reducer for this component

The `index.js` file imports all the components and their reducers and combines everything into one big app.

Your job is make this app into a multiple-page single-page application, using React Router.

## Step 1

1. Install React Router version 3.0.5. `npm install react-router@3.0.5 --save`.
2. Add the proper imports (`Router`, `Route`, `hashHistory`, `Link`, `IndexLink`) and set up a routing scheme.
  1. Give a each component its own path.
  2. Create an application layout component that contains a navigation bar, so the user can navigate between different components.
  3. Create a home page component, and render it at the index route - you can put anything on this home page.

Test and see that now you have one component on each page, and you can navigate to them using the navigation bar.

## Step 2: Route Parameters

Modify the weather widget such that rather that taking the city name from a text input, it take it from the URL path as a route parameter instead.

1. Do away with the text input.
2. Change reference(s) to `this.props.name` to `this.props.params.name`.
3. Change the route path for the weather widget to `/weather/:name`.

Now you can manually navigate to the weather page for a specific city by changing the client URL in your browser address bar, to say `#/weather/Atlanta`.

Add the weather URL for your favorite cities to the navigation bar.

# React Native: useEffect Hook Async Data Fetching and Cleanup

This repository demonstrates a common issue in React Native development involving the `useEffect` hook and asynchronous operations. Specifically, it showcases the problem of calling `setData` after the component has unmounted when fetching data from an API.

## Problem
The provided `bug.js` file contains code that fetches data using `useEffect` and `async/await`.  If the component unmounts before the fetch completes, a warning or unexpected behavior can occur because `setData` attempts to update a component that no longer exists.

## Solution
The `bugSolution.js` file presents a corrected version.  It utilizes the cleanup function in `useEffect` to cancel the asynchronous operation if the component unmounts before the fetch completes, preventing potential errors.
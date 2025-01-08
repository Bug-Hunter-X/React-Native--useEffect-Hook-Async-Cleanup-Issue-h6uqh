The solution involves using the cleanup function provided by the `useEffect` hook's second argument. This function is called when the component unmounts or when the dependencies change. We can use this to abort the fetch:

```javascript
useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data', { signal });
      const json = await response.json();
      if (!signal.aborted) {
        setData(json);
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Error fetching data:', error);
      }
    }
  };

  fetchData();
  return () => controller.abort();
}, []);
```

By using `AbortController`, we create an abort signal that's passed to the fetch request. The `useEffect` cleanup function calls `controller.abort()` when the component unmounts, effectively cancelling the fetch and preventing the `setData` call after unmount.
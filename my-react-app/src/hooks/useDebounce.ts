const { useEffect, useRef } = require('react');

function useDebounce(value, delay) {
    const timer = useRef();

    useEffect(() => {
        // Clear the timeout if the value changes or the component unmounts
        if (timer.current) {
            clearTimeout(timer.current);
        }

        // Set a new timeout
        timer.current = setTimeout(() => {
            // Execute the debounced function
            // This is where you would call the function that needs to be debounced
        }, delay);

        // Cleanup function to clear the timeout on unmount
        return () => {
            clearTimeout(timer.current);
        };
    }, [value, delay]);

    return value; // Return the debounced value
}

export default useDebounce;
import { useState, useMemo, useCallback } from "react";

export function Assignment1() {
    const [input, setInput] = useState(0);

    const factorial = useCallback(function(n) {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }, []); // Add an empty dependency array

    const expensiveValue = useMemo(function() {
        return factorial(input);
    }, [input, factorial]); // Include 'factorial' in the dependency array

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}

export default Assignment1;

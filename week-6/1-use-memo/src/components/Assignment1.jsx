import { useState, useMemo } from "react";

export function Assignment1() {
    const [input, setInput] = useState(0);

    function factorial(n) {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    const expensiveValue = useMemo(function() {
        return factorial(input);
    }, [input]);

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

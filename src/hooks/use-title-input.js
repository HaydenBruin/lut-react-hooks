import React, { useEffect, useState, useDebugValue } from 'react';

export function useTitleInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        document.title = value;
    })

    useDebugValue(value.length > 0 ? 'Full' : 'Empty');

    return [value, setValue];
}
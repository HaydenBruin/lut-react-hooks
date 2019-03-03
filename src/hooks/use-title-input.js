import React, { useEffect, useState } from 'react';

export function useTitleInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        document.title = value;
    })

    return [value, setValue];
}
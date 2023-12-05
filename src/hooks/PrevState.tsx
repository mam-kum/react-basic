import { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Prevstate = (value:any) =>
{
    const ref = useRef()
    useEffect(()=>
    {
        ref.current = value
    }, [value])
    return ref.current

}
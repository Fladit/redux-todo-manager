import React, {useState} from "react";

function useInput(initialValue: string) {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const reset = () => {
        setValue(initialValue)
    }

    return {value, onChange, reset}
}

export default useInput

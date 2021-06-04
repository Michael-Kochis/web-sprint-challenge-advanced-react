import { useState } from 'react'
// write your custom hook here to control your checkout form

function useForm(props) {
    const [values, setValues] = useState({});

    // Ended up not using this, accessed values directly (tightly coupled)
    function getItem(name) {
        return (values.name);
    }

    function handleChanges(evt) {
        evt.preventDefault();
         let name = evt.target.name;
        let value = evt.target.value;
        setItem(name, value);
    };

    function setItem(name, value) {
        setValues({...values, [name]: value});
    }

    return {values, getItem, setItem, handleChanges};
}

export {
    useForm
}
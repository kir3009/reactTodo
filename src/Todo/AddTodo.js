import React, {useState} from 'react'
import PropTypes from 'prop-types'


function useInputValue(defaultValue=''){
    const [value,setValue]=useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: ()=> setValue(''),
        value: () => value,

    }
}

function AddTodo({onCreate}){
    // const [value,setValue] = useState('')
    const input = useInputValue('')


    function submitHandler(event){
        event.preventDefault()

        if (input.value().trim()){
            onCreate(input.value())
            input.clear()
        }
    }


    return(
        <form style={{marginBottom:'2rem'}} onSubmit={submitHandler}>
            <input {...input.bind} className={'inp'} style={{fontSize:'20px'}} />
            <button type='submit' className={'button-1'}>add Todo</button>
        </form>
    )
}


export default AddTodo

AddTodo.propTypes={
onCreate:PropTypes.func.isRequired
}
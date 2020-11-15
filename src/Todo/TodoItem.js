import React, {useContext} from 'react'
import Proptypes from 'prop-types'
import Context from "../context";

const styles={
    li:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'.6rem 1rem',
        border: '1px solid #ccc',
        borderRadius:'4px',
        marginBottom:'1rem'
    },
    input:{
        marginRight:'1rem'
    }
}

 function TodoItem({todo,index,onChange}){
    const classes=[]
     const {removeTodo}=useContext(Context)

     if (todo.completed){
         classes.push('done')
     }
    return <li style={styles.li}>
        <span className={classes.join('')}>
            <input
                type="checkbox"
                checked={todo.completed}
                style={styles.input}
                onChange={()=>onChange(todo.id)}
            />
            <strong>{index+1}</strong>
            &nbsp;
            {todo.title}
        </span>
        <button className={'rm'} onClick={()=>removeTodo(todo.id)}>&times;</button>
    </li>
}

TodoItem.propTypes={
    todo:Proptypes.object.isRequired,
    index:Proptypes.number,
    onChange:Proptypes.func.isRequired
}

export default TodoItem
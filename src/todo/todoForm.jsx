import React from 'react'
import Grid from '../templates/grid'
import IconButton from '../templates/iconButton'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols ='12 9 10'>
            <input
                id='description'
                className='form-control'
                onChange={props.handleChange}
                value={props.description}
                placeholder='Adicionar uma tarefa'
            />
        </Grid>
        <Grid cols ='12 3 2'>
            <IconButton
                style='primary'
                icon='plus'
                onClick={props.handleAdd}
            />
            <IconButton
                style='info'
                icon='search'
                onClick={props.handleSearch}
            />
        </Grid>
    </div>
)
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {addSmurf, removeSmurf} from '../actions/action';
import {connect} from 'react-redux';

import {getSmurf} from '../actions/action'

import Smurf from './Smurf';

const SmurfList = (props) => {

    useEffect(() => {
        props.getSmurf()
        // axios
        //   .get('http://localhost:3333/smurfs')
        //   .then(res => {
        //       console.log(res.data)
        //       setGetSmurf(res.data)
        //   })
        //   .catch(err => err)
      }, [])

    const [newSmurf, setNewSmurf] = useState('')

    console.log(props)

    const SmurfCard = styled.div `
        width: 30vw;
        border: 1px solid blue;
    `;

    const addNewSmurf = e => {
        console.log('addNewSmurf', e)
        e.preventDefault();
        props.addSmurf(newSmurf)
    }

    const handleChanges = e => {
        console.log('handleChanges', e.currentTarget.Value)
        setNewSmurf(e.currentTarget.Value)
    }

    return(
        <div>
        <form onSubmit={addNewSmurf}>
            Name:
            <input
                name='name'
                type='text'
                onChange={handleChanges}
                value={newSmurf}
            />
            Age:
            <input
                name='age'
                type='text'
                onChange={handleChanges}
            />
            Height:
            <input
                name='height'
                type='text'
                onChange={handleChanges}
            />
            <button type='submit'>New Smurf</button> 
        </form>
        <SmurfCard>
            {props.smurfs.map(list => {
                return <Smurf list={list}/>
            })
            }
        </SmurfCard>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state.smurfs)
    return{
      smurfs: state.smurfs,
      error: state.error
    };
  }
  
  export default connect (
    mapStateToProps,
    {getSmurf,addSmurf, removeSmurf}
  )(SmurfList);
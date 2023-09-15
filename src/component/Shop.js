import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {
    const balance = useSelector(state => state.amount)
    const dispatch = useDispatch();
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
    return (
        <div>
            <h2 className="my-3">Deposite/Withdraw Money</h2>
            {/* <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
            Update Balance
            <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.depositMoney(100))}}>+</button> */}
            <button className="btn btn-primary mx-2" onClick={() => {withdrawMoney(100)}}>-</button>
            <span className="mx-2">Update Balance ({balance})</span>
            <button className="btn btn-primary mx-2" onClick={() => {depositMoney(100)}}>+</button>
        </div>
    )
}

export default Shop

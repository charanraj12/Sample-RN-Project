import { AppThunk } from "app/store";
import { Api } from "../../utils/helpers";
import {setEarningsData} from './slices/earningsData';

export const fetchEarningData = (): AppThunk => (dispatch) => {
    Api(`https://run.mocky.io/v3/1a74aa97-111d-4c27-a5c2-afb94af4283b`, {
        method: "get",
    }).then(res => {
        dispatch(setEarningsData(res))
    }).catch(() => {
        console.log('error')
    })
}
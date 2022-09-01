import {combineReducers} from 'redux'
import { reducer as audioReducer } from '../components/audio/store/reducer'
export default combineReducers({
    audio: audioReducer
})
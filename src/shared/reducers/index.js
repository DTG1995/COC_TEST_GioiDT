import { combineReducers } from 'redux';
import categorieRedure from '../../components/categories/reducers';
import configurationRedure from '../../components/configurations/reducers';



const rootReducer = combineReducers({
  categories: categorieRedure,
  configurations: configurationRedure
});

export default rootReducer;

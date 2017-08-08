import { combineReducers } from 'redux';
import login from './login.js'
import group from './group.js'
import project from './project.js'
import Interface from './interface.js'
import news from './news.js'
import addInterface from './addInterface.js'
import user from './user.js'
import menu from './menu.js'

export default combineReducers({
  group,
  login,
  Interface,
  user,
  project,
  news,
  addInterface,
  menu
})
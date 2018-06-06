import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/Homepage'
import Back from '@/views/Back'
import Collection from '@/views/Collection'
import Personal from '@/views/Personal'
import StoryList from '@/views/StoryList'
import Subscribe from '@/views/Subscribe'
import { rootPath } from '../api/rootPath';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: rootPath,
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: rootPath+'back',
      name: 'Back',
      component: Back
    },
    {
      path: rootPath+'collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: rootPath+'personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: rootPath+'story',
      name: 'StoryList',
      component: StoryList
    },
    {
      path: rootPath+'subscribe/:id',
      name: 'Subscribe',
      component: Subscribe
    }



  ]
})

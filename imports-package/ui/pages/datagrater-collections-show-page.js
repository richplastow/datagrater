//// This template shows a particular Collection. 
import { Template    } from 'meteor/templating';
import { FlowRouter  } from 'meteor/kadira:flow-router';
import { Collections } from '../../api/collections/define-collections.js';
import './datagrater-collections-show-page.html';

//// Define helpers for the DataGrater_Collections_show_page Template. 
Template.DataGrater_Collections_show_page.helpers({

  collection() {
    const name = FlowRouter.getParam('name');
    const result = Collections.get(name);
    if (! result) return;
    result.name = name;
    return result;
  },

});

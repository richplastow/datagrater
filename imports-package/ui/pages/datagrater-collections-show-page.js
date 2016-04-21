//// DataGrater_Collections_show_page shows a particular Collection. 
import { Template    } from 'meteor/templating';
import { FlowRouter  } from 'meteor/kadira:flow-router';
import { Collections } from '../../api/collections/client/subscriptions.js';
import './datagrater-collections-show-page.html';

//// Define helpers. 
Template.DataGrater_Collections_show_page.helpers({

  collection() {
    const name = FlowRouter.getParam('name');
    return Collections.findOne({ name:name });
  },

  count() {
    const name = FlowRouter.getParam('name');
    return Collections.findOne({ name:name }).documents.length;
  },

});

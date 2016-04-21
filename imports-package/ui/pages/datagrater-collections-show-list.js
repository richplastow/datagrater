//// DataGrater_Collections_show_list shows all Collections. 
import { Template    } from 'meteor/templating';
import { Collections } from '../../api/collections/client/subscriptions.js';
import './datagrater-collections-show-list.html';

//// Define helpers. 
Template.DataGrater_Collections_show_list.helpers({

  collections() {
    return Collections.find();
  },

});

//// This template shows all Collections. 
import { Template    } from 'meteor/templating';
import { Collections } from '../../api/collections/define-collections.js';
import './datagrater-collections-show-list.html';

//// Define helpers for the DataGrater_Collections_show_list Template. 
Template.DataGrater_Collections_show_list.helpers({

  names() {
    const result = [];
    _.each( Collections.all(), function(value, key) {
      result.push(key);
    });
    return result;
  },

});

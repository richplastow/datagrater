//// Set up all routes. 
import { FlowRouter  } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//// Load the layouts and pages. 
import '../../ui/layouts';
import '../../ui/pages';

//// The 'DataGrater_home' template. 
FlowRouter.route('/datagrater', {
  name: 'DataGrater.home',
  action() {
    BlazeLayout.render(
      'DataGrater_body', { main: 'DataGrater_home' }
    );
  },
});

//// The 'DataGrater_Collections_show_list' template. 
FlowRouter.route('/datagrater/collections', {
  name: 'DataGrater.Collections.show.list',
  action() {
    BlazeLayout.render(
      'DataGrater_body', { main: 'DataGrater_Collections_show_list' }
    );
  },
});

//// The 'DataGrater_Collections_show_page' template. 
FlowRouter.route('/datagrater/collections/:name', {
  name: 'DataGrater.Collections.show.page',
  action() {
    BlazeLayout.render(
      'DataGrater_body', { main: 'DataGrater_Collections_show_page' }
    );
  },
});

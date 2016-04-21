//// Set up all routes. 
// import { Session     } from 'meteor/session';
import { FlowRouter  } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//// Load the layouts and pages. 
import '../../ui/layouts';
import '../../ui/pages';

//// The 'DataGrater_home' template. 
FlowRouter.route('/datagrater', {
  name: 'DataGrater.home',
  action() {
    // const page = config.enabled ? 'DataGrater_home' : 'DataGrater_disabled';
    BlazeLayout.render(
      'DataGrater_body', {
        main: config.enabled ? 'DataGrater_home' : 'DataGrater_disabled'
      }
    );
  },
});

//// The 'DataGrater_Collections_show_list' template. 
FlowRouter.route('/datagrater/collections', {
  name: 'DataGrater.Collections.show.list',
  action() {
    BlazeLayout.render(
      'DataGrater_body', {
        main: config.enabled ? 'DataGrater_Collections_show_list' : 'DataGrater_disabled'
      }
    );
  },
});

//// The 'DataGrater_Collections_show_page' template. 
FlowRouter.route('/datagrater/collections/:name', {
  name: 'DataGrater.Collections.show.page',
  action() {
    BlazeLayout.render(
      'DataGrater_body', {
        main: config.enabled ? 'DataGrater_Collections_show_page' : 'DataGrater_disabled'
      }
    );
  },
});

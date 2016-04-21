//// Define the Collections collection. 
import { Mongo } from 'meteor/mongo';

//// Treat as a regular Collection on the client. 
class CollectionsCollection extends Mongo.Collection {
}
export const Collections = new CollectionsCollection('Collections');
Meteor.subscribe('Collections');

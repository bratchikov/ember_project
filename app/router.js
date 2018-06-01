import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('channels', function() {});
  this.route('program', {path: 'program/:channelId/:programId'});
});

export default Router;

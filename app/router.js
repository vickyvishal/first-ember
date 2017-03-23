import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('movies');
  this.route('scientists');
  this.route('products');
  this.route('product');
});

export default Router;

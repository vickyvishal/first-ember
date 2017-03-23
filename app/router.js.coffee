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

Payment = Ember.Router.extend({
	location: 'hash',
	
	root: Ember.Route.extend
	
		index: Ember.Route.extend
			route: "/"
			redirectsTo:'products.index'
			
			products: Ember.Route.extend
			route: '/products'
			
			index: Ember.Route.extend
				route:"/"
				connectOutlets: (router) ->
					router.get('applicationController').connectOutlet('products', Payment.Product.find())
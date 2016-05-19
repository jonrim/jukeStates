'use strict';

var juke = angular.module('juke', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
		.when('', '/albums')
		.when('/artist/:id', '/artist/:id/albums');

	$stateProvider
		.state('albumList', {
			url: '/albums',
			templateUrl: '/js/templates/albums.html',
			resolve: {
				  albums: function(AlbumFactory) {
						  return AlbumFactory.fetchAll()
						  
					}
			},
			controller: 'AlbumsCtrl'
		})
		.state('artistList', {
			url: '/artists',
			templateUrl: '/js/templates/artists.html',
			resolve: {
				  artists: function(ArtistFactory) {
						  return ArtistFactory.fetchAll();
					}
			},
			controller: 'ArtistsCtrl'
		})
		.state('album', {
			url: '/album/:id',
			templateUrl: '/js/templates/album.html',
			resolve: {
				  album: function(AlbumFactory, $stateParams) {
						  return AlbumFactory.fetchById($stateParams.id);
					}
			},
			controller: 'AlbumCtrl'
		})
		.state('artist', {
			url: '/artist/:id',
			templateUrl: '/js/templates/artist.html',
			resolve: {
				  artist: function(ArtistFactory, $stateParams) {
						  return ArtistFactory.fetchById($stateParams.id);
					}
			},
			controller: 'ArtistCtrl'
		})
		.state('artist.albums', {
			url: '/albums',
			templateUrl: '/js/templates/artist.albums.html',
		})
		.state('artist.songs', {
			url: '/songs',
			templateUrl: '/js/templates/artist.songs.html',
		});
});


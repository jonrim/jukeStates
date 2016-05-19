'use strict';

var juke = angular.module('juke', ['ui.router'])

.config(function($stateProvider) {
	$stateProvider
		.state('albumList', {
			url: '/albums',
			templateUrl: '/js/templates/albums.html',
			controller: 'AlbumsCtrl'
		})
		.state('artistList', {
			url: '/artists',
			templateUrl: '/js/templates/artists.html',
			controller: 'ArtistsCtrl'
		})
		.state('album', {
			url: '/album/:id',
			templateUrl: '/js/templates/album.html',
			controller: 'AlbumCtrl'
		})
		.state('artist', {
			url: '/artist/:id',
			templateUrl: '/js/templates/artist.html',
			controller: 'ArtistCtrl'
		})
});


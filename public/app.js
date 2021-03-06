'use strict'

const config = [
    '$stateProvider',
    '$urlRouterProvider',
    Config
]

const run = [
    '$state',
    Run
]

angular.module('dolisttest', [
   'ui.router'
    // Here list your dependencies
])

.config(config)
    .run(run)

function Config($stateProvider, $urlRouterProvider) {
    const states = [{
        name: 'home',
        url: '/',
        component: 'home'
    }];

    states.forEach((state) => {
        $stateProvider.state(state)
    });

   $urlRouterProvider.otherwise('/');
}

function Run($state) {
    if (!navigator.onLine) {
        $state.go('offline')
    }
}
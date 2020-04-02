const states = [
    {
        name: 'hello',
        url: '/hello',
        templateUrl: './templates/hello.html',
        controller: 'HelloCtrl',
        css: './css/hello.css'
    },
    {
        name: 'about',
        url: '/about',
        templateUrl: './templates/about.html',
        controller: 'AboutCtrl',
        css: './css/about.css',
        lazyLoad: function () {
            return System.import('demo.js');
        }
    }
];

app.config(function ($stateProvider) {
    states.forEach( state => {
        $stateProvider.state(state);
    })
});
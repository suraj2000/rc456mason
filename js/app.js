var app = angular.module('rcmason', ["ngRoute"]);

app.controller('DashboardCtrl', ['$scope', function DashboardCtrl($scope) {
    $scope.dashboardMsg = "RC456Mason is an app that runs on-site analysis of basic RCC structure and" +
        " its elements using limit state of collapse method (IS 456-2000). " +
        "Further, users can optimize design to conserve both cost and " +
        "energy intensive materials such as cement and steel beside its compliance as per IS code for " +
        "structure integrity and safety. For more details click on app coverage.";
}]);

app.controller('HighlightsCtrl',['$scope', function HighlightsCtrl($scope) {
    $scope.rccStructureElements = [
        {
            "name" : "Slab",
            "subNav" : ["Simplay Supported (Wall-rest)",
                "Cantilever",
                "Continuous"
            ]
        },
        {
            "name": "Beam",
            "subNav": []
        },
        {
            "name" : "Flanged Beam",
            "subNav" :
                [
                    "T beam",
                    "L-Beam",
                    "Isolated"
                ]
        },
        {
            "name": "Column (Square/Rectangular)",
            "subNav" : []
        },
        {
            "name":"Round Column",
            "subNav" : []

        },
        {
           "name" : "Footing",
            "subNav" : []
        },
        {
            "name": "Staircase-A (on Slab)",
            "subNav" : []
        },
        {
            "name": "Staircase-B (on Slab)",
            "subNav" : []
        }
    ];

    $scope.descriptions = [
        "Users can select any grade for the concrete mix (M15, M20, M25, M30, M35 or M40) for the above element along with steel grade (MS or High strength steel).",
        "Each of the above element has two common data such as clear cover and main reinforcement steel bar diameter. App uses recommended data for clear cover as per IS 456 : 2000 that can be edited depending upon severity of the application. Similarly, one can edit bar diameter during analysis in order to satisfy percent steel and minimum number of bars that is recommended as per IS 456 : 2000. In addition each element has its own default dimensions that can be edited to suit the given application. Thus one can quickly build any application for onsite analysis as shown in screen shots.",
        "Analysis is done based on actual reinforcement steel bars provided for the given section and load. Report has reference to different applicable clauses as per IS 456 : 2000 for quick reference. Some of the key figures and tables are also provided for instant verification of the design data.",
        "Report summary includes total concrete volume, quantity of cement and steel required for the job that would help in material requirement planning to complete the casting job.",
        "A RCC structure may have many different elements such as footing, column, beam, slab etc. Therefore each structure can be saved with unique title where one can add as many elements to this structure with reference name or code number for identification. A file summary is also provided that gives total structure summary along with individual element material summary.",
        "Users can also create many different files for the same structure for design and cost optimization.",
        "App provides a short cheklist for each element to facilitate on-site data collection that helps in the analysis. In addition, App notes gives brief description of different terminology used with design data and refernce to IS 456 : 2000.",
        "This app can be a very helpful tool for engineers and contractors to evaluate any rcc structure element before casting to ensure full compliance under IS 456 : 2000 code for its integrity and fail safe design under given load conditions."
    ];


}]);

app.controller("ContactCtrl", ['$scope', function ContactCtrl($scope) {
    $scope.contactInfo = {
        "name" : "Kaup Shenoy Associates",
        "email": "kaupshenoyassociates@gmail.com",
        "disclaimer" : "Please note that run time errors are unique and depends upon the type of device as well as the way users interact with the applications and often slip through and undetectable during normal testing procedures. Therefore it is very important to notify us on such issues giving details of your device model/make with screen shots or circumstances under which run time exceptions occurred. We will send our response as soon as possible along with possible updates fixing those run time exceptions. We can also work with you until issues are resolved. This is how we continuously improve with your help that benefits all users as well. We are committed for your complete satisfaction and your help and cooperation in this regard is highly appreciated."
    };
}]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/dashboard.html',
                controller: 'DashboardCtrl'
            }).
            when('/highlights', {
                templateUrl: 'partials/highlights.html',
                controller: 'HighlightsCtrl'
            }).
            when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'ContactCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
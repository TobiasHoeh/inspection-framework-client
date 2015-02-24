var inspectionObjectServices = angular.module('inspectionObjectServices', ['ngResource']);

inspectionObjectServices.factory('InspectionObject', ['$resource',
    function($resource) {
        return $resource(REST_BACKEND_URL + '/inspectionobject/:inspectionobjectid', {}, {
            'list': {
                method: 'GET',
                isArray: true
            },
            'getDetails': {
                method: 'GET'
            },
            'save': {
                method: 'POST'
            },
            'update': {
                method: 'PUT'
            },
            'remove': {
                method: 'DELETE'
            },
            'fileUpload': {
                method: 'POST',
                transformRequest: function(data, headersGetters) {
                    if (data === undefined)
                        return data;

                    var fd = new FormData();
                    angular.forEach(data, function(value, key) {
                        if (value instanceof FileList) {
                            if (value.length == 1) {
                                fd.append(key, value[0]);
                            } else {
                                angular.forEach(value, function(file, index) {
                                    fd.append(key + '_' + index, file);
                                });
                            }
                        } else {
                            fd.append(key, value);
                        }
                    });
                    return fd;
                },
                headers: {
                    'Content-Type': undefined
                }
            }
        });
    }
]);

var loginServices = angular.module('loginServices', ['ngResource']);

loginServices.factory('Login', ['$resource',
    function($resource) {
        return $resource(REST_BACKEND_URL + '/login', {}, {
            'login': {
                method: 'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
        		transformRequest: function(obj) {
		            var str = [];
		            for(var p in obj)
		            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		            return str.join("&");
		        }
            }
        });
    }
]);

var userServices = angular.module('userServices', ['ngResource']);

userServices.factory('User', ['$resource',
    function($resource) {
        return $resource(REST_BACKEND_URL + '/users/:userid', {}, {
            'list': {
                method: 'GET',
                isArray: true
            },
            'getDetails': {
                method: 'GET'
            },
            'save': {
                method: 'POST'
            },
            'update': {
                method: 'PUT'
            },
            'remove': {
                method: 'DELETE'
            }
        });
    }
]);

var inspectionAssignmentServices = angular.module('inspectionAssignmentServices', ['ngResource']);

inspectionAssignmentServices.factory('InspectionAssignment', ['$resource',
    function($resource) {
        return $resource(REST_BACKEND_URL + '/assignment/:inspectionassignmentid', {}, {
            'list': {
                method: 'GET',
                isArray: true
            },
            'getDetails': {
                method: 'GET'
            },
            'save': {
                method: 'POST'
            },
            'update': {
                method: 'PUT'
            },
            'remove': {
                method: 'DELETE'
            }
        });
    }
]);

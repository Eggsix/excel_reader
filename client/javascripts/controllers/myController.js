myApp.controller('myCtrl', ['$scope', 'Upload', function ($scope, Upload, myFactory) {
    // upload later on form submit or something similar 
    $scope.submit = function() {
        $scope.upload($scope.file, function(data) {
        	$scope.sheet = data;
        	console.log($scope.sheet);
        });
    };
 
    // upload on file select or drop 
    $scope.upload = function (file, callback) {
        Upload.upload({
            url: '/upload',
            data: {file: file}
        }).then(function (data) {
            callback(data.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };

}]);
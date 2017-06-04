(function() {
	var cwhApp = angular.module('cwhApp');

	cwhApp.controller("EditResinController", function ($scope, $http, $uibModalInstance, title, editPrinter) {
		// init resin profile
		$scope.title = title;
		$scope.inkConfigArr = { 
				FirstLayerTime:'', 
				LayerTime:'', 
				Name:'', 
				NumberofBottomLayers:'', 
				PercentageOfPrintMaterialConsideredEmpty:'', 
				ResinPriceL:"", SliceHeight:'' 
				};
		$scope.save = function () {
			$uibModalInstance.close(editPrinter);
		};
		
		$scope.cancel = function () {
			console.log($scope.inkConfigArr);
			$uibModalInstance.dismiss('cancel');
		};
		
	})
	
})();
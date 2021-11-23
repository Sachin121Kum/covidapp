const URL = "https://covid19.mathdro.id/api";
let URL1 = "https://covid19.mathdro.id/api/countries";
let Url3 = "https://cdn-api.co-vin.in/api/v1/reports/v2/getPublicReports";
let url2;
let app = angular.module('myapp', []);
app.controller('CowinController',($scope,$http ,$interval)=>{
    $scope.title="Stay Home Stay Safe";
    $scope.news = [
        "चलती है गाड़ी, उड़ती है धूल वैक्सीन लगवा लो वरना होगी बड़ी भूल.",
        "यदि करते रहना है सौंदर्य दर्शन रोज-रोज तो पहले लगवा लो वैक्सीन के दोनों डोज",
        "टीका लगवाओगे तो बार-बार मिलेंगे,लापरवाही करोगे तो हरिद्वार मिलेंगे ",
    ];
    $scope.index = 0;
    $scope.item = "";

    console.log("App loaded");
    
    $interval(function(){
        var noi = $scope.news.length;
        if( $scope.index < noi ){
            $scope.item = $scope.news[$scope.index];
            $scope.index++;
        }else{
            $scope.index =0;
        }
    },6000);

    //get total vaccination
    $http.get(Url3).then((response) => {
        $scope.all_vacc=response.data;
    },(error)=>{
        console.log(error);

    });

    //return country api
    $http.get(URL1).then((response) => {
        $scope.all_country=response.data;
    },(error)=>{
        console.log(error);

    });

    $http.get(URL).then( (response)=>{
        console.log(response.data);
        $scope.all_data=response.data;
    },(error)=>{
        console.log(error);

    });

    //get Country Data

    $scope.get_country_data=()=> {
        console.log($scope.c);
        let country = $scope.c
        if(country == ""){
            $scope.c_data = undefined;
            return;
        }
        url2=URL1+"/"+country;

        $http.get(url2).then
        ((response) => {
            console.log(response.data);
            $scope.c_data = response.data;
        },(error)=>{
            console.log(error);
        });
    };

}); 
app.service('$QuestionService', ['$http', 'ApiPath','$TeamService', function ($http, ApiPath, $TeamService) {

  
    this.markAlternative = function(alternative){
        var config = {
            headers: {
                Authorization: localStorage.getItem("cleangameToken")
            }
        }
        return $http.post(ApiPath + '/rooms/markalternative',alternative, config).then(function(response) {
                  
             console.log("Question")                     
                                  
            return response
        }).catch(function (err) {
            console.log("ERRO: Falha ao criar sala...")
            return err;
        });
    }


    this.getTip = function(question_id){
        var config = {
            headers: {
                Authorization: localStorage.getItem("cleangameToken")
            }
        }
        return $http.get(ApiPath + '/question/'+question_id+'/'+$TeamService.getActiveTeam().id+'/tip', config).then(function (response) {
            return response;                         
        }).catch(function (err) {
            console.log("Falha ao consultar dica...")
            return err;
        });
    }


    this.getTip1 = function(question_id){
        var config = {
            headers: {
                Authorization: localStorage.getItem("cleangameToken")
            }
        }
        return $http.get(ApiPath + '/question/'+question_id+'/'+$TeamService.getActiveTeam().id+'/tip1', config).then(function (response) {
            return response;                         
        }).catch(function (err) {
            console.log("Falha ao consultar dica...")
            return err;
        });
    }

    this.getTip2 = function(question_id){
        var config = {
            headers: {
                Authorization: localStorage.getItem("cleangameToken")
            }
        }
        return $http.get(ApiPath + '/question/'+question_id+'/'+$TeamService.getActiveTeam().id+'/tip2', config).then(function (response) {
            return response;                         
        }).catch(function (err) {
            console.log("Falha ao consultar dica...")
            return err;
        });
    }

    this.getTip3 = function(question_id){
        var config = {
            headers: {
                Authorization: localStorage.getItem("cleangameToken")
            }
        }
        return $http.get(ApiPath + '/question/'+question_id+'/'+$TeamService.getActiveTeam().id+'/tip3', config).then(function (response) {
            return response;                         
        }).catch(function (err) {
            console.log("Falha ao consultar dica...")
            return err;
        });
    }

    this.skip = function(question_id){
        var config = {
            headers: {
                Authorization: localStorage.getItem("cleangameToken")
            }
        }
        return $http.get(ApiPath + '/question/'+question_id+'/'+$TeamService.getActiveTeam().id+'/skip', config).then(function (response) {
            return response;                         
        }).catch(function (err) {
            console.log("Falha ao consultar dica...")
            return err;
        });
    }

   

   
}])
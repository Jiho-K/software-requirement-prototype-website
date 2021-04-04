        function extAllOff(){
            document.getElementById("optOne").style.borderColor = "black";
            document.getElementById("optTwo").style.borderColor = "black";
            document.getElementById("optThree").style.borderColor = "black";
            document.getElementById("optFour").style.borderColor = "black";
            document.getElementById("optFive").style.borderColor = "black";
        }

        function intAllOff(){
            document.getElementById("interior_one").style.borderColor = "black";
            document.getElementById("interior_two").style.borderColor = "black";
            document.getElementById("interior_three").style.borderColor = "black";
        }

        function chngOne(){
            document.getElementById("model").src = "../images/car_models/exterior/model_one/redExterior.jpg";

            intAllOff();
            document.getElementById("optOne").style.borderColor = "rgb(52, 177, 166)";
            document.getElementById("optTwo").style.borderColor = "black";
            document.getElementById("optThree").style.borderColor = "black";
            document.getElementById("optFour").style.borderColor = "black";
            document.getElementById("optFive").style.borderColor = "black";

            //document.getElemenyById("ext-colour").innerHTML = "Red"; 
        }

        function chngTwo(){
            document.getElementById("model").src = "../images/car_models/exterior/model_one/blueExterior.jpg";
            
            intAllOff();
            document.getElementById("optOne").style.borderColor = "black";
            document.getElementById("optTwo").style.borderColor = "rgb(52, 177, 166)";
            document.getElementById("optThree").style.borderColor = "black";
            document.getElementById("optFour").style.borderColor = "black";
            document.getElementById("optFive").style.borderColor = "black";

            //document.getElemenyById("ext-colour").innerHTML = "Blue";
        }

        function chngThree(){
            document.getElementById("model").src = "../images/car_models/exterior/model_one/blackExterior.jpg";
            
            intAllOff();
            document.getElementById("optOne").style.borderColor = "black";
            document.getElementById("optTwo").style.borderColor = "black";
            document.getElementById("optThree").style.borderColor = "rgb(52, 177, 166)";
            document.getElementById("optFour").style.borderColor = "black";
            document.getElementById("optFive").style.borderColor = "black";
        }

        function chngFour(){
            document.getElementById("model").src = "../images/car_models/exterior/model_one/greyExterior.jpg";
            
            intAllOff();
            document.getElementById("optOne").style.borderColor = "black";
            document.getElementById("optTwo").style.borderColor = "black";
            document.getElementById("optThree").style.borderColor = "black";
            document.getElementById("optFour").style.borderColor = "rgb(52, 177, 166)";
            document.getElementById("optFive").style.borderColor = "black";
        }

        function chngFive(){
            document.getElementById("model").src = "../images/car_models/exterior/model_one/whiteExterior.jpg";
            
            intAllOff();
            document.getElementById("optOne").style.borderColor = "black";
            document.getElementById("optTwo").style.borderColor = "black";
            document.getElementById("optThree").style.borderColor = "black";
            document.getElementById("optFour").style.borderColor = "black";
            document.getElementById("optFive").style.borderColor = "rgb(52, 177, 166)";
        }

        function chngIntOne(){
            document.getElementById("model").src = "../images/car_models/interior/model_one/blackInt.jpg";
            
            extAllOff();
            document.getElementById("interior_one").style.borderColor = "rgb(52, 177, 166)";
            document.getElementById("interior_two").style.borderColor = "black";
            document.getElementById("interior_three").style.borderColor = "black";

        }

        function chngIntTwo(){
            document.getElementById("model").src = "../images/car_models/interior/model_one/bwInt.jpg";
            
            extAllOff();
            document.getElementById("interior_one").style.borderColor = "black";
            document.getElementById("interior_two").style.borderColor = "rgb(52, 177, 166)";
            document.getElementById("interior_three").style.borderColor = "black";

        }

        function chngIntThree(){
            document.getElementById("model").src = "../images/car_models/interior/model_one/walnutInt.jpg";
            
            extAllOff();
            document.getElementById("interior_one").style.borderColor = "black";
            document.getElementById("interior_two").style.borderColor = "black";
            document.getElementById("interior_three").style.borderColor = "rgb(52, 177, 166)";

        }
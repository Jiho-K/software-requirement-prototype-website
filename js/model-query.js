        // Turning off all exterior colour selection
        function extAllOff(){
            document.getElementById("optOne").style.borderColor = "black";
            document.getElementById("optTwo").style.borderColor = "black";
            document.getElementById("optThree").style.borderColor = "black";
            document.getElementById("optFour").style.borderColor = "black";
            document.getElementById("optFive").style.borderColor = "black";
        }
        
        // Turning off all interior colour selection
        function intAllOff(){
            document.getElementById("interior_one").style.borderColor = "black";
            document.getElementById("interior_two").style.borderColor = "black";
            document.getElementById("interior_three").style.borderColor = "black";
        }
        
        // When first exterior colour icon is selected
        // highlight first colour icon only
        function chngOne(){
            document.getElementById("model").src = "../images/car_models/exterior/model_one/redExterior.jpg";

            intAllOff();
            document.getElementById("optOne").style.borderColor = "rgb(52, 177, 166)";
            document.getElementById("optTwo").style.borderColor = "black";
            document.getElementById("optThree").style.borderColor = "black";
            document.getElementById("optFour").style.borderColor = "black";
            document.getElementById("optFive").style.borderColor = "black";
        }

        // When second exterior colour icon is selected
        // highlight second colour icon only
        function chngTwo(){
            document.getElementById("model").src = "../images/car_models/exterior/model_one/blueExterior.jpg";
            
            intAllOff();
            document.getElementById("optOne").style.borderColor = "black";
            document.getElementById("optTwo").style.borderColor = "rgb(52, 177, 166)";
            document.getElementById("optThree").style.borderColor = "black";
            document.getElementById("optFour").style.borderColor = "black";
            document.getElementById("optFive").style.borderColor = "black";
        }

        // When third exterior colour icon is selected
        // highlight third colour icon only
        function chngThree(){
            document.getElementById("model").src = "../images/car_models/exterior/model_one/blackExterior.jpg";
            
            intAllOff();
            document.getElementById("optOne").style.borderColor = "black";
            document.getElementById("optTwo").style.borderColor = "black";
            document.getElementById("optThree").style.borderColor = "rgb(52, 177, 166)";
            document.getElementById("optFour").style.borderColor = "black";
            document.getElementById("optFive").style.borderColor = "black";
        }

        // When fourth exterior colour icon is selected
        // highlight fourth colour icon only
        function chngFour(){
            document.getElementById("model").src = "../images/car_models/exterior/model_one/greyExterior.jpg";
            
            intAllOff();
            document.getElementById("optOne").style.borderColor = "black";
            document.getElementById("optTwo").style.borderColor = "black";
            document.getElementById("optThree").style.borderColor = "black";
            document.getElementById("optFour").style.borderColor = "rgb(52, 177, 166)";
            document.getElementById("optFive").style.borderColor = "black";
        }
        
        // When fifth exterior colour icon is selected
        // highlight fifth colour icon only
        function chngFive(){
            document.getElementById("model").src = "../images/car_models/exterior/model_one/whiteExterior.jpg";
            
            intAllOff();
            document.getElementById("optOne").style.borderColor = "black";
            document.getElementById("optTwo").style.borderColor = "black";
            document.getElementById("optThree").style.borderColor = "black";
            document.getElementById("optFour").style.borderColor = "black";
            document.getElementById("optFive").style.borderColor = "rgb(52, 177, 166)";
        }

        // When first interior colour icon is selected
        // highlight first colour icon only
        function chngIntOne(){
            document.getElementById("model").src = "../images/car_models/interior/model_one/blackInt.jpg";
            
            extAllOff();
            document.getElementById("interior_one").style.borderColor = "rgb(52, 177, 166)";
            document.getElementById("interior_two").style.borderColor = "black";
            document.getElementById("interior_three").style.borderColor = "black";

        }

        // When second interior colour icon is selected
        // highlight second colour icon only
        function chngIntTwo(){
            document.getElementById("model").src = "../images/car_models/interior/model_one/bwInt.jpg";
            
            extAllOff();
            document.getElementById("interior_one").style.borderColor = "black";
            document.getElementById("interior_two").style.borderColor = "rgb(52, 177, 166)";
            document.getElementById("interior_three").style.borderColor = "black";

        }

        // When third interior colour icon is selected
        // highlight third colour icon only
        function chngIntThree(){
            document.getElementById("model").src = "../images/car_models/interior/model_one/walnutInt.jpg";
            
            extAllOff();
            document.getElementById("interior_one").style.borderColor = "black";
            document.getElementById("interior_two").style.borderColor = "black";
            document.getElementById("interior_three").style.borderColor = "rgb(52, 177, 166)";

        }

<!doctype html>
<html>
<head>

    <title>How to Parse a JSON file using jQuery</title>
    
    <style>
        body{
            text-align: center;
            font-family: arial;
        }

        .button{
            margin:20px;
            font-size:16px;
            font-weight: bold;
            padding:5px 10px;
        }
    </style>


</head>
<body>
    <a href="data.json" target="_blank">Open JSON file</a><br />
    <input type="button" value="Get and parse JSON" class="button" />
    <br />
    <span id="results"></span>

    <?php /*<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>  */ ?>
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>

    <script>

        //When DOM loaded we attach click event to button
        $(document).ready(function() {
            
            //after button is clicked we download the data
            $('.button').click(function(){

                //start ajax request
                $.ajax({
                    url: "data.json",
                    //force to handle it as text
                    dataType: "text",
                    success: function(data) {
                        
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        //now json variable contains data in json format
                        //let's display a few items
                        $('#results').html('Hello text: ' + json.title  + '<br />Author: ' + json.name);
                    }
                });
            });
        });
    </script>

</body>
</html>
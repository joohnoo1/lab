<!DOCTYPE html>
<html>

<head>
    <title>PHP GET and POST Method Example</title>
    <link rel="stylesheet" href="style.css" />

</head>

<body>
    <?php
    $nameInfo = "";
    $ageInfo = "";
    $overText = "";
    function GetNameInfo($name)
    {
        for ($i = 0; $i < strlen($name); $i++)
        {
            if (ord($name[$i]) < 65 || ord($name[$i]) > 122 || (ord($name[$i]) > 90 && ord($name[$i]) < 97))
            {
                return "*must be only letter";
            }
        }
        return "";
    }
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $name = $_POST["name"];
        $age = $_POST["age"];
        $nameInfo = GetNameInfo($name);
        if (strlen($age) > 3)
        {
            $ageInfo = "*must be 3 digits";
        }
        else
        {
            $ageInfo = "";
        }
        if ($ageInfo == "" && $nameInfo == "")
        {
            $overText = "Form succefully submitted by Post";
        }else{
            $overText = "";
        }
    }
    if ($_SERVER["REQUEST_METHOD"] == "GET")
    {
        $name = $_GET["name"];
        $age = $_GET["age"];
        if ($name != "" && $age != "")
        {
            $nameInfo = GetNameInfo($name);
            if (strlen($age) > 3)
            {
                $ageInfo = "*must be 3 digits";
                exit();
            }
            else
            {
                $ageInfo = "";
            }
            if ($ageInfo == "" && $nameInfo == "")
            {
                $overText = "Form succefully submitted by Get";
            }else{
                $overText = "";
            }
        }
    }

    ?>
    <div class="container">
        <div class="main">
            <form method="" action="<?php echo $_SERVER['PHP_SELF'] ?>" id="form">
                <h2>PHP GET and POST Method Example</h2>
                <label>Select Form Method :</label>
                <span><input type="radio" name="meth" id="r1" class="meth1" value="post" onchange="OnChange(this, 'post')"> POST
                    <input type="radio" name="meth" class="meth1" value="get" onchange="OnChange(this, 'get')"> GET
                </span>
                <br>
                <br>

                <label>Name :</label>
                <input type="text" name="name" id="name" id="r2" />
                <b style="color: red;"><?php echo $nameInfo ?></b>
                <br><br>

                <label>Age :</label>
                <input type="number" name="age" id="age" />
                <b style="color: red;"><?php echo $ageInfo ?></b>
                <br><br>
                <input type="submit" name="submit" id="submit" value="Submit" onclick="OnSubmit()">
                <br>
                <br>
                <b><?php echo $overText ?></b>
            </form>
        </div>
    </div>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script type="text/javascript" src="Mymyth.js"></script>
</body>

</html>
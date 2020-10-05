<!DOCTYPE HTML>  
<html>
<head>
    <title>Login Page</title> 
    <style>
        body{
            margin: 0;
            padding: 0;
            background: url(images/background.jpg);
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
            font-family: sans-serif;
        }
        #login{
            width: 380px;
            height: 480px;
            background: rgba(0, 0, 0, 0.5);
            color: #fff;
            top: 50%;
            left: 50%;
            position: absolute;
            transform: translate(-50%,-50%);
            box-sizing: border-box;
            padding: 70px 30px;
        }
        .avatar{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: absolute;
            top: -50px;
            left: calc(50% - 50px);
        }
        h3{
            margin: 0;
            padding: 0 0 20px;
            text-align: center;
            font-size: 22px;
        }
        .ppp {
            margin: 0;
            padding: 0;
            font-weight: bold;
            font-size: 20px;
        }
        #login input{
            width: 100%;
            margin-bottom: 20px;
        }
        .ppp input[type="text"], input[type="password"] {
            border: none;
            border-bottom: 1px solid #fff;
            border-bottom-length: 190px;
            background: transparent;
            outline: none;
            height: 30px;
            color: #fff;
            font-size: 16px;
        }

        #login input[type="submit"] {
            border: none;
            outline: none;
            height: 40px;
            background: #1c8adb;
            color: #fff;
            font-size: 18px;
            border-radius: 20px;
        }
        #login input[type="submit"]:hover {
            cursor: pointer;
            background: #fff;
            color: #1c8adb;
        }

        .ppp:focus-within {
            font-size: 15px;
        }

        input:focus::placeholder {
            color: transparent;
        }
        .error {color: #FF0000;}
    </style>
</head>

<body>  
    <?php
        $local_user = "admin"; 
        $local_password = "123";
        $error = "";
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $u_post = $_POST['username']; // get user input 
            $p_post = $_POST['password']; // get password input 

            if ($local_user == $u_post) {
                if ($local_password == $p_post) {
                    header('Location: main.html');
                }
                $error = "* Wrong password"; // if username is correct but password is not
            }
            else {
                $error = "* Wrong user name";  // if username is not correct then no need to check password ! .
            }
        }
    ?>
    
    <div id="login">
        <img src="images/avatar.png" class="avatar"/>
        <h3>Login</h3>
        <span class="error"><?php echo $error;?></span>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" autocomplete="off">
            <div class="ppp">
                <p>Username</p>
                <input type="text"  name="username" placeholder="Enter username" /> 
            </div>
            <div class="ppp">
                <p>Password</p>
                <input type="password" name="password" placeholder="Enter password" />
            </div>
            <br><br>
            <input type="submit" name="login" value="Login"/>
        </form>
    </div>
</body>
</html>
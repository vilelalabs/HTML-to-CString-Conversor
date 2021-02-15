# HTML-to-CString-Conversor

The idea of this project is to converts a .html file to a C string variable with line break format as the following examples:

### Instruction:

To use , be in the same directory of the .html file and run:
```
node  conversor.js filename.html
```

### Working example:

The .html file: 

```html
<!DOCTYPE html>
<html>

<head>
    <title>JS "dentro" do ESP</title>
</head>

<body>
    <h1>Você está conectado do ESP8266</h1>
    <p id="texto"></p>
    <div style="background-color: aqua;">
        <button onclick="clique()">APERTE</button>
    </div>
    <script>
        function clique() {
            let txt = document.getElementById('texto');
            txt.innerHTML = 'Botao Pressionado!'
        }
    </script>
</body>

</html>
```
is converted to: 

```cpp
String msg;

msg+= "<!DOCTYPE html>";
msg+= "<html>";
msg+= "";
msg+= "<head>";
msg+= "    <title>JS \"dentro\" do ESP</title>";
msg+= "</head>";
msg+= "";
msg+= "<body>";
msg+= "    <h1>Você está conectado do ESP8266</h1>";
msg+= "    <p id=\"texto\"></p>";
msg+= "    <div style=\"background-color: aqua;\">";
msg+= "        <p>.</p>";
msg+= "        <p>.</p>";
msg+= "        <button onclick=\"clique()\">APERTE</button>";
msg+= "        <p>.</p>";
msg+= "        <p>.</p>";
msg+= "";
msg+= "    </div>";
msg+= "    <script>";
msg+= "        function clique() {";
msg+= "            let txt = document.getElementById('texto');";
msg+= "            txt.innerHTML = 'Botao Pressionado!'";
msg+= "        }";
msg+= "    </script>";
msg+= "</body>";
msg+= "";
msg+= "</html>";
```

in a **out.txt** file in the same directory

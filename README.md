Project created and updated live at  [Twitch.Tv/HenriqueVilelaMusic](https://twitch.tv/henriquevilelamusic)

# HTML-to-CString-Conversor

The idea of this project is to converts a .html file to a C string variable with line break format as the following examples:

### Instruction:

To use , be in the same directory of the .html file and run:
```
node  conversor.js filename.html
```


**index.html** and **main.cpp** are just example files. 

### Working example:

The .html file: 

```html
<!DOCTYPE html>
<html>

<head>
    <title>JS "inside" do ESP</title>
</head>

<body>
    <h1>You're connected on ESP8266</h1>
    <p id="texto"></p>
    <div style="background-color: aqua;">
        <button onclick="click()">PRESS</button>
    </div>
    <script>
        function click() {
            let txt = document.getElementById('texto');
            txt.innerHTML = 'Pressed!'
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
msg+= "    <title>JS \"inside\" do ESP</title>";
msg+= "</head>";
msg+= "";
msg+= "<body>";
msg+= "    <h1>You're connected on ESP8266</h1>";
msg+= "    <p id=\"texto\"></p>";
msg+= "    <div style=\"background-color: aqua;\">";
msg+= "        <p>.</p>";
msg+= "        <p>.</p>";
msg+= "        <button onclick=\"click()\">PRESS</button>";
msg+= "        <p>.</p>";
msg+= "        <p>.</p>";
msg+= "";
msg+= "    </div>";
msg+= "    <script>";
msg+= "        function click() {";
msg+= "            let txt = document.getElementById('texto');";
msg+= "            txt.innerHTML = 'Pressed!'";
msg+= "        }";
msg+= "    </script>";
msg+= "</body>";
msg+= "";
msg+= "</html>";
```

in a **out.txt** file in the same directory

See **Issues** before use.

## Notes
- needs **nodejs** installed on machine.

{
  PC = {
      "CPU": "Ryzen 9 5900X 12C/24T (4.6GHz all core)",
      "MOBO": "Asus ROG Crosshair VIII Dark Hero",
      "RAM": "Corsair Vengeance PRO SL 32GB (16x2) (3600Mhz CL18)",
      "GPU": "MSI RTX 4070 Ti Gaming X Trio",
      "SSD1": "Samsung PM981A 256GB PCIe 3.0",
      "SSD2": "WD SN850 500GB PCIe 4.0",
      "HDD1": "Seagate Barracuda 2TB",
      "HDD2": "Seagate Barracuda 1TB",
      "PSU": "Corsair RM1000X Shift 1000W",
      "CASE": "Nfortec Nekkar White",
      "OS": "Windows 11 Pro"
  },

  LIQUID_COOLING = {
      "Waterblock": "Nfortec Hydrus",
      "Radiator 1": "Nfortec Hydrus 240mm",
      "Radaitor 2": "Nfortec Hydrus 120mm",
      "Pump & Reservoir": "Yosoo MS-500X",
      "Thermal Compound": "Thermal Grizzly",
      "Liquid": "Corsair XL5"
  },

  MONITORS = {
      "Monitor 1": 'BenQ Mobiuz EX2710S 27" 1080p 165Hz',
      "Monitor 2": 'Samsung S27F350 27" 1080p 60Hz',
      "Monitor 3": 'Samsung S27F350 27" 1080p 60Hz',
      "Monitor 4": 'Asus VS197DE 19" 768p 60Hz'
  },

  KEYBOARD = {
      "Base": "Krom Kernel TKL 80%",
      "Switches": "Akko Rose Red (Linear 43gf ± 5gf)",
      "Stabilizers": "BINYEAE Stabilizers",
      "Keycaps": "OLNYLO ABS Spanish Keycaps",
      "MOD1": "Switch pad mod",
      "MOD2": "Stabilizer pad mod",
      "MOD3": "EVA Foam Base",
      "Lube": "GPL205G00"
  },
  
  PERIPHEALS = {
      "Mouse": "Razer Mamba Elite",
      "Mousepad": "90x40 Topo White",
      "Headset": "Corsair HS80 Wireless",
      "Earphones": "Nothing Ear(2)",
      "Mixer": "Behringer X-Touch MINI"
  },

  OTHER = {
      "Accesories": "Amazon Alexa Echo Dot 4",
      "Chair": "Secretlab Titan Evo 2022 R Cookies & Cream"
  }        
      
}

//* ============ Show SeTup Tables ============ *//
function createTable(KEY, tableName) {
  table = "<table><tr><th colspan='2' class='tableTitle'>" + tableName  + "</th></tr>";

  for (key in KEY) {
    table += "<tr><th>" + key + "</th><td>" + KEY[key] + "</td></tr>";
  }

  table += "</table>";

  return table;
}

pcTable = createTable(PC, "PC");
lcTable = createTable(LIQUID_COOLING, "Refrigeración Líquida");
monitorTable = createTable(MONITORS, "Monitores");
keyboardTable = createTable(KEYBOARD, "Teclado");
periphealsTable = createTable(PERIPHEALS, "Periféricos");
otherTable = createTable(OTHER, "Otros");
document.getElementById("pcTable").innerHTML = pcTable;
document.getElementById("lcTable").innerHTML = lcTable;
document.getElementById("monitorTable").innerHTML = monitorTable;
document.getElementById("keyboardTable").innerHTML = keyboardTable;
document.getElementById("periphealsTable").innerHTML = periphealsTable;
document.getElementById("otherTable").innerHTML = otherTable;

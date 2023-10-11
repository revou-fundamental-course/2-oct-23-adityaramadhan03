function konversi(unit) {
    var input = parseFloat(document.getElementById("temperature").value);
  
    if (isNaN(input)) {
      alert("Masukkan harus berupa angka.");
      return;
    }
  
    if (unit === "celsius") {
      var fahrenheit = (input * 9) / 5 + 32;
      document.getElementById("hasilTemperature").textContent =
        fahrenheit.toFixed(2) + " Fahrenheit";
    } else if (unit === "fahrenheit") {
      var celsius = ((input - 32) * 5) / 9;
      document.getElementById("hasilTemperature").textContent =
        celsius.toFixed(2) + " Celsius";
    }
  }
  
  function reverseKonversi() {
    var hasil = document.getElementById("hasilTemperature").textContent;
  
    if (hasil.includes("Fahrenheit")) {
      var fahrenheit = parseFloat(hasil);
      var celsius = ((fahrenheit - 32) * 5) / 9;
      document.getElementById("hasilTemperature").textContent =
        celsius.toFixed(2) + " Celsius";
    } else if (hasil.includes("Celsius")) {
      var celsius = parseFloat(hasil);
      var fahrenheit = (celsius * 9) / 5 + 32;
      document.getElementById("hasilTemperature").textContent =
        fahrenheit.toFixed(2) + " Fahrenheit";
    }
  }
  
  function resetForm() {
    document.getElementById("temperature").value = "";
    document.getElementById("hasilTemperature").textContent = "";
  }
  
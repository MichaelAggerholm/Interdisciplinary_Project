#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <DHT.h>

const char* ssid = "Omni_777318"; // Netværksnavn
const char* password = "giude9856"; // Netværkskode
const char* serverName = "http://192.168.1.54:8000/api/measurement"; // Lokale API URL

DHT dht2(2,DHT11); // DHT11 PIN 2 (D4)

unsigned long lastTime = 0;
// Loop hver tiende sekund, for test.
unsigned long timerDelay = 10000;
// Loop hvert minut, for prod.
//unsigned long timerDelay = 600000;

void setup() {
  Serial.begin(115200);

  // Forbind til wifi
  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Forbundet til WiFi med IP adressen: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  if ((millis() - lastTime) > timerDelay) {

    // Tjek wifi status
    if(WiFi.status()== WL_CONNECTED){
      WiFiClient client;
      HTTPClient http;

      float temp = (dht2.readTemperature());
      // Parametre
      String converted_temp = "value=" + String(temp, 2); // Konverter temp fra float til String
      String hardwareUnit = "hardwareUnitId=1";
      String measurementType = "measurementTypeId=1";
      
      // Begynd forbindelse til API server URL
      http.begin(client, serverName);
      
      // Definer content-type header
      http.addHeader("Content-Type", "application/x-www-form-urlencoded");

      // Kombiner parametre til en string som bruges til HTTP POST request
      String httpRequestData = hardwareUnit + "&" + measurementType + "&" + converted_temp;
      // Serial.println(httpRequestData); // Til test

      // TODO: Send ikke hvis sensor data = NaN
      // Send HTTP POST request
      int httpResponseCode = http.POST(httpRequestData);

      // Modtag respons kode, til verificering af afsendelse
      Serial.print("HTTP respons: ");
      Serial.println(httpResponseCode);
     
      // Til test
      Serial.print("Temp C: ");
      Serial.println((dht2.readTemperature()));
      // Serial.print("Fugt C: ");
      // Serial.println((dht2.readHumidity()));  
        
      // Frigiv ressourcer
      http.end();
    }
    else {
      // Hvis wifi forbindelsen mistes i loop
      Serial.println("WiFi forbindelse mistet");
    }
    lastTime = millis();
  }
}
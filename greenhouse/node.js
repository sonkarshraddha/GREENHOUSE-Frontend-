init -y
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

// Adjust this to match the serial port your Arduino is connected to
const portName = '/dev/ttyUSB0';  // For Linux/Mac, use something like '/dev/ttyUSB0', for Windows, use 'COM3'

// Create a new serial port connection with the specified baud rate
const port = new SerialPort(portName, {
  baudRate: 9600, // Must match the baud rate in your Arduino code
});

// Set up a parser to read the data line by line
const parser = port.pipe(new Readline({ delimiter: '\n' }));

// Event listener for when data is received from the Arduino
parser.on('data', (data) => {
  console.log('Received Data:', data);
  // You can split and process the data as needed here
  const [temperatureData, humidityData] = data.split('  ');
  
  // Example: Parse and print out temperature and humidity values
  const temperature = temperatureData.replace('Temperature: ', '').replace('°C', '').trim();
  const humidity = humidityData.replace('Humidity: ', '').replace('%', '').trim();
  
  console.log(`Temperature: ${temperature}°C, Humidity: ${humidity}%`);
});

// Error handling for the serial port
port.on('error', (err) => {
  console.log('Error:', err.message);
});

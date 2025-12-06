// Enhanced BOM Data with Supplier URLs, Lead Times, and Critical Flags

export const ENHANCED_BOM = {
  's-ac': {
    sections: [
      {
        category: 'Compute',
        items: [
          { name: 'Raspberry Pi Zero 2 W', part: 'SC0510', qty: 1, unit: 30.99, supplier: 'Adafruit', url: 'https://www.adafruit.com/product/5291', leadDays: 3, critical: true },
          { name: 'Cat-1/GNSS HAT', part: 'Waveshare SIM7670G', qty: 1, unit: 37.99, supplier: 'Amazon', url: 'https://amazon.com/dp/B0B8Z1GMJX', leadDays: 5, critical: true },
          { name: 'MicroSD Card 32GB', part: 'SanDisk Industrial', qty: 1, unit: 12.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07P14QWB1', leadDays: 2, critical: false },
          { name: 'IoT SIM Card', part: 'Hologram Global', qty: 1, unit: 5.00, supplier: 'Hologram', url: 'https://hologram.io/store/global-iot-sim-card', leadDays: 5, critical: true },
          { name: 'LTE Antenna', part: 'SMA External', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07WNQKZ95', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Sensors',
        items: [
          { name: 'TDS Sensor', part: 'CQRobot Ocean', qty: 1, unit: 11.99, supplier: 'Amazon', url: 'https://amazon.com/dp/B083DZZWTQ', leadDays: 3, critical: false },
          { name: 'Turbidity Sensor', part: 'DFRobot SEN0189', qty: 1, unit: 11.90, supplier: 'DFRobot', url: 'https://www.dfrobot.com/product-1394.html', leadDays: 5, critical: false },
          { name: 'pH Sensor + Probe', part: 'PH-4502C + BNC', qty: 1, unit: 28.79, supplier: 'Amazon', url: 'https://amazon.com/dp/B0899NQKPL', leadDays: 3, critical: false },
          { name: 'ADC Module', part: 'ADS1115 16-bit', qty: 1, unit: 5.00, supplier: 'Adafruit', url: 'https://www.adafruit.com/product/1085', leadDays: 2, critical: true },
          { name: 'pH Calibration Kit', part: '4.0 + 7.0 buffers', qty: 1, unit: 10.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07JH2N7WZ', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Power (AC)',
        items: [
          { name: 'AC-DC Power Supply', part: 'Mean Well LRS-50-12', qty: 1, unit: 18.00, supplier: 'DigiKey', url: 'https://www.digikey.com/product-detail/LRS-50-12', leadDays: 3, critical: true },
          { name: 'DC-DC Buck Converter', part: 'MP1584EN 12V→5V', qty: 1, unit: 2.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07VVXF7YX', leadDays: 2, critical: false },
          { name: 'AC Terminal Block', part: '3-pos L/N/G 15A', qty: 1, unit: 4.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07MWCJHZX', leadDays: 2, critical: false },
          { name: 'Fuse + Holder', part: '5A 250V inline', qty: 1, unit: 3.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07MFXL6HD', leadDays: 2, critical: false },
          { name: 'Power Cord', part: 'NEMA 5-15P 6ft', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B072LPZRSL', leadDays: 2, critical: false },
          { name: 'Cord Grip', part: 'PG13.5 strain relief', qty: 1, unit: 5.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07S7NBJQR', leadDays: 2, critical: false },
        ],
      },
      {
        category: 'Ultrasonic',
        items: [
          { name: 'Ultrasonic Driver + Transducer', part: 'BQLZR 100W 28kHz', qty: 1, unit: 68.99, supplier: 'Amazon', url: 'https://amazon.com/dp/B07PQY2L5R', leadDays: 7, critical: true },
          { name: 'Transducer Cable', part: '16AWG shielded 10ft', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07VXZFHDH', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Control',
        items: [
          { name: '4-Channel Relay Module', part: 'AEDIKO 12V opto', qty: 1, unit: 6.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07BDJJTLZ', leadDays: 2, critical: false },
          { name: 'Voltage Divider Resistors', part: '10kΩ + 3.3kΩ', qty: 1, unit: 0.50, supplier: 'DigiKey', url: 'https://www.digikey.com', leadDays: 3, critical: false },
          { name: 'Status LED Assembly', part: '5mm LED + 330Ω', qty: 1, unit: 1.00, supplier: 'DigiKey', url: 'https://www.digikey.com', leadDays: 3, critical: false },
          { name: 'Cooling Fan', part: '12V 40mm brushless', qty: 1, unit: 6.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B009NQLT0M', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Enclosure',
        items: [
          { name: 'NEMA 4X Enclosure', part: 'Joinfworld 12.6×18.1×6.4"', qty: 1, unit: 45.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07Z5THKWH', leadDays: 5, critical: true },
          { name: 'Cable Glands Kit', part: 'PG9/PG11/PG13.5 assorted', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07S7NBJQR', leadDays: 3, critical: false },
          { name: 'DIN Rail + Clips', part: '35mm rail 12" + 10× clips', qty: 1, unit: 9.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07GXLHGP5', leadDays: 3, critical: false },
          { name: 'Mounting Plate', part: 'Perforated aluminum', qty: 1, unit: 12.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07HCWJPZN', leadDays: 5, critical: false },
        ],
      },
      {
        category: 'Wiring',
        items: [
          { name: 'Wire Kit', part: '18/22/24 AWG assorted', qty: 1, unit: 15.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07TX6BX47', leadDays: 3, critical: false },
          { name: 'JST Connector Kit', part: 'XH 2.54mm various', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07ZK5F8HP', leadDays: 3, critical: false },
          { name: 'Terminal Blocks', part: 'Screw terminal 2/3/4-pos', qty: 1, unit: 6.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07NWDKC2W', leadDays: 2, critical: false },
          { name: 'Standoffs & Screws', part: 'M3 nylon/brass kit', qty: 1, unit: 5.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07D7828LC', leadDays: 2, critical: false },
          { name: 'Zip Ties & Mounts', part: 'Assorted sizes', qty: 1, unit: 4.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07VFPC3YT', leadDays: 2, critical: false },
          { name: 'Heat Shrink Tubing', part: 'Assorted colors/sizes', qty: 1, unit: 4.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B072PCQ2LW', leadDays: 2, critical: false },
          { name: 'Wire Labels', part: 'Printed cable markers', qty: 1, unit: 3.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07VPQH8WN', leadDays: 3, critical: false },
        ],
      },
    ],
  },

  's-sol': {
    sections: [
      {
        category: 'Compute',
        items: [
          { name: 'Raspberry Pi Zero 2 W', part: 'SC0510', qty: 1, unit: 30.99, supplier: 'Adafruit', url: 'https://www.adafruit.com/product/5291', leadDays: 3, critical: true },
          { name: 'Cat-1/GNSS HAT', part: 'Waveshare SIM7670G', qty: 1, unit: 37.99, supplier: 'Amazon', url: 'https://amazon.com/dp/B0B8Z1GMJX', leadDays: 5, critical: true },
          { name: 'MicroSD Card 32GB', part: 'SanDisk Industrial', qty: 1, unit: 12.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07P14QWB1', leadDays: 2, critical: false },
          { name: 'IoT SIM Card', part: 'Hologram Global', qty: 1, unit: 5.00, supplier: 'Hologram', url: 'https://hologram.io/store/global-iot-sim-card', leadDays: 5, critical: true },
          { name: 'LTE Antenna', part: 'SMA External', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07WNQKZ95', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Sensors',
        items: [
          { name: 'TDS Sensor', part: 'CQRobot Ocean', qty: 1, unit: 11.99, supplier: 'Amazon', url: 'https://amazon.com/dp/B083DZZWTQ', leadDays: 3, critical: false },
          { name: 'Turbidity Sensor', part: 'DFRobot SEN0189', qty: 1, unit: 11.90, supplier: 'DFRobot', url: 'https://www.dfrobot.com/product-1394.html', leadDays: 5, critical: false },
          { name: 'pH Sensor + Probe', part: 'PH-4502C + BNC', qty: 1, unit: 28.79, supplier: 'Amazon', url: 'https://amazon.com/dp/B0899NQKPL', leadDays: 3, critical: false },
          { name: 'ADC Module', part: 'ADS1115 16-bit', qty: 1, unit: 5.00, supplier: 'Adafruit', url: 'https://www.adafruit.com/product/1085', leadDays: 2, critical: true },
          { name: 'pH Calibration Kit', part: '4.0 + 7.0 buffers', qty: 1, unit: 10.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07JH2N7WZ', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Solar Power',
        items: [
          { name: 'Solar Panel 200W', part: 'Renogy 24V Mono', qty: 1, unit: 189.00, supplier: 'Renogy', url: 'https://www.renogy.com/200w-monocrystalline-solar-panel', leadDays: 5, critical: true },
          { name: 'MPPT Controller', part: 'Victron SmartSolar 100/20', qty: 1, unit: 125.00, supplier: 'Victron', url: 'https://www.victronenergy.com/solar-charge-controllers/smartsolar-100-20', leadDays: 5, critical: true },
          { name: 'LiFePO4 Battery', part: '24V 50Ah w/BMS', qty: 1, unit: 269.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B09MTYHQ6M', leadDays: 7, critical: true },
          { name: 'LVD', part: 'Victron BatteryProtect 65A', qty: 1, unit: 45.00, supplier: 'Victron', url: 'https://www.victronenergy.com/battery-protect', leadDays: 5, critical: true },
          { name: 'Inverter', part: 'Pure Sine 300W 24V→120V', qty: 1, unit: 65.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07WTFKQ8W', leadDays: 5, critical: true },
          { name: 'Buck Converter 24→12V', part: '10A Step-Down', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07MY3PZ5V', leadDays: 2, critical: false },
          { name: 'Buck Converter 12→5V', part: '5A Step-Down', qty: 1, unit: 6.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07VVXF7YX', leadDays: 2, critical: false },
        ],
      },
      {
        category: 'Ultrasonic',
        items: [
          { name: 'Ultrasonic Driver + Transducer', part: 'BQLZR 100W 28kHz', qty: 1, unit: 68.99, supplier: 'Amazon', url: 'https://amazon.com/dp/B07PQY2L5R', leadDays: 7, critical: true },
          { name: 'Transducer Cable', part: '16AWG shielded 10ft', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07VXZFHDH', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Control',
        items: [
          { name: '4-Channel Relay Module', part: 'AEDIKO 12V opto', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07BDJJTLZ', leadDays: 2, critical: false },
          { name: 'Cooling Fan', part: '12V 60mm brushless', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B009NQLT0M', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Enclosure & Mounting',
        items: [
          { name: 'NEMA 4X Enclosure Large', part: '16×20×8"', qty: 1, unit: 75.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07Z5THKWH', leadDays: 5, critical: true },
          { name: 'DIN Rail + Hardware', part: '35mm kit', qty: 1, unit: 20.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07GXLHGP5', leadDays: 3, critical: false },
          { name: 'Solar Panel Mount', part: 'Ground/Pole mount kit', qty: 1, unit: 45.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07VZ8VL9Y', leadDays: 5, critical: false },
          { name: 'Cable Glands Kit', part: 'PG9/PG11/PG13.5', qty: 1, unit: 15.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07S7NBJQR', leadDays: 3, critical: false },
          { name: 'Wiring & Connectors', part: 'Assorted kit', qty: 1, unit: 25.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07TX6BX47', leadDays: 3, critical: false },
        ],
      },
    ],
  },

  's-mon': {
    sections: [
      {
        category: 'Compute',
        items: [
          { name: 'Raspberry Pi Zero 2 W', part: 'SC0510', qty: 1, unit: 30.99, supplier: 'Adafruit', url: 'https://www.adafruit.com/product/5291', leadDays: 3, critical: true },
          { name: 'Cat-1/GNSS HAT', part: 'Waveshare SIM7670G', qty: 1, unit: 37.99, supplier: 'Amazon', url: 'https://amazon.com/dp/B0B8Z1GMJX', leadDays: 5, critical: true },
          { name: 'MicroSD Card 32GB', part: 'SanDisk Industrial', qty: 1, unit: 12.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07P14QWB1', leadDays: 2, critical: false },
          { name: 'IoT SIM Card', part: 'Hologram Global', qty: 1, unit: 5.00, supplier: 'Hologram', url: 'https://hologram.io/store/global-iot-sim-card', leadDays: 5, critical: true },
          { name: 'LTE Antenna', part: 'SMA External', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07WNQKZ95', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Sensors',
        items: [
          { name: 'TDS Sensor', part: 'CQRobot Ocean', qty: 1, unit: 11.99, supplier: 'Amazon', url: 'https://amazon.com/dp/B083DZZWTQ', leadDays: 3, critical: false },
          { name: 'Turbidity Sensor', part: 'DFRobot SEN0189', qty: 1, unit: 11.90, supplier: 'DFRobot', url: 'https://www.dfrobot.com/product-1394.html', leadDays: 5, critical: false },
          { name: 'pH Sensor + Probe', part: 'PH-4502C + BNC', qty: 1, unit: 28.79, supplier: 'Amazon', url: 'https://amazon.com/dp/B0899NQKPL', leadDays: 3, critical: false },
          { name: 'ADC Module', part: 'ADS1115 16-bit', qty: 1, unit: 5.00, supplier: 'Adafruit', url: 'https://www.adafruit.com/product/1085', leadDays: 2, critical: true },
          { name: 'pH Calibration Kit', part: '4.0 + 7.0 buffers', qty: 1, unit: 10.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07JH2N7WZ', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Solar Power',
        items: [
          { name: 'Solar Panel 100W', part: '12V Monocrystalline', qty: 1, unit: 85.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07GF5JY35', leadDays: 5, critical: true },
          { name: 'MPPT Controller', part: 'Small 12V unit', qty: 1, unit: 35.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07RNMH6TY', leadDays: 5, critical: true },
          { name: 'LiFePO4 Battery', part: '12V 25Ah w/BMS', qty: 1, unit: 149.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B08QCQQWNY', leadDays: 7, critical: true },
          { name: 'LVD', part: '12V Disconnect', qty: 1, unit: 25.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07DXHJYQH', leadDays: 3, critical: true },
          { name: 'Buck Converter 12→5V', part: '5A Step-Down', qty: 1, unit: 6.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07VVXF7YX', leadDays: 2, critical: false },
        ],
      },
      {
        category: 'Control',
        items: [
          { name: '2-Channel Relay Module', part: '12V opto', qty: 1, unit: 5.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B00E0NTPP4', leadDays: 2, critical: false },
        ],
      },
      {
        category: 'Enclosure & Mounting',
        items: [
          { name: 'NEMA 4X Enclosure Compact', part: '10×12×6"', qty: 1, unit: 45.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07Z5THKWH', leadDays: 5, critical: true },
          { name: 'DIN Rail + Hardware', part: '35mm kit', qty: 1, unit: 12.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07GXLHGP5', leadDays: 3, critical: false },
          { name: 'Solar Panel Mount', part: 'Ground/Pole mount kit', qty: 1, unit: 30.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07VZ8VL9Y', leadDays: 5, critical: false },
          { name: 'Cable Glands Kit', part: 'PG9/PG11', qty: 1, unit: 10.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07S7NBJQR', leadDays: 3, critical: false },
          { name: 'Wiring & Connectors', part: 'Assorted kit', qty: 1, unit: 15.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07TX6BX47', leadDays: 3, critical: false },
        ],
      },
    ],
  },

  'smart-buoy': {
    sections: [
      {
        category: 'Compute',
        items: [
          { name: 'Raspberry Pi Zero 2 W', part: 'SC0510', qty: 1, unit: 30.99, supplier: 'Adafruit', url: 'https://www.adafruit.com/product/5291', leadDays: 3, critical: true },
          { name: 'Cat-1/GNSS HAT', part: 'Waveshare SIM7670G', qty: 1, unit: 37.99, supplier: 'Amazon', url: 'https://amazon.com/dp/B0B8Z1GMJX', leadDays: 5, critical: true },
          { name: 'MicroSD Card 32GB', part: 'SanDisk Industrial', qty: 1, unit: 12.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07P14QWB1', leadDays: 2, critical: false },
          { name: 'IoT SIM Card', part: 'Hologram Global', qty: 1, unit: 5.00, supplier: 'Hologram', url: 'https://hologram.io/store/global-iot-sim-card', leadDays: 5, critical: true },
          { name: 'LTE Antenna Marine', part: 'SMA External', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07WNQKZ95', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Sensors',
        items: [
          { name: 'TDS Sensor', part: 'CQRobot Ocean', qty: 1, unit: 11.99, supplier: 'Amazon', url: 'https://amazon.com/dp/B083DZZWTQ', leadDays: 3, critical: false },
          { name: 'Turbidity Sensor', part: 'DFRobot SEN0189', qty: 1, unit: 11.90, supplier: 'DFRobot', url: 'https://www.dfrobot.com/product-1394.html', leadDays: 5, critical: false },
          { name: 'pH Sensor + Probe', part: 'PH-4502C + BNC', qty: 1, unit: 28.79, supplier: 'Amazon', url: 'https://amazon.com/dp/B0899NQKPL', leadDays: 3, critical: false },
          { name: 'Dissolved Oxygen Kit', part: 'Atlas Scientific EZO-DO', qty: 1, unit: 89.00, supplier: 'Atlas Scientific', url: 'https://atlas-scientific.com/ezo-do/', leadDays: 5, critical: false },
          { name: 'Temperature Probe', part: 'DS18B20 Waterproof', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B087JQ6MCP', leadDays: 3, critical: false },
          { name: 'ADC Module', part: 'ADS1115 16-bit', qty: 1, unit: 5.00, supplier: 'Adafruit', url: 'https://www.adafruit.com/product/1085', leadDays: 2, critical: true },
          { name: 'pH Calibration Kit', part: '4.0 + 7.0 buffers', qty: 1, unit: 10.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07JH2N7WZ', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Solar Power',
        items: [
          { name: 'Marine Solar Panel 50W', part: 'Rigid mount', qty: 1, unit: 95.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07GF5JY35', leadDays: 5, critical: true },
          { name: 'MPPT Controller', part: 'Marine rated', qty: 1, unit: 55.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07RNMH6TY', leadDays: 5, critical: true },
          { name: 'LiFePO4 Battery', part: '24V 20Ah w/BMS', qty: 1, unit: 185.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B09MTYHQ6M', leadDays: 7, critical: true },
          { name: 'LVD', part: '24V Disconnect', qty: 1, unit: 35.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07DXHJYQH', leadDays: 3, critical: true },
          { name: 'Inverter', part: 'Pure Sine 150W 24V→120V', qty: 1, unit: 45.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07WTFKQ8W', leadDays: 5, critical: true },
          { name: 'Buck Converter 24→5V', part: '5A Step-Down', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07VVXF7YX', leadDays: 2, critical: false },
        ],
      },
      {
        category: 'Ultrasonic',
        items: [
          { name: 'Ultrasonic Driver + Transducer', part: 'BQLZR 100W 28kHz', qty: 1, unit: 68.99, supplier: 'Amazon', url: 'https://amazon.com/dp/B07PQY2L5R', leadDays: 7, critical: true },
          { name: 'Transducer Cable', part: '16AWG shielded 10ft', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07VXZFHDH', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Float & Housing',
        items: [
          { name: 'HDPE Float Body', part: 'Cylindrical 21" Blue', qty: 1, unit: 628.00, supplier: 'Custom', url: null, leadDays: 14, critical: true },
          { name: 'IP68 Electronics Bay', part: 'Sealed enclosure', qty: 1, unit: 125.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07Z5THKWH', leadDays: 5, critical: true },
          { name: 'Sensor Cage', part: 'SS 316 Perforated', qty: 1, unit: 85.00, supplier: 'Custom', url: null, leadDays: 10, critical: false },
          { name: 'Solar Mount Frame', part: 'Aluminum', qty: 1, unit: 65.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07VZ8VL9Y', leadDays: 5, critical: false },
        ],
      },
      {
        category: 'Mooring',
        items: [
          { name: 'Anchor', part: 'Mushroom 25-50 lbs', qty: 1, unit: 45.00, supplier: 'West Marine', url: 'https://www.westmarine.com', leadDays: 5, critical: false },
          { name: 'Anchor Chain & Line Kit', part: 'SS + Nylon', qty: 1, unit: 55.00, supplier: 'West Marine', url: 'https://www.westmarine.com', leadDays: 5, critical: false },
          { name: 'Marine Cable Glands', part: 'IP68 rated', qty: 1, unit: 35.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07S7NBJQR', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Control',
        items: [
          { name: '4-Channel Relay Module', part: 'Marine rated', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07BDJJTLZ', leadDays: 2, critical: false },
        ],
      },
    ],
  },

  'smart-buoy-xl': {
    sections: [
      {
        category: 'Compute',
        items: [
          { name: 'Raspberry Pi CM4', part: '4GB/32GB eMMC', qty: 1, unit: 65.00, supplier: 'Adafruit', url: 'https://www.adafruit.com/product/4564', leadDays: 5, critical: true },
          { name: 'CM4 IO Board', part: 'Official Raspberry Pi', qty: 1, unit: 35.00, supplier: 'Adafruit', url: 'https://www.adafruit.com/product/4787', leadDays: 3, critical: true },
          { name: 'MicroSD Card 64GB', part: 'SanDisk Industrial', qty: 1, unit: 18.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07P14QWB1', leadDays: 2, critical: false },
          { name: 'Cat-1/GNSS HAT', part: 'Waveshare SIM7670G', qty: 1, unit: 37.99, supplier: 'Amazon', url: 'https://amazon.com/dp/B0B8Z1GMJX', leadDays: 5, critical: true },
          { name: 'IoT SIM Card', part: 'Hologram Global', qty: 1, unit: 5.00, supplier: 'Hologram', url: 'https://hologram.io/store/global-iot-sim-card', leadDays: 5, critical: true },
          { name: 'LTE Antenna Marine', part: 'SMA External', qty: 1, unit: 8.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07WNQKZ95', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Pro Sensors (Atlas Scientific)',
        items: [
          { name: 'EZO-EC Kit', part: 'Conductivity/TDS', qty: 1, unit: 165.00, supplier: 'Atlas Scientific', url: 'https://atlas-scientific.com/ezo-ec/', leadDays: 5, critical: true },
          { name: 'Optical Nephelometer', part: 'Turbidity', qty: 1, unit: 75.00, supplier: 'Atlas Scientific', url: 'https://atlas-scientific.com', leadDays: 5, critical: false },
          { name: 'EZO-pH Kit', part: 'pH Probe + Circuit', qty: 1, unit: 145.00, supplier: 'Atlas Scientific', url: 'https://atlas-scientific.com/ezo-ph/', leadDays: 5, critical: true },
          { name: 'EZO-DO Kit', part: 'Dissolved Oxygen', qty: 1, unit: 178.00, supplier: 'Atlas Scientific', url: 'https://atlas-scientific.com/ezo-do/', leadDays: 5, critical: true },
          { name: 'PT1000 Marine Probe', part: 'Temperature', qty: 1, unit: 28.00, supplier: 'Atlas Scientific', url: 'https://atlas-scientific.com', leadDays: 5, critical: false },
          { name: 'EZO-ORP Kit', part: 'Oxidation-Reduction', qty: 1, unit: 145.00, supplier: 'Atlas Scientific', url: 'https://atlas-scientific.com/ezo-orp/', leadDays: 5, critical: false },
          { name: 'Chlorophyll-a Fluorometer', part: 'Algae detection', qty: 1, unit: 420.00, supplier: 'Turner Designs', url: 'https://www.turnerdesigns.com', leadDays: 14, critical: false },
          { name: 'Phycocyanin Detector', part: 'BGA/Cyanobacteria', qty: 1, unit: 380.00, supplier: 'Turner Designs', url: 'https://www.turnerdesigns.com', leadDays: 14, critical: false },
        ],
      },
      {
        category: 'Solar Power',
        items: [
          { name: 'Marine Solar Panel 100W', part: 'Rigid mount', qty: 3, unit: 225.00, supplier: 'Renogy', url: 'https://www.renogy.com', leadDays: 5, critical: true },
          { name: 'Tri-Mount Solar Frame', part: 'Aluminum', qty: 1, unit: 85.00, supplier: 'Custom', url: null, leadDays: 10, critical: false },
          { name: 'MPPT Controller', part: 'Victron SmartSolar 100/30', qty: 1, unit: 165.00, supplier: 'Victron', url: 'https://www.victronenergy.com', leadDays: 5, critical: true },
          { name: 'LiFePO4 Battery', part: '24V 100Ah w/BMS', qty: 1, unit: 549.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B09MTYHQ6M', leadDays: 7, critical: true },
          { name: 'Battery Monitor', part: 'Victron BMV-712', qty: 1, unit: 65.00, supplier: 'Victron', url: 'https://www.victronenergy.com', leadDays: 5, critical: false },
          { name: 'LVD', part: 'Victron BatteryProtect 100A', qty: 1, unit: 65.00, supplier: 'Victron', url: 'https://www.victronenergy.com', leadDays: 5, critical: true },
          { name: 'Inverter', part: 'Pure Sine 500W 24V→120V', qty: 1, unit: 95.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07WTFKQ8W', leadDays: 5, critical: true },
          { name: 'Buck Converter 24→12V', part: '10A Step-Down', qty: 1, unit: 15.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07MY3PZ5V', leadDays: 2, critical: false },
          { name: 'Buck Converter 12→5V', part: '5A Step-Down', qty: 1, unit: 10.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07VVXF7YX', leadDays: 2, critical: false },
        ],
      },
      {
        category: 'Ultrasonic',
        items: [
          { name: 'Ultrasonic Driver + Transducer', part: 'BQLZR 100W 28kHz', qty: 2, unit: 137.98, supplier: 'Amazon', url: 'https://amazon.com/dp/B07PQY2L5R', leadDays: 7, critical: true },
          { name: 'Transducer Cable', part: '16AWG shielded 10ft', qty: 2, unit: 16.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07VXZFHDH', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Float & Housing',
        items: [
          { name: 'HDPE Teardrop Float', part: '24" Blue', qty: 3, unit: 3897.00, supplier: 'Custom', url: null, leadDays: 21, critical: true },
          { name: 'Aluminum Center Frame', part: 'Structural', qty: 1, unit: 285.00, supplier: 'Custom', url: null, leadDays: 14, critical: true },
          { name: 'IP68 Electronics Bay Large', part: 'Sealed enclosure', qty: 1, unit: 295.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07Z5THKWH', leadDays: 5, critical: true },
          { name: 'Heavy Sensor Cage', part: 'SS 316', qty: 1, unit: 165.00, supplier: 'Custom', url: null, leadDays: 10, critical: false },
          { name: 'Dual Transducer Mounts', part: 'SS 316 pockets', qty: 1, unit: 85.00, supplier: 'Custom', url: null, leadDays: 10, critical: false },
        ],
      },
      {
        category: 'Navigation',
        items: [
          { name: 'Navigation Light', part: 'Solar LED Amber', qty: 1, unit: 45.00, supplier: 'West Marine', url: 'https://www.westmarine.com', leadDays: 5, critical: false },
        ],
      },
      {
        category: 'Mooring',
        items: [
          { name: 'Heavy Anchor', part: 'Danforth 100-150 lbs', qty: 1, unit: 125.00, supplier: 'West Marine', url: 'https://www.westmarine.com', leadDays: 7, critical: false },
          { name: 'Heavy Chain & Line Kit', part: 'SS + Nylon', qty: 1, unit: 95.00, supplier: 'West Marine', url: 'https://www.westmarine.com', leadDays: 5, critical: false },
          { name: 'Marine Cable Assemblies', part: 'IP68 rated', qty: 1, unit: 75.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07S7NBJQR', leadDays: 3, critical: false },
          { name: 'SS Mounting Hardware', part: 'Complete kit', qty: 1, unit: 65.00, supplier: 'McMaster-Carr', url: 'https://www.mcmaster.com', leadDays: 3, critical: false },
        ],
      },
      {
        category: 'Control',
        items: [
          { name: '8-Channel Relay Module', part: 'Marine rated', qty: 1, unit: 12.00, supplier: 'Amazon', url: 'https://amazon.com/dp/B07BDJJTLZ', leadDays: 2, critical: false },
        ],
      },
    ],
  },
};

// Helper to calculate totals from enhanced BOM
export const calculateBOMTotals = (productId) => {
  const bom = ENHANCED_BOM[productId];
  if (!bom) return { total: 0, criticalCount: 0, maxLeadDays: 0 };

  let total = 0;
  let criticalCount = 0;
  let maxLeadDays = 0;

  bom.sections.forEach(section => {
    section.items.forEach(item => {
      total += item.unit * item.qty;
      if (item.critical) criticalCount++;
      if (item.leadDays > maxLeadDays) maxLeadDays = item.leadDays;
    });
  });

  return { total: Math.round(total * 100) / 100, criticalCount, maxLeadDays };
};

export default ENHANCED_BOM;

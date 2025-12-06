// Full Specifications Data per Product
// Environmental ratings, certifications, detailed electrical specs

export const FULL_SPECS = {
  's-ac': {
    // Environmental
    operatingTemp: '-20°C to +55°C (-4°F to +131°F)',
    storageTemp: '-40°C to +70°C (-40°F to +158°F)',
    humidity: '0-95% RH non-condensing',
    ipRating: 'IP66 (NEMA 4X)',
    ipDescription: 'Dust tight, high-pressure water jets',

    // Electrical
    inputVoltage: '120V AC 60Hz (NEMA 5-15P plug)',
    powerConsumption: '8W avg, 120W peak (ultrasonic active)',
    internalVoltage: '12V DC (from AC-DC PSU)',

    // Connectivity
    cellular: 'LTE Cat-1: B2/B4/B5/B12/B13/B66 (North America)',
    cellularFallback: '2G GSM (where available)',
    gpsAccuracy: '2.5m CEP (open sky)',
    dataUsage: '50-80 MB/month @ 15-min reporting',
    antennaType: 'External SMA (4G/LTE + GPS combo)',

    // Physical
    dimensions: '12.6" × 18.1" × 6.4" (320 × 460 × 163 mm)',
    weight: '~15 lbs (6.8 kg)',
    mounting: 'Wall or pole mount (hardware included)',
    cableLength: '10 ft sensor cables (extendable to 25 ft)',
    enclosureMaterial: 'Fiberglass-reinforced polyester',

    // Maintenance
    sensorLifespan: 'pH: 12-18 mo, TDS/Turb: 24+ mo',
    warrantyPeriod: '2 years parts, 1 year labor',
    calibrationInterval: '30 days (pH) / 90 days (TDS, Turb)',

    // Certifications
    certifications: ['FCC Part 15B', 'UL Listed (pending)', 'CE Mark (pending)'],
  },

  's-sol': {
    // Environmental
    operatingTemp: '-20°C to +50°C (-4°F to +122°F)',
    storageTemp: '-40°C to +60°C (-40°F to +140°F)',
    humidity: '0-95% RH non-condensing',
    ipRating: 'IP66 (NEMA 4X)',
    ipDescription: 'Dust tight, high-pressure water jets',

    // Electrical
    inputVoltage: '24V DC nominal (20-29V range)',
    powerConsumption: '9W avg, 130W peak (ultrasonic via inverter)',
    batteryType: 'LiFePO4 (Lithium Iron Phosphate)',
    batteryCapacity: '50Ah (1280Wh)',
    batteryCycles: '2000+ cycles to 80% capacity',
    chargingTemp: '0°C to +45°C (32°F to +113°F)',
    solarPanel: '200W monocrystalline, 24V nominal',
    mpptController: 'Victron SmartSolar 100/20 (Bluetooth)',
    lvd: 'Victron BatteryProtect 65A',
    inverter: '300W Pure Sine 24VDC→120VAC',

    // Connectivity
    cellular: 'LTE Cat-1: B2/B4/B5/B12/B13/B66 (North America)',
    cellularFallback: '2G GSM (where available)',
    gpsAccuracy: '2.5m CEP (open sky)',
    dataUsage: '50-80 MB/month @ 15-min reporting',
    antennaType: 'External SMA (4G/LTE + GPS combo)',

    // Physical
    dimensions: '16" × 20" × 8" (406 × 508 × 203 mm)',
    weight: '~35 lbs (15.9 kg)',
    mounting: 'Pole or ground mount',
    cableLength: '10 ft sensor cables (extendable to 25 ft)',
    enclosureMaterial: 'Fiberglass-reinforced polyester',

    // Maintenance
    sensorLifespan: 'pH: 12-18 mo, TDS/Turb: 24+ mo',
    warrantyPeriod: '2 years parts, 1 year labor',
    calibrationInterval: '30 days (pH) / 90 days (TDS, Turb)',

    // Certifications
    certifications: ['FCC Part 15B', 'UL Listed (pending)', 'CE Mark (pending)'],
  },

  's-mon': {
    // Environmental
    operatingTemp: '-20°C to +50°C (-4°F to +122°F)',
    storageTemp: '-40°C to +60°C (-40°F to +140°F)',
    humidity: '0-95% RH non-condensing',
    ipRating: 'IP66 (NEMA 4X)',
    ipDescription: 'Dust tight, high-pressure water jets',

    // Electrical
    inputVoltage: '12V DC nominal (10.5-14.4V range)',
    powerConsumption: '3.5W avg (no ultrasonic)',
    batteryType: 'LiFePO4 (Lithium Iron Phosphate)',
    batteryCapacity: '25Ah (320Wh)',
    batteryCycles: '2000+ cycles to 80% capacity',
    chargingTemp: '0°C to +45°C (32°F to +113°F)',
    solarPanel: '100W monocrystalline, 12V nominal',
    mpptController: 'Victron SmartSolar 75/15 (Bluetooth)',
    lvd: 'Integrated in MPPT',

    // Connectivity
    cellular: 'LTE Cat-1: B2/B4/B5/B12/B13/B66 (North America)',
    cellularFallback: '2G GSM (where available)',
    gpsAccuracy: '2.5m CEP (open sky)',
    dataUsage: '50-80 MB/month @ 15-min reporting',
    antennaType: 'External SMA (4G/LTE + GPS combo)',

    // Physical
    dimensions: '10" × 12" × 6" (254 × 305 × 152 mm)',
    weight: '~20 lbs (9.1 kg)',
    mounting: 'Pole or ground mount',
    cableLength: '10 ft sensor cables (extendable to 25 ft)',
    enclosureMaterial: 'Fiberglass-reinforced polyester',

    // Maintenance
    sensorLifespan: 'pH: 12-18 mo, TDS/Turb: 24+ mo',
    warrantyPeriod: '2 years parts, 1 year labor',
    calibrationInterval: '30 days (pH) / 90 days (TDS, Turb)',
    upgradeNote: 'Ultrasonic module available as field upgrade ($450)',

    // Certifications
    certifications: ['FCC Part 15B', 'UL Listed (pending)', 'CE Mark (pending)'],
  },

  'smart-buoy': {
    // Environmental
    operatingTemp: '-10°C to +45°C (14°F to +113°F)',
    storageTemp: '-20°C to +60°C (-4°F to +140°F)',
    humidity: '0-100% RH (marine rated)',
    ipRating: 'IP68 (electronics bay)',
    ipDescription: 'Submersible 1m/30min',

    // Electrical
    inputVoltage: '24V DC nominal',
    powerConsumption: '5W avg, 120W peak (ultrasonic)',
    batteryType: 'LiFePO4 (Lithium Iron Phosphate)',
    batteryCapacity: '20Ah (480Wh)',
    batteryCycles: '2000+ cycles to 80% capacity',
    chargingTemp: '0°C to +45°C (32°F to +113°F)',
    solarPanel: '~50W rigid marine panel',
    mpptController: 'Victron SmartSolar 75/15',
    lvd: 'Integrated in MPPT',
    inverter: '150W Pure Sine 24VDC→120VAC',

    // Connectivity
    cellular: 'LTE Cat-1: B2/B4/B5/B12/B13/B66 (North America)',
    cellularFallback: '2G GSM (where available)',
    gpsAccuracy: '2.5m CEP (open sky)',
    dataUsage: '80-120 MB/month @ 15-min (5 sensors)',
    antennaType: 'External SMA marine-rated',

    // Physical - Hull
    hullMaterial: 'UV-stabilized HDPE (High-Density Polyethylene)',
    hullColor: 'Safety Yellow or Blue (custom available)',
    maxWaveHeight: '1.5m (5 ft) sustained',
    maxWindSpeed: '60 km/h (37 mph)',
    freeboard: '8" (20 cm) minimum',
    displacement: '22 lbs (10 kg) at waterline',
    antifouling: 'Copper-based bottom paint recommended',

    // Physical - Dimensions
    dimensions: '20.87" × 20.87" × 26.38" (530 × 530 × 670 mm)',
    weight: '22 lbs (10 kg)',
    mooringDepth: '4-30 ft (1.2-9m) recommended',

    // Maintenance
    sensorLifespan: 'pH: 12-18 mo, DO: 18-24 mo, TDS/Turb: 24+ mo',
    warrantyPeriod: '2 years parts, 1 year labor',
    calibrationInterval: '30 days (pH, DO) / 90 days (TDS, Turb)',

    // Certifications
    certifications: ['FCC Part 15B', 'USCG Reflector Compliant', 'CE Mark (pending)'],
  },

  'smart-buoy-xl': {
    // Environmental
    operatingTemp: '-10°C to +45°C (14°F to +113°F)',
    storageTemp: '-20°C to +60°C (-4°F to +140°F)',
    humidity: '0-100% RH (marine rated)',
    ipRating: 'IP68 (electronics bay)',
    ipDescription: 'Submersible 1m/30min',

    // Electrical
    inputVoltage: '24V DC nominal',
    powerConsumption: '12W avg, 250W peak (dual ultrasonic)',
    batteryType: 'LiFePO4 (Lithium Iron Phosphate)',
    batteryCapacity: '100Ah (2400Wh)',
    batteryCycles: '2000+ cycles to 80% capacity',
    chargingTemp: '0°C to +45°C (32°F to +113°F)',
    solarPanel: '3× 100W rigid marine panels (300W total)',
    mpptController: 'Victron SmartSolar 100/30',
    batteryMonitor: 'Victron BMV-712 (Bluetooth)',
    lvd: 'Victron BatteryProtect 100A',
    inverter: '500W Pure Sine 24VDC→120VAC',

    // Connectivity
    cellular: 'LTE Cat-1: B2/B4/B5/B12/B13/B66 (North America)',
    cellularFallback: '2G GSM (where available)',
    gpsAccuracy: '2.5m CEP (open sky)',
    dataUsage: '150-200 MB/month @ 15-min (8+ sensors)',
    antennaType: 'External SMA marine-rated',

    // Physical - Hull
    hullMaterial: 'UV-stabilized HDPE',
    hullConfig: 'Triple float array (trimaran)',
    hullColor: 'Safety Yellow (standard)',
    maxWaveHeight: '2.5m (8 ft) sustained',
    maxWindSpeed: '80 km/h (50 mph)',
    freeboard: '12" (30 cm) minimum',
    displacement: '350 lbs (159 kg) at waterline',
    antifouling: 'Copper-based bottom paint required',
    navLight: 'Solar LED amber (USCG compliant)',

    // Physical - Dimensions
    dimensions: '39.37" × 39.37" × 32.68" (1000 × 1000 × 830 mm)',
    weight: '264.6 lbs (120 kg)',
    mooringDepth: '6-50 ft (2-15m) recommended',

    // Compute
    computeModule: 'Raspberry Pi CM4 4GB/32GB eMMC',

    // Maintenance
    sensorLifespan: 'Atlas sensors: 18-24 mo with maintenance',
    warrantyPeriod: '3 years parts, 2 years labor',
    calibrationInterval: '30 days (all sensors)',

    // Certifications
    certifications: ['FCC Part 15B', 'USCG Navigation Light Compliant', 'CE Mark (pending)'],
  },
};

export default FULL_SPECS;

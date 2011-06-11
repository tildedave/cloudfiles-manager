// Plovr build
{
    "id": "app",
    "paths": "src/main",
    "inputs": [
      "src/main/js/Events.js",
      "src/main/js/Container.js",
      "src/main/js/ContainerTable.js",
      "src/main/js/Bootstrap.js",
      "src/main/soy/cloud_files.soy"
    ],
    "level": "VERBOSE",
    "mode": "RAW",
    //"mode": "SIMPLE",
    "checks": {
        // acceptable values are "ERROR", "WARNING", and "OFF" 
        "deprecated": "ERROR",
        "checkTypes": "OFF",
        "missingProperties": "ERROR",
        "strictModuleDepCheck": "ERROR",
        "accessControls": "ERROR",
        "visibility": "ERROR",
        "nonStandardJsDocs": "WARNING"
    }
}
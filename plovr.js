// Plovr build
{
    "id": "app",
    "paths": "src/main",
    "inputs": [ "src/main/js/ContainerTable.js",
                "src/main/js/Bootstrap.js",
                "src/main/soy/cloud_files.soy"
              ],
    "level": "VERBOSE", 
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
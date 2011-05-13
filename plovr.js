// Plovr build
{
    "id": "app",
    "paths": "src/main",
    "inputs": [ "src/main/js/filemanager.js",
                "src/main/js/container_table.js",
                "src/main/js/container.js",
                "src/main/soy/cloud_files.soy"
              ],
    "level": "VERBOSE", 
    "checks": {
        // acceptable values are "ERROR", "WARNING", and "OFF" 
        "deprecated": "ERROR",
        "checkTypes": "WARNING",
        "missingProperties": "ERROR",
        "strictModuleDepCheck": "ERROR",
        "accessControls": "ERROR",
        "visibility": "ERROR",
        "nonStandardJsDocs": "WARNING"
    }
}
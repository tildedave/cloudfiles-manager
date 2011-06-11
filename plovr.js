// Plovr build
{
    "id": "app",
    "paths": "src/main",
    "inputs": [
      "src/main/js/Events.js",
      "src/main/js/Container.js",
      "src/main/js/ContainerTable.js",
      "src/main/js/ObjectTable.js",
      "src/main/js/Bootstrap.js",
      "src/main/js/Providers.js",
      "src/main/js/UploadFileDialog.js",
      "src/main/js/ConfirmFileDeleteDialog.js",
      "src/main/js/FileProvider.js",
      "src/main/js/ContainerProvider.js",
      "src/main/js/ObjectProvider.js",
      "src/main/soy/cloud_files.soy"
    ],
    "level": "VERBOSE",
    //"mode": "RAW",
    "mode": "SIMPLE",
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
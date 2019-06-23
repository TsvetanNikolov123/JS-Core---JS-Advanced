function attachEventsListeners() {
    let fromInputElement = document.getElementById('inputDistance');
    let selectInputElements = document.getElementById('inputUnits');
    let selectOutputElements = document.getElementById('outputUnits');
    let convertButtonElement = document.getElementById('convert');
    let outputInputElement = document.getElementById('outputDistance');


    convertButtonElement.addEventListener('click', () => {
        let fromValue = Number(fromInputElement.value);

        let inputMeasurementUnit = getSelectedText(selectInputElements);
        let outputMeasurementUnit = getSelectedText(selectOutputElements);

        let fromValueInMeters = 0;

        switch (inputMeasurementUnit) {
            case 'Kilometers' :
                fromValueInMeters = fromValue * 1000;
                break;
            case 'Meters' :
                fromValueInMeters = fromValue * 1;
                break;
            case 'Centimeters' :
                fromValueInMeters = fromValue * 0.01;
                break;
            case 'Millimeters' :
                fromValueInMeters = fromValue * 0.001;
                break;
            case 'Miles' :
                fromValueInMeters = fromValue * 1609.34;
                break;
            case 'Yards' :
                fromValueInMeters = fromValue * 0.9144;
                break;
            case 'Feet' :
                fromValueInMeters = fromValue * 0.3048;
                break;
            case 'Inches' :
                fromValueInMeters = fromValue * 0.0254;
                break;
        }

        let outputResult = 0;

        switch (outputMeasurementUnit) {
            case 'Kilometers' :
                outputResult = fromValueInMeters / 1000;
                break;
            case 'Meters' :
                outputResult = fromValueInMeters / 1;
                break;
            case 'Centimeters' :
                outputResult = fromValueInMeters / 0.01;
                break;
            case 'Millimeters' :
                outputResult = fromValueInMeters / 0.001;
                break;
            case 'Miles' :
                outputResult = fromValueInMeters / 1609.344;
                break;
            case 'Yards' :
                outputResult = fromValueInMeters / 0.9144;
                break;
            case 'Feet' :
                outputResult = fromValueInMeters / 0.3048;
                break;
            case 'Inches' :
                outputResult = fromValueInMeters / 0.0254;
                break;
        }

        outputInputElement.value = outputResult;
    });

    function getSelectedText(selectedOptions) {

        if (selectedOptions.selectedIndex === -1)
            return null;

        return selectedOptions.options[selectedOptions.selectedIndex].text;
    }
}
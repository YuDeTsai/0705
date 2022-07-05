control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == 1) {
        basic.showString("A")
    }
})
let LastValue = 0
bluetooth.startLEDService()
basic.showString("Hello!")
let Angle = 90
pins.servoWritePin(AnalogPin.P1, Angle)
basic.forever(function () {
	
})

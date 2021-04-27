// JavaScript Document


var doCoolStuff = function() {
    var currentClassName = document.getElementById('cool').className;
    
    if (currentClassName == 'cool') {
        document.getElementById('cool').className = 'cool red';
    } 
    else {
        document.getElementById('cool').className = 'cool';
    }
}



  var car = {
            make: 'Toyota',
            type: 'landcruiser',
            color: 'white',
            year: '1984',
            isTurnedOn: false,
            numberOfWheels: 4,
            seats: [
                'seat1',
                'seat2',
                'seat3',
                'seat4',
            ],
            turnOn: function() {
                this.isTurnedOn = true;
                },
            fly: function() {
                alert('fly');
                },
            switchCar: function(isOn) {
                console.log ('turn car' + isOn)
                if (isOn == true) 
                    {this.isTurnedOn = true;}
                else (isOn == false)
                    {this.isTurnedOn = false;}
            }
        }
           

        
    console.log('hello there friends')
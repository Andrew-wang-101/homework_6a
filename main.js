function Patient (location,reason,date,time)
  {
    this.location = location;
    this.reason = reason;
    this.date = date;
    this.time = time;
  }

function getLocation()
  { 
  	var select = document.getElementById('location');
    var value = select.options[select.selectedIndex].value;
    console.log(value);
    document.getElementById("loc").innerHTML = value;
    return value;
  }

function getDate()
  { 
  	var select = document.getElementById('date');
    var value = select.value;
    console.log(value);
    document.getElementById("dat").innerHTML = value;
    return value;
  }

function getReason()
  { 
  	var select = document.getElementById('reason');
    var value = select.value;
    console.log(value);
    document.getElementById("rea").innerHTML = value;
    return value;
  }

 function getTime()
  { 
  	var select = document.getElementById('timeslot');
    var value = select.value;
    console.log(value);
    document.getElementById("tim").innerHTML = value;
    return value;
  }
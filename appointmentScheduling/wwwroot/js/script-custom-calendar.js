$(document).ready(function () {
    InitializeCalendar();
});

function InitializeCalendar() {
    console.log('hello');
    var calendar;
    try {


        var calendarEl = document.getElementById('calendar');
        if (calendarEl != null) {
            calendar = new FullCalendar.Calendar(calendarEl, {
               // weekends:false,
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next,today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                selectable: true,
                editable: false,
                select: function (event) {
                    onShowModal(event, null);
                }
            });
            calendar.render();
        } if (calendarEl == null) { }
           // alert(calendarEl);

    }
     catch (e) {
       console.log(e)
    }
}

function onShowModal(obj, isEventDetail) {
    $('#appointmentInput').modal('show');
}
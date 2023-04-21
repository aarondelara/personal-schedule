
function displayDateTime() {
    var currentDayEl = $('#currentDay');
    var currentTimeEl = $('#currentTime');
    currentDayEl.text(dayjs().format('dddd MMMM D, YYYY'));
    currentTimeEl.text(dayjs().format('h[:]mm a'));
}



$(function () {
    $('.saveBtn').on('click', function () {
        var description = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, description);
    });
    displayDateTime();
    for (let i = 9; i < 18; i++) {
        $(`#hour-${i+1} .description`).val(localStorage.getItem(`hour-${i+1}`));

    };

    $('.time-block').each(function () {
        var currentTime = dayjs().hour();
        var calendarHour = parseInt($(this).attr('id').split('-')[1]);
        console.log(currentTime, calendarHour)
        if (currentTime > calendarHour) {
            $(this).addClass('past');
        } else if (currentTime === calendarHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future')
        }
        console.log(calendarHour)
    })
});





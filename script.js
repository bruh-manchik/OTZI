function showListCourse(course) {
    document.getElementById('1-course').style.display = course === 1 ? 'block' : 'none';
    document.getElementById('2-course').style.display = course === 2 ? 'block' : 'none';
    document.getElementById('3-course').style.display = course === 3 ? 'block' : 'none';
    document.getElementById('4-course').style.display = course === 4 ? 'block' : 'none';
}
function showSchedule(week) {
    document.getElementById('inb-b-o-24-1').style.display = week === 1 ? 'block' : 'none';
    document.getElementById('inb-b-o-24-2').style.display = week === 2 ? 'block' : 'none';
    document.getElementById('inb-b-o-23-1').style.display = week === 3 ? 'block' : 'none';
    document.getElementById('inb-b-o-23-2').style.display = week === 4 ? 'block' : 'none';
    document.getElementById('inb-b-o-23-3').style.display = week === 5 ? 'block' : 'none';
    document.getElementById('inb-b-o-22-1').style.display = week === 6 ? 'block' : 'none';
    document.getElementById('inb-b-o-22-2').style.display = week === 7 ? 'block' : 'none';
    document.getElementById('inb-b-o-22-3').style.display = week === 8 ? 'block' : 'none';
    document.getElementById('inb-b-o-21-1').style.display = week === 9 ? 'block' : 'none';
    document.getElementById('inb-b-o-21-2').style.display = week === 10 ? 'block' : 'none';
    document.getElementById('inb-b-o-21-3').style.display = week === 11 ? 'block' : 'none';
}
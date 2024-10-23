let currentGroup = '';

function showListCourse(course) {
    document.getElementById('1-course').style.display = course === 1 ? 'block' : 'none';
    document.getElementById('2-course').style.display = course === 2 ? 'block' : 'none';
    document.getElementById('3-course').style.display = course === 3 ? 'block' : 'none';
    document.getElementById('4-course').style.display = course === 4 ? 'block' : 'none';
    document.getElementById('weeks-buttons').style.display = 'none';
    hideAllSchedules();
    currentGroup = '';
}

function showWeeks(groupId) {
    document.getElementById('weeks-buttons').style.display = 'block';
    currentGroup = groupId;
    hideAllSchedules(); // Скрываем все таблицы при выборе группы
}

function showTables(week) {
    hideAllSchedules();
    const scheduleId = `${currentGroup}_${week}week`;
    const scheduleElement = document.getElementById(scheduleId);
    if (scheduleElement) {
        scheduleElement.style.display = 'block';
    }
}

function hideAllSchedules() {
    const allSchedules = document.querySelectorAll('.schedule');
    allSchedules.forEach(schedule => {
        schedule.style.display = 'none';
    });
}



// let currentGroup = '';
//
// document.getElementById('courses').addEventListener('click', event => {
//     if (event.target.classList.contains('course-button')) {
//         const course = event.target.dataset.course;
//         showGroups(course);
//         document.getElementById('weeks-buttons').style.display = 'none';
//         hideAllSchedules();
//     }
// });
//
// document.getElementById('groups').addEventListener('click', event => {
//     if (event.target.classList.contains('group-button')) {
//         currentGroup = event.target.dataset.group;
//         document.getElementById('weeks-buttons').style.display = 'block';
//         hideAllSchedules();
//     }
// });
//
// document.getElementById('weeks-buttons').addEventListener('click', event => {
//     if (event.target.classList.contains('week-button')) {
//         const week = event.target.dataset.week;
//         showTables(week);
//     }
// });
//
// function showGroups(course) {
//     const groupsContainer = document.getElementById('groups');
//     groupsContainer.innerHTML = ''; // Очистка контейнера перед добавлением новых групп
//
//     const groups = {
//         1: ['inb-b-o-24-1', 'inb-b-o-24-2'],
//         2: ['inb-b-o-23-1', 'inb-b-o-23-2', 'inb-b-o-23-3'],
//         3: ['inb-b-o-22-1', 'inb-b-o-22-2', 'inb-b-o-22-3'],
//         4: ['inb-b-o-21-1', 'inb-b-o-21-2', 'inb-b-o-21-3']
//     };
//
//     if (groups[course]) {
//         groups[course].forEach(group => {
//             const button = document.createElement('button');
//             button.className = 'group-button';
//             button.dataset.group = group;
//             button.textContent = group;
//             groupsContainer.appendChild(button);
//         });
//     }
// }
//
// function showTables(week) {
//     hideAllSchedules();
//     const scheduleId = `${currentGroup}_${week}week`;
//     const scheduleElement = document.getElementById(scheduleId);
//     if (scheduleElement) {
//         scheduleElement.style.display = 'block';
//     }
// }
//
// function hideAllSchedules() {
//     document.querySelectorAll('.schedule').forEach(schedule => {
//         schedule.style.display = 'none';
//     });
// }

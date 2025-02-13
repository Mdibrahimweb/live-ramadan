        // Hide welcome message after 4 seconds
        setTimeout(function () {
            document.getElementById("welcome").classList.add("hide-welcome");
           }, 4000); // 4 seconds delay
       // Ramadan schedule
       const schedule = [
           { ramadan: '১', date: '২ মার্চ', day: 'রবিবার', sehri: '05:12 AM', iftar: '06:08 PM' },
           { ramadan: '২', date: '৩ মার্চ', day: 'সোমবার', sehri: '05:11 AM', iftar: '06:09 PM' },
           { ramadan: '৩', date: '৪ মার্চ', day: 'মঙ্গলবার', sehri: '05:10 AM', iftar: '06:09 PM' },
           { ramadan: '৪', date: '৫ মার্চ', day: 'বুধবার', sehri: '05:09 AM', iftar: '06:10 PM' },
           { ramadan: '৫', date: '৬ মার্চ', day: 'বৃহস্পতিবার', sehri: '05:08 AM', iftar: '06:10 PM' },
           { ramadan: '৬', date: '৭ মার্চ', day: 'শুক্রবার', sehri: '05:07 AM', iftar: '06:11 PM' },
           { ramadan: '৭', date: '৮ মার্চ', day: 'শনিবার', sehri: '05:06 AM', iftar: '06:12 PM' },
           { ramadan: '৮', date: '৯ মার্চ', day: 'রবিবার', sehri: '05:05 AM', iftar: '06:13 PM' },
           { ramadan: '৯', date: '১০ মার্চ', day: 'সোমবার', sehri: '05:04 AM', iftar: '06:14 PM' },
           { ramadan: '১০', date: '১১ মার্চ', day: 'মঙ্গলবার', sehri: '05:03 AM', iftar: '06:15 PM' },
           { ramadan: '১১', date: '১২ মার্চ', day: 'বুধবার', sehri: '05:02 AM', iftar: '06:16 PM' },
           { ramadan: '১২', date: '১৩ মার্চ', day: 'বৃহস্পতিবার', sehri: '05:01 AM', iftar: '06:17 PM' },
           { ramadan: '১৩', date: '১৪ মার্চ', day: 'শুক্রবার', sehri: '05:00 AM', iftar: '06:18 PM' },
           { ramadan: '১৪', date: '১৫ মার্চ', day: 'শনিবার', sehri: '04:59 AM', iftar: '06:19 PM' },
           { ramadan: '১৫', date: '১৬ মার্চ', day: 'রবিবার', sehri: '04:58 AM', iftar: '06:20 PM' },
           { ramadan: '১৬', date: '১৭ মার্চ', day: 'সোমবার', sehri: '04:57 AM', iftar: '06:21 PM' },
           { ramadan: '১৭', date: '১৮ মার্চ', day: 'মঙ্গলবার', sehri: '04:56 AM', iftar: '06:22 PM' },
           { ramadan: '১৮', date: '১৯ মার্চ', day: 'বুধবার', sehri: '04:55 AM', iftar: '06:23 PM' },
           { ramadan: '১৯', date: '২০ মার্চ', day: 'বৃহস্পতিবার', sehri: '04:54 AM', iftar: '06:24 PM' },
           { ramadan: '২০', date: '২১ মার্চ', day: 'শুক্রবার', sehri: '04:53 AM', iftar: '06:25 PM' },
           { ramadan: '২১', date: '২২ মার্চ', day: 'শনিবার', sehri: '04:52 AM', iftar: '06:26 PM' },
           { ramadan: '২২', date: '২৩ মার্চ', day: 'রবিবার', sehri: '04:51 AM', iftar: '06:27 PM' },
           { ramadan: '২৩', date: '২৪ মার্চ', day: 'সোমবার', sehri: '04:50 AM', iftar: '06:28 PM' },
           { ramadan: '২৪', date: '২৫ মার্চ', day: 'মঙ্গলবার', sehri: '04:49 AM', iftar: '06:29 PM' },
           { ramadan: '২৫', date: '২৬ মার্চ', day: 'বুধবার', sehri: '04:48 AM', iftar: '06:30 PM' },
           { ramadan: '২৬', date: '২৭ মার্চ', day: 'বৃহস্পতিবার', sehri: '04:47 AM', iftar: '06:31 PM' },
           { ramadan: '২৭', date: '২৮ মার্চ', day: 'শুক্রবার', sehri: '04:46 AM', iftar: '06:32 PM' },
           { ramadan: '২৮', date: '২৯ মার্চ', day: 'শনিবার', sehri: '04:45 AM', iftar: '06:33 PM' },
           { ramadan: '২৯', date: '৩০ মার্চ', day: 'রবিবার', sehri: '04:44 AM', iftar: '06:34 PM' },
           { ramadan: '৩০', date: '৩১ মার্চ', day: 'সোমবার', sehri: '04:43 AM', iftar: '06:35 PM' }
       ];

       let currentIndex = 0;

       // Card update function
       function updateCard() {
           document.getElementById("ramadan-day").innerText = schedule[currentIndex].ramadan;
           document.getElementById("date").innerText = schedule[currentIndex].date;
           document.getElementById("day").innerText = schedule[currentIndex].day;
           document.getElementById("sehri").innerText = schedule[currentIndex].sehri;
           document.getElementById("iftar").innerText = schedule[currentIndex].iftar;
           updateCountdowns();
       }

       // Previous Day
       function prevDay() {
           if (currentIndex > 0) {
               currentIndex--;
               updateCard();
           }
       }

       // Next Day
       function nextDay() {
           if (currentIndex < schedule.length - 1) {
               currentIndex++;
               updateCard();
           }
       }

       // Live clock update function
       function updateClock() {
           const now = new Date();
           let hours = now.getHours();
           let minutes = now.getMinutes();
           let seconds = now.getSeconds();
           let ampm = hours >= 12 ? 'PM' : 'AM';

           hours = hours % 12 || 12;
           minutes = minutes.toString().padStart(2, "0");
           seconds = seconds.toString().padStart(2, "0");

           document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
           updateCountdowns();
       }

       // Countdown update function
       function updateCountdowns() {
           const now = new Date();

           // Iftar countdown
           const iftarTime = schedule[currentIndex].iftar.split(/[: ]/);
           let iftarHour = parseInt(iftarTime[0]);
           const iftarMinute = parseInt(iftarTime[1]);
           const iftarAMPM = iftarTime[2];

           if (iftarAMPM === "PM" && iftarHour !== 12) {
               iftarHour += 12;
           } else if (iftarAMPM === "AM" && iftarHour === 12) {
               iftarHour = 0;
           }

           const iftarDate = new Date();
           iftarDate.setHours(iftarHour, iftarMinute, 0, 0);

           let diffIftar = iftarDate - now;
           if (diffIftar <= 0) {
               document.getElementById("countdown-iftar").innerText = "ইফতার হয়ে গেছে!";
               if (currentIndex < schedule.length - 1) {
                   currentIndex++;
                   updateCard();
               }
           } else {
               const hoursLeftIftar = Math.floor(diffIftar / (1000 * 60 * 60));
               const minutesLeftIftar = Math.floor((diffIftar % (1000 * 60 * 60)) / (1000 * 60));
               const secondsLeftIftar = Math.floor((diffIftar % (1000 * 60)) / 1000);
               document.getElementById("countdown-iftar").innerText = `${hoursLeftIftar} ঘন্টা ${minutesLeftIftar} মিনিট ${secondsLeftIftar} সেকেন্ড`;
           }

           // Sehri countdown
           const sehriTime = schedule[currentIndex].sehri.split(/[: ]/);
           let sehriHour = parseInt(sehriTime[0]);
           const sehriMinute = parseInt(sehriTime[1]);
           const sehriAMPM = sehriTime[2];

           if (sehriAMPM === "PM" && sehriHour !== 12) {
               sehriHour += 12;
           } else if (sehriAMPM === "AM" && sehriHour === 12) {
               sehriHour = 0;
           }

           const sehriDate = new Date();
           sehriDate.setHours(sehriHour, sehriMinute, 0, 0);

           let diffSehri = sehriDate - now;
           if (diffSehri <= 0) {
               document.getElementById("countdown-sehri").innerText = "সেহরি হয়ে গেছে!";
           } else {
               const hoursLeftSehri = Math.floor(diffSehri / (1000 * 60 * 60));
               const minutesLeftSehri = Math.floor((diffSehri % (1000 * 60 * 60)) / (1000 * 60));
               const secondsLeftSehri = Math.floor((diffSehri % (1000 * 60)) / 1000);
               document.getElementById("countdown-sehri").innerText = `${hoursLeftSehri} ঘন্টা ${minutesLeftSehri} মিনিট ${secondsLeftSehri} সেকেন্ড`;
           }
       }

       setInterval(updateClock, 1000);  
       updateCard();  
const user = {};
// work with city section
const selectCityButton = document.querySelector(".js-select-city");
const selectCityList = document.querySelector(".js-select-city-list");
const selectAreaButton = document.querySelector(".js-select-area");
const selectAreaList = document.querySelector(".js-select-area-list");
let toggleSelectArea = false;
let toggleSelect = false;

selectCityButton.addEventListener("click", () => {
  const selectCityItems = document.querySelectorAll(".js-select-city-item");
  toggleSelect = !toggleSelect;

  if (toggleSelect) {
    selectCityList.style.cssText = `
      opacity: 1;
      visibility: visible;
    `;
  } else {
    selectCityList.style.cssText = `
      opacity: 0;
      visibility: hidden;
    `;
  }

  selectCityItems.forEach((elem) => {
    elem.addEventListener("click", () => {
      selectCityButton.children[0].innerText = elem.children[0].innerText;
      selectCityList.style.cssText = `
        opacity: 0;
        visibility: hidden;
      `;
      toggleSelect = false;
    });
  });

  selectAreaList.style.cssText = `
    opacity: 0;
    visibility: hidden;
  `;
  toggleSelectArea = false;
});

selectAreaButton.addEventListener("click", () => {
  const selectAreaItems = document.querySelectorAll(".js-select-area-item");
  toggleSelectArea = !toggleSelectArea;

  if (toggleSelectArea) {
    selectAreaList.style.cssText = `
      opacity: 1;
      visibility: visible;
    `;
  } else {
    selectAreaList.style.cssText = `
      opacity: 0;
      visibility: hidden;
    `;
  }

  selectAreaItems.forEach((elem) => {
    elem.addEventListener("click", () => {
      selectAreaButton.children[0].innerText = elem.children[0].innerText;
      selectAreaList.style.cssText = `
        opacity: 0;
        visibility: hidden;
      `;
      toggleSelectArea = false;
    });
  });

  selectCityList.style.cssText = `
    opacity: 0
    visibility: hidden;
  `;
  toggleSelect = false;
});

// work with service section
const serviceItems = document.querySelectorAll(".js-service-item");
let thirdList = document.querySelectorAll(".js-third-list");
let serviceItemsArray = [];

serviceItems.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    if (event.target.classList.contains("service__close_image")) {
      let idx = serviceItemsArray.indexOf(elem);

      if (idx >= 0) {
        serviceItemsArray.splice(idx, 1);
      } else {
        return;
      }

      elem.classList.remove("service__active");
    } else if (event.target.classList.contains("service__desc")) {
      elem.classList.remove("service__active");
      return;
    } else {
      elem.classList.add("service__active");

      let idx = serviceItemsArray.indexOf(elem);

      if (idx < 0) {
        serviceItemsArray.push(elem);
      } else {
        return;
      }
    }
  });
});

// work with calendar section
const date = new Date();

const renderCalendar = () => {
  const monthDays = document.querySelector(".calendar__days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  const nextDays = 7 - lastDayIndex;

  const month = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ];

  const monthName = [
    "Січня",
    "Лютого",
    "Березня",
    "Квітня",
    "Травня",
    "Червня",
    "Липня",
    "Серпня",
    "Вересня",
    "Жовтня",
    "Листопада",
    "Грудня",
  ];

  document.querySelector(".js-calendar-year").innerHTML = date.getFullYear();

  document.querySelector(".calendar__month-title").innerHTML =
    month[date.getMonth()];

  document
    .querySelector(".calendar__month-title")
    .setAttribute("data-month", monthName[date.getMonth()]);

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev__date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    days += `<div class="day">${i}</div>`;
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day__next">${j}</div>`;
    monthDays.innerHTML = days;
  }

  //styles for days
  const dayArr = document.querySelectorAll(".day");
  const timeArr = document.querySelectorAll(".js-calendar-time");

  dayArr.forEach((elem) => {
    elem.addEventListener("click", () => {
      const userMonth = document
        .querySelector(".calendar__month-title")
        .getAttribute("data-month");
      user.date = elem.innerText;
      user.month = userMonth;
      dayArr.forEach((el) => {
        el.classList.remove("active");
      });

      elem.classList.add("active");
    });
  });

  timeArr.forEach((elem) => {
    elem.addEventListener("click", () => {
      user.time = elem.innerText;
      timeArr.forEach((el) => {
        el.classList.remove("active");
      });

      elem.classList.add("active");
    });
  });
};

document.querySelector(".left__control").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".right__control").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
renderCalendar();

// ==============================================================================================
// block vars
const cityBlock = document.querySelector(".js-city-block");
const entryBlock = document.querySelector(".js-entry-block");
const secondBlock = document.querySelector(".js-second-block");
const serviceBlock = document.querySelector(".js-service-block");
const thirdBlock = document.querySelector(".js-third-block");
const masterBlock = document.querySelector(".js-master-block");
const calendarBlock = document.querySelector(".js-calendar-block");
const lastBlock = document.querySelector(".js-last-block");
const thanksBlock = document.querySelector(".js-thanks-block");

// open buttons vars
const openCityButton = document.querySelectorAll(".js-open-city");
const openSecondButton = document.querySelector(".js-open-second");
const openServiceButton = document.querySelectorAll(".js-open-service");
const openThirdButton = document.querySelector(".js-open-third");
const openMasterButton = document.querySelectorAll(".js-open-master");
const openCalendarButton = document.querySelectorAll(".js-open-calendar");
const openLastButton = document.querySelectorAll(".js-open-last");
const openThanksButton = document.querySelector(".js-open-thanks");

// close buttons vars
const backToEntryButton = document.querySelector(".js-back-to-entry");
const backToCityButton = document.querySelectorAll(".js-back-to-city");
const backToSecondButton = document.querySelector(".js-back-to-second");
const backToServiceButton = document.querySelector(".js-back-to-service");
const backToThirdButton = document.querySelector(".js-back-to-third");
const backToMasterButton = document.querySelector(".js-back-to-master");
const backToCalendarButton = document.querySelector(".js-back-to-calendar");

// open functions
const handleOpenCityBlock = () => {
  entryBlock.style.display = "none";
  thirdBlock.style.display = "none";
  lastBlock.style.display = "none";
  cityBlock.style.display = "block";
};
const handleOpenSecondBlock = () => {
  cityBlock.style.display = "none";
  secondBlock.style.display = "block";

  const cityNameElement = document.querySelectorAll(".js-city-name");
  const cityAreaElement = document.querySelectorAll(".js-city-area");

  const cityName = selectCityButton.children[0].innerText;
  const cityArea = selectAreaButton.children[0].innerText;

  cityNameElement.forEach((elem) => {
    elem.innerHTML = cityName;
  });
  cityAreaElement.forEach((elem) => {
    elem.innerHTML = cityArea;
  });
};
const handleOpenServiceBlock = () => {
  secondBlock.style.display = "none";
  thirdBlock.style.display = "none";
  lastBlock.style.display = "none";
  serviceBlock.style.display = "block";
};
const changeServiceArray = () => {
  let thirdListItem = "";

  serviceItemsArray.map((elem) => {
    let idx = serviceItemsArray.indexOf(elem);

    thirdListItem += `
      <li class="third__item" data-index="${idx}">
        <p class="third__service">${elem.children[1].children[0].innerText}<span>${elem.children[2].innerText}</span></p>
          <button class="third__close_service js-close-third-service">
            <img src="img/icons/third-close.svg" alt="close icon" width="11" height="11">
          </button>
      </li>`;
  });

  thirdList.forEach((elem) => {
    elem.innerHTML = thirdListItem;
  });
};
const handleOpenThirdBlock = () => {
  serviceBlock.style.display = "none";
  thirdBlock.style.display = "block";

  changeServiceArray();
};
const handleOpenMasterBlock = () => {
  thirdBlock.style.display = "none";
  lastBlock.style.display = "none";
  masterBlock.style.display = "block";
};
const handleOpenCalendarBlock = (event) => {
  const masterName =
    event.currentTarget.children[0].children[1].children[0].innerText;
  user.name = masterName;

  if (event.target.classList.contains("js-new-time")) {
    masterBlock.style.display = "none";
    calendarBlock.style.display = "block";
  }
};

const todayHoursArray = document.querySelectorAll(".js-today-hours");
todayHoursArray.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    const date = new Date();
    const month = [
      "Січня",
      "Лютого",
      "Березня",
      "Квітня",
      "Травня",
      "Червня",
      "Липня",
      "Серпня",
      "Вересня",
      "Жовтня",
      "Листопада",
      "Грудня",
    ];

    todayHoursArray.forEach((elem) => {
      elem.classList.remove("active");
    });
    elem.classList.add("active");

    user.time = elem.innerText;
    user.month = month[date.getMonth()];
    user.date = date.getDate();
    user.name =
      event.currentTarget.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerText;

    masterBlock.style.display = "none";
    lastBlock.style.display = "block";

    const masterInfoName = document.querySelector(".js-master-info-name");
    const masterInfoDate = document.querySelector(".js-master-info-date");
    const masterInfoTime = document.querySelector(".js-master-info-time");

    masterInfoName.innerHTML = user.name;
    masterInfoDate.innerHTML = `${user.date}, ${user.month}`;
    masterInfoTime.innerHTML = user.time;
  });
});

const handleOpenLastBlock = () => {
  masterBlock.style.display = "none";
  calendarBlock.style.display = "none";
  lastBlock.style.display = "block";

  const masterInfoName = document.querySelector(".js-master-info-name");
  const masterInfoDate = document.querySelector(".js-master-info-date");
  const masterInfoTime = document.querySelector(".js-master-info-time");

  masterInfoName.innerHTML = user.name;
  masterInfoDate.innerHTML = `${user.date}, ${user.month}`;
  masterInfoTime.innerHTML = user.time;
};
const handleOpenThanksBlock = () => {
  lastBlock.style.display = "none";
  thanksBlock.style.display = "block";
};

// close functions
const handleBackToEntryBlock = () => {
  cityBlock.style.display = "none";
  entryBlock.style.display = "block";
};
const handleBackToCityBlock = () => {
  secondBlock.style.display = "none";
  thirdBlock.style.display = "none";
  lastBlock.style.display = "none";
  cityBlock.style.display = "block";
};
const handleBackToSecondBlock = () => {
  serviceBlock.style.display = "none";
  secondBlock.style.display = "block";
};
const handleBackToServiceBlock = () => {
  thirdBlock.style.display = "none";
  lastBlock.style.display = "none";
  serviceBlock.style.display = "block";
};
const handleBackToThirdBlock = () => {
  masterBlock.style.display = "none";
  thirdBlock.style.display = "block";
};
const handleBackToMasterBlock = () => {
  calendarBlock.style.display = "none";
  masterBlock.style.display = "block";
};
const handleBackToCalendarBlock = () => {
  lastBlock.style.display = "none";
  masterBlock.style.display = "block";
};

openCityButton.forEach((elem) => {
  elem.addEventListener("click", handleOpenCityBlock);
});
openSecondButton.addEventListener("click", handleOpenSecondBlock);
openServiceButton.forEach((elem) => {
  elem.addEventListener("click", handleOpenServiceBlock);
});
openThirdButton.addEventListener("click", handleOpenThirdBlock);
openMasterButton.forEach((elem) => {
  elem.addEventListener("click", handleOpenMasterBlock);
});
openCalendarButton.forEach((elem) => {
  elem.addEventListener("click", handleOpenCalendarBlock);
});
openLastButton.forEach((elem) => {
  elem.addEventListener("click", handleOpenLastBlock);
});
openThanksButton.addEventListener("click", handleOpenThanksBlock);
//
backToEntryButton.addEventListener("click", handleBackToEntryBlock);
backToCityButton.forEach((elem) => {
  elem.addEventListener("click", handleBackToCityBlock);
});
backToSecondButton.addEventListener("click", handleBackToSecondBlock);
backToServiceButton.addEventListener("click", handleBackToServiceBlock);
backToThirdButton.addEventListener("click", handleBackToThirdBlock);
backToMasterButton.addEventListener("click", handleBackToMasterBlock);
backToCalendarButton.addEventListener("click", handleBackToCalendarBlock);

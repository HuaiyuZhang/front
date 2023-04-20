const calendar = document.getElementById("calendar");
const mealForm = document.getElementById("mealForm");
const mealName = document.getElementById("mealName");
const rawMaterials = document.getElementById("rawMaterials");
const addMealBtn = document.getElementById("addMealBtn");
const summary = document.getElementById("summary");

const mealData = {};

function createCalendar() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("monthYear").innerText = `${monthNames[currentMonth]}, ${currentYear}`;
    
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement("div");
        day.classList.add("col", "s4", "m4", "l3");
        day.innerHTML = `<strong>${i}</strong>`;
        day.onclick = () => showMealForm(i);
        calendar.appendChild(day);
        mealData[i] = [];
    }
}

function updateDay(day) {
    const dayElem = calendar.children[day - 1];
    dayElem.innerHTML = `<strong>${day}</strong>`;
    mealData[day].forEach(meal => {
        const mealElem = document.createElement("div");
        mealElem.classList.add("meal");
        mealElem.textContent = meal.name;
        dayElem.appendChild(mealElem);
    });
}



function showMealForm(day) {
    mealForm.style.display = "block";
    addMealBtn.onclick = () => addMeal(day);
}

function addMeal(day) {
    const meal = {
        name: mealName.value,
        materials: rawMaterials.value.split(",").map(material => material.trim()),
    };

    mealData[day].push(meal);
    updateDay(day);
    updateSummary();

    mealName.value = "";
    rawMaterials.value = "";
}



function updateSummary() {
    summary.innerHTML = "<h2>Raw Materials Summary</h2>";
    const materialCount = {};

    for (const day in mealData) {
        mealData[day].forEach(meal => {
            meal.materials.forEach(material => {
                if (materialCount[material]) {
                    materialCount[material]++;
                } else {
                    materialCount[material] = 1;
                }
            });
        });
    }

    for (const material in materialCount) {
        const materialElem = document.createElement("div");
        materialElem.textContent = `${material}: ${materialCount[material]}`;
        summary.appendChild(materialElem);
    }
}


createCalendar();


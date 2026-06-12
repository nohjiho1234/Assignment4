const STORAGE_KEYS = {
  meals: "campusfit_meals",
  workouts: "campusfit_workouts",
  profile: "campusfit_profile",
  users: "campusfit_users",
  currentUser: "campusfit_current_user"
};

const cafeteriaMeals = [
  { category: "소담뚝배기", name: "차돌된장찌개", price: 9000, calories: 690, protein: 32, carbs: 72, fat: 30 },
  { category: "소담뚝배기", name: "소고기장터국밥", price: 9000, calories: 760, protein: 34, carbs: 92, fat: 26 },
  { category: "소담뚝배기", name: "소불고기", price: 9000, calories: 820, protein: 38, carbs: 88, fat: 32 },
  { category: "소담뚝배기", name: "돌솥비빔밥", price: 9000, calories: 730, protein: 24, carbs: 104, fat: 24 },
  { category: "소담뚝배기", name: "공기밥", price: 1000, calories: 300, protein: 5.4, carbs: 67, fat: 0.6 },
  { category: "스며드냑", name: "치즈돈까스&냉모밀 세트", price: 9000, calories: 980, protein: 36, carbs: 116, fat: 40 },
  { category: "스며드냑", name: "뚝배기떡볶이&튀김세트", price: 9000, calories: 1050, protein: 24, carbs: 150, fat: 38 },
  { category: "스며드냑", name: "버팔로윙&왕교자만두", price: 5000, calories: 620, protein: 28, carbs: 54, fat: 32 },
  { category: "스며드냑", name: "뚝배기떡볶이", price: 5000, calories: 680, protein: 14, carbs: 122, fat: 14 }
];

const foodDatabase = [
  { name: "닭가슴살", aliases: ["닭가슴살구이", "chicken breast"], servingLabel: "100g", calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  { name: "삶은 달걀", aliases: ["계란", "달걀", "boiled egg"], servingLabel: "1개", calories: 78, protein: 6.3, carbs: 0.6, fat: 5.3 },
  { name: "스크램블 에그", aliases: ["스크램블", "scrambled egg"], servingLabel: "100g", calories: 149, protein: 10, carbs: 1.6, fat: 11 },
  { name: "흰쌀밥", aliases: ["밥", "쌀밥", "공기밥"], servingLabel: "210g", calories: 300, protein: 5.4, carbs: 67, fat: 0.6 },
  { name: "현미밥", aliases: ["brown rice"], servingLabel: "210g", calories: 320, protein: 6.3, carbs: 68, fat: 2.2 },
  { name: "고구마", aliases: ["sweet potato"], servingLabel: "150g", calories: 193, protein: 2.1, carbs: 45, fat: 0.2 },
  { name: "바나나", aliases: ["banana"], servingLabel: "1개", calories: 105, protein: 1.3, carbs: 27, fat: 0.4 },
  { name: "사과", aliases: ["apple"], servingLabel: "1개", calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
  { name: "그릭 요거트", aliases: ["그릭요거트", "greek yogurt"], servingLabel: "150g", calories: 140, protein: 15, carbs: 8, fat: 5 },
  { name: "우유", aliases: ["milk"], servingLabel: "200ml", calories: 130, protein: 6.4, carbs: 9.6, fat: 7.2 },
  { name: "프로틴 쉐이크", aliases: ["단백질 쉐이크", "protein shake"], servingLabel: "1스쿱", calories: 120, protein: 24, carbs: 3, fat: 1.5 },
  { name: "두부", aliases: ["tofu"], servingLabel: "150g", calories: 120, protein: 12, carbs: 3, fat: 7 },
  { name: "연어구이", aliases: ["연어", "salmon"], servingLabel: "100g", calories: 208, protein: 20, carbs: 0, fat: 13 },
  { name: "참치캔", aliases: ["참치", "tuna"], servingLabel: "100g", calories: 132, protein: 28, carbs: 0, fat: 1.3 },
  { name: "소고기 구이", aliases: ["소고기", "beef"], servingLabel: "100g", calories: 250, protein: 26, carbs: 0, fat: 15 },
  { name: "돼지고기 구이", aliases: ["돼지고기", "pork"], servingLabel: "100g", calories: 242, protein: 27, carbs: 0, fat: 14 },
  { name: "닭다리살", aliases: ["닭다리", "chicken thigh"], servingLabel: "100g", calories: 209, protein: 26, carbs: 0, fat: 11 },
  { name: "김치찌개", aliases: ["kimchi stew"], servingLabel: "1인분", calories: 350, protein: 18, carbs: 18, fat: 22 },
  { name: "된장찌개", aliases: ["doenjang stew"], servingLabel: "1인분", calories: 220, protein: 14, carbs: 18, fat: 10 },
  { name: "비빔밥", aliases: ["bibimbap"], servingLabel: "1그릇", calories: 620, protein: 20, carbs: 92, fat: 18 },
  { name: "김밥", aliases: ["kimbap"], servingLabel: "1줄", calories: 480, protein: 14, carbs: 72, fat: 14 },
  { name: "라면", aliases: ["ramen"], servingLabel: "1봉지", calories: 500, protein: 10, carbs: 78, fat: 16 },
  { name: "샐러드", aliases: ["채소 샐러드", "salad"], servingLabel: "1그릇", calories: 120, protein: 5, carbs: 12, fat: 6 },
  { name: "오트밀", aliases: ["oatmeal"], servingLabel: "50g", calories: 190, protein: 6.5, carbs: 33, fat: 3.5 },
  { name: "아몬드", aliases: ["almond"], servingLabel: "30g", calories: 174, protein: 6.4, carbs: 6, fat: 15 },
  { name: "땅콩버터", aliases: ["peanut butter"], servingLabel: "1스푼", calories: 95, protein: 4, carbs: 3.5, fat: 8 },
  { name: "닭가슴살 샐러드", aliases: ["치킨 샐러드"], servingLabel: "1그릇", calories: 330, protein: 32, carbs: 18, fat: 14 },
  { name: "불고기 덮밥", aliases: ["불고기"], servingLabel: "1그릇", calories: 720, protein: 32, carbs: 93, fat: 24 },
  { name: "제육덮밥", aliases: ["제육"], servingLabel: "1그릇", calories: 760, protein: 34, carbs: 88, fat: 30 },
  { name: "치킨텐더", aliases: ["치킨 텐더"], servingLabel: "100g", calories: 290, protein: 18, carbs: 18, fat: 16 }
];

function readStore(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function normalizeUserName(name) {
  return name.trim().toLowerCase();
}

function isValidUserName(name) {
  return /^[a-z0-9_-]{3,20}$/.test(name);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

function normalizeFoodQuery(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

function foodSearchText(food) {
  return [food.name, ...(food.aliases || [])].map(normalizeFoodQuery).join(" ");
}

function findFoodMatches(query) {
  const normalized = normalizeFoodQuery(query);
  if (!normalized) return [];
  return foodDatabase
    .map((food) => {
      const names = [food.name, ...(food.aliases || [])].map(normalizeFoodQuery);
      const exact = names.some((name) => name === normalized);
      const startsWith = names.some((name) => name.startsWith(normalized));
      const includes = foodSearchText(food).includes(normalized);
      const score = exact ? 3 : startsWith ? 2 : includes ? 1 : 0;
      return { food, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.food.name.localeCompare(b.food.name, "ko"))
    .map((item) => item.food)
    .slice(0, 6);
}

function exactFoodMatch(query) {
  const normalized = normalizeFoodQuery(query);
  if (!normalized) return null;
  return foodDatabase.find((food) =>
    [food.name, ...(food.aliases || [])].map(normalizeFoodQuery).some((name) => name === normalized)
  ) || null;
}

function getUsers() {
  return readStore(STORAGE_KEYS.users, {});
}

function saveUsers(users) {
  writeStore(STORAGE_KEYS.users, users);
}

function getCurrentUser() {
  return readStore(STORAGE_KEYS.currentUser, null);
}

function setCurrentUser(userName) {
  writeStore(STORAGE_KEYS.currentUser, userName);
}

function logout() {
  localStorage.removeItem(STORAGE_KEYS.currentUser);
  window.location.href = "login.html";
}

function getKoreaDateKey(date = new Date()) {
  const koreaDate = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Seoul" }));
  const year = koreaDate.getFullYear();
  const month = String(koreaDate.getMonth() + 1).padStart(2, "0");
  const day = String(koreaDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isValidDateKey(dateKey) {
  return /^\d{4}-\d{2}-\d{2}$/.test(dateKey);
}

function getActiveDateKey() {
  const requestedDate = new URLSearchParams(window.location.search).get("date");
  return requestedDate && isValidDateKey(requestedDate) ? requestedDate : getKoreaDateKey();
}

function formatKoreanDate(dateKey) {
  const [year, month, day] = dateKey.split("-");
  return `${year}년 ${Number(month)}월 ${Number(day)}일`;
}

function scopedKey(key, dateKey = getActiveDateKey()) {
  const currentUser = getCurrentUser();
  return currentUser ? `${key}_${currentUser}_${dateKey}` : `${key}_${dateKey}`;
}

function legacyUserKey(key) {
  const currentUser = getCurrentUser();
  return currentUser ? `${key}_${currentUser}` : key;
}

function migrateLegacyDateData() {
  const todayKey = getKoreaDateKey();
  [STORAGE_KEYS.meals, STORAGE_KEYS.workouts, STORAGE_KEYS.profile].forEach((key) => {
    const legacyValue = localStorage.getItem(legacyUserKey(key));
    const todayValue = localStorage.getItem(scopedKey(key, todayKey));
    if (legacyValue && !todayValue) {
      localStorage.setItem(scopedKey(key, todayKey), legacyValue);
    }
  });
}

function getAvailableDateKeys() {
  const currentUser = getCurrentUser();
  if (!currentUser) return [];
  const prefixes = [STORAGE_KEYS.meals, STORAGE_KEYS.workouts, STORAGE_KEYS.profile].map((key) => `${key}_${currentUser}_`);
  const dates = new Set();
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    const prefix = prefixes.find((item) => key.startsWith(item));
    if (!prefix) continue;
    const dateKey = key.slice(prefix.length);
    if (isValidDateKey(dateKey)) dates.add(dateKey);
  }
  return [...dates].sort();
}

function requireLogin() {
  const protectedPages = ["diet.html", "body.html", "workout.html", "dashboard.html", "calendar.html"];
  const page = window.location.pathname.split("/").pop() || "index.html";
  if (protectedPages.includes(page) && !getCurrentUser()) {
    window.location.href = `login.html?next=${encodeURIComponent(page)}`;
    return false;
  }
  return true;
}

function initAccountStatus() {
  const container = document.getElementById("accountStatus");
  if (!container) return;
  const currentUser = getCurrentUser();
  if (!currentUser) {
    container.innerHTML = `<a class="account-link" href="login.html">로그인 필요</a>`;
    return;
  }
  container.innerHTML = `
    <span class="account-chip">${escapeHtml(currentUser)}</span>
    <button class="logout-button" type="button">로그아웃</button>
  `;
  container.querySelector(".logout-button").addEventListener("click", logout);
}

function getMeals() {
  return readStore(scopedKey(STORAGE_KEYS.meals), []);
}

function saveMeals(meals) {
  writeStore(scopedKey(STORAGE_KEYS.meals), meals);
}

function getMealsForDate(dateKey) {
  return readStore(scopedKey(STORAGE_KEYS.meals, dateKey), []);
}

function getWorkouts() {
  return readStore(scopedKey(STORAGE_KEYS.workouts), []);
}

function saveWorkouts(workouts) {
  writeStore(scopedKey(STORAGE_KEYS.workouts), workouts);
}

function getWorkoutsForDate(dateKey) {
  return readStore(scopedKey(STORAGE_KEYS.workouts, dateKey), []);
}

function getProfile() {
  return readStore(scopedKey(STORAGE_KEYS.profile), null);
}

function getProfileForDate(dateKey) {
  return readStore(scopedKey(STORAGE_KEYS.profile, dateKey), null);
}

function round(value, digits = 0) {
  const factor = 10 ** digits;
  return Math.round((Number(value) + Number.EPSILON) * factor) / factor;
}

function calculateMealTotals(meals = getMeals()) {
  return meals.reduce(
    (sum, meal) => {
      const serving = Number(meal.serving) || 1;
      sum.calories += Number(meal.calories) * serving;
      sum.protein += Number(meal.protein) * serving;
      sum.carbs += Number(meal.carbs) * serving;
      sum.fat += Number(meal.fat) * serving;
      return sum;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );
}

function calculateTarget(profile) {
  if (!profile) return 0;
  const goalOffset = {
    cut: -300,
    maintain: 0,
    leanBulk: 250
  }[profile.goalType];
  return Math.max(0, Number(profile.bmr) + 450 + goalOffset);
}

function workoutVolume(workout) {
  return Number(workout.weight) * Number(workout.reps) * Number(workout.sets);
}

function todayWorkouts() {
  return getWorkouts();
}

function totalWorkoutVolume(workouts = todayWorkouts()) {
  return workouts.reduce((sum, workout) => sum + workoutVolume(workout), 0);
}

function previousVolumeFor(exerciseName, currentId) {
  const normalized = exerciseName.trim().toLowerCase();
  const workouts = getWorkouts();
  const currentIndex = workouts.findIndex((item) => item.id === currentId);
  const previousWorkouts = currentIndex >= 0 ? workouts.slice(0, currentIndex) : workouts;
  const matches = previousWorkouts
    .filter((item) => item.name.trim().toLowerCase() === normalized)
    .map(workoutVolume);
  return matches.length ? matches[matches.length - 1] : 0;
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function initDailyDateLabel() {
  setText("dailyDateLabel", `한국 시간 기준 ${formatKoreanDate(getKoreaDateKey())} 기록입니다.`);
}

function formatSigned(value) {
  if (value > 0) return `+${round(value)} kg`;
  if (value < 0) return `${round(value)} kg`;
  return "0 kg";
}

function initHome() {
  if (!document.getElementById("homeCalories")) return;
  if (!getCurrentUser()) {
    setText("homeCalories", "로그인 필요");
    setText("homeProtein", "-");
    setText("homeWorkout", "-");
    return;
  }
  const totals = calculateMealTotals();
  setText("homeCalories", `${round(totals.calories)} kcal`);
  setText("homeProtein", `${round(totals.protein)}g`);
  setText("homeWorkout", `${round(totalWorkoutVolume())}kg`);
}

function initLoginPage() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  if (!loginForm || !signupForm) return;

  const requestedNext = new URLSearchParams(window.location.search).get("next") || "dashboard.html";
  const allowedNextPages = ["diet.html", "body.html", "workout.html", "dashboard.html", "calendar.html", "index.html"];
  const nextPage = allowedNextPages.includes(requestedNext) ? requestedNext : "dashboard.html";

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = normalizeUserName(document.getElementById("loginName").value);
    const password = document.getElementById("loginPassword").value;
    const users = getUsers();
    const message = document.getElementById("loginMessage");

    if (!isValidUserName(name)) {
      message.textContent = "사용자 이름은 영문 소문자, 숫자, -, _ 조합 3~20자로 입력하세요.";
      message.className = "form-message error";
      return;
    }

    if (!users[name] || users[name].password !== password) {
      message.textContent = "사용자 이름 또는 비밀번호가 올바르지 않습니다.";
      message.className = "form-message error";
      return;
    }

    setCurrentUser(name);
    window.location.href = nextPage;
  });

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = normalizeUserName(document.getElementById("signupName").value);
    const password = document.getElementById("signupPassword").value;
    const users = getUsers();
    const message = document.getElementById("signupMessage");

    if (!isValidUserName(name)) {
      message.textContent = "사용자 이름은 영문 소문자, 숫자, -, _ 조합 3~20자로 입력하세요.";
      message.className = "form-message error";
      return;
    }

    if (users[name]) {
      message.textContent = "이미 사용 중인 사용자 이름입니다.";
      message.className = "form-message error";
      return;
    }

    users[name] = { password, createdAt: new Date().toISOString() };
    saveUsers(users);
    setCurrentUser(name);
    window.location.href = nextPage;
  });
}

function initDietPage() {
  const mealTable = document.getElementById("mealTable");
  if (!mealTable) return;
  const foodNameInput = document.getElementById("foodName");
  const foodServingInput = document.getElementById("foodServing");
  const foodCaloriesInput = document.getElementById("foodCalories");
  const foodProteinInput = document.getElementById("foodProtein");
  const foodCarbsInput = document.getElementById("foodCarbs");
  const foodFatInput = document.getElementById("foodFat");
  const foodSuggestions = document.getElementById("foodSuggestions");
  const foodAutoFillMessage = document.getElementById("foodAutoFillMessage");
  const foodNameOptions = document.getElementById("foodNameOptions");

  foodNameOptions.innerHTML = foodDatabase
    .map((food) => `<option value="${escapeHtml(food.name)}">${escapeHtml(food.servingLabel)}</option>`)
    .join("");

  const fillFoodNutrition = (food) => {
    foodNameInput.value = food.name;
    foodServingInput.value = 1;
    foodCaloriesInput.value = food.calories;
    foodProteinInput.value = food.protein;
    foodCarbsInput.value = food.carbs;
    foodFatInput.value = food.fat;
    foodAutoFillMessage.textContent = `${food.name} ${food.servingLabel} 기준 영양소를 자동 입력했습니다. 실제 양이 다르면 섭취량을 조절하세요.`;
    foodAutoFillMessage.className = "form-message";
  };

  const renderFoodSuggestions = (query) => {
    const matches = findFoodMatches(query);
    const exact = exactFoodMatch(query);

    if (exact) {
      fillFoodNutrition(exact);
    }

    if (!query.trim()) {
      foodSuggestions.innerHTML = "";
      foodAutoFillMessage.textContent = "";
      return;
    }

    if (!matches.length) {
      foodSuggestions.innerHTML = "";
      foodAutoFillMessage.textContent = "내장 음식 데이터에 없는 항목입니다. 영양소를 직접 입력할 수 있습니다.";
      foodAutoFillMessage.className = "form-message error";
      return;
    }

    foodSuggestions.innerHTML = matches
      .map((food) => `
        <button class="food-suggestion" type="button" data-food-name="${escapeHtml(food.name)}">
          <strong>${escapeHtml(food.name)}</strong>
          <span>${escapeHtml(food.servingLabel)} · ${food.calories} kcal · 단백질 ${food.protein}g</span>
        </button>
      `)
      .join("");
  };

  const render = () => {
    const meals = getMeals();
    const totals = calculateMealTotals(meals);
    setText("dietCalories", round(totals.calories));
    setText("dietProtein", round(totals.protein, 1));
    setText("dietCarbs", round(totals.carbs, 1));
    setText("dietFat", round(totals.fat, 1));

    if (!meals.length) {
      mealTable.innerHTML = `<tr><td colspan="7" class="empty-cell">아직 기록된 식사가 없습니다.</td></tr>`;
      return;
    }

    mealTable.innerHTML = meals
      .map((meal) => {
        const serving = Number(meal.serving) || 1;
        return `
          <tr>
            <td>${meal.name}</td>
            <td><input aria-label="${meal.name} 섭취량" type="number" min="0.1" step="0.1" value="${serving}" data-serving-id="${meal.id}" /></td>
            <td>${round(meal.calories * serving)}</td>
            <td>${round(meal.protein * serving, 1)}g</td>
            <td>${round(meal.carbs * serving, 1)}g</td>
            <td>${round(meal.fat * serving, 1)}g</td>
            <td><button class="button danger" type="button" data-remove-meal="${meal.id}">삭제</button></td>
          </tr>
        `;
      })
      .join("");
  };

  const cafeteriaList = document.getElementById("cafeteriaList");
  cafeteriaList.innerHTML = cafeteriaMeals
    .map(
      (meal, index) => `
        <div class="quick-item">
          <strong>${meal.name}</strong>
          <span class="quick-meta">${meal.category} · ${meal.price.toLocaleString()}원</span>
          <span class="quick-meta">${meal.calories} kcal · 단백질 ${meal.protein}g · 탄수화물 ${meal.carbs}g · 지방 ${meal.fat}g</span>
          <button class="button secondary" type="button" data-cafeteria-index="${index}">바로 추가</button>
        </div>
      `
    )
    .join("");

  document.getElementById("foodForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const meal = {
      id: crypto.randomUUID(),
      name: foodNameInput.value.trim(),
      serving: Number(foodServingInput.value),
      calories: Number(foodCaloriesInput.value),
      protein: Number(foodProteinInput.value),
      carbs: Number(foodCarbsInput.value),
      fat: Number(foodFatInput.value)
    };
    saveMeals([...getMeals(), meal]);
    event.target.reset();
    foodServingInput.value = 1;
    foodSuggestions.innerHTML = "";
    foodAutoFillMessage.textContent = "";
    render();
  });

  document.addEventListener("click", (event) => {
    const cafeteriaIndex = event.target.dataset.cafeteriaIndex;
    const removeMealId = event.target.dataset.removeMeal;
    const selectedFoodName = event.target.closest("[data-food-name]")?.dataset.foodName;

    if (cafeteriaIndex !== undefined) {
      const meal = cafeteriaMeals[Number(cafeteriaIndex)];
      saveMeals([...getMeals(), { ...meal, id: crypto.randomUUID(), serving: 1 }]);
      render();
    }

    if (selectedFoodName) {
      const food = foodDatabase.find((item) => item.name === selectedFoodName);
      if (food) fillFoodNutrition(food);
    }

    if (removeMealId) {
      saveMeals(getMeals().filter((meal) => meal.id !== removeMealId));
      render();
    }
  });

  document.addEventListener("input", (event) => {
    const servingId = event.target.dataset.servingId;
    if (!servingId) return;
    const nextMeals = getMeals().map((meal) =>
      meal.id === servingId ? { ...meal, serving: Number(event.target.value) } : meal
    );
    saveMeals(nextMeals);
    render();
  });

  foodNameInput.addEventListener("input", () => {
    renderFoodSuggestions(foodNameInput.value);
  });

  foodNameInput.addEventListener("change", () => {
    const firstMatch = exactFoodMatch(foodNameInput.value) || findFoodMatches(foodNameInput.value)[0];
    if (firstMatch) fillFoodNutrition(firstMatch);
  });

  document.getElementById("clearMeals").addEventListener("click", () => {
    saveMeals([]);
    render();
  });

  render();
}

function initBodyPage() {
  const form = document.getElementById("bodyForm");
  if (!form) return;

  const populate = () => {
    const profile = getProfile() || {
      bodyWeight: 72,
      muscleMass: 34,
      bodyFat: 18,
      bmr: 1650,
      goalType: "leanBulk"
    };
    document.getElementById("bodyWeight").value = profile.bodyWeight;
    document.getElementById("muscleMass").value = profile.muscleMass;
    document.getElementById("bodyFat").value = profile.bodyFat;
    document.getElementById("bmr").value = profile.bmr;
    document.getElementById("goalType").value = profile.goalType;
    renderTarget(profile);
  };

  const currentFormProfile = () => ({
    bodyWeight: Number(document.getElementById("bodyWeight").value),
    muscleMass: Number(document.getElementById("muscleMass").value),
    bodyFat: Number(document.getElementById("bodyFat").value),
    bmr: Number(document.getElementById("bmr").value),
    goalType: document.getElementById("goalType").value
  });

  const renderTarget = (profile) => {
    const target = calculateTarget(profile);
    setText("targetCalories", round(target));
    const goalLabel = {
      cut: "감량",
      maintain: "유지",
      leanBulk: "린 벌크"
    }[profile.goalType];
    setText(
      "targetExplanation",
      `${goalLabel}: 기초대사량 ${profile.bmr} kcal + 활동 보정 450 kcal ${
        profile.goalType === "cut" ? "- 300" : profile.goalType === "leanBulk" ? "+ 250" : "+ 0"
      } kcal 목표 보정값.`
    );
  };

  form.addEventListener("input", () => renderTarget(currentFormProfile()));
    form.addEventListener("submit", (event) => {
    event.preventDefault();
    const profile = currentFormProfile();
    writeStore(scopedKey(STORAGE_KEYS.profile), profile);
    renderTarget(profile);
  });

  populate();
}

function initWorkoutPage() {
  const table = document.getElementById("workoutTable");
  if (!table) return;

  const render = () => {
    const workouts = getWorkouts();
    const total = totalWorkoutVolume(workouts);
    const changes = workouts.map((workout) => workoutVolume(workout) - previousVolumeFor(workout.name, workout.id));
    setText("workoutTotal", round(total));
    setText("exerciseCount", workouts.length);
    setText("bestChange", changes.length ? round(Math.max(...changes)) : 0);

    if (!workouts.length) {
      table.innerHTML = `<tr><td colspan="7" class="empty-cell">아직 기록된 운동이 없습니다.</td></tr>`;
      setText("workoutFeedback", "운동을 추가하면 이전 기록과 비교됩니다.");
      return;
    }

    const latest = workouts[workouts.length - 1];
    const latestChange = workoutVolume(latest) - previousVolumeFor(latest.name, latest.id);
    setText(
      "workoutFeedback",
      latestChange > 0
        ? `${latest.name} 볼륨이 이전 기록보다 ${round(latestChange)} kg 증가했습니다.`
        : latestChange < 0
          ? `${latest.name} 볼륨이 이전 기록보다 ${Math.abs(round(latestChange))} kg 감소했습니다.`
          : `${latest.name}은 비교할 이전 변화가 아직 없습니다.`
    );

    table.innerHTML = workouts
      .map((workout) => {
        const volume = workoutVolume(workout);
        const change = volume - previousVolumeFor(workout.name, workout.id);
        return `
          <tr>
            <td>${workout.name}</td>
            <td>${workout.weight} kg</td>
            <td>${workout.reps}</td>
            <td>${workout.sets}</td>
            <td>${round(volume)} kg</td>
            <td>${formatSigned(change)}</td>
            <td><button class="button danger" type="button" data-remove-workout="${workout.id}">삭제</button></td>
          </tr>
        `;
      })
      .join("");
  };

  document.getElementById("workoutForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const workout = {
      id: crypto.randomUUID(),
      name: document.getElementById("exerciseName").value.trim(),
      weight: Number(document.getElementById("exerciseWeight").value),
      reps: Number(document.getElementById("exerciseReps").value),
      sets: Number(document.getElementById("exerciseSets").value)
    };
    saveWorkouts([...getWorkouts(), workout]);
    event.target.reset();
    render();
  });

  document.addEventListener("click", (event) => {
    const removeWorkoutId = event.target.dataset.removeWorkout;
    if (!removeWorkoutId) return;
    saveWorkouts(getWorkouts().filter((workout) => workout.id !== removeWorkoutId));
    render();
  });

  document.getElementById("clearWorkouts").addEventListener("click", () => {
    saveWorkouts([]);
    render();
  });

  render();
}

function initDashboardPage() {
  if (!document.getElementById("dashCalories")) return;

  const dateKey = getActiveDateKey();
  setText("dashboardDateLabel", `한국 시간 기준 ${formatKoreanDate(dateKey)} 기록입니다.`);

  const totals = calculateMealTotals();
  const profile = getProfile();
  const target = calculateTarget(profile);
  const workoutTotal = totalWorkoutVolume();
  const proteinTarget = profile ? Math.max(80, Number(profile.bodyWeight) * 1.6) : 120;

  setText("dashCalories", round(totals.calories));
  setText("dashTarget", round(target));
  setText("dashProtein", round(totals.protein, 1));
  setText("dashWorkout", round(workoutTotal));

  const balance = totals.calories - target;
  const balanceText = !target
    ? "신체 프로필을 입력하면 칼로리 균형을 계산할 수 있습니다."
    : balance >= 0
      ? `목표보다 ${round(balance)} kcal 초과했습니다.`
      : `목표보다 ${Math.abs(round(balance))} kcal 부족합니다.`;
  setText("balanceFeedback", balanceText);

  const calorieProgress = document.getElementById("calorieProgress");
  if (calorieProgress) calorieProgress.style.width = `${target ? Math.min((totals.calories / target) * 100, 100) : 0}%`;

  const proteinProgress = Math.min((totals.protein / proteinTarget) * 100, 100);
  setText("proteinFeedback", `예상 단백질 목표 ${round(proteinTarget)}g 중 ${round(totals.protein, 1)}g 섭취했습니다.`);
  document.getElementById("proteinProgress").style.width = `${proteinProgress}%`;

  const growthList = document.getElementById("growthList");
  const workouts = getWorkouts();
  if (!workouts.length) {
    growthList.innerHTML = `<div class="empty-state">아직 운동 데이터가 없습니다. 운동 기록 페이지에서 운동을 추가하세요.</div>`;
    return;
  }
  growthList.innerHTML = workouts
    .slice(-5)
    .reverse()
    .map((workout) => {
      const volume = workoutVolume(workout);
      const change = volume - previousVolumeFor(workout.name, workout.id);
      return `
        <div class="growth-item">
          <strong>${workout.name}</strong>
          <span>${round(volume)} kg 볼륨 · 이전 기록 대비 ${formatSigned(change)}</span>
        </div>
      `;
    })
    .join("");
}

function summarizeDate(dateKey) {
  const meals = getMealsForDate(dateKey);
  const workouts = getWorkoutsForDate(dateKey);
  const profile = getProfileForDate(dateKey);
  const totals = calculateMealTotals(meals);
  const target = calculateTarget(profile);
  const workoutTotal = totalWorkoutVolume(workouts);
  return { meals, workouts, profile, totals, target, workoutTotal };
}

function hasDateRecord(dateKey) {
  const summary = summarizeDate(dateKey);
  return Boolean(summary.meals.length || summary.workouts.length || summary.profile);
}

function renderDetailList(container, items, emptyText) {
  if (!container) return;
  if (!items.length) {
    container.innerHTML = `<div class="empty-state">${emptyText}</div>`;
    return;
  }
  container.innerHTML = items.join("");
}

function initCalendarPage() {
  const calendarGrid = document.getElementById("calendarGrid");
  if (!calendarGrid) return;

  const params = new URLSearchParams(window.location.search);
  let selectedDate = params.get("date") && isValidDateKey(params.get("date")) ? params.get("date") : getKoreaDateKey();
  let visibleYear = Number(selectedDate.slice(0, 4));
  let visibleMonth = Number(selectedDate.slice(5, 7)) - 1;

  const updateUrlDate = (dateKey) => {
    const url = new URL(window.location.href);
    url.searchParams.set("date", dateKey);
    history.replaceState(null, "", url);
  };

  const renderSelectedDate = (dateKey) => {
    selectedDate = dateKey;
    updateUrlDate(dateKey);
    const { meals, workouts, profile, totals, target, workoutTotal } = summarizeDate(dateKey);
    const balance = totals.calories - target;

    setText("selectedDateTitle", `${formatKoreanDate(dateKey)} 기록 요약`);
    setText("selectedCalories", round(totals.calories));
    setText("selectedTarget", round(target));
    setText("selectedProtein", round(totals.protein, 1));
    setText("selectedWorkout", round(workoutTotal));
    setText(
      "selectedBalance",
      !target
        ? "이 날짜에는 신체 프로필이 없어 칼로리 균형을 계산할 수 없습니다."
        : balance >= 0
          ? `목표보다 ${round(balance)} kcal 초과했습니다.`
          : `목표보다 ${Math.abs(round(balance))} kcal 부족합니다.`
    );

    const profileItems = profile
      ? [
          `<div class="detail-item"><strong>체중</strong><span>${profile.bodyWeight} kg</span></div>`,
          `<div class="detail-item"><strong>골격근량</strong><span>${profile.muscleMass} kg</span></div>`,
          `<div class="detail-item"><strong>체지방률</strong><span>${profile.bodyFat}%</span></div>`,
          `<div class="detail-item"><strong>기초대사량</strong><span>${profile.bmr} kcal</span></div>`,
          `<div class="detail-item"><strong>목표</strong><span>${profile.goalType === "cut" ? "감량" : profile.goalType === "leanBulk" ? "린 벌크" : "유지"}</span></div>`
        ]
      : [];
    renderDetailList(document.getElementById("selectedProfile"), profileItems, "이 날짜에 저장된 신체 프로필이 없습니다.");

    const mealItems = meals.map((meal) => {
      const serving = Number(meal.serving) || 1;
      return `
        <div class="detail-item">
          <strong>${escapeHtml(meal.name)}</strong>
          <span>${round(meal.calories * serving)} kcal · 단백질 ${round(meal.protein * serving, 1)}g · 탄수화물 ${round(meal.carbs * serving, 1)}g · 지방 ${round(meal.fat * serving, 1)}g · 섭취량 ${serving}</span>
        </div>
      `;
    });
    renderDetailList(document.getElementById("selectedMeals"), mealItems, "이 날짜에 저장된 식단 기록이 없습니다.");

    const workoutItems = workouts.map((workout) => `
      <div class="detail-item">
        <strong>${escapeHtml(workout.name)}</strong>
        <span>${workout.weight} kg x ${workout.reps}회 x ${workout.sets}세트 = ${round(workoutVolume(workout))} kg</span>
      </div>
    `);
    renderDetailList(document.getElementById("selectedWorkouts"), workoutItems, "이 날짜에 저장된 운동 기록이 없습니다.");
    renderCalendar();
  };

  const renderCalendar = () => {
    const title = document.getElementById("calendarTitle");
    const dateNote = document.getElementById("calendarDateNote");
    const availableDates = new Set(getAvailableDateKeys());
    const firstDay = new Date(visibleYear, visibleMonth, 1);
    const lastDay = new Date(visibleYear, visibleMonth + 1, 0);
    const todayKey = getKoreaDateKey();
    const cells = [];

    title.textContent = `${visibleYear}년 ${visibleMonth + 1}월`;
    dateNote.textContent = `한국 시간 기준 오늘은 ${formatKoreanDate(todayKey)}입니다. 점이 표시된 날짜에는 저장된 기록이 있습니다.`;

    for (let index = 0; index < firstDay.getDay(); index += 1) {
      cells.push(`<span class="calendar-empty"></span>`);
    }

    for (let day = 1; day <= lastDay.getDate(); day += 1) {
      const dateKey = `${visibleYear}-${String(visibleMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const classes = [
        "calendar-day",
        dateKey === selectedDate ? "selected" : "",
        dateKey === todayKey ? "today" : "",
        availableDates.has(dateKey) ? "has-record" : ""
      ].filter(Boolean).join(" ");
      cells.push(`
        <button class="${classes}" type="button" data-calendar-date="${dateKey}" aria-label="${formatKoreanDate(dateKey)} 기록 보기">
          <span>${day}</span>
        </button>
      `);
    }

    calendarGrid.innerHTML = cells.join("");
  };

  document.getElementById("prevMonth").addEventListener("click", () => {
    visibleMonth -= 1;
    if (visibleMonth < 0) {
      visibleMonth = 11;
      visibleYear -= 1;
    }
    renderCalendar();
  });

  document.getElementById("nextMonth").addEventListener("click", () => {
    visibleMonth += 1;
    if (visibleMonth > 11) {
      visibleMonth = 0;
      visibleYear += 1;
    }
    renderCalendar();
  });

  calendarGrid.addEventListener("click", (event) => {
    const dateKey = event.target.closest("[data-calendar-date]")?.dataset.calendarDate;
    if (!dateKey) return;
    renderSelectedDate(dateKey);
  });

  renderSelectedDate(selectedDate);
}

if (requireLogin()) {
  migrateLegacyDateData();
  initAccountStatus();
  initDailyDateLabel();
  initHome();
  initLoginPage();
  initDietPage();
  initBodyPage();
  initWorkoutPage();
  initDashboardPage();
  initCalendarPage();
}

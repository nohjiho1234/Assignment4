# CampusFit

CampusFit is a frontend web service for university students who do weight training. Users can log meals, quick-add campus cafeteria menus, calculate calories and macronutrients, set a daily calorie target from body data, and track workout volume.

## Main Features

- Diet logging with calorie, protein, carbohydrate, and fat totals
- Automatic nutrient autofill from an expanded built-in food database
- Serving-size adjustment with automatic nutrient recalculation
- Campus cafeteria quick-add menu buttons
- Body profile input and goal-based calorie target calculation
- Workout volume calculation using `weight x repetitions x sets`
- Per-exercise workout volume summaries
- Previous-record comparison for the same exercise
- Dashboard with calorie balance, protein progress, and workout growth
- User-separated meal, body profile, and workout records after local login
- Date-based records using Korea Standard Time
- Calendar page for reviewing saved records by date
- Browser `localStorage` persistence

## Project Structure

- `index.html`: Home page and service overview
- `login.html`: Local account signup and login
- `diet.html`: Diet logging and campus cafeteria quick add
- `body.html`: Body profile and calorie target calculation
- `workout.html`: Workout logging and volume comparison
- `dashboard.html`: Combined daily summary
- `calendar.html`: Date-based record review
- `style.css`: Responsive layout and visual design
- `script.js`: App state, calculations, storage, and interactions
- `package.json`: Project metadata for deployment

## Food Nutrition Autofill

On the Diet Log page, users can type food names such as `chicken breast`, `brown rice`, `kimchi stew`, or `Greek yogurt`. CampusFit searches its built-in food nutrition database and automatically fills calories, protein, carbohydrates, and fat.

Instead of using an external AI or API, the MVP uses an expanded internal dataset focused on Korean meals, campus meals, workout-friendly foods, snacks, and drinks. If no matching food is found, the app shows a manual-entry guide so users can still enter nutrition values themselves.

Nutrition values are estimates for project demonstration purposes and may differ from real products or cafeteria servings.

## Login And Storage

CampusFit is an MVP without a backend server or database. It stores account data and records in browser `localStorage`.

After login, meal records, body profile records, and workout records are separated by the current username. This allows multiple users on the same browser to keep separate records.

Important limitation: this login feature is a frontend simulation for an assignment project. It is not production-grade authentication, and passwords are not securely handled like they would be in a real backend service.

## Date-Based Records

CampusFit uses the `Asia/Seoul` time zone and stores daily records with a `YYYY-MM-DD` date key. After midnight in Korea Standard Time, the same user automatically starts recording under a new date.

The Calendar page marks dates that have saved records. When a user clicks a date, the page shows that date's body profile, diet log, workout log, and dashboard summary in one organized view.

## Run Locally

Open `index.html` directly in a browser, or run a local static server:

```bash
python3 -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

## Deployment

This project can be deployed to Vercel as a static site. The intended deployment URL is:

```text
Vercel URL: https://assignment4-topaz-theta.vercel.app/
```

If that exact Vercel subdomain is already taken, Vercel may assign a different project URL that still includes the project name.

## AI Development Report

AI tool used: Codex.

Tasks requested:

- Read the assignment PDF and CampusFit PRD
- Implement the website based on the PRD
- Create a static multi-page project using HTML, CSS, and JavaScript
- Convert the interface text to Korean
- Add local login and user-separated records
- Store records by Korea Standard Time date
- Add a calendar page for reviewing records
- Add food nutrition autofill with an expanded built-in dataset
- Add per-exercise workout volume summaries
- Prepare this README

Representative prompts:

- "assignment4에 대한 PRD는 작성했어. 이걸기반으로 구현해줘"
- "사이트가 다 영어로 되어있어. 한국어로 구성해줘"
- "저 저장한 기록들이 한국기준24시기준으로 다시 기록할 수 있게해줘. 그리고 캘린더 페이지 만들어."
- "음식추가란에 어떤 음식이름만 넣으면 자동으로 칼로리랑 영양소 계산해주게 해줘."
- "운동 기록에 운동볼륨이 합쳐서 나오는데 각 운동마다 운동볼륨을 나오게 해줘."

Modified or improved parts:

- Used a static multi-page structure for simple Vercel deployment
- Added local account separation with `localStorage`
- Added date-based storage using Korea Standard Time
- Connected diet, body profile, workout, and dashboard data
- Added a calendar view for historical records
- Added campus cafeteria quick-add data based on the provided menu
- Expanded the built-in food nutrition database
- Added manual-entry fallback when food matching fails
- Added per-exercise workout volume cards
- Added cache-busting script URLs to reduce stale JavaScript issues after deployment

Limitations:

- Nutrition values are estimates and use prepared sample data
- Accounts and records are stored only in the current browser
- The login system is not production-grade authentication
- The MVP does not include a backend server, encrypted password storage, real cafeteria API, or external AI nutrition lookup

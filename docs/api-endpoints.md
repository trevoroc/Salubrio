# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Workouts

- `GET /api/workouts`
  - accepts `user_id` query param to get workouts by user
- `POST /api/workouts`
- `GET /api/workouts/:id` (if I get there)
- `PATCH /api/workouts/:id` (if I get there)
- `DELETE /api/workouts/:id` (if I get there)

### Routes

- `GET /api/routes`
- `GET /api/routes/:id`
- `POST /api/routes`

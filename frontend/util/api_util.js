// User/Session requests
export const signup = user => (
  $.ajax({
    type: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const login = user => (
  $.ajax({
    type: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    type: 'DELETE',
    url: '/api/session'
  })
);

// Workout requests
export const fetchWorkouts = userId => {
  const data = userId ? { user_id: userId } : {};
  return $.ajax({
    type: 'GET',
    url: '/api/workouts',
    data
  });
};

export const createWorkout = workout => (
  $.ajax({
    type: 'POST',
    url: '/api/workouts',
    data: { workout }
  })
);

export const fetchWorkout = id => (
  $.ajax({
    type: 'GET',
    url: `/api/workouts/${id}`
  })
);

export const updateWorkout = workout => (
  $.ajax({
    type: 'PATCH',
    url: `/api/workouts/${workout.id}`,
    data: { workout }
  })
);

export const deleteWorkout = id => (
  $.ajax({
    type: 'DELETE',
    url: `/api/workouts/${id}`
  })
);

// Routes requests
export const createRoute = route => (
  $.ajax({
    type: 'POST',
    url: '/api/routes',
    data: { route }
  })
);

export const fetchRoutes = ids => {
  const data = ids ? { ids } : {};
  return $.ajax({
    type: 'GET',
    url: '/api/routes',
    data
  });
};

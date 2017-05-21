export const signup = user => (
  $.ajax({
    type: 'POST',
    url: '/api/users',
    data: {
      user
    }
  })
);

export const login = user => (
  $.ajax({
    type: 'POST',
    url: '/api/session',
    data: {
      user
    }
  })
);

export const logout = () => (
  $.ajax({
    type: 'DELETE',
    url: '/api/session'
  })
);

export const fetchWorkouts = userId => {
  const data = userId ? { user_id: userId } : {};
  return $.ajax({
    type: 'GET',
    url: '/api/workouts',
    data
  });
};

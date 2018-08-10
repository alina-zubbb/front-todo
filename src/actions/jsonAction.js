export const fetchPending = () => {
  return { type: 'FETCH_PENDING' };
};

export const fetchFulfilled = json => {
  return { type: 'FETCH_FULFILLED', payload: { jsonState: json } };
};

export const fetchRejected = error => {
  return { type: 'FETCH_REJECTED', payload: { error } };
};

export function fetchJson() {
  return dispatch => {
    dispatch(fetchPending());
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (res.ok === false) {
          throw new Error('Error');
        }
        return res.json();
      })
      .then(json => {
        dispatch(fetchFulfilled(json));
        return json;
      })
      .catch(error => dispatch(fetchRejected(error.message)));
  };
}



export const getFakePostsPending = () => {
  return { type: "GETFAKEPOSTSPENDING" };
};

export const getFakePostsFulfilled = json => {
  return { type: "GETFAKEPOSTSFULFILLED", payload: { jsonState: json } };
};

export const getFakePostsRejected = error => {
  return { type: "GETFAKEPOSTSREJECTED", payload: { error } };
};

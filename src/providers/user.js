import FormData from "form-data";
export async function fetchsignup(params) {
  const response = await fetch(`/api/auth/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    //const message = `An error has occured: ${response.status}`;
    //throw new Error(message);
    return await response.json();
  }

  const responseData = await response.json();
  //console.log(responseData);
  return responseData;
}

export async function fetchlogin(params) {
  const response = await fetch(`http://localhost:5173/api/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    //console.log(await response.json());
    //throw new Error(message);
    return await response.json();
  }

  const responseData = await response.json();
  //console.log(responseData);
  return responseData;
}

export async function fetchsettings(params, token) {
  const response = await fetch(`/api/account/settings`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
    body: JSON.stringify(params),
  });
  /*
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }*/

  const responseData = await response.json();
  //console.log(responseData);
  return responseData;
}
/*
export async function fetchconnected(params) {
  const response = await fetch(`/api/account/connected`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      //authorization: "Bearer " + token,
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const responseData = await response.json();
  console.log("fetchconnected rd=", responseData);
  return responseData;
}
*/
export async function fetchsendavatar(file, token) {
  console.log("file", file);

  let bodyContent = new FormData();
  bodyContent.append("image", file);

  console.log("sendavatar body");
  console.log(bodyContent);
  console.log("get", bodyContent.get("image"));
  const response = await fetch(`/api/user/avatar`, {
    method: "POST",
    headers: {
      Accept: "*/*",
      authorization: "Bearer " + token,
    },
    body: bodyContent,
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const responseData = await response.json();
  //console.log("fetchconnected rd=", responseData);
  return responseData;
}

export async function fetchgetcurrentuser(token) {
  const response = await fetch(`/api/user`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const responseData = await response.json();
  console.log("fetchconnected rd=", responseData);
  return responseData;
}

//export { fetchsignup, fetchlogin };

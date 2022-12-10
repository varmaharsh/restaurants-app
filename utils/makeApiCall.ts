import { HTTPMethods } from "../interfaces";

export default async function makeApiCall<ResponseType>(
  url: string,
  method: HTTPMethods = "GET",
  body?: any,
  contentType = "application/json"
): Promise<ResponseType> {
  if (contentType === "application/x-www-form-urlencoded") {
    body = Object.keys(body)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(body[key])}`
      )
      .join("&");
  } else if (contentType === "application/json") {
    body = JSON.stringify(body);
  }

  let headers: any = {
    "Content-Type": contentType,
  };

  const response = await fetch(url, {
    method,
    headers,
    body,
  });

  if (!response.ok) {
    const resError = await response.json();
    throw new Error(resError.errors[0]);
  }
  return (await response.json()) as ResponseType;
}

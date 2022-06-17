import axios from "axios";

export const Api = (url: string, options: { method: 'post' | 'put' | 'delete' | 'get', data?: any }) => {
  return new Promise<any>((resolve, reject) => {
    axios
      .request({
        url: `${url}`,
        withCredentials: true,
        headers: { "content-type": "application/json" },
        ...options,
      })
      .then((respJson) => {
        if (respJson.status === 200) {
          if (['post', 'patch', 'put'].includes(options.method)) {
            if (respJson.data["success"]) {
              resolve(respJson.data);
            } else {
              reject(respJson.data);
            }
          } else {
            resolve(respJson.data);
          }
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const titleCase = (str: string) => {
    return str
      .toLowerCase()
      .split(/\W+/)
      .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };
  
import request from "./network"

const BASEURL = "http://123.207.32.32:8000/api/v1";

export function getMultiData(params) {
  return request({ url: BASEURL + "/home/multidata" })
}
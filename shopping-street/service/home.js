import request from "./network"

export function getMultiData(params) {
  return request({ url: "/home/multidata" })
}

export function getGoodsData(type, page) {
  return request({ 
    url: "/home/data",
    data: {
      type,
      page
    }
  })
}
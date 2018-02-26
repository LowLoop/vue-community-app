import axiosInterceptor from '@/utils/axiosInterceptor'

export function getTopics(params) {
  return axiosInterceptor({
    url:'/topics',
    method:'get',
    params
  })
}

export function getTopicsDetail(params) {
  return axiosInterceptor({
    url:`/topic/${params.id}`,
    method:'get',
    params:{
      mdrender:params.mdrender
    }
  })
}

export function createTopcs(data) {
  return axiosInterceptor({
    url:'/topics',
    method:'post',
    data
  })
}

export function collectTopcs(data) {
  return axiosInterceptor({
    url:'/topics/collect',
    method:'post',
    data
  })
}

export function deCollectTopcs(params) {
  return axiosInterceptor({
    url:'/topics/de_collect',
    method:'post',
    data
  })
}

export function createReplies(data) {
  return axiosInterceptor({
    url:`/topics/${data.topicId}/replies`,
    method:'post',
    data:data.reqData
  })
}

export function replyUps(data) {
  return axiosInterceptor({
    url:`/reply/${data.replyId}/ups`,
    method:'post',
    data:data.reqData
  })
}

export function getUserInfo(params) {
  return axiosInterceptor({
    url:`/user/${params.loginName}`,
    method:'get'
  })
}

export function checkAccessToken(data) {
  return axiosInterceptor({
    url:`/accesstoken`,
    method:'post',
    data
  })
}

export function getMessageCount(params) {
  return axiosInterceptor({
    url:`/message/count`,
    method:'get',
    params
  })
}

export function getMessage(params) {
  return axiosInterceptor({
    url:`/messages`,
    method:'get',
    params
  })
}

export function messageMarkAll(data) {
  return axiosInterceptor({
    url:`/messages/mark_all`,
    method:'post',
    data
  })
}

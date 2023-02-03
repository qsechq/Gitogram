import { makeRequest } from '../requests'

export const getStarredRepos = () => {
  return makeRequest({
    url: '/user/starred'
  })
}

export const starRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'put'
})

export const unStarRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'delete'
})

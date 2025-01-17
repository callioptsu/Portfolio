import axios, { AxiosResponse } from 'axios'
import moment from 'moment'

moment.locale('pt-BR')

export async function timingUtility(time: number) {
  await new Promise((resolve) => setTimeout(resolve, time))
}

/**
 * @description Formatação da data e hora para data (pt-BR) local.
 * @param dateTime YYYY-MM-YYT00:00:00Z
 * @returns DD-MM-YYYY
 */
export function dateTimeFormat(dateTime: string): string {
  return moment(dateTime).format('DD-MM-YYYY')
}

/**
 * @description Função utilitária que ajuda na criação e utilização
 * de uma instância.
 * @param instance 'GET-REPOS' | 'GET-LANGUAGES'
 * @returns {Array}
 */
export async function createAxiosInstance(
  instance: 'GET-REPOS' | 'GET-AVATARS',
  repoName: string | null,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<AxiosResponse<any, any> | null> {
  if (instance.includes('GET-REPOS')) {
    const axiosReposInstante = axios.create({
      baseURL: `https://api.github.com/users/${process.env.GITHUB_USER}/`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    })

    return await axiosReposInstante.get('repos')
  }

  if (instance.includes('GET-AVATARS') && repoName) {
    console.log(repoName)
    const axiosReposInstante = axios.create({
      baseURL: `https://api.github.com/repos/${process.env.GITHUB_USER}/${repoName}/`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    })

    return await axiosReposInstante.get('contributors')
  }

  return null
}

import axios, { AxiosResponse } from 'axios'

export async function timingUtility(time: number) {
  await new Promise((resolve) => setTimeout(resolve, time))
}

/**
 * @description Função utilitária que ajuda na criação e utilização
 * de uma instância.
 * @param instance 'GET-REPOS' | 'GET-LANGUAGES'
 * @returns {Array}
 */
export async function createAxiosInstance(
  instance: 'GET-REPOS',
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

  return null
}

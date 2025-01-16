'use server'
// Helpers
import { createAxiosInstance, timingUtility } from '@/utils/helpers'

// Interfaces
import { IProject } from '@/interfaces'

interface MethodReturn {
  status: number
  message: string
  data: IProject[]
}

/**
 * @description Requisição da listagem de repositórios do usuário com filtros
 * para linguagens utilizadas de cada repositório.
 */
export default async function getGithubProjects(): Promise<MethodReturn> {
  await timingUtility(3000)

  try {
    const response = await createAxiosInstance('GET-REPOS')

    if (!response) {
      throw new Error('Erro ao buscar repositórios.')
    }

    if (response.status !== 200) {
      throw new Error(response.data)
    }

    const { data } = response

    if (!Array.isArray(data)) {
      throw new Error('Erro ao desestruturar response.')
    }

    /**
     * @description Repositórios que não serão exibidos.
     */
    const blacklist = ['callioptsu']

    const filteredRepos: IProject[] = data.filter(
      (repo) => !blacklist.includes(repo.name),
    )

    return {
      status: response.status,
      message: response.statusText,
      data: filteredRepos,
    }
  } catch (err) {
    console.log(err)
    return {
      status: 400,
      message: (err as Error).message,
      data: [],
    }
  }
}

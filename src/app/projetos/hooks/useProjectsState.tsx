'use client'
import { Dispatch, SetStateAction, useState } from 'react'

// Actions
import getGithubProjects from '../actions/getGithubProjects'

// Interfaces
import { IProject } from '@/interfaces'

interface MethodReturn {
  dataSet: IProject[]
  setDataSet: Dispatch<SetStateAction<IProject[]>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
  fetchRepositories: () => Promise<void>
}

/**
 * Hook customizado responsável pela requisição de projetos e
 * criação de estados do contexto.
 * @returns {MethodReturn}
 */
export default function useProjectsState(): MethodReturn {
  const [dataSet, setDataSet] = useState<IProject[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchRepositories = async () => {
    const { data } = await getGithubProjects()

    setDataSet(data)
    setIsLoading(false)
  }

  return { dataSet, setDataSet, isLoading, setIsLoading, fetchRepositories }
}
